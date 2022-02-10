/// <reference types="Cypress"/>

import AA1_Getters_Setters from './GettersAndSetters'

const Plugin = require('../plugins/azure-ad-sso/PluginVariables')

const AA1 = new AA1_Getters_Setters()

class api {

    GetRequestResponse(url, expected_response) {

       cy.request(url).as('api')
       cy.get('@api').its('status').should('be.equal', expected_response)

    }

    GetRequestResponseWithToken(url, method, expected_response) {

        cy.exec(Plugin.GetExportedImportedDataCmd).then ((token) => {

                 cy.request( {
                     method: method,
                     url: url,
                     headers: {
                         authorization:'Bearer ' + token.stdout,
                         "Content-Type": "application/json"
                     }

                 } ).its('status').should('be.equal', expected_response)
 
                })
     }

    PostRequestResponse(url, method, expected_response) {

        cy.request( {
            method: method,
            url: url
        } ).its('status').should('be.equal', expected_response )  
 
     }
 
    SendRequest(url, method, api_property, expected_response) {

        cy.request({
            method: method,
            url: url,
            body: {
                product: AA1.main_product,
                dos: AA1.default_dos,
                scenarios: [{"id": "1", "ccTargetCopay": "50", "ccMaximumBuydown": "150", "evTargetCopay": "15", "evEligibilityFloor": "25", "evEligibilityCeiling": "10", "evMaximumBuydown": "250", "netPrice": "150"}]//AA1.scenario1_list_of_values
            },
        }).then( (response) => { expect(response.body).to.have.property(api_property) } )
          .its('status').should('be.equal', expected_response)  
    }

    SendRequestArrayExpected(url, method, api_property, expected_response) {

        cy.request({
            method: method,
            url: url,
            body: {
                product: AA1.default_product,
                dos: AA1.default_dos,
                scenarios: [{"id": "1", "ccTargetCopay": "50", "ccMaximumBuydown": "150", "evTargetCopay": "15", "evEligibilityFloor": "25", "evEligibilityCeiling": "10", "evMaximumBuydown": "250", "netPrice": "150"}]//AA1.scenario1_list_of_values
            },
        }).then( (response) => { expect(response.body[0]).to.have.property(api_property) } )
          .its('status').should('be.equal', expected_response)  
    }

