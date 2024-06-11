import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class AgreementDetailsPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;

    readonly pageTitle: string;
    readonly agreementDataHerader: string;
    readonly saveAndNextButtonLocator: Locator;
    readonly agreementNumberInputLocator: Locator;
    readonly fundingAmountInputLocator: Locator;
    readonly ownContributingAmountInputLocator: Locator;
    readonly availableFundingAmountInputLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId('title-contract-form');
        this.agreementNumberInputLocator = page.getByTestId(
            'input-agreement-number-11',
        );
        this.fundingAmountInputLocator = page.getByTestId(
            'input-funding-amount-12',
        );
        this.ownContributingAmountInputLocator = page.getByTestId(
            'input-own-contribution-amount-13',
        );
        this.availableFundingAmountInputLocator = page.getByTestId(
            'funding-available-input-53',
        );
        this.saveAndNextButtonLocator = page.getByTestId(
            'button-save-trainer-form',
        );

        this.pageTitle = 'Generator umów';
        this.agreementDataHerader = 'Dane umowy';
    }
}
