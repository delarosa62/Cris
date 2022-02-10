/// <reference types="Cypress"/>

import AA1_Getters_Setters from './GettersAndSetters'
import WebNavigation from './WebNavigation'

const AA1 = new AA1_Getters_Setters()
const aa1Web = new WebNavigation()

class LoginPage {

    LaunchUrl() {

        aa1Web.GoToUrl(AA1.aa1_url)
        aa1Web.VerifyPageTitle()
    }

    ClickLoginPageButton() {

        aa1Web.ClickButton(AA1.login_page_button)

    }

    ClickAddButton() {



    }

    ClickDeleteButton() {

    }

    ClickResetButton() {
        
    }

    ClickEvaluateButton() {

        aa1Web.ClickButton(AA1.evaluate_button)
        this.Pause(5)

    }

    LoginUsingThisPasswd(passwd) {

        aa1Web.PopulateField(AA1.aa1_user_field_id, AA1.aa1_userId)
        aa1Web.PopulateField(AA1.aa1_passwd_field_id, passwd)
        aa1Web.ClickButton(AA1.aa1_login_button)

    }

    VerifyLogin(passwd, validation_msg) {

        this.LoginUsingThisPasswd(passwd)
        aa1Web.VerifyPageMessage(validation_msg)
        this.Pause(1)

    }


    VerifyInvalidCredentials() {

        this.VerifyLogin(AA1.aa1_invalid_passwd, AA1.invalid_credentials_error_msg)
        aa1Web.PageBack()
        this.Pause(1)
        this.ClickLoginPageButton()
    }


    VerifyValidCredentials() {

        this.VerifyLogin(AA1.aa1_valid_passwd, AA1.valid_credentials_msg)

    }

    SelectProduct() {

        aa1Web.SelectDropDownItem(AA1.product_drop_down_id, AA1.default_product)

    }

    SelectDOS() {

        aa1Web.SelectDropDownItem(AA1.dos_drop_down_id, AA1.default_dos)

    }

  
    MatchFieldValue(field_id, value) {

        cy.get(field_id).should('have.value', value)

    }

    TypeFieldEntry(field_id, value) {

        cy.get(field_id).type(value)

    }

    Pause(NumberOfSeconds) {

        cy.wait(NumberOfSeconds * 1000)

    }

}

export default LoginPage