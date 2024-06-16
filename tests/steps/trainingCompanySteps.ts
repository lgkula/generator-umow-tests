/* eslint-disable playwright/prefer-web-first-assertions */
import { Page, expect } from '@playwright/test';
import {
    checkTrainingDetailsId,
    trainingDetails,
} from '../../test-data/burTrainingsDetails';
import { TrainingCompanyDataPage } from '../../pages/trainigCompanyData.page';
import { TrainingParticipantDataPage } from '../../pages/trainingParticipantData.page';

export const trainingCompanySteps = () => {
    const checkTrainingCompanyStep = async (
        page: Page,
        test: any,
        {
            trainingDetailsId,
        }: {
            trainingDetailsId: number;
        },
    ) => {
        checkTrainingDetailsId(trainingDetailsId);
        const trainingCompanyDataPage = new TrainingCompanyDataPage(page);
        const trainingParticipantDataPage = new TrainingParticipantDataPage(
            page,
        );

        await expect(
            trainingCompanyDataPage.pageHeraderLocator,
            'Checking that the "Training company details" page is displayed',
        ).toHaveText(trainingCompanyDataPage.trainingDataHerader);

        await expect
            .soft(
                trainingCompanyDataPage.traningComapanyNanmeInputLocator,
                'Check that training company name is correct',
            )
            .toHaveText(trainingDetails[trainingDetailsId].copmapnyName);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyEmailInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company name is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyEmail);

        await trainingCompanyDataPage.traningComapanyRepresentativeInputLocator.fill(
            trainingDetails[trainingDetailsId].companyRepresentative,
        );

        await expect
            .soft(
                trainingCompanyDataPage.traningComapanyRepresentativeInputLocator,
                'Check that training company representative is correct',
            )
            .toHaveText(
                trainingDetails[trainingDetailsId].companyRepresentative,
            );

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyNipInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company NIP is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyNip);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyRegonInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company Regon is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyRegon);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyKrsInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company KRS is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyKrs);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyCapitalInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company capital is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyCapital);

        await expect
            .soft(
                trainingCompanyDataPage.traningComapanyCourtInputLocator,
                'Check that training company court is correct',
            )
            .toHaveText(trainingDetails[trainingDetailsId].companyCourt);
        await expect
            .soft(
                trainingCompanyDataPage.traningComapanyBankAccountInputLocator,
                'Check that training company bank account is correct',
            )
            .toHaveText(trainingDetails[trainingDetailsId].companyBankAccount);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyPostalCoodeNumber1InputLocator.getAttribute(
                    'value',
                ),
                'Check that training company postal code digit 1 is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyPostalCode[0]);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyPostalCoodeNumber2InputLocator.getAttribute(
                    'value',
                ),
                'Check that training company postal code digit 2 is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyPostalCode[1]);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyPostalCoodeNumber3InputLocator.getAttribute(
                    'value',
                ),
                'Check that training company postal code digit 3 is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyPostalCode[2]);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyPostalCoodeNumber4InputLocator.getAttribute(
                    'value',
                ),
                'Check that training company postal code digit 4 is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyPostalCode[3]);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyPostalCoodeNumber5InputLocator.getAttribute(
                    'value',
                ),
                'Check that training company postal code digit 5 is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyPostalCode[4]);

        await expect
            .soft(
                trainingCompanyDataPage.traningComapanyCityInputLocator,
                'Check that training company city address is correct',
            )
            .toHaveText(trainingDetails[trainingDetailsId].companyCity);

        await expect
            .soft(
                trainingCompanyDataPage.traningComapanyStreetInputLocator,
                'Check that training company street address is correct',
            )
            .toHaveText(trainingDetails[trainingDetailsId].companyStreet);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyHouseNumberInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company house number address is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyHouseNumber);

        expect
            .soft(
                await trainingCompanyDataPage.traningComapanyFlatNumberInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company flat number address is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].companyFlatNumber);

        expect(
            test.info().errors,
            'Check if any soft assertion throwed exception',
        ).toHaveLength(0);

        await trainingCompanyDataPage.saveAndNextButtonLocator.click();

        await expect(
            trainingParticipantDataPage.pageHeraderLocator,
            'Checking that the "Training participant details" page is displayed',
        ).toHaveText(trainingParticipantDataPage.participantPersonDataHerader);
    };
    return {
        checkTrainingCompanyStep,
    };
};
