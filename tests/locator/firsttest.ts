import { Locator, Page } from "@playwright/test";

export class BaseLocator {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly bannerText: Locator;
    readonly loginButton: Locator;
    readonly sauceLabsBackpackAddToCardBtn: Locator;
    readonly sauceLabsShoppingCartLink: Locator;
    readonly sauceLabsProductsTitle: Locator;
    readonly sauceLabsProductCartItem: Locator;
    readonly sauceLabsProductCartItemHeader: Locator;
    readonly sauceLabsCheckoutBtn: Locator;
    readonly checkoutFirstNameInput: Locator;
    readonly checkoutLastNameInput: Locator;
    readonly checkoutZipCodeInput: Locator;
    readonly continueCheckoutBtn: Locator;
    readonly finishCheckoutBtn: Locator;
    readonly finishCheckoutItemHeader: Locator;
    readonly checkoutHeader: Locator;
    readonly confirmationTitle: Locator;
    
    constructor(page: Page) {
        this.page = page;

        // Locators for Login Page
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.bannerText = page.getByText('Swag Labs');
        this.loginButton = page.locator('[data-test="login-button"]');

        // Locators for Product Page
        this.sauceLabsBackpackAddToCardBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.sauceLabsShoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
        this.sauceLabsProductsTitle = page.locator('[data-test="title"]');

        // Locators for Cart Page
        this.sauceLabsProductCartItem = page.getByText('Sauce Labs Backpackcarry.');
        this.sauceLabsProductCartItemHeader = page.getByText('Sauce Labs Backpackcarry.').locator('[data-test="item-4-title-link"]');
        this.sauceLabsCheckoutBtn = page.locator('[data-test="checkout"]');

        // Locators for Checkout Page
        this.checkoutHeader = page.locator('[data-test="title"]');
        this.checkoutFirstNameInput = page.locator('[data-test="firstName"]'); 
        this.checkoutLastNameInput = page.locator('[data-test="lastName"]');
        this.checkoutZipCodeInput = page.locator('[data-test="postalCode"]');
        this.continueCheckoutBtn = page.locator('[data-test="continue"]');

        // Locators for Finish Checkout Page
        this.finishCheckoutItemHeader = page.locator('[data-test="inventory-item"]').locator('[data-test="item-4-title-link"]');
        this.finishCheckoutBtn = page.locator('[data-test="finish"]');

        // Locators for Confirmation Page
        this.confirmationTitle = page.locator('[data-test="complete-header"]');
        
    }
}