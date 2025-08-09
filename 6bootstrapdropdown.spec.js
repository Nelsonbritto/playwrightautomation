import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://bootsnipp.com/tags/dropdown"); //go to url
    await expect(page).toHaveTitle("Bootstrap Dropdown Examples"); //checks the title
    await page.locator("//a[.='Tools ']").click(); //click the dropdown

    //handling bootstrapdropdown
    const text = await page.$$("//li[@class='open']//ul//li//a"); //get all texts
    const a = [];
    for (let x of text) {
        console.log(await x.textContent()) //prints all texts
        const all = await x.textContent(); //store all texts to another variable
        await a.push(all.trim()); //trim and push to array for verification
    }
    await expect(await a.includes('Icon Search')).toBeTruthy(); //check the expected text


    await page.pause(); //wait and check the inputs

})