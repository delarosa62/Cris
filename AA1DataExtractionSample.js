import AA1_Getters_Setters from "../../POM/GettersAndSetters"
import Scenarios from '../../POM/ScenariosHandling'
import WebNavigation from '../../POM/WebNavigation'
import LaunchUrl from '../../POM/LoginPage'


const aa1Web = new WebNavigation()
const LoginPage = new LaunchUrl()
const PageScenarios = new Scenarios()
const AA1 = new AA1_Getters_Setters()

describe('API test ', () => {

    it('dfghdghxxxxxf', () => {
        cy.request({
            method: 'GET',
            url: 'https://valerie-dev.nah-devapps.am.boehringer.com/cohorts/cohort-1'//AA1.aa1_gateway_url,//api_test_time_url,
            /*body: {
                product: 'TEST',
                dos: '30'//,
                //scenarios: '10,250,0,0,0,0'
            },*/
        }).then( (response) => { cy.writeFile('data_valerie.txt', response); /*expect(response.body).to.have.property('product')*/ } )
          .its('status').should('be.equal', 200)
          
        
    })

    it('sggdshhf', () => {
        cy.get('https://valerie-dev.nah-devapps.am.boehringer.com/cohorts/cohort-1')
    })
})
/*
 describe(AA1.TC5_DESC, function() { 

    beforeEach(() => {
        cy.window().then(win => {
    
          // ensure session storage is cleared
          win.sessionStorage.clear();
    
          // set the token
          cy.authenticateUsingToken(win);
        });
      });
 

    it(AA1.TC5_STEP1_DESC, function() {

        //aa1Web.GoToUrl(AA1.aa1_tmp_url)
                 
        
         // .then( (response) => { 

         //     cy.log( response.body )

        //} )


       cy.visit(AA1.aa1_tmp_url)
       cy.wait(40000)
       cy.contains('@').click()
        LoginPage.Pause(5)
        PageScenarios.AddScenario()

        

    })

    it(AA1.TC5_STEP2_DESC, function() {

        PageScenarios.VerifyScenariosAdded(1)

    })

    it(AA1.TC5_STEP3_DESC, function() {

        PageScenarios.AddScenario()

    })

    it(AA1.TC5_STEP3_DESC, function() {

        PageScenarios.VerifyScenariosAdded(2)

    })

    it(AA1.TC5_STEP3_DESC, function() {

        PageScenarios.DeleteScenario()

    })

    it(AA1.TC5_STEP3_DESC, function() {

        PageScenarios.VerifyScenariosAdded(1)

    })

    it(AA1.TC5_STEP3_DESC, function() {

        PageScenarios.DeleteScenario()

    })

    it(AA1.TC5_STEP3_DESC, function() {

        PageScenarios.VerifyScenariosRemoval()

    })

})
 */



