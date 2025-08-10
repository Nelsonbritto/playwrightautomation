import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to the url

    await page.click("#field1"); //select the source field
    await page.keyboard.press('Control+A'); //press ctrl + A(select all)
    await page.keyboard.press("Control+C"); //press ctrl + C(copy all)
    await page.click("#field2") //select the destination field
    await page.keyboard.press('Control+V') //press ctrl + V(paste all)


    await page.pause(); //wait and check the inputs
})