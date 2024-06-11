import { type Locator, type Page } from '@playwright/test';

export class LoginModalComponent {
    readonly page: Page;
    readonly xButtonLocator: Locator;
    readonly messageLabelLocator: Locator;
    readonly descriptionLabelLocator: Locator;

    readonly message1: string;
    readonly description1: string;

    constructor(page: Page) {
        this.page = page;
        this.xButtonLocator = page.locator('');
        this.messageLabelLocator = page.getByTestId('');
        this.descriptionLabelLocator = page.getByTestId('');

        this.message1 = '';
        this.description1 = '';
    }
}
