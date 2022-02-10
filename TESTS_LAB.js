import AA1_Getters_Setters from '../../POM/GettersAndSetters'
import DataProcessing from '../../POM/DataProcessing'
import LaunchUrl from '../../POM/LoginPage'
import Scenarios from '../../POM/ScenariosHandling'
import api from '../../POM/APIRequests'
import AccessSolutionsSingleSignOn from '../../POM/AccessSolutions'

const AS = new AccessSolutionsSingleSignOn()
const AA1 = new AA1_Getters_Setters()
const PageTable  = new DataProcessing()
const LoginPage = new LaunchUrl()
const PageScenarios = new Scenarios()
const API = new api()

afterEach(() => {
    LoginPage.Pause(5)
})

describe('PEGASUS TRIAL PROFILES', function(){

    it('STEP 1. Get List of Current Profiles with Benchmark Trials', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'PUT',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile_list',
            body: {
                "id_trial":171794, 
                "is_benchmark": true
                }
        }).then( (response) => { })

        .its('status').should('be.equal', 200)

        cy.log('====== Request sent')
    })

    it('STEP 1. Get List of Current Profiles with Benchmark Trials', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'GET',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile_list',
            body: {
                "trial_profile": {
                "bi_compound": "XXXXXX",
                "study_moa": "study moa",
                "study_number": "NT-331126",
                "investigator_speciality": "speciality...",
                "sites_count": 15,
                "key_exclusions": "some excl.",
                "priority_countries": "priority countries ...",
                "final_tdo_date": "2023-10-21",
                "key_inclusions": "some incl.",
                "tdo_kickoff_date": "2023-11-21",
                "max_age": 88,
                "last_patient_randomized_date": "2022-10-21",
                "study_name": "Condition NT-006 trial",
                "min_age": 18,
                "first_patient_randomized_date": "2021-10-20",
                "phase": "I",
                "estimated_er": 1,
                "final_protocol_date": "2024-10-20",
                "relevant_ref_trials": "",
                "study_roa": "study roa---",
                "patients_randomized_count": 188,
                "randomization_duration": 56,
                "study_design": "study on....",
                "indication": "some indication",
                "therapeutic_area": "LMR",
                "regions_to_evaluate": "regions to evaluate...",
                "patient_population": "Population",
                "site_procedural_equipments": "site procedural equipments...",
                "treatment_period": 5,
                "first_initiation_visit_date": "2021-10-20",
                "gfs" : "user name"
                }
                }
        }).then( (response) => 
                            { 
                              
                              for(let i=0; i < response.body.length; i++) {

                                  //if (response.body[i]['id'] === 34) {
let study_number = response.body[i]['study_number']
                                    cy.request({
                                        method: 'GET',
                                        url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile/' + response.body[i].id + '/trials?benchmark=false'
                                    }).then( (response) => {
                                        
            /*for(var key in response.body[0]) {

                cy.log('Current Key-> ' + key)

            }*/
            cy.log('Number of Benchmark Trials: ' + response.body.length)
            for(let i=0; i < response.body.length; i++) {

                let nct = response.body[i]['nctid']
                let ttid = response.body[i]['trialid']

                cy.log('study number, nct & ttid ----> ' + study_number + ') ' + nct + ' - ' + ttid)

            }
                                    })

                                  //}

                              }

                            } 
                 )

        .its('status').should('be.equal', 200)

        cy.log('====== Request sent')

        //****LoginPage.LaunchUrl()

    })

    /*it('STEP 1. Get List of Current Profiles & some of their properties', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'GET',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile_list',
            body: {
                "trial_profile": {
                "bi_compound": "XXXXXX",
                "study_moa": "study moa",
                "study_number": "NT-331126",
                "investigator_speciality": "speciality...",
                "sites_count": 15,
                "key_exclusions": "some excl.",
                "priority_countries": "priority countries ...",
                "final_tdo_date": "2023-10-21",
                "key_inclusions": "some incl.",
                "tdo_kickoff_date": "2023-11-21",
                "max_age": 88,
                "last_patient_randomized_date": "2022-10-21",
                "study_name": "Condition NT-006 trial",
                "min_age": 18,
                "first_patient_randomized_date": "2021-10-20",
                "phase": "I",
                "estimated_er": 1,
                "final_protocol_date": "2024-10-20",
                "relevant_ref_trials": "",
                "study_roa": "study roa---",
                "patients_randomized_count": 188,
                "randomization_duration": 56,
                "study_design": "study on....",
                "indication": "some indication",
                "therapeutic_area": "LMR",
                "regions_to_evaluate": "regions to evaluate...",
                "patient_population": "Population",
                "site_procedural_equipments": "site procedural equipments...",
                "treatment_period": 5,
                "first_initiation_visit_date": "2021-10-20",
                "gfs" : "user name"
                }
                }
        }).then( (response) => 
                            { 
                              cy.log('Trial Profile Names:')
                              
                              for(let i=0; i < response.body.length; i++) {

                                cy.log(' => ' + i + ') BI Compound: ' + response.body[i]['bi_compound'])
                                cy.log('      ******** Study Number: ' + response.body[i]['study_number'])
                                cy.log('      ******** Indication: ' + response.body[i]['indication'])
                                cy.log('      ******** Therapeuric Area: ' + response.body[i]['therapeutic_area'])
                                cy.log('      ******** Body response ' + response.body[i].id)

                              }
                              
                              expect(response.body[0]).to.have.property('indication') 
                            } 
                 )

        .its('status').should('be.equal', 200)

        cy.log('====== Request sent')

        //****LoginPage.LaunchUrl()

    })
    it('STEP 2. Update the trial profile created in Step 2.', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'PUT',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile',
            body: {
                "trial_profile": {
                "id": 1,
                "bi_compound": "CHANGED AGAIN 123 sfdffhjfd.",
                "study_moa": "study moa",
                "study_number": "NT-55587",
                "investigator_speciality": "speciality...",
                "sites_count": 14,
                "key_exclusions": "some excl.",
                "priority_countries": "priority countries ...",
                "final_tdo_date": "2023-10-23",
                "key_inclusions": "some incl.",
                "tdo_kickoff_date": "2023-11-21",
                "max_age": 88,
                "last_patient_randomized_date": "2022-10-21",
                "study_name": "Condition NT-001 trial",
                "min_age": 18,
                "first_patient_randomized_date": "2021-10-20",
                "phase": "I",
                "estimated_er": 1,
                "final_protocol_date": "2024-10-20",
                "relevant_ref_trials": "",
                "study_roa": "study roa---",
                "patients_randomized_count": 188,
                "randomization_duration": 56,
                "study_design": "study on....",
                "indication": "some indication....",
                "therapeutic_area": "LMRxxxxxxx",
                "regions_to_evaluate": "regions to evaluate...",
                "patient_population": "Population",
                "site_procedural_equipments": "site procedural equipments...",
                "treatment_period": 5,
                "first_initiation_visit_date": "2021-10-20",
                "gfs" : "user name" }
                }
        }).then( (response) => 
                            {
                                cy.log(' => Updating Trial Profile......' )

                            } 
                ).its('status').should('be.equal', 200)

        cy.log('====== Request sent')

    })

    it('STEP 3. Get List of Profiles including the updated properties in Step 2 and Verify Update.', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'GET',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile_list',
            body: {
                "trial_profile": {
                "bi_compound": "XXXXXX",
                "study_moa": "study moa",
                "study_number": "NT-331126",
                "investigator_speciality": "speciality...",
                "sites_count": 15,
                "key_exclusions": "some excl.",
                "priority_countries": "priority countries ...",
                "final_tdo_date": "2023-10-21",
                "key_inclusions": "some incl.",
                "tdo_kickoff_date": "2023-11-21",
                "max_age": 88,
                "last_patient_randomized_date": "2022-10-21",
                "study_name": "Condition NT-006 trial",
                "min_age": 18,
                "first_patient_randomized_date": "2021-10-20",
                "phase": "I",
                "estimated_er": 1,
                "final_protocol_date": "2024-10-20",
                "relevant_ref_trials": "",
                "study_roa": "study roa---",
                "patients_randomized_count": 188,
                "randomization_duration": 56,
                "study_design": "study on....",
                "indication": "some indication",
                "therapeutic_area": "LMR",
                "regions_to_evaluate": "regions to evaluate...",
                "patient_population": "Population",
                "site_procedural_equipments": "site procedural equipments...",
                "treatment_period": 5,
                "first_initiation_visit_date": "2021-10-20",
                "gfs" : "user name"
                }
                }
        }).then( (response) => 
                            { 
                              cy.log('Trial Profile Names:')
                              
                              for(let i=0; i < response.body.length; i++) {

                                cy.log(' => ' + i + ') BI Compound: ' + response.body[i]['bi_compound'])
                                cy.log('    ******** Study Number: ' + response.body[i]['study_number'])
                                cy.log('    ******** Indication: ' + response.body[i]['indication'])
                                cy.log('    ******** Therapeuric Area: ' + response.body[i]['therapeutic_area'])

                              }
                              
                              expect(response.body[2]).to.have.property('indication') 
                            } 
                 )

        .its('status').should('be.equal', 200)

        cy.log('====== Request sent')

    })

    it('STEP 4. Create a new  Profile', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'POST',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile',
            body: {
                "trial_profile": {
                "bi_compound": "XXXXXX Cris-" + Date.now(),
                "study_moa": "study moa",
                "study_number": "NT-3311267" + Date.now(),
                "investigator_speciality": "speciality...",
                "sites_count": 15,
                "key_exclusions": "some excl.",
                "priority_countries": "priority countries ...",
                "final_tdo_date": "2023-10-21",
                "key_inclusions": "some incl.",
                "tdo_kickoff_date": "2023-11-21",
                "max_age": 88,
                "last_patient_randomized_date": "2022-10-21",
                "study_name": "Condition NT-006 trial",
                "min_age": 18,
                "first_patient_randomized_date": "2021-10-20",
                "phase": "I",
                "estimated_er": 1,
                "final_protocol_date": "2024-10-20",
                "relevant_ref_trials": "",
                "study_roa": "study roa---",
                "patients_randomized_count": 188,
                "randomization_duration": 56,
                "study_design": "study on....",
                "indication": "some indication",
                "therapeutic_area": "LMR",
                "regions_to_evaluate": "regions to evaluate...",
                "patient_population": "Population",
                "site_procedural_equipments": "site procedural equipments...",
                "treatment_period": 5,
                "first_initiation_visit_date": "2021-10-20",
                "gfs" : "user name"
                }
                }
        }).then( (response) => 
                            {
                              cy.log(response.body.length)
                            } 
                 )

        .its('status').should('be.equal', 200)

        cy.log('====== Request sent')

    })

    it('STEP 5. Get List of Profiles including the profile created in Step 4', function() {

        cy.log('=============sending request')
        cy.request({
            method: 'GET',
            url: 'https://buwq6fps6d.execute-api.eu-west-1.amazonaws.com/dev/trial_profile_list',
            body: {
                "trial_profile": {
                "bi_compound": "XXXXXX",
                "study_moa": "study moa",
                "study_number": "NT-331126",
                "investigator_speciality": "speciality...",
                "sites_count": 15,
                "key_exclusions": "some excl.",
                "priority_countries": "priority countries ...",
                "final_tdo_date": "2023-10-21",
                "key_inclusions": "some incl.",
                "tdo_kickoff_date": "2023-11-21",
                "max_age": 88,
                "last_patient_randomized_date": "2022-10-21",
                "study_name": "Condition NT-006 trial",
                "min_age": 18,
                "first_patient_randomized_date": "2021-10-20",
                "phase": "I",
                "estimated_er": 1,
                "final_protocol_date": "2024-10-20",
                "relevant_ref_trials": "",
                "study_roa": "study roa---",
                "patients_randomized_count": 188,
                "randomization_duration": 56,
                "study_design": "study on....",
                "indication": "some indication",
                "therapeutic_area": "LMR",
                "regions_to_evaluate": "regions to evaluate...",
                "patient_population": "Population",
                "site_procedural_equipments": "site procedural equipments...",
                "treatment_period": 5,
                "first_initiation_visit_date": "2021-10-20",
                "gfs" : "user name"
                }
                }
        }).then( (response) => 
                            { 
                              cy.log('Trial Profile Names:')
                              
                              for(let i=0; i < response.body.length; i++) {

                                cy.log(' => ' + i + ') ' + response.body[i]['bi_compound'] )

                              }
                              
                              expect(response.body[2]).to.have.property('indication') 
                            } 
                 )

        .its('status').should('be.equal', 200)

        cy.log('====== Request sent')

    })*/

    /*it(AA1.TC1_STEP2_DESC, function() {

        LoginPage.ClickLoginPageButton()

    })

    it(AA1.TC1_STEP3_DESC, function() {

        LoginPage.VerifyInvalidCredentials()

    })

    it(AA1.TC1_STEP4_DESC, function() {

        LoginPage.VerifyValidCredentials()

    })*/

})

