// applications
import {
	initializeBase,
	initializeMicrosite
} from "Shared/ts/applications/template";
import {
	initializeExpressCheckout,
	initializeModalDialogIframe,
	initializeValidateCommonWithBraintree
} from "Shared/ts/applications/form";

initializeBase();
initializeMicrosite();

// components
import FadeCarousel from "Shared/ts/components/fade-carousel";
import ResponsiveCarousel from "Shared/ts/components/responsive-carousel";
import VimeoCarousel from "Shared/ts/components/vimeo-carousel";

// adapters
import FadeSlideCarouselAdapter from "Shared/ts/api/carousel/slide/adapters/fade-slide-carousel";
import ResponsiveSlideCarouselAdapter from "Shared/ts/api/carousel/slide/adapters/responsive-slide-carousel";
import VimeoSlideCarouselAdapter from "Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel";

// observers
import { observer } from "Shared/ts/observers/intersection";

// utils
import MediaQuery from "Shared/ts/observers/media-query";
import Disclosure from "Shared/ts/utils/disclosure";
import { initializeVimeoMediaPlayer } from "Shared/ts/applications/media-player";
import Form from "ts/utils/form";
import OfferController from "ts/utils/offer-controller";

observer(".slide--fade", {
	inRange: (element) => {
		const carousel = new FadeCarousel(
			new FadeSlideCarouselAdapter(element)
		);

		carousel.setAttributes({
			delay: 6000
		});

		carousel.autoplay();
		carousel.enablePrevNextControls();
	}
});

observer(".slide--responsive", {
	inRange: (element) => {
		const carousel = new ResponsiveCarousel(
			new ResponsiveSlideCarouselAdapter(element)
		);

		carousel.enablePrevNextControls();

		new MediaQuery("(min-width: 41.875rem)")
			.inbound((task) => carousel.setAttributes({ steps: 2 }))
			.outbound((task) => carousel.setAttributes({ steps: 1 }));

		new MediaQuery("(min-width: 60.3125rem)")
			.inbound((task) => carousel.setAttributes({ steps: 3 }))
			.outbound((task) => carousel.setAttributes({ steps: 2 }));
	}
});

observer(".slide--testimonials", {
	inRange: (element) => {
		const carousel = new ResponsiveCarousel(
			new ResponsiveSlideCarouselAdapter(element)
		);

		carousel.enablePrevNextControls();

		new MediaQuery("(min-width: 41.875rem)")
			.inbound((task) => carousel.setAttributes({ steps: 2 }))
			.outbound((task) => carousel.setAttributes({ steps: 1 }));

		new MediaQuery("(min-width: 60.3125rem)")
			.inbound((task) => carousel.setAttributes({ steps: 3 }))
			.outbound((task) => carousel.setAttributes({ steps: 2 }));

		new MediaQuery("(min-width: 75rem)")
			.inbound((task) => carousel.setAttributes({ steps: 4 }))
			.outbound((task) => carousel.setAttributes({ steps: 3 }));
	}
});

observer(".slide--vimeo-carousel", {
	inRange: (element) => {
		const carousel = new VimeoCarousel(
			new VimeoSlideCarouselAdapter(element)
		);

		carousel.autoplay();
		carousel.enablePrevNextControls();
	}
});

initializeVimeoMediaPlayer(document.querySelector(".media-player"));

const disclosure = new Disclosure();

disclosure.controllers.forEach((controller) => {
	controller.addEventListener("click", (event) => {
		disclosure.toggleElementsByController(controller);
	});
});

class OfferForm extends Form {
	constructor(id: string) {
		super(id);

		this.initializeOfferRules();
	}

	private async initializeOfferRules() {
		const form = await this.form;

		const offer = new OfferController(form);

		offer.handleOffer();
	}

	protected async handleNetworkTransaction() {
		const form = await this.form;
		const statusScreen = await this.statusScreen;

		statusScreen.busy("Please wait...");

		form.submit();
	}
}

new OfferForm("offer-selection");