    SendRequestWithTokenArrayElementExpected(url, method, api_property, expected_response) {

        cy.exec(Plugin.GetExportedImportedDataCmd).then ((token) => {

                cy.request( {
                    method: method,
                    url: url,
                    headers: {
                        authorization:'Bearer ' + token.stdout,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { expect(response.body[0]).to.have.property(api_property) } )
                .its('status').should('be.equal', expected_response)

               })
    }

    SendRequestWithTokenPropertyExpected(url, method, api_property, expected_response) {

        cy.exec(Plugin.GetExportedImportedDataCmd).then ((token) => {

                 cy.request( {
                     method: method,
                     url: url,
                     headers: {
                         authorization:'Bearer ' + token.stdout,
                         "Content-Type": "application/json"
                     }

                 } ).then( (response) => { expect(response.body).to.have.property(api_property) } )
                 .its('status').should('be.equal', expected_response)
 
                })
     }

    GetValUrlTokenIdFromLocalStorage(url) {

        cy.GetValUrlTokenIdFromLocalStorage(url)
    }

    SendCohortIdRequestExpectArray(url, method, cohortId, expected_response) {
        cy.request( {
            method: method,
            url: url + cohortId,
            body: {
                cohort_id: cohortId
             },
        } ).then( (response) => { expect(response.body).to.be.a('array') } )
          .its('status').should('be.equal', expected_response)  
    }

    SendCohortIdRequest(url, method, api_property, cohortId, expected_response) {
        cy.request({
            method: method,
            url: url + cohortId,
            body: {
                cohort_id: cohortId
             },
        }).then( (response) => { expect(response.body).to.have.property(api_property) } )
          .its('status').should('be.equal', expected_response)  


    }
    NTTPersRatePlotValidation() {
        cy.request( {
            method: AA1.api_get_method,
            url: AA1.api_ntt_program_persistence_rate_plot_url,
            body: {
                product: AA1.main_product,
                dos: AA1.default_dos,
                copay: 0
            },
        } ).then( (response) => { expect(response.body).to.be.a('array') } )
          .its('status').should('be.equal', AA1.api_expected_response)  
    }

    NTTOptimizationPlotValidation() {
        cy.request( {
            method: AA1.api_get_method,
            url: AA1.api_ntt_program_optimization_plot_url,
            body: {
                product: AA1.main_product,
                dos: AA1.default_dos,
                objective: AA1.optimization_objective,
                extent: AA1.optimization_extent
            },
        } ).then( (response) => { expect(response.body).to.be.a('array') } )
          .its('status').should('be.equal', AA1.api_expected_response)  
    }

    NTTPlotValidation(url) {

        cy.request( {
            method: AA1.api_get_method,
            url: url,
            body: {
                product: AA1.main_product,
                dos: AA1.default_dos
            },
        } ).then( (response) => { expect(response.body).to.be.a('array') } )
          .its('status').should('be.equal', AA1.api_expected_response)  

    }

    NTTConfigValidation() {

        this.SendRequest(AA1.api_ntt_program_config_url, AA1.api_get_method, AA1.api_config_property, AA1.api_expected_response)
    }

    NTTEvaluateValidation() {

        this.SendRequest(AA1.api_ntt_program_evaluate_url, AA1.api_post_method, AA1.api_config_property, AA1.api_expected_response)
    }

    NTTOptimizationObjValidation() {

        this.SendRequest(AA1.api_ntt_program_optimization_url, AA1.api_get_method, AA1.api_default_property, AA1.api_expected_response)
    }

    NTTOptimizeValidation() {

        this.SendRequestArrayExpected(AA1.api_ntt_program_optimize_url, AA1.api_get_method, AA1.val_token_api_cohorts_property, AA1.api_expected_response)
    }

    NTTProductsValidation() {

        this.SendRequest(AA1.api_ntt_program_products_url, AA1.api_get_method, AA1.api_default_property, AA1.api_expected_response)
    }

    UserValidation() {

        this.SendRequest(AA1.api_user_url, AA1.api_get_method, AA1.api_user_property, AA1.api_expected_response)
    }

    NTTPersistenceCopaysValidation () {

        this.GetRequestResponse(AA1.api_ntt_program_persistence_copays_url, AA1.api_expected_response)
    }

    GETTestValidation() {

        this.GetRequestResponse(AA1.api_test_time_url, AA1.api_expected_response)
    }

    POSTTestValidation() {

        this.PostRequestResponse(AA1.api_test_time_url, AA1.api_post_method, AA1.api_expected_response)
    }

    StateProgramValidation() {

        this.SendRequest(AA1.api_state_program_url, AA1.api_get_method, AA1.api_states_property, AA1.api_expected_response)
        
    }
// Monthly Porjections API Validation

MPEvaluateValidation() {

    this.PostRequestResponse(AA1.api_mp_evaluate_url, AA1.api_post_method, AA1.api_expected_response)

}

MPGenerateReportValidation() {

    this.PostRequestResponse(AA1.api_mp_generate_report_url, AA1.api_post_method, AA1.api_expected_response)

}

// CP Program APIs Validation

    CPPConfigValidation() {

        this.SendRequest(AA1.api_cpp_config_url, AA1.api_get_method, AA1.api_config_property, AA1.api_expected_response)

    }

    CPPGenerateReportValidation() {

        cy.request({

            method: AA1.api_post_method,
            url: AA1.api_cp_generate_report_url,
            body: {
              product: AA1.default_product,
              dos: AA1.default_dos,
              programTerm: [Plugin.ProgTermStartDate, Plugin.ProgTermEndDate],//['2022-7-31','2023-7-31'],
              relayDate: Plugin.RelDatMthDate,
              cohortStartDate: Plugin.EarliestCohortDate,
              cohortPatients: {
                "MAX_COPAY": [
                    0,
                    5,
                    10,
                    15,
                    20,
                    25,
                    30,
                    35,
                    40,
                    45,
                    50,
                    55,
                    60,
                    65,
                    70,
                    75,
                    80,
                    85,
                    90,
                    95,
                    100,
                    125,
                    150,
                    175,
                    200,
                    225,
                    250,
                    275,
                    300,
                    325,
                    350,
                    375,
                    400,
                    425,
                    450,
                    475,
                    500,
                    9999
                ],
                "GF_WO_CC": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    30,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "GF_W_CC": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    290,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
          },
              scenarios: [{"id": "1", "ccTargetCopay": "50", "ccMaximumBuydown": "150", "evTargetCopay": "15", "evEligibilityFloor": "25", "evEligibilityCeiling": "10", "evMaximumBuydown": "250", "netPrice": "150"}]//AA1.scenario1_list_of_values
            },
           
          
          }).then( (response) => { expect(response.body).to.have.property('process_id') } )
          .its('status').should('be.equal', 200)
    }

    CPPProductsValidation() {

        this.SendRequest(AA1.api_cp_products_url, AA1.api_get_method, AA1.api_default_property, AA1.api_expected_response)

    }

    CPPRunProgramValidation() {

        this.PostRequestResponse(AA1.api_cp_run_program_url, AA1.api_post_method, AA1.api_expected_response)

    }

    CPPCohPatHeaderValidation() {

        this.SendRequest(AA1.api_cp_patient_header_url, AA1.api_get_method, AA1.api_headers_property, AA1.api_expected_response)

    }

//======================== Valerie APIs Call ==============================================

    ValGETTestValidation() {

        this.GetRequestResponse(AA1.val_test_time_url, AA1.api_expected_response)
    }

    ValPOSTTestValidation() {

        this.PostRequestResponse(AA1.val_test_time_url, AA1.api_post_method, AA1.api_expected_response)
    }


    ValGETCohortsValidation() {

        this.SendCohortIdRequestExpectArray(AA1.val_cohorts_url, AA1.api_get_method, '', AA1.api_expected_response)

    }

    ValGETCohortsIdValidation() {

        this.SendCohortIdRequest(AA1.val_cohorts_Id_url, AA1.api_get_method, AA1.val_api_total_members_property, AA1.cohortId, AA1.api_expected_response)

    }

    ValGETMembersValidation() {

        this.SendCohortIdRequestExpectArray(AA1.val_members_url, AA1.api_get_method, AA1.cohortId, AA1.api_expected_response)

    }

    ValGETMembersAgeGendDistValidation() {

        this.SendCohortIdRequestExpectArray(AA1.val_members_agegender_url, AA1.api_get_method, AA1.cohortId, AA1.api_expected_response)

    }

    ValGETMembersGLTreatValidation() {

        this.SendCohortIdRequestExpectArray(AA1.val_members_guideline_url, AA1.api_get_method, AA1.cohortId, AA1.api_expected_response)

    }
//========================== Valerie APIs that need Tokens to be pinged ========================

ValGETCohortsValidationWithToken() {

    this.SendRequestWithTokenArrayElementExpected(AA1.val_token_cohorts_url, AA1.api_get_method, AA1.val_token_api_cohorts_property, AA1.api_expected_response)
    
}

ValGETSingleCohortValidationWithToken() {

    this.SendRequestWithTokenArrayElementExpected(AA1.val_token_single_cohort_url, AA1.api_get_method, AA1.val_token_api_single_cohort_property, AA1.api_expected_response)
    
}

ValGETMembersValidationWithToken() {

    this.SendRequestWithTokenArrayElementExpected(AA1.val_token_members_cohort_url, AA1.api_get_method, AA1.val_token_api_members_cohort_property, AA1.api_expected_response)

}

ValGETMembersAgeGendDistValidationWithToken() {

    this.SendRequestWithTokenArrayElementExpected(AA1.val_token_members_agegenderdist_cohort_url, AA1.api_get_method, AA1.val_token_api_members_agegenderdist_property, AA1.api_expected_response)

}

ValGETMembersGLTreatValidationWithToken() {

    this.SendRequestWithTokenArrayElementExpected(AA1.val_token_members_guidelinetrea_cohort_url, AA1.api_get_method, AA1.val_token_api_members_agegenderdist_property, AA1.api_expected_response)

}

ValGETPrecheckValidationWithToken() {

    this.SendRequestWithTokenArrayElementExpected(AA1.val_token_precheck_cohort_url, AA1.api_get_method, AA1.val_token_api_precheck_cohort_property, AA1.api_expected_response)

}

ValGETFnstatusValidationWithToken() {

    this.GetRequestResponseWithToken(AA1.val_token_fnstatus_cohort_url, AA1.api_get_method, AA1.api_expected_response)

}

//This is the method that gets the token from the computer local storage after 
//logging in to the Valerie App via the Amplify Home Page

ValGetTokenFromValLocalStorage() {

    this.GetValUrlTokenIdFromLocalStorage(AA1.val_amplify_url)
}

}

export default api