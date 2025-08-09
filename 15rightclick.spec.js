import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html"); //goto the url

    const btn = await page.locator("//span[.='right click me']"); //get the double click locator
    await btn.click({ button: "right" }); //right click the button

    page.on('dialog', async dialog => { //enables alerts option
        await expect(dialog.type()).toContain('alert'); //check the alert type
        await expect(dialog.message()).toContain('clicked: edit'); //check the alert has message or not
        console.log(await dialog.message()); //prints alert message
        await dialog.accept(); //accept the alert
    })
    await page.click("//span[.='Edit']"); //click the button then will come alerts

    await page.pause(); //wait and check the inputs
})