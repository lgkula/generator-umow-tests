import { type Locator, type Page } from '@playwright/test';
import { BarComponent } from './bar.coponent';

export class AgreementSummaryPage {
    readonly page: Page;
    readonly barComponent: BarComponent;
    readonly pageHeraderLocator: Locator;

    readonly pageTitle: string;
    readonly agreementSummaryDataHerader: string;
    readonly confirmDataButtonLocator: Locator;

    readonly trainingTitleTextLocator: Locator;
    readonly serviceNumberTextLocator: Locator;
    readonly periodStartTextLocator: Locator;
    readonly perdiodEndTextLocator: Locator;
    readonly dataEndTextLocator: Locator;
    readonly trainigCompanyNameTextLocator: Locator;
    readonly trainigCompanyAddressTextLocator: Locator;
    readonly trainigCompanyEmailTextLocator: Locator;
    readonly trainigCompanyNipTextLocator: Locator;
    readonly trainigCompanyRegonTextLocator: Locator;
    readonly trainigCompanyAccountNumberTextLocator: Locator;
    readonly beneficiaryFirstNameTextLocator: Locator;
    readonly beneficiaryLastNameTextLocator: Locator;
    readonly beneficiaryPeselTextLocator: Locator;
    readonly beneficiaryAddressTextLocator: Locator;
    readonly beneficiaryEmailTextLocator: Locator;
    readonly trainingAmountGrossTextLocator: Locator;
    readonly trainingAmountNettTextLocator: Locator;
    readonly trainingAmountQualifiedTextLocator: Locator;
    readonly trainingFundungAmountTextLocator: Locator;
    readonly trainingFundungAmountInWordsTextLocator: Locator;
    readonly agreementNumberTextLocator: Locator;
    readonly programNumberTextLocator: Locator;
    readonly participantsNumberTextLocator: Locator;
    readonly trainigCompanyKrsTextLocator: Locator;
    readonly trainigCompanyCourtTextLocator: Locator;
    readonly trainingTitleTextPrefix: string;
    readonly serviceNumberTextPrefix: string;
    readonly periodStartTextPrefix: string;
    readonly perdiodEndTextPrefix: string;
    readonly dataEndTextPrefix: string;
    readonly trainigCompanyNameTextPrefix: string;
    readonly trainigCompanyAddressTextPrefix: string;
    readonly trainigCompanyEmailTextPrefix: string;
    readonly trainigCompanyNipTextPrefix: string;
    readonly trainigCompanyRegonTextPrefix: string;
    readonly trainigCompanyKrsTextPrefix: string;
    readonly trainigCompanyCourtTextPrefix: string;
    readonly trainigCompanyAccountNumberTextPrefix: string;
    readonly beneficiaryFirstNameTextPrefix: string;
    readonly beneficiaryLastNameTextPrefix: string;
    readonly beneficiaryPeselTextPrefix: string;
    readonly beneficiaryAddressTextPrefix: string;
    readonly beneficiaryEmailTextPrefix: string;
    readonly trainingAmountGrossTextPrefix: string;
    readonly trainingAmountNettTextPrefix: string;
    readonly trainingAmountQualifiedTextPrefix: string;
    readonly trainingFundungAmountTextPrefix: string;
    readonly trainingFundungAmountInWordsTextPrefix: string;
    readonly agreementNumberTextPrefix: string;
    readonly programNumberTextPrefix: string;
    readonly participantsNumberTextPrefix: string;
    readonly trainigCompanyRepresentativeTextPrefix: string;
    readonly trainigCompanyRepresentativeTextLocator: Locator;
    trainigCompanyCapitalTextLocator: Locator;
    trainigCompanyCapitalTextPrefix: string;

