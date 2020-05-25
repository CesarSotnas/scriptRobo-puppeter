const puppeteer = require("puppeteer");

console.log("Bem vindo ao Bot conversor");


async function dolar(){ 
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  const qualquerUrl = "https://www.google.com/search?q=dolar+pra+real&oq=dolar+pra+real&aqs=chrome..69i57.4440j0j4&sourceid=chrome&ie=UTF-8";
  await page.goto(qualquerUrl);
  await page.screenshot({path: 'dolar.png'});

  await browser.close();
}

async function euro(){ 
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    const qualquerUrl = "https://www.google.com/search?sxsrf=ALeKk01yMJ2I8g9ubsmNw3cG_Brnc3RQNA%3A1590264802594&ei=4oPJXoHjI5C45OUP-oOtsA0&q=euro+para+real&oq=euro+para+real&gs_lcp=CgZwc3ktYWIQAzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQR1AAWABgxY8CaABwAXgAgAEAiAEAkgEAmAEAqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiB3KCF5srpAhUQHLkGHfpBC9YQ4dUDCAw&uact=5";
    await page.goto(qualquerUrl);
    await page.screenshot({path: 'euro.png'});
  
    await browser.close();
  }

async function data(){ 
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    const horaAtual = "https://www.google.com/search?q=hora+atual&oq=hora+atual&aqs=chrome..69i57.2526j0j9&sourceid=chrome&ie=UTF-8";
    await page.goto(horaAtual);
    await page.screenshot({path: 'hora.png'});
  
    await browser.close();
  }

dolar();
euro();
data();