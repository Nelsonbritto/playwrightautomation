import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://practice-automation.com/file-upload/"); //go to url

    await page.locator("//input[@id='file-upload']").click(); //click the choose file button
    await page.locator("//input[@id='file-upload']").setInputFiles("C:\\Users\\User\\Downloads\\failedscreenshot.txt"); //set input files path(check there has double slace(\\))
    await page.click("#upload-btn"); //click the upload button
    const msg = await page.waitForSelector(".wpcf7-response-output"); //wait for element visible
    console.log(await msg.textContent()); //print the final message


    await page.pause(); //wait and check the inputs
})