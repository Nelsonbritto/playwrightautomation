import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://www.flipkart.com/mobile-phones-store?param=4111&fm=neo%2Fmerchandising&iid=M_6b2199a1-33aa-44c4-b044-dd34e4247284_2_X1NCR146KC29_MC.AH1NTIJZ241Z&otracker=hp_rich_navigation_2_2.navigationCard.RICH_NAVIGATION_Mobiles%2B%26%2BTablets_AH1NTIJZ241Z&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=AH1NTIJZ241Z");

    const src = await page.locator("//div[@class='PYKUdo']//parent::div[@class='iToJ4v Kaqq1s']//div"); //find the slider left end
    const srclocate = await src.boundingBox(); //store the element location axis(x,y) 
    console.log(`x= ${srclocate.x}, y= ${srclocate.y}`); //print the element axis
    await page.waitForTimeout(3000); //wait for 3ms for do mouseover action
    await page.mouse.move(srclocate.x, srclocate.y); //move the mouse arrow to the slider left end
    await page.waitForTimeout(3000); //wait for 3ms for next action
    await page.mouse.down(); //holds the mouse left button
    await page.waitForTimeout(3000); //wait for 3ms for next action
    await page.mouse.move(srclocate.x + 48, srclocate.y); //move the slider left end 48mm from x axis
    await page.waitForTimeout(3000); ////wait for 3ms for next action
    await page.mouse.up(); //release the mouse
    await page.waitForTimeout(3000); //wait for 3ms for next action

    const price = await page.locator("//div[@class='suthUA']//option[2]").textContent(); //go to the element when slider moves and choose the correct value
    console.log(`price: ${price}`); //print the actual value of slider moves

    await page.pause(); //wait and check the inputs
})