import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class TrainingParticipantDataPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;

    readonly pageTitle: string;
    readonly participantPersonDataHerader: string;
    readonly participantPostalCoodeNumber1InputLocator: Locator;
    readonly participantPostalCoodeNumber2InputLocator: Locator;
    readonly participantPostalCoodeNumber3InputLocator: Locator;
    readonly participantPostalCoodeNumber4InputLocator: Locator;
    readonly participantPostalCoodeNumber5InputLocator: Locator;
    readonly participantCityInputLocator: Locator;
    readonly participantStreetInputLocator: Locator;
    readonly participantNoStreetCheckboxLocator: Locator;
    readonly participantHouseNumberInputLocator: Locator;
    readonly participantFlatNumberInputLocator: Locator;
    readonly participantPeselInputLocator: Locator;
    readonly participantFirstNameInputLocator: Locator;
    readonly participantLastNameInputLocator: Locator;
    readonly participantEmailInputLocator: Locator;
    readonly participantFindAdressButtonLocator: Locator;
    readonly saveAndNextButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId('title-person-trainee-form');
        this.participantPeselInputLocator = page.getByTestId('input-pesel-14');
        this.participantFirstNameInputLocator =
            page.getByTestId('input-imie-15');
        this.participantLastNameInputLocator =
            page.getByTestId('input-nazwisko-16');
        this.participantEmailInputLocator = page.getByTestId('input-email-17');
        this.participantPostalCoodeNumber1InputLocator = page
            .getByTestId('input-part1-7')
            .locator('input')
            .first();
        this.participantPostalCoodeNumber2InputLocator = page
            .getByTestId('input-part1-7')
            .locator('input')
            .nth(1);
        this.participantPostalCoodeNumber3InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .first();
        this.participantPostalCoodeNumber4InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .nth(1);
        this.participantPostalCoodeNumber5InputLocator = page
            .getByTestId('input-part2-8')
            .locator('input')
            .nth(2);
        this.participantFindAdressButtonLocator = page.getByTestId(
            'button-search-postal-code-46',
        );
        this.participantCityInputLocator = page
            .getByTestId('select-city-6')
            .locator('div > span')
            .nth(1);
        this.participantStreetInputLocator = page
            .getByTestId('select-street-7')
            .locator('div > span')
            .nth(1);
        this.participantNoStreetCheckboxLocator = page.getByTestId(
            'no-street-checkbox-11',
        );
        this.participantHouseNumberInputLocator = page.getByTestId(
            'input-house-number-9',
        );
        this.participantFlatNumberInputLocator = page.getByTestId(
            'input-flat-number-10',
        );
        this.saveAndNextButtonLocator = page.getByTestId(
            'button-save-person-trainee-form',
        );

        this.pageTitle = 'Generator umów';
        this.participantPersonDataHerader =
            'Dane osoby uczestniczącej w szkoleniu';
    }
}
