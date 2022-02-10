/// <reference types="Cypress"/>

import AA1_Getters_Setters from './GettersAndSetters'
import LoginPage from './LoginPage'
import WebNavigation from './WebNavigation'

const AA1 = new AA1_Getters_Setters()
const ScenPage = new LoginPage()
const aa1Web = new WebNavigation()

class Scenarios {

 current_scen = ''

 AddScenario() {

    aa1Web.ClickButton(AA1.add_button)

 }

 DeleteScenario() {

    aa1Web.ClickButton(AA1.delete_link)

 } 

 VerifyScenariosAdded(NumberOfScenarios) {

    cy.get(AA1.delete_link).should('have.length', NumberOfScenarios)

 }

 VerifyScenariosRemoval() {

    aa1Web.VerifyStringNotInPage(AA1.delete_link)

 }
 PopulateFields(scen_values, scen_no) {

        scen_values = scen_values.split(',')

        for(let param_pos=AA1.min_number_of_params; param_pos<AA1.max_number_of_params+1; param_pos++) {

            this.current_scen = AA1.id_scen_string + scen_no + AA1.input_tmp + param_pos + ']'

            this.InsertAndValidate(this.current_scen, scen_values[param_pos])

        }
   }

   InsertAndValidate(current_scenario_id, current_value) {

       ScenPage.TypeFieldEntry(current_scenario_id, current_value)
       ScenPage.MatchFieldValue(current_scenario_id, current_value)
       ScenPage.Pause(1)

   }

}

export default Scenarios