/* eslint-disable playwright/prefer-web-first-assertions */
import { Page, expect } from '@playwright/test';
import {
    checkTrainingDetailsId,
    trainingDetails,
} from '../../test-data/burTrainingsDetails';
import { AgreementDetailsPage } from '../../pages/agreementDetails.page';
import { AgreementSummaryPage } from '../../pages/agreementSummary.page';
import { personalData } from '../../test-data/personalData';
import { GenerateContractPage } from '../../pages/generateContract.page';
import * as fs from 'node:fs/promises';
import path from 'path';

// export const agreementNumberMiddlePart: string = `99Test${Math.floor(Math.random() * 900) + 100}`;

export const agreementDetailsSteps = () => {
    const fillAgreementDetailsAndCheckStep = async (
        page: Page,
        test: any,
        {
            trainingDetailsId,
            agreementNumberMiddlePart,
        }: {
            trainingDetailsId: number;
            agreementNumberMiddlePart: string;
        },
    ) => {
        checkTrainingDetailsId(trainingDetailsId);
        const agreementDetailsPage = new AgreementDetailsPage(page);
        const agreementSummaryPage = new AgreementSummaryPage(page);

        await expect(
            agreementDetailsPage.pageHeraderLocator,
            'Checking that the "Agreement details" page header is displayed',
        ).toHaveText(agreementDetailsPage.agreementDataHerader);

        await agreementDetailsPage.agreementNumberInputLocator.fill(
            agreementNumberMiddlePart,
        );

        expect
            .soft(
                await agreementDetailsPage.agreementNumberInputLocator.getAttribute(
                    'value',
                ),
                'Check that agreement middle part number is correct',
            )
            .toBe(agreementNumberMiddlePart);

        expect
            .soft(
                await agreementDetailsPage.fundingAmountInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company Regon is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].fundingAmount);

        expect
            .soft(
                await agreementDetailsPage.ownContributingAmountInputLocator.getAttribute(
                    'value',
                ),
                'Check that training company Regon is correct',
            )
            .toBe(trainingDetails[trainingDetailsId].ownContributingAmount);

        expect(
            test.info().errors,
            'Check if any soft assertion throwed exception',
        ).toHaveLength(0);

        await agreementDetailsPage.saveAndNextButtonLocator.click();

        await expect(
            agreementSummaryPage.pageHeraderLocator,
            'Check that the "Agreement summary" page is displayed',
        ).toHaveText(agreementSummaryPage.agreementSummaryDataHerader);
    };

    const checkFilledAgreementPreviewStep = async (
        page: Page,
        test: any,
        {
            trainingDetailsId,
            personalDataId,
            agreementNumberMiddlePart,
            programNumber,
        }: {
            trainingDetailsId: number;
            personalDataId: number;
            agreementNumberMiddlePart: string;
            programNumber: string;
        },
    ) => {
        const agreementSummaryPage = new AgreementSummaryPage(page);
        const generateContractPage = new GenerateContractPage(page);

        await expect(
            agreementSummaryPage.pageHeraderLocator,
            'Check that the "Agreement summary" page is displayed',
        ).toHaveText(agreementSummaryPage.agreementSummaryDataHerader);

        // Training section
        await expect
            .soft(
                agreementSummaryPage.trainingTitleTextLocator,
                'Check that trainig title is correct',
            )
            .toContainText(trainingDetails[trainingDetailsId].trainingName);
        await expect
            .soft(
                agreementSummaryPage.serviceNumberTextLocator,
                'Check that trainig BUR number is correct',
            )
            .toContainText(trainingDetails[trainingDetailsId].burNumber);
        await expect
            .soft(
                agreementSummaryPage.periodStartTextLocator,
                'Check that trainig start period is correct',
            )
            .toContainText(trainingDetails[trainingDetailsId].trainingTime[0]);
        await expect
            .soft(
                agreementSummaryPage.perdiodEndTextLocator,
                'Check that trainig end period is correct',
            )
            .toContainText(trainingDetails[trainingDetailsId].trainingTime[1]);
        await expect
            .soft(
                agreementSummaryPage.dataEndTextLocator,
                'Check that trainig end service time is correct',
            )
            .toContainText(trainingDetails[trainingDetailsId].servceEndDate);

        // Training Company section
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyNameTextLocator,
                'Check that trainig company name is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.trainigCompanyNameTextPrefix}${trainingDetails[trainingDetailsId].copmapnyName}`,
            );

        const fullCompanyAddress = `${agreementSummaryPage.trainigCompanyAddressTextPrefix}${trainingDetails[trainingDetailsId].companyStreet} ${trainingDetails[trainingDetailsId].companyHouseNumber}${trainingDetails[trainingDetailsId].companyPostalCode[0]}${trainingDetails[trainingDetailsId].companyPostalCode[1]}-${trainingDetails[trainingDetailsId].companyPostalCode[2]}${trainingDetails[trainingDetailsId].companyPostalCode[3]}${trainingDetails[trainingDetailsId].companyPostalCode[4]} ${trainingDetails[trainingDetailsId].companyCity}`;
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyAddressTextLocator,
                'Check that trainig company address is correct',
            )
            .toContainText(fullCompanyAddress);
        if (trainingDetails[trainingDetailsId].companyFlatNumber) {
            await expect
                .soft(
                    agreementSummaryPage.trainigCompanyAddressTextLocator,
                    'Check that trainig company address with flat is correct',
                )
                .toContainText(
                    `${trainingDetails[trainingDetailsId].companyHouseNumber} / ${trainingDetails[trainingDetailsId].companyFlatNumber}`,
                );
        }
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyEmailTextLocator,
                'Check that trainig company email is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.trainigCompanyEmailTextPrefix}${trainingDetails[trainingDetailsId].companyEmail}`,
            );
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyRepresentativeTextLocator,
                'Check that trainig company representative is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.trainigCompanyRepresentativeTextPrefix}${trainingDetails[trainingDetailsId].companyRepresentative}`,
            );
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyNipTextLocator,
                'Check that trainig company NIP is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.trainigCompanyNipTextPrefix}${trainingDetails[trainingDetailsId].companyNip}`,
            );
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyRegonTextLocator,
                'Check that trainig company Regon is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.trainigCompanyRegonTextPrefix}${trainingDetails[trainingDetailsId].companyRegon}`,
            );
        await expect
            .soft(
                agreementSummaryPage.trainigCompanyAccountNumberTextLocator,
                'Check that trainig company Bank Account Number is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.trainigCompanyAccountNumberTextPrefix}${trainingDetails[trainingDetailsId].companyBankAccount}`,
            );
        if (trainingDetails[trainingDetailsId].companyKrs) {
            await expect
                .soft(
                    agreementSummaryPage.trainigCompanyKrsTextLocator,
                    'Check that trainig company KRS is correct',
                )
                .toHaveText(
                    `${agreementSummaryPage.trainigCompanyKrsTextPrefix}${trainingDetails[trainingDetailsId].companyKrs}`,
                );
            await expect
                .soft(
                    agreementSummaryPage.trainigCompanyCourtTextLocator,
                    'Check that trainig company Court is correct',
                )
                .toHaveText(
                    `${agreementSummaryPage.trainigCompanyCourtTextPrefix}${trainingDetails[trainingDetailsId].companyCourt}`,
                );
        }
        if (trainingDetails[trainingDetailsId].companyCapital) {
            await expect
                .soft(
                    agreementSummaryPage.trainigCompanyCapitalTextLocator,
                    'Check that trainig company KRS is correct',
                )
                .toHaveText(
                    `${agreementSummaryPage.trainigCompanyCapitalTextPrefix}${trainingDetails[trainingDetailsId].companyCapital}`,
                );
        }

        // Participanr section
        await expect
            .soft(
                agreementSummaryPage.beneficiaryFirstNameTextLocator,
                'Check that participant first name name is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.beneficiaryFirstNameTextPrefix}${personalData[personalDataId].firstName}`,
            );

        await expect
            .soft(
                agreementSummaryPage.beneficiaryLastNameTextLocator,
                'Check that participant last name is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.beneficiaryLastNameTextPrefix}${personalData[personalDataId].lastName}`,
            );

        await expect
            .soft(
                agreementSummaryPage.beneficiaryPeselTextLocator,
                'Check that participant PESEL is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.beneficiaryPeselTextPrefix}${personalData[personalDataId].pesel}`,
            );

        const fullParticipantAddressRegex = new RegExp(
            `${agreementSummaryPage.beneficiaryAddressTextPrefix}.*${personalData[personalDataId].street} ${personalData[personalDataId].houseNumber}.*${personalData[personalDataId].postalCode[0]}${personalData[personalDataId].postalCode[1]}-${personalData[personalDataId].postalCode[2]}${personalData[personalDataId].postalCode[3]}${personalData[personalDataId].postalCode[4]} ${personalData[personalDataId].city}`,
            's',
        );
        await expect
            .soft(
                agreementSummaryPage.beneficiaryAddressTextLocator,
                'Check that trainig company address is correct',
            )
            .toContainText(fullParticipantAddressRegex);

        if (personalData[personalDataId].flatNumber) {
            await expect
                .soft(
                    agreementSummaryPage.beneficiaryAddressTextLocator,
                    'Check that trainig company address with flat is correct',
                )
                .toContainText(
                    `${personalData[personalDataId].houseNumber}/${personalData[personalDataId].flatNumber}`,
                );
        }
        await expect
            .soft(
                agreementSummaryPage.beneficiaryEmailTextLocator,
                'Check that participant email is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.beneficiaryEmailTextPrefix}${personalData[personalDataId].email}`,
            );

        // Finance section
        expect
            .soft(
                (
                    await agreementSummaryPage.trainingAmountGrossTextLocator.innerText()
                )
                    .replace(/,/g, '.')
                    .replace(/\s/g, ''),
                'Check that trainig gross amount is correct',
            )
            .toBe(
                `${agreementSummaryPage.trainingAmountGrossTextPrefix}${trainingDetails[trainingDetailsId].grossAmount}zł`,
            );
        // await expect.soft(
        //     agreementSummaryPage.trainingAmountNettTextLocator,
        //     'Check that trainig net amount is correct',
        // ).toHaveText(
        //     `${agreementSummaryPage.trainingAmountNettTextPrefix}${trainingDetails[trainingDetailsId].netAmount}`,
        // );
        // await expect.soft(
        //     agreementSummaryPage.trainingAmountQualifiedTextLocator,
        //     'Check that trainig qualified amoount is correct',
        // ).toHaveText(
        //     `${agreementSummaryPage.trainingAmountQualifiedTextPrefix}${trainingDetails[trainingDetailsId].qualifiedAmount}`,
        // );
        // await expect.soft(
        //     agreementSummaryPage.trainingFundungAmountTextLocator,
        //     'Check that trainig funding amount is correct',
        // ).toHaveText(
        //     `${agreementSummaryPage.trainingFundungAmountTextPrefix}${trainingDetails[trainingDetailsId].fundingAmount}`,
        // );
        expect
            .soft(
                (
                    await agreementSummaryPage.trainingAmountNettTextLocator.innerText()
                )
                    .replace(/,/g, '.')
                    .replace(/\s/g, ''),
                'Check that training net amount is correct',
            )
            .toBe(
                `${agreementSummaryPage.trainingAmountNettTextPrefix}${trainingDetails[trainingDetailsId].netAmount}zł`,
            );

        expect
            .soft(
                (
                    await agreementSummaryPage.trainingAmountQualifiedTextLocator.innerText()
                )
                    .replace(/,/g, '.')
                    .replace(/\s/g, ''),
                'Check that training qualified amount is correct',
            )
            .toBe(
                `${agreementSummaryPage.trainingAmountQualifiedTextPrefix}${trainingDetails[trainingDetailsId].qualifiedAmount}zł`,
            );

        expect
            .soft(
                (
                    await agreementSummaryPage.trainingFundungAmountTextLocator.innerText()
                )
                    .replace(/,/g, '.')
                    .replace(/\s/g, ''),
                'Check that training funding amount is correct',
            )
            .toBe(
                `${agreementSummaryPage.trainingFundungAmountTextPrefix}${trainingDetails[trainingDetailsId].fundingAmount}zł`,
            );

        await expect
            .soft(
                agreementSummaryPage.trainingFundungAmountInWordsTextLocator,
                'Check that trainig funding amount in words is correct',
            )
            .toContainText(
                new RegExp(
                    `${agreementSummaryPage.trainingFundungAmountInWordsTextPrefix}.*złot.*grosz.*`,
                ),
            );

        // Agreement details section
        await expect
            .soft(
                agreementSummaryPage.agreementNumberTextLocator,
                'Check that agreement number is correct',
            )
            .toContainText(
                new RegExp(
                    `${agreementSummaryPage.agreementNumberTextPrefix}.*${agreementNumberMiddlePart}.*`,
                ),
            );
        await expect
            .soft(
                agreementSummaryPage.programNumberTextLocator,
                'Check that program number is correct',
            )
            .toHaveText(
                `${agreementSummaryPage.programNumberTextPrefix}${programNumber}`,
            );
        expect(
            test.info().errors,
            'Check if any soft assertion throwed exception',
        ).toHaveLength(0);

        await agreementSummaryPage.confirmDataButtonLocator.click();

        await expect(
            generateContractPage.pageHeraderLocator,
            'Checking that the "Agreement details" page is displayed',
        ).toHaveText(generateContractPage.generateAgreementDataHerader);
    };

    const generateAgreementsStep = async (page: Page, test: any) => {
        const generateContractPage = new GenerateContractPage(page);
        await expect(
            generateContractPage.pageHeraderLocator,
            'Checking that the "Agreement details" page is displayed',
        ).toHaveText(generateContractPage.generateAgreementDataHerader);

        const fileName = 'umowa.docx';
        const filePath = `../../test-results/${fileName}`;
        const fullFilePath = path.join(__dirname, `${filePath}`);

        const downloadPromise = page.waitForEvent('download');
        await generateContractPage.generateAgreementButtonLocator.click();
        const download = await downloadPromise;
        await download.saveAs(fullFilePath);

        const checkIfFileExists = async (
            fullFilePath: string,
        ): Promise<boolean> => {
            try {
                await fs.access(fullFilePath);
                return true;
            } catch (error) {
                return false;
            }
        };

        expect(
            await checkIfFileExists(fullFilePath),
            `Check that file ${filePath} exist`,
        ).toBeTruthy();
    };

    return {
        fillAgreementDetailsAndCheckStep,
        checkFilledAgreementPreviewStep,
        generateAgreementsStep,
    };
};
