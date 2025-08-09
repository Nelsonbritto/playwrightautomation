import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to url
    await expect(page).toHaveTitle("Automation Testing Practice"); //checks the title

    //handling check boxes
    const date = await page.$$("//*[.='Days:']/parent::div//label") //using for of method to click multiple checkboxes
    for (var x of date) {
        const day = await x.textContent()
        if (day == 'Sunday') {
            await x.check()
        }
    } //sunday checkbox clicked

    await page.check("#saturday"); //saturday checkbox clicked
    await page.check("#wednesday"); //wednesday check box clicked
    await expect(page.locator("#sunday")).toBeChecked(); //check sunday has selected
    await expect(page.locator("#saturday").isChecked()).toBeTruthy(); //checks saturday has selected
    await page.uncheck("#wednesday"); //deselect wednesday check box 
    await expect(await page.locator("#wednesday").isChecked()).toBeFalsy(); //checks wednesday deselected

    //(note: radio button and check box looks like same but we can click and unclick check box and we cannot unclick radio buttons)


    await page.pause(); //wait and check the inputs

})