import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //goto the url

await page.hover("//button[.='Point Me']"); //brings mouse cursor to pointme button
await page.hover("//a[.='Laptops']"); //then brings mouse cursor to laptops button

await page.waitForTimeout(3000); //wait for 3 seconds for check the action
await page.click("//a[.='Laptops']"); //finally clicks the laptop button

await page.pause(); //wait and check the inputs
})