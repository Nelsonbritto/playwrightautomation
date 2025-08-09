import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://ui.vision/demo/webtest/frames/");
    await expect(page).toHaveTitle("Frames - Web Automation Test");

    //checks how many frames has one page
    const allframe = await page.frames();
    console.log("allframes: ", allframe.length);

    //handling frames(1st approach)
    //const frame1 = await page.frame().name('enter name here') //use this if frame has name
    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frame1.fill("//form[@id='id1']//input", 'Hi');

    //handling frames(2nd approach)
    const frame2 = await page.frameLocator("frame[src='frame_2.html']").locator("//input[@name='mytext2']");
    await frame2.fill('Hello');

    //handling iframes recursion(frame inside frame(nested frame))
    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    await frame3.fill("//input[@name='mytext3']", 'Nelson Britto')
    const iframe1 = await frame3.childFrames();
    await iframe1[0].click("//div[@id='i9']//div[@class='vd3tt']");

    await page.pause(); //wait and check the inputs
})

//(note: some elements stored inside the frames. go to the frametag then we can access those elements)
//(note: iframe means frames inside the frame(recursion))
