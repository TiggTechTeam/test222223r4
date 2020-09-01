const puppeteer = require('puppeteer');
const username= 'golftesterdude@gmail.com'
const password= 'Golfer2021' 

let browser = null;
let page = null; 


(async () => {
    browser = await puppeteer.launch({headless: false});

    page = await browser.newPage();

    page.setViewport({
        width: 1200,
        height: 800 ,
        isMobile: false
    });

    await page.goto('https://de-de.facebook.com/', {waitUntil: 'networkidle2'});
    await page.waitFor(3000)
    await page.type('input[name="email"]', username, {delay: 25});
    await page.waitFor(1000)
    await page.type('input[name="pass"]', password, {delay: 25});
    await page.waitFor(3000)
    await page.click('button[name="login"]')
    await page.waitFor(3000)

    //for loop ---- > run throught the 5 diffent groups 
    
    await page.goto('https://www.facebook.com/groups/337129370354855/', {waitUntil: 'networkidle2'}); //< ------- the Facebook Group link need to dynamic and must be handeled the for examaple 5 Groups
    await page.waitFor(5000)
    await page.click('div[class="_5rpb"]')
    await page.type('div[id=class="_1p1t _1p1u"]', "TEST Stufff !!!!!");

    // wait a random time 1< hour between the two group post 




 /*    await page.keyboard.press('Tab')
    await page.waitFor(3000)

    await page.keyboard.press('Enter')
    await page.waitFor(5000)

    await page.type('input[class="_1frb"]', "Test group")
    await page.keyboard.press('Enter')
    await page.waitFor(3000)
     */










})();