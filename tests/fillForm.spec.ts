import { test } from '@playwright/test'
import { MainPage } from '../Pages/main-page';
import { FreightQuote } from '../Pages/freightQuote';

test('Open Coyote URL @smoke',async({ page })=> {

        const mainPage = new MainPage(page)        
        await mainPage.navToCoyoteBaseURL()
        await mainPage.bannerSelection()
        await mainPage.clickQuoteForm()
})

test('filling a form @negative Case- Missing data)',async({ page })=> {

        const mainPage = new MainPage(page)
        const freightQuote = new FreightQuote(page)
        const data = {
            zipcode:'A1A',
            commodity:'fruits',
            weight: '854',
            email: 'cristhiam@test.com'
        }

        await mainPage.navToCoyoteBaseURL()
        await mainPage.bannerSelection()
        await mainPage.clickQuoteForm()

        await freightQuote.shippingFromData(data.zipcode)
        await freightQuote.shippingToData(data.zipcode)
        await freightQuote.typeCommodity(data.commodity)
        await freightQuote.typeWeight(data.weight)
        await freightQuote.typeEmail(data.email)
        await freightQuote.clickOnNxtBtn()
       
})