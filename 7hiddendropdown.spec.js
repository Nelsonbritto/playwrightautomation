import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    const cityname = 'karaikudi'; //set the city name

    await page.goto("https://www.redbus.in/bus-tickets/bangalore-to-madurai?fromCityId=122&fromCityName=Bangalore&toCityId=126&toCityName=Madurai&onward=09-Aug-2025&doj=27-Jul-2025&ref=search");
    await page.click("//div[.='From']"); //click the departure button
    await page.fill("#srcDest", cityname); //mention the departure station
    await page.waitForSelector("//div[.='Board at']//parent::div//div//div[1]"); //wait for showing all stops
    const allstops = await page.locator("//div[.='Board at']//parent::div//div//div[1]").allTextContents(); //get all stops name

    console.log(await allstops); //prints all stops
    await expect(await allstops.includes('Puduvayal, Karaikudi')).toBeTruthy(); //checks when there has our location
    console.log(await allstops.length); //counts howmany stops there

    await page.pause() //waiting for check the page
})