/*describe(AA1.TC2_DESC, function() {

    it(AA1.TC2_STEP1_DESC, function() {

        LoginPage.SelectProduct()

    })

    it(AA1.TC2_STEP2_DESC, function() {

        LoginPage.SelectDOS()

    })
})

describe(AA1.TC3_DESC, function() { 

    it(AA1.TC3_STEP1_DESC, function() {

        PageScenarios.PopulateFields(AA1.scenario1_list_of_values, AA1.scen1)

    })

    it(AA1.TC3_STEP2_DESC, function() {

        PageScenarios.PopulateFields(AA1.scenario2_list_of_values, AA1.scen2)

    })

    it(AA1.TC3_STEP3_DESC, function() {

        PageScenarios.PopulateFields(AA1.scenario3_list_of_values, AA1.scen3)

    })

    it(AA1.TC3_STEP4_DESC, function() {

        PageScenarios.PopulateFields(AA1.scenario4_list_of_values, AA1.scen4)

    })

    it(AA1.TC3_STEP5_DESC, function() {

        PageScenarios.PopulateFields(AA1.scenario5_list_of_values, AA1.scen5)

    })

    it(AA1.TC3_STEP6_DESC, function() {

        PageScenarios.PopulateFields(AA1.scenario6_list_of_values, AA1.scen6)

    })

})

describe(AA1.TC4_DESC, function() {

    it(AA1.TC4_STEP1_DESC, function() {

      LoginPage.ClickEvaluateButton()

    })

    it(AA1.TC4_STEP2_DESC, function() {

       PageTable.ProgramResultsComparison()

    })

})

describe(AA1.TC5_DESC, function() {

    it(AA1.TC5_STEP1_DESC, function() {

        API.NTTConfigValidation()

    })

    it(AA1.TC5_STEP2_DESC, function() {

       API.NTTEvaluateValidation()

    })

    it(AA1.TC5_STEP3_DESC, function() {

        API.NTTProductsValidation()
 
     })

})

describe(AA1.TC6_DESC, function() {

    it(AA1.TC6_STEP1_DESC, function() {

        API.NTTOptimizationObjValidation()

    })
})

describe(AA1.TC7_DESC, function() {

    it(AA1.TC7_STEP1_DESC, function() {

        API.NTTOptimizeValidation()

    })
})

describe(AA1.TC8_DESC, function() {

    it(AA1.TC8_STEP1_DESC, function() {

        API.UserValidation()

    })
})

describe(AA1.TC9_DESC, function() {

    it(AA1.TC9_STEP1_DESC, function() {

        API.GETTestValidation()

    })

    it(AA1.TC9_STEP2_DESC, function() {

        API.POSTTestValidation()

    })
})

describe(AA1.TC10_DESC, function(){

    it(AA1.TC10_STEP1_DESC, function() {
  
      AS.ValidateSSOCredentials()
  
    })

    it(AA1.TC10_STEP2_DESC, function() {

        AS.ValidateLoggedOnUser()

    })

  })

  describe(AA1.TC11_DESC, function(){
  
    it(AA1.TC11_STEP1_DESC, function() {
  
        AS.ValidateScenariosRowsAddition()
  
    })
  
  })
  
  describe(AA1.TC12_DESC, function() {
  
    it(AA1.TC12_STEP1_DESC, function() {
  
      AS.ValidateClickDeleteEvent()
  
    })
  
    it(AA1.TC12_STEP2_DESC, function() {
  
        AS.ValidateScenariosRowsRemoval()
  
    })
  
  } )

  describe(AA1.TC13_DESC, function() {

    it(AA1.TC13_STEP1_DESC, function() {


        API.NTTPersistenceCopaysValidation()

    })

  })

  describe(AA1.TC14_DESC, function() {

    it(AA1.TC14_STEP1_DESC, function() {


        API.NTTPersRatePlotValidation()

    })

  })

  describe(AA1.TC15_DESC, function() {

    it(AA1.TC15_STEP1_DESC, function() {


        API.NTTPlotValidation(AA1.api_ntt_program_copay_card_plot_url)

    })

  } )

  describe(AA1.TC16_DESC, function() {

    it(AA1.TC16_STEP1_DESC, function() {


        API.NTTPlotValidation(AA1.api_ntt_program_abandonment_rate_plot_url)

    })

  })

  describe(AA1.TC17_DESC, function() {

    it(AA1.TC17_STEP1_DESC, function() {


        API.NTTPlotValidation(AA1.api_ntt_program_adherence_plot_url)

    })

  })

  describe(AA1.TC18_DESC, function() {

    it(AA1.TC18_STEP1_DESC, function() {


        API.NTTOptimizationPlotValidation()

    })

  })*/