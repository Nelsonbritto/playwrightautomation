import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //goto the url

    //1st approach
    const [page1] = await Promise.all([  //setup promise function and make the variable to save the new page
        page.context().waitForEvent('page'), //awaiting new tap for next window
        page.click("//button[.='New Tab']")]); //click new window open link

    await page1.bringToFront(); //bring new window to front
    await page1.waitForTimeout(2000) //wait for 2 seconds
    console.log(await page.title()); //print the new page title
    await page.bringToFront(); //now bring original page to front
    await page1.close(); //close the last opened page

    const [page2] = await Promise.all([ //setup promise function and make the variable to save the new page
        page.context().waitForEvent('page'), //awaiting new tap for next window
        page.click("#PopUp")]); //click new window open link

    await page2.bringToFront(); //bring new window to front
    console.log(await page2.url()); //prints 2nd page url
    await page2.waitForTimeout(2000); //wait for 2 seconds
    await page2.click(".navbar-toggler-icon")
    await page2.click("//span[.='Downloads']");
    console.log(await page2.locator(".d-1").textContent()); //print 2nd page has this value
    await page.bringToFront(); //bring original page to front
    await page.waitForTimeout(2000); //wait for 2 seconds
    await page2.close(); //close the 2nd page

    await page.pause(); //wait and check the inputs
})