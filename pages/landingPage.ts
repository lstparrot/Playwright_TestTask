import { Page } from '@playwright/test'

export class LandingPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async webPage(page){
        await page.goto('https://app.ctrader.com/')
    }

    async login(email: string, password: string) {
        await this.page.getByRole('button', { name: 'Log In' }).click()
        await this.page.waitForTimeout(2000)
        await this.page.locator('.root_a:text("Log In")').nth(1).click()
        await this.page.locator('input[placeholder="Enter your email or cTrader ID"]').fill(email)
        await this.page.locator('input[placeholder="Enter your password"]').fill(password)
        await this.page.locator('button[type="submit"]:has-text("Log In")').click()
        await this.page.waitForTimeout(5000)
    }
}