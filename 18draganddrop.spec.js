import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://jqueryui.com/droppable/") //go to the url

    const frame = await page.frame({ url: 'https://jqueryui.com/resources/demos/droppable/default.html' }); //this website has frames so i select the frame

    //1st approach(drag and drop)
    const src = await frame.locator("//p[.='Drag me to my target']//parent::div"); //get the source locator
    const dest = await frame.locator("//p[.='Drop here']//parent::div"); //get the destination locator

    await src.dragTo(dest); //do dragging action

    //2nd approach (drag and drop)
    await src.hover(); //using hover method to move the mouse to source element
    await page.mouse.down(); //press leftclick button to catch the element
    await dest.hover(); //move the mouse to destination element
    await page.mouse.up(); //release the button and element to the destination

    await page.pause(); //wait and check the inputs
})