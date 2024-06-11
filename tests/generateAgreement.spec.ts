import { test, expect } from '@playwright/test';

import { basicSteps } from './steps/basicSteps';
import { trainingDetailsSteps } from './steps/trainingDetailsSteps';

test('Generate 5.11 Program Agreement', async ({ page }) => {
    expect(1).toBe(1);

    await basicSteps().loginToApp(page, {
        user: process.env.TEST_ADMIN_USER as string,
        password: process.env.TEST_ADMIN_PASSWORD as string,
    });

    await trainingDetailsSteps().reandAndCheckTrainingDataStep(page, {
        program: '5.11',
        year: '2023',
        trainingDetailsId: 2,
    });
});
