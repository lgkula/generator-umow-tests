/* eslint-disable playwright/expect-expect */
import { test, expect } from '@playwright/test';

import { basicSteps } from './steps/basicSteps';
import { trainingDetailsSteps } from './steps/trainingDetailsSteps';
import { trainingCompanySteps } from './steps/trainingCompanySteps';
import { trainingBeneficiarySteps } from './steps/trainingBeneficiarySteps';
import { agreementDetailsSteps } from './steps/agreementDetailsSteps';
import { createAgreementNumberMiddlePart } from '../test-data/agreementNumber';

test.only('Generate 5.11 Program Agreement', async ({ page }) => {
    const selectedProgram = '5.11';
    const selectedYear = '2023';
    const selectedTrainingDetailsId = 2;
    const selectedPersonalDataId = 0;

    const agreementNumberMiddlePart = createAgreementNumberMiddlePart();
    await test.step('Login to app step', async () => {
        await basicSteps().loginToApp(page, {
            user: process.env.TEST_ADMIN_USER as string,
            password: process.env.TEST_ADMIN_PASSWORD as string,
        });
    });

    await test.step('Fetch data from BUR and check it step', async () => {
        await trainingDetailsSteps().reandAndCheckTrainingDataStep(page, {
            program: selectedProgram,
            year: selectedYear,
            trainingDetailsId: selectedTrainingDetailsId,
        });
    });

    await test.step('Check data regarding training company fetched from BUR and REGON api step', async () => {
        await trainingCompanySteps().checkTrainingCompanyStep(page, test, {
            trainingDetailsId: selectedTrainingDetailsId,
        });
    });

    await test.step('Fill participant details and check it step', async () => {
        await trainingBeneficiarySteps().fillParticipantDataAndCheckStep(
            page,
            test,
            {
                personalDataId: selectedPersonalDataId,
            },
        );
    });

    await test.step('Fill agreement details and check it step', async () => {
        await agreementDetailsSteps().fillAgreementDetailsAndCheckStep(
            page,
            test,
            {
                trainingDetailsId: selectedTrainingDetailsId,
                agreementNumberMiddlePart: agreementNumberMiddlePart,
            },
        );
    });
    await test.step('Check agreement summary step', async () => {
        await agreementDetailsSteps().checkFilledAgreementPreviewStep(
            page,
            test,
            {
                trainingDetailsId: selectedTrainingDetailsId,
                personalDataId: selectedPersonalDataId,
                agreementNumberMiddlePart: agreementNumberMiddlePart,
                programNumber: selectedProgram,
            },
        );
    });
    await test.step('Generate agreement step', async () => {
        await agreementDetailsSteps().generateAgreementsStep(page, test);
    });

    await page.close();
});
