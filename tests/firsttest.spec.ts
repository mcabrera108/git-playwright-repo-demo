import {test, expect, BrowserContext, Page} from "@playwright/test";
import { BaseLocator } from "./locator/firsttest";

let context: BrowserContext;
let page: Page;

test.beforeEach(async ({browser}) => {
    // Login user with valid credentials
    context = await browser.newContext();
    page = await context.newPage();
    const loginPage = new BaseLocator(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.passwordInput.isVisible();
    await loginPage.usernameInput.isVisible();

    // Would usually be inside a .env file with vault public keys
    await loginPage.usernameInput.fill('standard_user');
    await loginPage.passwordInput.fill('secret_sauce');

    await loginPage.loginButton.click();
    await expect(loginPage.sauceLabsProductsTitle).toBeVisible();

})
test('Add Backpack Item to Cart and Checkout', async () => {
    const productPage = new BaseLocator(page);

    await productPage.sauceLabsBackpackAddToCardBtn.isVisible();
    await productPage.sauceLabsShoppingCartLink.isVisible();

    await productPage.sauceLabsBackpackAddToCardBtn.click();
    await expect(productPage.sauceLabsShoppingCartLink).toHaveText('1');
    
    await productPage.sauceLabsShoppingCartLink.click();

    await expect(productPage.sauceLabsProductCartItem).toBeVisible();
    await expect(productPage.sauceLabsProductCartItemHeader).toHaveText('Sauce Labs Backpack');

    await productPage.sauceLabsCheckoutBtn.click();
    await expect(productPage.checkoutHeader).toHaveText('Checkout: Your Information');

    await productPage.checkoutFirstNameInput.fill('Cookie');
    await productPage.checkoutLastNameInput.fill('Lazer');
    await productPage.checkoutZipCodeInput.fill('77038');
    await productPage.continueCheckoutBtn.click();
    await expect(productPage.finishCheckoutItemHeader).toHaveText('Sauce Labs Backpack');
    
    await productPage.finishCheckoutBtn.click();

    await expect(productPage.confirmationTitle).toHaveText('Thank you for your order!');

})
