import { test, expect } from '@playwright/test';

import { basicSteps } from './steps/basicSteps';
import { trainingDetailsSteps } from './steps/trainingDetailsSteps';
import { trainingCompanySteps } from './steps/trainingCompanySteps';
import { trainingBeneficiarySteps } from './steps/trainingBeneficiarySteps';
import { agreementDetailsSteps } from './steps/agreementDetailsSteps';
import { createAgreementNumberMiddlePart } from '../test-data/agreementNumber';

test('Generate 5.11 Program Agreement', async ({ page }) => {
    const selectedProgram = '5.11';
    const selectedYear = '2023';
    const selectedTrainingDetailsId = 2;
    const selectedPersonalDataId = 0;

    expect(1).toBe(1);
    const agreementNumberMiddlePart = createAgreementNumberMiddlePart();

    await basicSteps().loginToApp(page, {
        user: process.env.TEST_ADMIN_USER as string,
        password: process.env.TEST_ADMIN_PASSWORD as string,
    });

    await trainingDetailsSteps().reandAndCheckTrainingDataStep(page, {
        program: selectedProgram,
        year: selectedYear,
        trainingDetailsId: selectedTrainingDetailsId,
    });
    await trainingCompanySteps().checkTrainingCompanyStep(page, test, {
        trainingDetailsId: selectedTrainingDetailsId,
    });
    await trainingBeneficiarySteps().fillParticipantDataAndCheckStep(
        page,
        test,
        {
            personalDataId: selectedPersonalDataId,
        },
    );
    await agreementDetailsSteps().fillAgreementDetailsAndCheckStep(page, test, {
        trainingDetailsId: selectedTrainingDetailsId,
        agreementNumberMiddlePart: agreementNumberMiddlePart,
    });
    await agreementDetailsSteps().checkFilledAgreementPreviewStep(page, test, {
        trainingDetailsId: selectedTrainingDetailsId,
        personalDataId: selectedPersonalDataId,
        agreementNumberMiddlePart: agreementNumberMiddlePart,
        programNumber: selectedProgram,
    });
    await agreementDetailsSteps().generateAgreementsStep(page, test);

    // await page.close();
});
