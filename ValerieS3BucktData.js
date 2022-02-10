/// <reference types="Cypress"/>

import WebNavigation from './WebNavigation'

const ValeriePage = new WebNavigation()
const Plugin = require('../plugins/azure-ad-sso/PluginVariables')


class VALERIES3Bckt {

    TotalMembersValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.TOTALMEMBERS).to.eq(data.TOTALMEMBERSS3)
  
         })

    }

    OnDiabetesMedValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.ONDIABETESMED).to.eq(data.ONDIABETESMEDS3)
  
         })

    }

    OnDiabetesMedPctValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.ONDIABETESMEDPCT).to.eq(data.ONDIABETESMEDPCTS3)
         })

    }

    PredictedT2DCVDValidation() {

       cy.readFile(Plugin.ValerieDataFile).then((data) => {

          expect( data.PREDICTEDT2DWCVD).to.eq(data.PREDICTEDT2DWCVDS3)

       })
    }

    PredictedT2DCVDPctValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.PREDICTEDT2DWCVDPCT).to.eq(data.PREDICTEDT2DWCVDPCTS3)
  
         })

    }

    SubOptimalTreatmentValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {
 
           expect( data.SUBOPTIMALTREATMENT).to.eq(data.SUBOPTIMALTREATMENTS3)
 
        })
     }

     SuboptimalTreatmentPctValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {
 
           expect( data.SUBOPTIMALTREATMENTPCT).to.eq(data.SUBOPTIMALTREATMENTPCTS3)
 
        })
     }
 

     MemberOnGLTherapyValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {
 
            expect( data.MEMBERGLTHERAPY).to.eq(data.MEMBERGLTHERAPYS3)
  
         })

    }

    ClickedAgeGroupValidation() {

     cy.readFile(Plugin.ValerieDataFile).then((data) => {

        expect( data.CLICKEDAGEGROUP).to.eq(data.CLICKEDAGEGROUPS3)

     })

    }

    AgeGenderChartFemaleValidation() {

        cy.readFile(Plugin.ValerieDataFile).then((data) => {

            expect( data.FEMALE).to.eq('data.FEMALES3')
    
        })

    }

    //File Upload & pre-check functions

    FileExistanceValidation(fileName, cmdType) {

      cy.exec(Plugin.SETBIPROXYCMD).then(function(results) {

        let CMD = ''
         
         if (cmdType === 1) {

            CMD = Plugin.S3LSINCMD
         }

         else {

            CMD = Plugin.S3LSOUTCMD + fileName
         }

         cy.exec(CMD).then(function(results) {

            if (cmdType === 1) {

              expect(results.stdout).to.include(fileName)

            }

            else {

               expect(results.stdout).to.include(Plugin.PreCheckFileName)
            }

         })
      })

    }

    PreCheckValidation(fileName, condition) {

      cy.exec(Plugin.S3CATCMD + fileName + '/' + Plugin.PreCheckFileName + ' -').then(function(results) {           

         let CmdResults = JSON.parse(results.stdout)

         let TotalMembers = CmdResults.members
         let DroppedRows = CmdResults.droppedRows

         if (condition === 1) {

            cy.wrap(DroppedRows).should('be.gte', 0)

         }

         else if (condition === 2) {

            cy.wrap(DroppedRows).should('be.gt', 0)

         }

         else if (condition === 3) {

            cy.wrap(DroppedRows).should('be.lt', TotalMembers)

         }

         else {

            cy.wrap(DroppedRows).should('be.gte', TotalMembers)

         }

      })

      cy.exec(Plugin.DELETEPROXYCMD).then(function(results) {  })

    }

}

export default VALERIES3Bckt