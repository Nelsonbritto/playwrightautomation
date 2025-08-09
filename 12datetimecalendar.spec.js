import { test, expect } from '@playwright/test'; //import playwright test
test('automation', async ({ page }) => { //write the test name
    test.setTimeout(200000); //set time for it takes more execution time

await page.goto("https://testautomationpractice.blogspot.com/"); //go to the URL
//1st approach
await page.fill("//p[.='Date Picker 1 (mm/dd/yyyy): ']//input", '06/20/1994'); //type the date

//2nd approach
await page.click("//p[.='Date Picker 2  (dd/mm/yyyy) : ']//input"); 
await page.selectOption('.ui-datepicker-month', 'Jun'); //select month
await page.selectOption(".ui-datepicker-year", '2017'); //select year
await page.click("//a[.='16']"); //select date

//3rd approach
await page.locator('#start-date').pressSequentially('06/05/2004',{delay:100}) //using manual keyboard fill for setup start date
await page.locator("#end-date").pressSequentially('08/04/2025'); //type end date
await page.click("//button[@class='submit-btn'][.='Submit']"); //click the button
console.log(await page.locator("//div[@class='result'][@id='result']").textContent()); //prints total dates from start to end

//4th approach
const date = '20'  
const month = 'June' 
const year = 2027;  //set date, month, year
    await page.click("//p[.='Date Picker 1 (mm/dd/yyyy): ']//input") //click the calendar
    var fixedyear = await page.locator(".ui-datepicker-year").textContent(); //store year in variable
     var fixedmonth = await page.locator(".ui-datepicker-month").textContent(); //store month in variable
     if(year > parseInt(fixedyear)) //checks if given year > than  predefined year 
     {
    while(true) //checks if given year > than  predefined year 
    {
        fixedyear = await page.locator(".ui-datepicker-year").textContent(); //all pages years stored in variable
    fixedmonth = await page.locator(".ui-datepicker-month").textContent();  //all pages months stored in variable
            if(parseInt(fixedyear) == year && fixedmonth == month) //if year and month fulfill our expecting
            {
                break; //stop the loop 
            }
            await page.click("//span[.='Next']"); // if condition false click the next page
        }
    }
        if(year < parseInt(fixedyear)) //checks if given year < than  predefined year 
     {
    while(true) //checks if given year > than  predefined year 
    {
        fixedyear = await page.locator(".ui-datepicker-year").textContent(); //all pages years stored in variable
    fixedmonth = await page.locator(".ui-datepicker-month").textContent(); //all pages months stored in variable
            if(parseInt(fixedyear) == year && fixedmonth == month) //if year and month fulfill our expecting
            {
                break; //stop the loop 
            }
            await page.click("//span[.='Prev']"); // if condition false click the next page
        } 
}
const alldates = await page.$$(".ui-datepicker-calendar td a"); //all month and year fixed then we come to dates
for(let x of alldates) //get all dates and stored to variable x using for of method
{
    if(await x.textContent() == date) //if if predefined date and expected be same
    {
        await x.click(); //click the date from the calendar
    }
}


await page.pause(); //waiting for check the page
})