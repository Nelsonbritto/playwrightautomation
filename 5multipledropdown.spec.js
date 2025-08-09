import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to url
    await expect(page).toHaveTitle("Automation Testing Practice"); //checks the title

    //handling multiselect dropdown
    await page.selectOption("#colors", [
        { value: 'green' }, { label: 'White' }, { index: 4 }]); //select with value, label, index
    await page.locator("#colors").selectOption(['Red', 'Yellow', 'White']); //normal selection
    const color = await page.locator("#colors").textContent();
    console.log("all colors: ", color); //prints total colors

    await page.pause(); //wait and check the inputs

})