/// <reference types="Cypress"/>

import VALERIE from './ValerieDashboard'
import WebNavigation from './WebNavigation'
import AA1_Getters_Setters from './GettersAndSetters'

const valWeb = new AA1_Getters_Setters()

const ValeriePage = new WebNavigation()

const Plugin = require('../plugins/azure-ad-sso/PluginVariables')

class VALERIEAPIs {

    TotalMembersValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.TOTALMEMBERS).to.eq(data.TOTALMEMBERSAPI)
  
         })

    }

    OnDiabetesMedValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.ONDIABETESMED).to.eq(data.ONDIABETESMEDAPI)
  
         })

    }

    OnDiabetesMedPctValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.ONDIABETESMEDPCT).to.eq(data.ONDIABETESMEDPCTAPI)
         })

    }

    PredictedT2DCVDValidation() {

       cy.readFile(Plugin.ValerieDataFile).then((data) => {

          expect( data.PREDICTEDT2DWCVD).to.eq(data.PREDICTEDT2DWCVDAPI)

       })
    }

    PredictedT2DCVDPctValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.PREDICTEDT2DWCVDPCT).to.eq(data.PREDICTEDT2DWCVDPCTAPI)
  
         })

    }

    SubOptimalTreatmentValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {
 
           expect( data.SUBOPTIMALTREATMENT).to.eq(data.SUBOPTIMALTREATMENTAPI)
 
        })
     }

     SuboptimalTreatmentPctValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {
 
           expect( data.SUBOPTIMALTREATMENTPCT).to.eq(data.SUBOPTIMALTREATMENTPCTAPI)
 
        })
     }
 

    PrevGuideLineValidation() {

     cy.readFile(Plugin.ValerieDataFile).then((data) => {

        expect( data.PREVALENCEGUIDELINEPIECHART1).to.eq(data.PREVALENCEGUIDELINEPIECHART1API)

     })

    }

    ClickedAgeGroupValidation() {

     cy.readFile(Plugin.ValerieDataFile).then((data) => {

        expect( data.CLICKEDAGEGROUP).to.eq(data.CLICKEDAGEGROUPAPI)

     })

    }

    AgeGenderChartFemaleValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.FEMALE).to.eq(data.FEMALEAPI)
    
        })

    }

    MemberOnGLTherapyValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {
 
            expect( data.MEMBERGLTHERAPY).to.eq(data.MEMBERGLTHERAPYAPI)
  
         })


    }

    CohortMedIncValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.MEDICALINCLUSION).to.eq(data.MEDICALINCLUSIONAPI)

        })

    }

    CohortMedExcValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.MEDICALEXCLUSION).to.eq(data.MEDICALEXCLUSIONAPI)

        })

    }

    CohortProviderSpecialtyValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.PROVIDERSPECIALITY).to.eq(data.PROVIDERSPECIALITYAPI)
        })

    }

    CohortFormValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.FORMULARY).to.eq(data.FORMULARYAPI)

        })

    }

    CohortAgeGroupValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.AGEGROUP).to.eq(data.AGEGROUPAPI)

        })

    }

    CohortSexValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.SEX).to.eq(data.SEXAPI)

        })

    }

    CohortRegionValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.REGION).to.eq(data.REGIONAPI)

        })

    }

    PreCheckValidation(fileName, validationType) {

        cy.exec(Plugin.GetExportedImportedDataCmd).then ((token) => {

            cy.request( {
                method: valWeb.api_get_method,
                url: valWeb.val_token_precheck_cohort_url.replace(Plugin.DefaultCsvOutputFileName, fileName),
                headers: {
                    authorization:'Bearer ' + token.stdout,
                    "Content-Type": "application/json"
                }

            } ).then( (response) => { 

                let DroppedRows = 1*(response.body.droppedRows)
                let TotalMembers = 1*(response.body.members)

                switch(validationType) {

                    case 1:
        
                        cy.wrap(DroppedRows).should('be.gte', 0)
                        break;
        
                    case 2:
        
                        cy.wrap(DroppedRows).should('be.gt', 0)
                        break;
        
                    case 3:
        
                        cy.wrap(DroppedRows).should('be.lt', TotalMembers)
                        break;
        
                    default:

                        cy.wrap(DroppedRows).should('be.gte', TotalMembers)
                        break;

                  }


            } )
        })
    }
}

export default VALERIEAPIs