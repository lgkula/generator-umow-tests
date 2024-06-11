import { Page, expect } from '@playwright/test';
import { LoginModalComponent } from '../../pages/login.modal.coponent';
import { BarComponent } from '../../pages/bar.coponent';

export const basicSteps = () => {
    const loginToApp = async (
        page: Page,
        {
            user,
            password,
            pageOpen = false,
        }: {
            user: string;
            password: string;
            pageOpen?: boolean;
        },
    ) => {
        const loginModalComponent = new LoginModalComponent(page);
        const barComponent = new BarComponent(page);

        if (!pageOpen) {
            await page.goto('/');
            await expect(page, 'Check page title').toHaveTitle(
                barComponent.pageTitle,
            );
        }
        await expect(
            loginModalComponent.modalTitleLocator,
            'Check modal title',
        ).toHaveText(loginModalComponent.modalTitle);
        await loginModalComponent.userInputLocator.fill(user);
        await loginModalComponent.passwordInputLocator.fill(password);
        await loginModalComponent.loginButtonLocator.click();
        await expect(
            loginModalComponent.popupMessageLabelLocator,
            'Check login confirmation message',
        ).toHaveText(loginModalComponent.loginConfirmationMessage);
        await expect(
            loginModalComponent.popupDescriptionLabelLocator,
            'Check login confirmation description',
        ).toHaveText(loginModalComponent.loginConfirmationDescription);
        // await loginModalComponent.popupConfirmationLoginLocator.waitFor({
        //     state: 'hidden',
        // });
        await loginModalComponent.popupCloseButtonLocator.click();
        await expect(
            barComponent.logOutButtonLocator,
            'Check if user is logged in',
        ).toContainText(user);
    };

    return {
        loginToApp,
    };
};
