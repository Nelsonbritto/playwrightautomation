import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/#"); //go to the url 

    await page.dblclick("//button[.='Copy Text']"); //double click the button
    await page.waitForSelector("#field2"); //waiting for visibility of element

    await page.pause(); //wait and check the inputs
})