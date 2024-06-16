/* eslint-disable playwright/prefer-web-first-assertions */
import { Page, expect } from '@playwright/test';
import { TrainingDataPage } from '../../pages/trainigData.page';
import {
    checkTrainingDetailsId,
    trainingDetails,
} from '../../test-data/burTrainingsDetails';
import { TrainingCompanyDataPage } from '../../pages/trainigCompanyData.page';

export const trainingDetailsSteps = () => {
    const reandAndCheckTrainingDataStep = async (
        page: Page,
        {
            program,
            year,
            trainingDetailsId,
        }: {
            program: '5.11' | '5.5';
            year: '2023' | '2024';
            trainingDetailsId: number;
        },
    ) => {
        checkTrainingDetailsId(trainingDetailsId);
        const trainingDataPage = new TrainingDataPage(page);
        const trainingCompanyDataPage = new TrainingCompanyDataPage(page);

        await expect(
            trainingDataPage.trainingDataHeraderLocator,
            'Check training data header',
        ).toHaveText(trainingDataPage.trainingDataHerader);

        await expect(
            trainingDataPage.loadTrainingDataButtonLocator,
            'Check that Load training button is disabled',
        ).toBeDisabled();
        await trainingDataPage.trainingNumberInputLocator.fill(
            trainingDetails[trainingDetailsId].trainingId,
        );

        if (program === '5.11') {
            await trainingDataPage.program511RadioButtonLocator.check();
            await expect(
                trainingDataPage.program511RadioButtonLocator,
            ).toBeChecked();
        } else {
            await trainingDataPage.program55RadioButtonLocator.check();
            await expect(
                trainingDataPage.program55RadioButtonLocator,
            ).toBeChecked();
        }

        if (year === '2023') {
            await trainingDataPage.year2023RadioButtonLocator.check();
            await expect(
                trainingDataPage.year2023RadioButtonLocator,
            ).toBeChecked();
        } else {
            await trainingDataPage.year2024RadioButtonLocator.check();
            await expect(
                trainingDataPage.year2024RadioButtonLocator,
            ).toBeChecked();
        }

        await expect(
            trainingDataPage.loadTrainingDataButtonLocator,
            'Check that Load training button is enabled',
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

        // Assertions
        await expect(
            trainingDataPage.trainingNameInputLocator,
            'Check that training name is correct',
        ).toHaveText(trainingDetails[trainingDetailsId].trainingName);

        expect(
            await trainingDataPage.burNumberInputLocator.getAttribute('value'),
            'Check that BUR number is correct',
        ).toBe(trainingDetails[trainingDetailsId].burNumber);

        expect(
            await trainingDataPage.trainingNetAmountInputLocator.getAttribute(
                'value',
            ),
            'Check that net amount is correct',
        ).toBe(trainingDetails[trainingDetailsId].netAmount);

        expect(
            await trainingDataPage.trainingGrosAmountInputLocator.getAttribute(
                'value',
            ),
            'Check that gross amount is correct',
        ).toBe(trainingDetails[trainingDetailsId].grossAmount);

        expect(
            await trainingDataPage.trainingTimeInputLocator
                .first()
                .getAttribute('value'),
            'Check that training time is correct',
        ).toBe(trainingDetails[trainingDetailsId].trainingTime[0]);
        expect(
            await trainingDataPage.trainingTimeInputLocator
                .last()
                .getAttribute('value'),
            'Check that training time is correct',
        ).toContain(trainingDetails[trainingDetailsId].trainingTime[1]);

        expect(
            await trainingDataPage.serviceEndTimeInputLocator.getAttribute(
                'value',
            ),
            'Check that gross amount is correct',
        ).toBe(trainingDetails[trainingDetailsId].servceEndDate);

        await expect(
            trainingDataPage.SaveAndForwardButtonLocator,
            'Check that Save and forward button is enabled',
        ).toBeEnabled();

        await trainingDataPage.SaveAndForwardButtonLocator.click();
        await expect(
            trainingCompanyDataPage.pageHeraderLocator,
            'Checking whether the "Training company details" page has been displayed',
        ).toHaveText(trainingCompanyDataPage.trainingDataHerader);
    };

    return {
        reandAndCheckTrainingDataStep,
    };
};
