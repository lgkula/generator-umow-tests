import { type Locator, type Page } from '@playwright/test';

export class LoginModalComponent {
    readonly page: Page;
    readonly modalTitleLocator: Locator;
    readonly userInputLocator: Locator;
    readonly passwordInputLocator: Locator;
    readonly loginButtonLocator: Locator;
    readonly popupConfirmationLoginLocator: Locator;
    readonly popupMessageLabelLocator: Locator;
    readonly popupDescriptionLabelLocator: Locator;
    readonly popupCloseButtonLocator: Locator;

    readonly modalTitle: string;
    readonly loginConfirmationMessage: string;
    readonly loginConfirmationDescription: string;

    constructor(page: Page) {
        this.page = page;
        this.modalTitleLocator = page.locator('[class="ant-modal-body"] h3');
        this.userInputLocator = page.getByTestId('login-input-user-32');
        this.passwordInputLocator = page.getByTestId('login-input-password-33');
        this.loginButtonLocator = page.getByTestId('login-button-61');
        this.popupConfirmationLoginLocator = page.locator(
            '[class="ant-notification-notice-message"]',
        );
        this.popupMessageLabelLocator = page.getByTestId(
            'message-label-popup-70',
        );
        this.popupDescriptionLabelLocator = page.getByTestId(
            'descritption-label-popup-71',
        );
        this.popupCloseButtonLocator = page.locator(
            'a.ant-notification-notice-close',
        );

        this.modalTitle = 'Logowanie';
        this.loginConfirmationMessage = 'Zalogowano pomyślnie';
        this.loginConfirmationDescription =
            'Możesz teraz korzystać z aplikacji';
    }
}
