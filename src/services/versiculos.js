//aqui ele pegará os versiculos e passara para o bot
const pup = require('puppeteer')

async function Versiculo(){
    const browser = await pup.launch({
        headless: false
    })

    const page = await browser.newPage()

    await page.goto("https://www.bibliaonline.com.br/acf")
    console.log('✔ Site aberto')


    const verse = await page.$eval(
    ".t",
    el => el.textContent
    );

    const cap = await page.$$eval("p", cap => cap.map(el => el.textContent)
    );

    console.log("✔ versiculo pego")

    await browser.close();

    console.log('✔ armazenando versiculo')

    return {
        cap: cap[1],
        verse
    };

}

module.exports = {
    Versiculo
};