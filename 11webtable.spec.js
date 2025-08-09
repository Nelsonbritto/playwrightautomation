import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/"); //go to the URL
    const table = await page.locator("#productTable"); //find the web table
    const headrow = await table.locator('thead tr th'); // find webtable header row

    //find header column
    console.log(await headrow.count()); //count header row count
    console.log(await headrow.allTextContents()); //prints header row texts

    //find row & column:
    const row = await table.locator("tbody tr") //find the info row
    console.log(await row.count()); //prints count of row

    //1st approach 
    const alltxt = await row.filter({ //using filter method to find the webtable contents
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await alltxt.locator('input').check();  //click the checkbox when we got our expected content

    //2nd approach(finds each column content using nth method)
    const column = await row.locator("td") //find the column content
    console.log(await column.count()); //counts total list of column
    console.log(await column.nth(1).allTextContents()); //prints nth(1) value of column

    //3rd approach(for loop method)
    const page1 = await page.locator('#pagination li a'); //find every next webtable locator
    for (let p = 0; p < await page1.count(); p++) {
        if (p > 0) // webtable1 already showed so we skip it then if it moves webtable 2 we continue it
        {
            await page1.nth(p).click(); //click the next pages
        }
        for (let i = 0; i < await row.count(); i++) {
            const column1 = await row.nth(i).locator('td'); //find the each row and that column
            for (let j = 0; j < await column1.count() - 1; j++) {
                const allvalues = await column1.nth(j).textContent(); //stores each column texts to one variable
                if (allvalues.includes('Wireless Earbuds') || allvalues.includes('Gaming Console')) //verified expected texts
                {
                    await row.nth(i).locator('td input').check(); //condition passed then it will click the input check box
                    await page.pause(); //wait for conform the box xlixks or not
                }
                console.log(await column1.nth(j).textContent()); //prints all contents in webtable 
            }
        }
    }
    await page.pause();
})