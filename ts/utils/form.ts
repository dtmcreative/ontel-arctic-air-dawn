// applications
import {
    IValidateEventNavigatorAfterInitializationParameters,
    initializeValidateEventNavigator
} from "Shared/ts/applications/form";

// components
import StatusScreen from "Shared/ts/components/status-screen";

export default class Form {
    private static form = new WeakMap<Form, HTMLFormElement | null>();

    private static submit = new WeakMap<Form, HTMLButtonElement | null>();

    private static parameters = new WeakMap<
        Form,
        IValidateEventNavigatorAfterInitializationParameters | undefined
    >();

    private static statusScreen = new WeakMap<Form, StatusScreen | undefined>();

    private set form(form: HTMLFormElement | null) {
        Form.form.set(this, form);
    }

    public get form(): Promise<HTMLFormElement> {
        return new Promise<HTMLFormElement>((resolve, reject) => {
            const value = Form.form.get(this);

            value ? resolve(value) : reject(`Failed to get HTMLFormElement.`);
        });
    }

    private set submit(submit: HTMLButtonElement | null) {
        Form.submit.set(this, submit);
    }

    public get submit(): Promise<HTMLButtonElement> {
        return new Promise<HTMLButtonElement>((resolve, reject) => {
            const value = Form.submit.get(this);

            value ? resolve(value) : reject(`Failed to get HTMLButtonElement.`);
        });
    }

    private set parameters(
        parameters:
            | IValidateEventNavigatorAfterInitializationParameters
            | undefined
    ) {
        Form.parameters.set(this, parameters);
    }

    public get parameters(): Promise<IValidateEventNavigatorAfterInitializationParameters> {
        return new Promise<IValidateEventNavigatorAfterInitializationParameters>(
            (resolve, reject) => {
                const value = Form.parameters.get(this);

                value ? resolve(value) : reject(`Failed to get parameters.`);
            }
        );
    }

    private set statusScreen(statusScreen: StatusScreen | undefined) {
        Form.statusScreen.set(this, statusScreen);
    }

    public get statusScreen(): Promise<StatusScreen> {
        return new Promise<StatusScreen>((resolve, reject) => {
            const value = Form.statusScreen.get(this);

            value ? resolve(value) : reject(`Failed to get status screen.`);
        });
    }

    constructor(id: string) {
        this.form = document.querySelector<HTMLFormElement>(`form#${id}`);

        this.form.then((form) => {
            this.submit =
                form.querySelector<HTMLButtonElement>(`[type="submit"]`);
        });

        this.initializeValidationRules();
        this.initializeStatusScreen();
    }

    protected async initializeStatusScreen() {
        this.statusScreen = new StatusScreen();
    }

    protected async initializeValidationRules() {
        const form = await this.form;
        const submit = await this.submit;

        await initializeValidateEventNavigator(form, submit, (parameters) => {
            this.parameters = parameters;
        });

        this.handleNetworkTransaction();
    }

    protected async handleNetworkTransaction() {}
}
