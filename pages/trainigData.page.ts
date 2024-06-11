import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class TrainingDataPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;
    readonly trainingDataHeraderLocator: Locator;
    readonly trainingNumberInputLocator: Locator;
    readonly openBurPageWitchTrainingLocator: Locator;
    readonly trainingProgram511InputLocator: Locator;
    readonly trainingProgram55InputLocator: Locator;
    readonly loadTrainingDataButtonLocator: Locator;
    readonly trainingNameInputLocator: Locator;
    readonly burNumberInputLocator: Locator;
    readonly trainingNetAmountInputLocator: Locator;
    readonly trainingGrosAmountInputLocator: Locator;
    readonly trainingTimeInputLocator: Locator;
    readonly serviceEndTimeInputLocator: Locator;
    readonly SaveAndForwardButtonLocator: Locator;
    readonly program511RadioButtonLocator: Locator;
    readonly program55RadioButtonLocator: Locator;
    readonly year2024RadioButtonLocator: Locator;
    readonly year2023RadioButtonLocator: Locator;

    readonly pageTitle: string;
    readonly trainingDataHerader: string;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId('headrer-training-data-100');
        this.trainingDataHeraderLocator = page.getByTestId(
            'title-training-form',
        );
        this.trainingNumberInputLocator = page.getByTestId(
            'input-nr-szkolenia-22',
        );
        this.openBurPageWitchTrainingLocator = page.getByTestId(
            'button-open-training-bur-101',
        );
        this.trainingProgram511InputLocator = page.getByTestId(
            'radio-button-program-511-63',
        );
        this.trainingProgram55InputLocator = page.getByTestId(
            'radio-button-program-55-64',
        );
        this.loadTrainingDataButtonLocator = page.getByTestId(
            'button-load-training-55',
        );
        this.trainingNameInputLocator = page.getByTestId(
            'textarea-nazwa-szkolenia-56',
        );
        this.burNumberInputLocator = page.getByTestId('input-nr-uslugi-bur-23');
        this.trainingNetAmountInputLocator = page.getByTestId(
            'input-kwota-netto-szkolenia',
        );
        this.trainingGrosAmountInputLocator = page.getByTestId(
            'input-kwota-brutto-szkolenia',
        );
        this.trainingTimeInputLocator = page.getByTestId(
            'range-picker-date-from-end-65',
        );
        this.serviceEndTimeInputLocator = page.getByTestId(
            'date-picker-end-date-66',
        );
        this.SaveAndForwardButtonLocator = page.getByTestId(
            'button-save-training-form',
        );
        this.program511RadioButtonLocator = page.getByTestId(
            'radio-button-program-511-63',
        );
        this.program55RadioButtonLocator = page.getByTestId(
            'radio-button-program-55-64',
        );
        this.year2024RadioButtonLocator = page.getByTestId('radio-button-2024');
        this.year2023RadioButtonLocator = page.getByTestId('radio-button-2023');

        this.pageTitle = 'Generator umów';
        this.trainingDataHerader = 'Dane szkolenia';
    }
}
