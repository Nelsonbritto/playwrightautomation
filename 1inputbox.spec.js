import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to url
    await expect(page).toHaveTitle("Automation Testing Practice"); //checks the title

    //handling input box
    await page.fill("#name", 'kaipulla'); //set the name
    await page.locator("#email").fill('kaipullafromrathabhoomi@gmail.com'); //set the email
    await page.fill("#phone", '9434244114'); //set the phone number
    await page.fill("#textarea", 'No. 6, Vivekanandar Theru, Dubai Kuruku Sandhu, Dubai Main Road, Dubai '); //set the address

    await page.pause(); //wait and check the inputs

})