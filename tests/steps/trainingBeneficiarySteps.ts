/* eslint-disable playwright/prefer-web-first-assertions */
import { Page, expect } from '@playwright/test';
import { checkTrainingDetailsId } from '../../test-data/burTrainingsDetails';
import { TrainingParticipantDataPage } from '../../pages/trainingParticipantData.page';
import { personalData } from '../../test-data/personalData';
import { AgreementDetailsPage } from '../../pages/agreementDetails.page';

export const trainingBeneficiarySteps = () => {
    const fillParticipantDataAndCheckStep = async (
        page: Page,
        test: any,
        {
            personalDataId,
        }: {
            personalDataId: number;
        },
    ) => {
        checkTrainingDetailsId(personalDataId);
        const trainingParticipantDataPage = new TrainingParticipantDataPage(
            page,
        );
        const agreementDetailsPage = new AgreementDetailsPage(page);

        await expect(
            trainingParticipantDataPage.pageHeraderLocator,
            'Checking that the "Training participant details" header page is displayed',
        ).toHaveText(trainingParticipantDataPage.participantPersonDataHerader);

        await trainingParticipantDataPage.participantPeselInputLocator.fill(
            personalData[personalDataId].pesel,
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantPeselInputLocator.getAttribute(
                    'value',
                ),
                'Check that participant PESEL is correct',
            )
            .toBe(personalData[personalDataId].pesel);

        await trainingParticipantDataPage.participantFirstNameInputLocator.fill(
            personalData[personalDataId].firstName,
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantFirstNameInputLocator.getAttribute(
                    'value',
                ),
                'Check that participant first name is correct',
            )
            .toBe(personalData[personalDataId].firstName);

        await trainingParticipantDataPage.participantLastNameInputLocator.fill(
            personalData[personalDataId].lastName,
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantLastNameInputLocator.getAttribute(
                    'value',
                ),
                'Check that participant last name is correct',
            )
            .toBe(personalData[personalDataId].lastName);

        await trainingParticipantDataPage.participantEmailInputLocator.fill(
            personalData[personalDataId].email,
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantEmailInputLocator.getAttribute(
                    'value',
                ),
                'Check that participant email is correct',
            )
            .toBe(personalData[personalDataId].email);

        await trainingParticipantDataPage.participantPostalCoodeNumber1InputLocator.fill(
            personalData[personalDataId].postalCode[0],
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantPostalCoodeNumber1InputLocator.getAttribute(
                    'value',
                ),
                'Check that participant postal code digit 1 is correct',
            )
            .toBe(personalData[personalDataId].postalCode[0]);

        await trainingParticipantDataPage.participantPostalCoodeNumber2InputLocator.fill(
            personalData[personalDataId].postalCode[1],
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantPostalCoodeNumber2InputLocator.getAttribute(
                    'value',
                ),
                'Check that participant postal code digit 2 is correct',
            )
            .toBe(personalData[personalDataId].postalCode[1]);

        await trainingParticipantDataPage.participantPostalCoodeNumber3InputLocator.fill(
            personalData[personalDataId].postalCode[2],
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantPostalCoodeNumber3InputLocator.getAttribute(
                    'value',
                ),
                'Check that participant postal code digit 3 is correct',
            )
            .toBe(personalData[personalDataId].postalCode[2]);

        await trainingParticipantDataPage.participantPostalCoodeNumber4InputLocator.fill(
            personalData[personalDataId].postalCode[3],
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantPostalCoodeNumber4InputLocator.getAttribute(
                    'value',
                ),
                'Check that participant postal code digit 4 is correct',
            )
            .toBe(personalData[personalDataId].postalCode[3]);

        await trainingParticipantDataPage.participantPostalCoodeNumber5InputLocator.fill(
            personalData[personalDataId].postalCode[4],
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantPostalCoodeNumber5InputLocator.getAttribute(
                    'value',
                ),
                'Check that participant postal code digit 5 is correct',
            )
            .toBe(personalData[personalDataId].postalCode[4]);

        await trainingParticipantDataPage.participantFindAdressButtonLocator.click();

        // await trainingParticipantDataPage.participantCityInputLocator.fill(
        //     personalData[personalDataId].city,
        // );

        // await trainingParticipantDataPage.participantStreetInputLocator.click();
        // await trainingParticipantDataPage.participantStreetInputLocator.getByText('Otwocka').click();
        // fill('Otwocka');

        // await trainingParticipantDataPage.participantStreetInputLocator.fill(
        //     personalData[personalDataId].street,
        // );

        await trainingParticipantDataPage.participantHouseNumberInputLocator.fill(
            personalData[personalDataId].houseNumber,
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantHouseNumberInputLocator.getAttribute(
                    'value',
                ),
                'Check that training participant house number address is correct',
            )
            .toBe(personalData[personalDataId].houseNumber);

        await trainingParticipantDataPage.participantFlatNumberInputLocator.fill(
            personalData[personalDataId].flatNumber,
        );

        expect
            .soft(
                await trainingParticipantDataPage.participantFlatNumberInputLocator.getAttribute(
                    'value',
                ),
                'Check that training participant flat number address is correct',
            )
            .toBe(personalData[personalDataId].flatNumber);

        expect(
            test.info().errors,
            'Check if any soft assertion throwed exception',
        ).toHaveLength(0);

        // TO REMOVE
        await page.waitForTimeout(1_000);
        await page.screenshot();

        await trainingParticipantDataPage.saveAndNextButtonLocator.click();

        await expect(
            agreementDetailsPage.pageHeraderLocator,
            'Checking that the "Agreement details" page is displayed',
        ).toHaveText(agreementDetailsPage.agreementDataHerader);
    };
    return {
        fillParticipantDataAndCheckStep,
    };
};
