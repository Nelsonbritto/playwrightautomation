import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    //test.setTimeout(200000); //set time for it takes more execution time

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");

    //handling simple alert(clicks ok)
    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click("//button[.='Simple Alert']");
    

    //handling confirm alert(clicks ok or cancel)
    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })
    await page.click("//button[.='Confirmation Alert']");
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
     
    //handling prompt alert(enter some text then click ok)
    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Nelson Britto');
    })
    await page.click("//button[.='Prompt Alert']");
    await expect(await page.locator("#demo").textContent()).toBe("Hello Nelson Britto! How are you today?");

    await page.pause(); //wait and check the inputs

})

//(note: alerts or dialogs or popups --> people call it differently but it all has same meaning
//(note: almost playwright handles these alerts itself. but sometimes when we need to handle it we can use above methods )