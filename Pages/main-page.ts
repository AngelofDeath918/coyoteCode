import { Page } from '@playwright/test'

export class MainPage{

    readonly page: Page   

    constructor (page: Page){
        this.page = page
    }

    //Navigation
    async navToCoyoteBaseURL(){
        await this.page.goto("https://pantheondev.coyote.com/")
        await this.page.waitForLoadState()
        await this.page.mouse.wheel(200, 200);
    }

    async bannerSelection(){

        await this.page.getByText('Welcome to Coyote Logistics - North America').click();
        await this.page.getByRole('link', { name: 'North America' }).click();      
        
    }

    async clickQuoteForm(){
        
        await this.page.mouse.wheel(200, 200);
        await this.page.waitForLoadState();
        await this.page.getByRole('button', { name: 'Request a Freight Quote' }).click();
       
    }

}