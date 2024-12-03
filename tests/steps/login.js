const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const {chromium} = require('@playwright/test')

let browser;
let page;
setDefaultTimeout(60000);

Given('providing valid url', async function(){

    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When('providing valid username and password', async function(){

    await page.locator("//input[@placeholder='username']").fill('Admin')
    await page.locator("//input[@placeholder='password']").fill('admin123')
})

Then('clicking login button', async function(){

    await page.locator("//button[normalize-space()='Login']").click()
    await page.close()
    await browser.close()
}) 

When('providing valid username as {string} and password as {string}', async function(name, password){

    await page.locator("//input[@placeholder='username']").fill(name)
    await page.locator("//input[@placeholder='password']").fill(password)
})