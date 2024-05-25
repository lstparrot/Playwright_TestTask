import { test } from '@playwright/test'
import { LandingPage } from '../pages/landingPage'
import { PlaceOrder } from '../pages/mainPage'
import { browserConfig } from '../browserConfig'




let mainPage //If necessary, can be used for browser configuration

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext(browserConfig)
    mainPage = await context.newPage()
})


test('Position create', async ({ page }) => {
    const placeOrder = new PlaceOrder(page)
    const landingPage = new LandingPage(page)
    await landingPage.webPage(page)
    await landingPage.login('', '') //Need to specify test creds (email, pass)
    await placeOrder.buyOrder()
})


test.afterAll(async ({ browser }) => {
  await browser.close()
})