import { Page, expect } from '@playwright/test'

export class PlaceOrder {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async buyOrder() {
        await this.page.getByRole('button', { name: 'New Order' }).first().click()
        await this.page.locator('.root_bw:text("The market is closed. Only pending orders are accepted.")').click()
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('button', { name: 'Place Order' }).click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('.root_d:text("OK")').click()
        await this.page.waitForTimeout(1000)
        await this.page.locator('.root_dx:text("Orders")').click()
    
        const elements = await this.page.$$('#ic_info_button')
        const count = elements.length
        expect.soft(count).toEqual(1)
    
        await this.page.waitForTimeout(1000)
        await this.page.locator('#ic_access_cross').click()
    }
}