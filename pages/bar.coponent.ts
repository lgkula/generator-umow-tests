import { type Locator, type Page } from '@playwright/test';

export class BarComponent {
    readonly page: Page;
    readonly appTitleLocator: Locator;
    readonly logOutButtonLocator: Locator;
    readonly readModeButtonLocator: Locator;
    readonly editModeButtonLocator: Locator;
    readonly linksButtonLocator: Locator;
    readonly gusLinksButtonLocator: Locator;
    readonly krsLinksButtonLocator: Locator;
    readonly burLinksButtonLocator: Locator;
    readonly addUserButtonLocator: Locator;
    readonly fullBarButtonLocator: Locator;

    readonly appTitle: string;
    readonly pageTitle: string;

    constructor(page: Page) {
        this.page = page;
        this.appTitleLocator = page.getByTestId('ant-header-43').locator('img');
        this.logOutButtonLocator = page.getByTestId('button-logout-34');
        this.readModeButtonLocator = page.locator(
            '[data-menu-id="rc-menu-uuid-21211-1-1"]',
        );
        this.editModeButtonLocator = page.locator(
            '[data-menu-id="rc-menu-uuid-21211-1-2"]',
        );
        this.linksButtonLocator = page.getByTestId('');
        this.gusLinksButtonLocator = page.getByTestId('');
        this.krsLinksButtonLocator = page.getByTestId('');
        this.burLinksButtonLocator = page.getByTestId('');
        this.addUserButtonLocator = page.locator('svg[data-icon="user-add"]');
        this.fullBarButtonLocator = page.getByTestId('');

        this.appTitle = 'Generator umów';
        this.pageTitle = 'Generator umów';
    }
}
