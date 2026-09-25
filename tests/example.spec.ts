import { test, expect, BrowserContext, Page } from '@playwright/test';
import { BaseLocator } from './locator/firsttest';

let context: BrowserContext;
let page: Page;

test.beforeEach(async ({browser}) => {
  context = await browser.newContext();
  
  //await context.tracing.start({screenshots:true, snapshots: true});

  page = await context.newPage();
})
// test('Demo Test', async () => {

//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test('Login and make a purchase', async () => {
  await page.goto('https://www.saucedemo.com/');

  
  await page.pause();
  // // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test.afterAll(async () => {
//   await context.tracing.stop({path: 'demo2_trace.zip'})
// })
// Do not need an afterEach statement for closing browser when each test finishes. Playwright
// already has automatic garbage disposal