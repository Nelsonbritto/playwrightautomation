import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to url
    await expect(page).toHaveTitle("Automation Testing Practice"); //checks the title

    //handling radio buttons
    await page.click("#male"); //click the gender radio button
    await expect(page.locator("#male")).toBeChecked(); //check the button has click

    await page.pause(); //wait and check the inputs

})