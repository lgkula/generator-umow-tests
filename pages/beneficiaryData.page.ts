import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class BeneficiaryDataPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;

    readonly pageTitle: string;
    readonly beneficiaryPersonDataHerader: string;
    readonly beneficiaryPostalCoodeNumber1InputLocator: Locator;
    readonly beneficiaryPostalCoodeNumber2InputLocator: Locator;
    readonly beneficiaryPostalCoodeNumber3InputLocator: Locator;
    readonly beneficiaryPostalCoodeNumber4InputLocator: Locator;
    readonly beneficiaryPostalCoodeNumber5InputLocator: Locator;
    readonly beneficiaryCityInputLocator: Locator;
    readonly beneficiaryStreetInputLocator: Locator;
    readonly beneficiaryNoStreetCheckboxLocator: Locator;
    readonly beneficiaryHouseNumberInputLocator: Locator;
    readonly beneficiaryFlatNumberInputLocator: Locator;
    readonly beneficiaryPeselInputLocator: Locator;
    readonly beneficiaryFirstNameInputLocator: Locator;
    readonly beneficiaryLastNameInputLocator: Locator;
    readonly beneficiaryEmailInputLocator: Locator;
    readonly beneficiaryFindAdressButtonLocator: Locator;
    readonly saveAndNextButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId('title-person-trainee-form');
        this.beneficiaryPeselInputLocator = page.getByTestId('input-pesel-14');
        this.beneficiaryFirstNameInputLocator =
            page.getByTestId('input-imie-15');
        this.beneficiaryLastNameInputLocator =
            page.getByTestId('input-nazwisko-16');
        this.beneficiaryEmailInputLocator = page.getByTestId('input-email-17');
        this.beneficiaryPostalCoodeNumber1InputLocator = page
            .getByTestId('input-part1-7')
            .locator('input')
            .first();
        this.beneficiaryPostalCoodeNumber2InputLocator = page
            .getByTestId('input-part1-7')
            .locator('input')
            .nth(1);
        this.beneficiaryPostalCoodeNumber3InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .first();
        this.beneficiaryPostalCoodeNumber4InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .nth(1);
        this.beneficiaryPostalCoodeNumber5InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .nth(2);
        this.beneficiaryFindAdressButtonLocator = page.getByTestId(
            'button-search-postal-code-46',
        );
        this.beneficiaryCityInputLocator = page
            .getByTestId('select-city-6')
            .locator('div > span')
            .nth(1);
        this.beneficiaryStreetInputLocator = page
            .getByTestId('select-street-7')
            .locator('div > span')
            .nth(1);
        this.beneficiaryNoStreetCheckboxLocator = page.getByTestId(
            'no-street-checkbox-11',
        );
        this.beneficiaryHouseNumberInputLocator = page.getByTestId(
            'input-house-number-9',
        );
        this.beneficiaryFlatNumberInputLocator = page.getByTestId(
            'input-flat-number-10',
        );
        this.saveAndNextButtonLocator = page.getByTestId(
            'button-save-trainer-form',
        );

        this.pageTitle = 'Generator umów';
        this.beneficiaryPersonDataHerader =
            'Dane osoby uczestniczącej w szkoleniu';
    }
}
