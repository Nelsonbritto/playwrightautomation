import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to url
    await expect(page).toHaveTitle("Automation Testing Practice"); //checks the title

    //handling single select dropdown
    const country = await page.$$("#country option"); //using for of method to get all countries
    const countrynames = [];
    for (var x of country) {
        countrynames.push(await x.textContent());
    }
    console.log("allcountry: ", countrynames); //prints all countries

    await page.locator("#country").selectOption('Canada'); //select canada in the list
    const total = await page.$$("#country option");
    await expect(await total.length).toBe(10); //checks total counts

    const [check] = await page.locator("#country").allTextContents(); //get all texts from dropdown
    await expect(await check.includes('India')).toBeTruthy(); //checks it has our expected text

    await page.pause(); //wait and check the inputs

})