    constructor(page: Page) {
        this.page = page;
        this.barComponent = new BarComponent(this.page);

        this.pageHeraderLocator = page.getByTestId('summary-panel-header-66');
        this.trainingTitleTextLocator = page.getByTestId(
            'text-training-title-67',
        );
        this.serviceNumberTextLocator = page.getByTestId('text-no-service-68');
        this.periodStartTextLocator = page.getByTestId('text-start-date-69');
        this.perdiodEndTextLocator = page.getByTestId('text-end-date-70');
        this.dataEndTextLocator = page.getByTestId('text-end-service-date-71');
        this.trainigCompanyNameTextLocator = page.getByTestId('text-72');
        this.trainigCompanyAddressTextLocator = page.getByTestId('text-73');
        this.trainigCompanyEmailTextLocator = page.getByTestId('text-74');
        this.trainigCompanyRepresentativeTextLocator = page.getByTestId(
            'text-representative-110',
        );
        this.trainigCompanyNipTextLocator = page.getByTestId('text-75');
        this.trainigCompanyRegonTextLocator = page.getByTestId('text-76');
        this.trainigCompanyKrsTextLocator = page.getByTestId('text-77');
        this.trainigCompanyCourtTextLocator = page.getByTestId('text-80');
        this.trainigCompanyCapitalTextLocator = page.getByTestId('text-79');
        this.trainigCompanyAccountNumberTextLocator =
            page.getByTestId('text-78');
        this.beneficiaryFirstNameTextLocator = page.getByTestId('text-81');
        this.beneficiaryLastNameTextLocator = page.getByTestId('text-82');
        this.beneficiaryPeselTextLocator = page.getByTestId('text-83');
        this.beneficiaryAddressTextLocator = page.getByTestId('text-84');
        this.beneficiaryEmailTextLocator = page.getByTestId('text-85');
        this.trainingAmountGrossTextLocator = page.getByTestId('text-86');
        this.trainingAmountNettTextLocator = page.getByTestId('text-87');
        this.trainingAmountQualifiedTextLocator =
            page.getByTestId('text-q-ammount-88');
        this.trainingFundungAmountTextLocator = page.getByTestId(
            'text-fund-amount-90',
        );
        this.trainingFundungAmountInWordsTextLocator = page.getByTestId(
            'text-fund-amount-in-words-91',
        );
        this.agreementNumberTextLocator = page.getByTestId(
            'text-agreement-number-92',
        );
        this.programNumberTextLocator = page.getByTestId(
            'text-program-type-93',
        );
        this.participantsNumberTextLocator = page.getByTestId(
            'text-participants-number-94',
        );

        this.trainingTitleTextPrefix = 'Tytuł';
        this.serviceNumberTextPrefix = 'Numer usługi: ';
        this.periodStartTextPrefix = 'Data rozpoczęcia: ';
        this.perdiodEndTextPrefix = 'Data zakończenia: ';
        this.dataEndTextPrefix = 'Data końca: ';
        this.trainigCompanyNameTextPrefix = 'Nazwa: ';
        this.trainigCompanyAddressTextPrefix = 'Adres:';
        this.trainigCompanyEmailTextPrefix = 'Email: ';
        this.trainigCompanyRepresentativeTextPrefix = 'Reprezentant: ';
        this.trainigCompanyNipTextPrefix = 'NIP: ';
        this.trainigCompanyRegonTextPrefix = 'REGON: ';
        this.trainigCompanyKrsTextPrefix = 'KRS: ';
        this.trainigCompanyCourtTextPrefix = 'Sąd: ';
        this.trainigCompanyCapitalTextPrefix = 'Kapitał: ';
        this.trainigCompanyAccountNumberTextPrefix = 'Numer konta bankowego: ';
        this.beneficiaryFirstNameTextPrefix = 'Imię: ';
        this.beneficiaryLastNameTextPrefix = 'Nazwisko: ';
        this.beneficiaryPeselTextPrefix = 'Pesel: ';
        this.beneficiaryAddressTextPrefix = 'Adres:';
        this.beneficiaryEmailTextPrefix = 'Email: ';
        this.trainingAmountGrossTextPrefix = 'Kwotaszkoleniabrutto:';
        this.trainingAmountNettTextPrefix = 'Kwotaszkolenianetto:';
        this.trainingAmountQualifiedTextPrefix = 'Kwotakwalifikowana:';
        this.trainingFundungAmountTextPrefix = 'Kwotadofinansowania:';
        this.trainingFundungAmountInWordsTextPrefix =
            'Kwota dofinansowania słownie: ';
        this.agreementNumberTextPrefix = 'Numer umowy: ';
        this.programNumberTextPrefix = 'Typ programu: ';
        this.participantsNumberTextPrefix = 'Liczba uczestników: ';

        this.confirmDataButtonLocator = page.getByTestId(
            'button-confirm-data-38',
        );

        this.pageTitle = 'Generator umów';
        this.agreementSummaryDataHerader = 'Dane z umowy do podglądu';
    }
}
