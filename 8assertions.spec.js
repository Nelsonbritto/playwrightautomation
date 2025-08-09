import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to url
    await expect(page).toHaveTitle("Automation Testing Practice"); //checks the title

 //HARD ASSERTIONS(checks the placeholder attribute texts)
    await expect(await page.getAttribute("#name", 'placeholder')).toBe("Enter Name"); //check the name attribute
    await expect(await page.getAttribute("#email", 'placeholder')).toBe("Enter EMail"); //check the email attribute

   // SOFT ASSERTIONS
    await expect.soft(await page.getAttribute("#phone", 'placeholder')).toBe('Enter Pho'); //wrong value but it won't stop
    await page.fill("#textarea", 'No. 6, Vivekanandar Theru, Dubai Kuruku Sandhu, Dubai Main Road, Dubai') //this line executed
    

    await page.pause(); //wait and check the assertions

   // HARD ASSERTIONS --> stop the execution
   // SOFT ASSERTIONS --> skip the execution and move on to next line
})