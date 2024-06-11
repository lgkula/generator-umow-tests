import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class GenerateContractPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;

    readonly pageTitle: string;
    readonly generateAgreementDataHerader: string;
    readonly generateAgreementButtonLocator: Locator;
    readonly generateTitlePageButtonLocator: Locator;
    readonly generateDispositionButtonLocator: Locator;
    readonly generateSettlementApplicationButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId(
            'generate-agreements-title-78',
        );
        this.generateAgreementButtonLocator = page.getByTestId(
            'button-create-contract-39',
        );
        this.generateTitlePageButtonLocator = page.getByTestId(
            'button-create-cover-page-40',
        );
        this.generateDispositionButtonLocator = page.getByTestId(
            'button-create-disposition-41',
        );
        this.generateSettlementApplicationButtonLocator = page.getByTestId(
            'button-create-billing-application-42',
        );

        this.pageTitle = 'Generator umów';
        this.generateAgreementDataHerader = 'Wygeneruj dokumnenty';
    }
}
