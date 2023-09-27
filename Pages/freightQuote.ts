import { Page } from "@playwright/test";
import {PlaywrightWrapper} from "../wrapper/PlaywrightWrapper"

export class FreightQuote{

    private base: PlaywrightWrapper;

    constructor(private page: Page){
        this.page = page
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        pickUpLocation: "(//input[@class='medium ui-autocomplete-input'])[1]",
        pickUpDate: "ui-datepicker-trigger",
        deliveryLocation: "(//input[@class='medium ui-autocomplete-input'])[2]",
        commodity: "(//label[text()='Commodity']/following::input)[1]",
        totalWeight: "(//label[text()='Total Weight']/following::input)[1]",
        emailAddress: "(//div[@class='ginput_container ginput_container_email']//input)[1]",
        nxtBtn: "//*[@id='gform_next_button_32_22']",        
        errorMessage: "//div[@class='gform_validation_errors validation_error']"
    }

    async shippingFromData(zipCode: string){

        await this.page.locator(this.Elements.pickUpLocation).click();
        await this.page.waitForLoadState();
        await this.page.type(this.Elements.pickUpLocation, zipCode, { delay: 50});
        
    }

    async shippingToData(zipcode: string){

        await this.page.locator(this.Elements.deliveryLocation).click;
        await this.page.type(this.Elements.deliveryLocation, zipcode, { delay: 50} )

    }
    
    async typeCommodity(commodity: string){

        await this.page.click(this.Elements.commodity);
        await this.page.type(this.Elements.commodity, commodity, { delay: 50})       

    }

    async typeWeight(weight: string){
        
        await this.page.locator(this.Elements.totalWeight).click;
        await this.page.type(this.Elements.totalWeight, weight, { delay: 50});

    }

    async typeEmail(email: string){

        await this.page.locator(this.Elements.emailAddress).click;
        console.log(email);
        await this.page.type(this.Elements.emailAddress, email, { delay: 50});

    }

    async clickOnNxtBtn(){

        await this.base.waitAndClick(this.Elements.nxtBtn);
        
        const errorMessage = await this.page.locator(this.Elements.errorMessage).textContent();
        console.log(errorMessage);

    }

}