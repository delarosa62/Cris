/// <reference types="Cypress"/>

import AA1_Getters_Setters from './GettersAndSetters'

const AA1 = new AA1_Getters_Setters()

class WebNavigation {

    GoToUrl(current_url) {
        
        cy.visit(current_url)
        return this

    }

    VerifyPageTitle() {

        cy.title().should('eq', AA1.page_title)
        return this
    }

    VerifyPageMessage(msg) {

        cy.contains(msg + '')
        return this
    }

    VerifyStringNotInPage(str) {

        cy.get(str + '').should('not.exist')
    }

    PageBack() {

        cy.go('back')
        return this
    }

    PageRefresh() {

        cy.reload()
        return this
    }

    PopulateField(field_id, field_entry) {

        cy.get(field_id).type(field_entry, { force: true} )
        return this

    }

    SelectDropDownItem(drop_down_id, option_name) {

        cy.get(drop_down_id).click()
        cy.contains(option_name + '').click({ force: true })

    }

    ClickButton(button_name) {
        
        cy.contains(button_name + '').click()

    }

    ClickOnElement(selector) {
    
        cy.get(selector).click()
    }

    VerifyElementValue(selector, value) {
    
        cy.get(selector).contains(value)
    }

    ValidateTextShownInToolTip(chart_selector, tooltip_selector, value) {

        this.ClickOnElement(chart_selector)
        this.VerifyElementValue(tooltip_selector, value)

    }
}

export default WebNavigation