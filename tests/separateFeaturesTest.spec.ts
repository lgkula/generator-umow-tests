/* eslint-disable playwright/prefer-web-first-assertions */
import { test, expect } from '@playwright/test';
import { LoginModalComponent } from '../pages/login.modal.coponent';
import { BarComponent } from '../pages/bar.coponent';
import { TrainingDataPage } from '../pages/trainigData.page';
import { basicSteps } from './steps/basicSteps';
import { trainingDetails } from '../test-data/burTrainingsDetails';

test('Run Generator umow app', async ({ page }) => {
    const barComponent = new BarComponent(page);

    await page.goto('/');

    await expect(page, 'Check page title').toHaveTitle(barComponent.pageTitle);

    page.close();
});

test('Check login mechanism', async ({ page }) => {
    const loginModalComponent = new LoginModalComponent(page);
    const barComponent = new BarComponent(page);

    await basicSteps().loginToApp(page, {
        user: process.env.TEST_ADMIN_USER as string,
        password: process.env.TEST_ADMIN_PASSWORD as string,
    });
    await expect(
        barComponent.addUserButtonLocator,
        'Check if add user button is visible',
    ).toBeVisible();

    await barComponent.logOutButtonLocator.click();

    await basicSteps().loginToApp(page, {
        user: process.env.TEST_USER as string,
        password: process.env.TEST_PASSWORD as string,
        pageOpen: true,
    });
    await expect(
        barComponent.addUserButtonLocator,
        'Check if add user button is hidden',
    ).toBeHidden();

    page.close();
});

test('Check fetching data from BUR page', async ({ page }) => {
    const loginModalComponent = new LoginModalComponent(page);
    const barComponent = new BarComponent(page);
    const trainingDataPage = new TrainingDataPage(page);

    await basicSteps().loginToApp(page, {
        user: process.env.TEST_ADMIN_USER as string,
        password: process.env.TEST_ADMIN_PASSWORD as string,
    });

    await test.step('Fetch traning data from BUR', async () => {
        await expect(
            trainingDataPage.loadTrainingDataButtonLocator,
            'Check that Load training button is disabled',
        ).toBeDisabled();
        await trainingDataPage.trainingNumberInputLocator.fill(
            trainingDetails[0].trainingId,
        );
        await expect(
            trainingDataPage.loadTrainingDataButtonLocator,
            'Check that Load training button is disabled',
        ).toBeEnabled();
        await trainingDataPage.loadTrainingDataButtonLocator.click();

        await expect(async () => {
            await expect(
                trainingDataPage.loadTrainingDataButtonLocator,
            ).toBeDisabled();
        }).toPass({
            intervals: [300, 500, 1_000, 2_000, 2_000],
            timeout: 30_000,
        });
    });

    await test.step('Check fetched data', async () => {
        await expect(
            trainingDataPage.trainingNameInputLocator,
            'Check that training name is correct',
        ).toHaveText(trainingDetails[0].trainingName);

        expect(
            await trainingDataPage.burNumberInputLocator.getAttribute('value'),
            'Check that BUR number is correct',
        ).toBe(trainingDetails[0].burNumber);

        expect(
            await trainingDataPage.trainingNetAmountInputLocator.getAttribute(
                'value',
            ),
            'Check that net amount is correct',
        ).toBe(trainingDetails[0].netAmount);

        expect(
            await trainingDataPage.trainingGrosAmountInputLocator.getAttribute(
                'value',
            ),
            'Check that gross amount is correct',
        ).toBe(trainingDetails[0].grossAmount);

        expect(
            await trainingDataPage.trainingTimeInputLocator
                .first()
                .getAttribute('value'),
            'Check that training time is correct',
        ).toBe(trainingDetails[0].trainingTime[0]);
        expect(
            await trainingDataPage.trainingTimeInputLocator
                .last()
                .getAttribute('value'),
            'Check that training time is correct',
        ).toContain(trainingDetails[0].trainingTime[1]);

        expect(
            await trainingDataPage.serviceEndTimeInputLocator.getAttribute(
                'value',
            ),
            'Check that gross amount is correct',
        ).toBe(trainingDetails[0].servceEndDate);

        await expect(
            trainingDataPage.SaveAndForwardButtonLocator,
            'Check that Save and forward button is enabled',
        ).toBeEnabled();
    });
    await trainingDataPage.SaveAndForwardButtonLocator.click();

    page.close();
});
