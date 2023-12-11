const puppeteer = require('puppeteer');
let pageIntialTitle =  ''

let scrape = async () => {

  for (let k=1; k<=36; k++){

    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] });
    const page = await browser.newPage();

    await page.goto('http://rentcarcuba.com/');

    await page.waitForSelector('#enable_analitics');
    await page.evaluate(() => {
        document.querySelector('#enable_analitics').click();
    });

    await delay(5000)

    if (pageIntialTitle === '') { pageIntialTitle =  await page.title() }

    await ClickButton(page, '#form_container > div > button.close_form', 1)

    await ClickButton(page, '#select2-destination-container', 1)
    await page.keyboard.type('Santiago de Cuba');
    await delay(1000)
    await page.keyboard.press('Enter');

    await ClickButton(page, '#select2-collect_place-container > span', 1)
    await page.keyboard.type('AEROPUERTO A.MACEO');
    await delay(1000)
    await page.keyboard.press('Enter');
    await delay(1000)

    await ClickButton(page, '#select2-delivery_place-container > span', 1)
    await page.keyboard.type('casa granda');
    await delay(2000)
    await page.keyboard.press('Enter');
    await delay(1000)

    await ClickButton(page, '#select2-category-container > span', 1)
    await page.keyboard.type('Eco');
    await delay(1000)
    await page.keyboard.press('Enter');
    await delay(1000)

    await page.keyboard.press('Tab');
    await delay(1000)

    await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(29)', 1)
    
    await page.keyboard.press('Tab');
    await delay(1000)

    await page.keyboard.press('Enter');
    await delay(1000)

    await page.keyboard.press('Tab');
    await delay(1000)

    await page.keyboard.press('Enter');
    await delay(1000)

    await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-months > span.flatpickr-next-month > svg', 1)
    await delay(1000)

    await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(11)', 1)

    let resForm = ''

        if (pageIntialTitle = await page.title()) {

            resForm = 'Still in the same page'
        } else {
      
            resForm = ''
        }

        if(resForm === ''){
            browser.close()
            break;
        }

        else{

            r = k%2

            if (r > 0 ){

                if (k%3 === 0){
                    r = 1
                }

                else if (k%5 === 0) {

                    r = 2
                }

                else {
                    r = 3
                }
                
            }

            if(k === 1){
                r = 1
            }

           await ClickButton(page, '#select2-category-container', 1)

            await page.keyboard.press('Tab');
            await delay(1000)

            await page.keyboard.press('Tab');
            await delay(1000)

            switch(r) {

                case 0:

                  await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(29)', 1)
                  await ClickButton(page, '#select2-collect_place-container', 1)
                  await page.keyboard.type('AEROPUERTO A.MACEO');
                  await delay(1000)
                  await page.keyboard.press('Enter');
                  await delay(1000)
                  break;

                case 1:

                  await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(28)', 1)
                  await ClickButton(page, '#select2-collect_place-container', 1)
                  await page.keyboard.type('CASA GRANDA');
                  await delay(1000)
                  await page.keyboard.press('Enter');
                  await delay(1000)
                  break
                
                case 2:

                  await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(27)', 1)
                  await ClickButton(page, '#select2-collect_place-container', 1)
                  await page.keyboard.type('LAS AMERICAS');
                  await delay(1000)
                  await page.keyboard.press('Enter');
                  await delay(1000)
                  break;

                default:

                  await ClickButton(page, 'body > div.flatpickr-calendar.animate.open.arrowBottom.arrowLeft > div.flatpickr-innerContainer > div > div.flatpickr-days > div > span:nth-child(26)', 1)
                  await ClickButton(page, '#select2-collect_place-container', 1)
                  await page.keyboard.type('MELIA SANTIAGO');
                  await delay(1000)
                  await page.keyboard.press('Enter');
                  await delay(1000)
                  break;
              }

        }

        await ClickButton(page, '#excursion_btn', 1)

        await delay(60000)

        if(pageIntialTitle !==  await page.title()){
            break;
        }
        browser.close()

        await delay(300000)
    }
console.log('Done!!')
};

async function ClickButton(page, csselector, NumberOfClicks) {

    for(let i = 0; i < NumberOfClicks; i++) {

        await Promise.all([
          await page.click(csselector)
        ] )

     }

     await delay(1000)

}
async function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
scrape();