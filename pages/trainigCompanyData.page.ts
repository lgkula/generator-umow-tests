import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class TrainingCompanyDataPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;

    readonly pageTitle: string;
    readonly trainingDataHerader: string;
    readonly traningComapanyNanmeInputLocator: Locator;
    readonly traningComapanyEmailInputLocator: Locator;
    readonly traningComapanyRepresentativeInputLocator: Locator;
    readonly traningComapanyNipInputLocator: Locator;
    readonly traningComapanyRegonInputLocator: Locator;
    readonly traningComapanyKrsInputLocator: Locator;
    readonly traningComapanyCapitalInputLocator: Locator;
    readonly traningComapanyCourtInputLocator: Locator;
    readonly traningComapanyBankAccountInputLocator: Locator;
    readonly traningComapanyPostalCoodeNumber1InputLocator: Locator;
    readonly traningComapanyPostalCoodeNumber2InputLocator: Locator;
    readonly traningComapanyPostalCoodeNumber3InputLocator: Locator;
    readonly traningComapanyPostalCoodeNumber4InputLocator: Locator;
    readonly traningComapanyPostalCoodeNumber5InputLocator: Locator;
    readonly traningComapanyCityInputLocator: Locator;
    readonly traningComapanyStreetInputLocator: Locator;
    readonly traningComapanyNoStreetCheckboxLocator: Locator;
    readonly traningComapanyHouseNumberInputLocator: Locator;
    readonly traningComapanyFlatNumberInputLocator: Locator;
    readonly saveAndNextButtonLocator: Locator;
    readonly traningComapanyFindAdressButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId('title-trainer-form');
        this.traningComapanyNanmeInputLocator = page.getByTestId(
            'textarea-company-name-62',
        );
        this.traningComapanyEmailInputLocator =
            page.getByTestId('input-email-1');
        this.traningComapanyRepresentativeInputLocator =
            page.getByTestId('textarea-agent-2');
        this.traningComapanyNipInputLocator = page.getByTestId('input-nip-2');
        this.traningComapanyRegonInputLocator =
            page.getByTestId('input-regon-3');
        this.traningComapanyKrsInputLocator = page.getByTestId('input-krs-4');
        this.traningComapanyCapitalInputLocator =
            page.getByTestId('input-kapital-5');
        this.traningComapanyCourtInputLocator =
            page.getByTestId('input-sad-xd');
        this.traningComapanyBankAccountInputLocator = page
            .getByTestId('select-bank-account-5')
            .locator('div > span')
            .nth(1);
        this.traningComapanyPostalCoodeNumber1InputLocator = page
            .getByTestId('input-part1-7')
            .locator('input')
            .first();
        this.traningComapanyPostalCoodeNumber2InputLocator = page
            .getByTestId('input-part1-7')
            .locator('input')
            .nth(1);
        this.traningComapanyPostalCoodeNumber3InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .first();
        this.traningComapanyPostalCoodeNumber4InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .nth(1);
        this.traningComapanyPostalCoodeNumber5InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .nth(2);
        this.traningComapanyFindAdressButtonLocator = page.getByTestId(
            'button-search-postal-code-46',
        );
        this.traningComapanyCityInputLocator = page
            .getByTestId('select-city-6')
            .locator('div > span')
            .nth(1);
        this.traningComapanyStreetInputLocator = page
            .getByTestId('select-street-7')
            .locator('div > span')
            .nth(1);
        this.traningComapanyNoStreetCheckboxLocator = page.getByTestId(
            'no-street-checkbox-11',
        );
        this.traningComapanyHouseNumberInputLocator = page.getByTestId(
            'input-house-number-9',
        );
        this.traningComapanyFlatNumberInputLocator = page.getByTestId(
            'input-flat-number-10',
        );
        this.saveAndNextButtonLocator = page.getByTestId(
            'button-save-trainer-form',
        );

        this.pageTitle = 'Generator umów';
        this.trainingDataHerader = 'Dane firmy szkolącej';
    }
}
