import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://jqueryui.com/draggable/"); //go to the url

    const frame = await page.frame({ url: 'https://jqueryui.com/resources/demos/draggable/default.html' }); //this website has frames so i select the frame

    const src = frame.locator("//p[.='Drag me around']//parent::div"); //find src element
    const location = await src.boundingBox(); //get the source element location
    console.log(`x= ${location.x},y= ${location.y}`); //prints element location (x, y) axis

    await page.mouse.move(location.x, location.y) //move the mouse to the element location
    await page.mouse.down(); // holds the mouse button to the element
    await page.mouse.move(500, 355); //move the mouse to the destination location
    await page.mouse.up(); //release the mouse button


    await page.pause(); //wait and check the inputs
})