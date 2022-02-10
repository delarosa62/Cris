/// <reference types="Cypress"/>

import WebNavigation from './WebNavigation'
import AA1_Getters_Setters from './GettersAndSetters'

import LaunchUrl from './LoginPage'

const LoginPage = new LaunchUrl()

const valWeb = new AA1_Getters_Setters()
const ValeriePage = new WebNavigation()

const Plugin = require('../plugins/azure-ad-sso/PluginVariables')

const ValerieCsvFilesFolder = Plugin.ValerieCsvFilesFolder

class VALERIE {

    PredictedT2DCVDJSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

           cy.get(Plugin.PredictedT2DCVD).then((data) => {

            obj.PREDICTEDT2DWCVD = data.text().replace(/,/g, '').replace(/ /g, '')
            cy.writeFile(Plugin.ValerieDataFile, obj)

           })
        })
    }

    PredictedT2DCVD_API_JSONUpdate() {

         cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {
                
                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.PREDICTEDT2DWCVDAPI =  response.body[0].predictedT2DWCVD.replace(/,/g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })
    }

    PredictedT2DCVD_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.exec(Plugin.PredictionsAWSCmd).then(function(data) {           

               obj.PREDICTEDT2DWCVDS3 = ( data.stdout.match(/1,3/g) || []).length + '';
               cy.writeFile(Plugin.ValerieDataFile, obj)

            })
         })
    }

    OnDiabetesMedJSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

           cy.get(Plugin.OnDiabetesMed).then((data) => {

            obj.ONDIABETESMED = data.text().replace(/,/g, '').replace(/   /g, '').replace(/ /g, '').split('%')[1]
            cy.writeFile(Plugin.ValerieDataFile, obj)

           })
        })
    }

    OnDiabetesMed_API_JSONUpdate() {

         cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {
                
                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.ONDIABETESMEDAPI =  response.body[0].onDiabetesMedication.replace(/,/g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })

    }

    OnDiabetesMed_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.exec(Plugin.PredictionsAWSCmd).then(function(data) {           

               obj.ONDIABETESMEDS3 =  ( data.stdout.match(/,3/g) || []).length + '';
               cy.writeFile(Plugin.ValerieDataFile, obj)

            })
         })
    }

    OnDiabetesMedPctJSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

           cy.get(Plugin.OnDiabetesMedPct).then((data) => {

            obj.ONDIABETESMEDPCT = data.text().replace(/,/g, '').split(' ')[1].replace(/ /g, '')
            cy.writeFile(Plugin.ValerieDataFile, obj)

           })
        })

    }

    OnDiabetesMedPct_API_JSONUpdate() {

        cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {
                
                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.ONDIABETESMEDPCTAPI =  response.body[0].onDiabetesMedicationPercentage.replace(/,/g, '').replace(/ /g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })
    }

    OnDiabetesMedPct_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.exec(Plugin.PredictionsAWSCmd).then(function(data) {

              cy.exec(Plugin.TotalMembersCmd).then(function(datapct) {

                let jsondata = JSON.parse(datapct.stdout)

                const totalmembers = jsondata.members;                
                const ondiabmed = ( data.stdout.match(/,3/g) || []).length
                const ondiabmedpctg = (ondiabmed*100)/totalmembers

                obj.ONDIABETESMEDPCTS3 =  (ondiabmedpctg + '').split('.')[0] + '%';
                cy.writeFile(Plugin.ValerieDataFile, obj)

              })

            })
         })

    }


    SubOptimalTreatmentJSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

           cy.get(Plugin.SubOptimalTreatment).then((data) => {

            obj.SUBOPTIMALTREATMENT = data.text().replace(/,/g, '').replace(/ /g, '')
            cy.writeFile(Plugin.ValerieDataFile, obj)

           })
        })
    }

    SubOptimalTreatment_API_JSONUpdate() {

         cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {

                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.SUBOPTIMALTREATMENTAPI =  response.body[0].subOptimallyTreated.replace(/,/g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })
    }

    SubOptimalTreatment_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

               cy.exec(Plugin.PredictionsAWSCmd).then(function(data) {

               const firstFilter = data.stdout.match(/1,3*No,*/g)

               obj.SUBOPTIMALTREATMENTS3 =  firstFilter.length + '';
               cy.writeFile(Plugin.ValerieDataFile, obj)

            })
         })
    }

    PredictedT2DCVDValidationPct(value) {

        ValeriePage.VerifyElementValue(Plugin.PredictedT2DCVDpct, value)

    }

    SubOptimalTreatmentPctJSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

           cy.get(Plugin.SubOptimalTreatmentpct).then((data) => {

            obj.SUBOPTIMALTREATMENTPCT = data.text().replace(/,/g, '').replace(/ /g, '')
            cy.writeFile(Plugin.ValerieDataFile, obj)

           })
        })
    }

    SubOptimalTreatmentPct_API_JSONUpdate() {

        cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {

                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.SUBOPTIMALTREATMENTPCTAPI =  response.body[0].subOptimallyTreatedPercentage.replace(/,/g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })
    }

    SubOptimalTreatmentPct_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.exec(Plugin.PredictionsAWSCmd).then(function(data) {

            const notOnGuideLine = data.stdout.match(/1,3*No,*/g)
            const onGuideLine = data.stdout.match(/1,3*Yes,*/g)
        
            const totalMembers = 1*((1*notOnGuideLine.length) + (1*onGuideLine.length))
 
            const subOptPctg = ( (100*(notOnGuideLine.length))/(1*(totalMembers)) ).toFixed(2)

            obj.SUBOPTIMALTREATMENTPCTS3 =  subOptPctg + '%';
            cy.writeFile(Plugin.ValerieDataFile, obj)

         })
      })

    }

    TotalMembersJSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

           cy.get(Plugin.TotalMembers).then((data) => {

            obj.TOTALMEMBERS = data.text().replace(/,/g, '').replace(/ /g, '')
            cy.writeFile(Plugin.ValerieDataFile, obj)

           })
        })
    }

    TotalMembers_API_JSONUpdate() {

         cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {
                
                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.TOTALMEMBERSAPI =  response.body[0].totalMembers.replace(/,/g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })

    }

    TotalMembers_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.exec(Plugin.TotalMembersCmd).then(function(data) {  
                
              let jsondata = JSON.parse(data.stdout)

               obj.TOTALMEMBERSS3 = jsondata.members + '';
               cy.writeFile(Plugin.ValerieDataFile, obj)

            })
         })
    }

    MemberOnGLTherapyJSONUpdate() {

        this.ClickViewDashBoardButton()

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.get(Plugin.MemberGLTherapy).then((data) => {

             obj.MEMBERGLTHERAPY = data.text().replace(/,/g, '').replace(/ /g, '').split('%')[0] + '%'
             cy.writeFile(Plugin.ValerieDataFile, obj)
 
            })
         })       

    }

    MemberOnGLTherapy_API_JSONUpdate() {

        cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {
                
                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_members_guidelinetrea_cohort_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.MEMBERGLTHERAPYAPI =  response.body[0].guidelinetreatments.replace(/,/g, '')
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })
    }

    MemberOnGLTherapy_S3_JSONUpdate() {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            cy.exec(Plugin.PredictionsAWSCmd).then(function(data) {

                const notOnGuideLine = data.stdout.match(/1,3*No,*/g)
                const onGuideLine = data.stdout.match(/1,3*Yes,*/g)
            
                const totalMembers = 1*((1*notOnGuideLine.length) + (1*onGuideLine.length))
     
                const onGLPctg = ( (100*(onGuideLine.length))/(1*(totalMembers)) ).toFixed(2)

            obj.MEMBERGLTHERAPYS3 =  onGLPctg + '%';
            cy.writeFile(Plugin.ValerieDataFile, obj)

         })
      })
    }

    CohortSummary_API_JSONUpdate() {

        ValeriePage.ClickOnElement(Plugin.CohortSummary)

        cy.readFile(Plugin.TmpExportFile).then((token) => {

            cy.readFile(Plugin.ValerieDataFile).then((obj) => {
                
                cy.request( {

                    method: valWeb.api_get_method,
                    url: valWeb.val_token_cohorts_url,
                    headers: {
                        authorization:'Bearer ' + token,
                        "Content-Type": "application/json"
                    }

                } ).then( (response) => { 

                    obj.MEDICALINCLUSIONAPI =  response.body[0].includes[Plugin.CohortSummaryMInc].value[0]
                    obj.MEDICALEXCLUSIONAPI =  response.body[0].includes[Plugin.CohortSummaryMExc].value[0]
                    obj.PROVIDERSPECIALITYAPI =  response.body[0].includes[Plugin.CohortSummaryPS].value[0]
                    obj.FORMULARYAPI =  response.body[0].includes[Plugin.CohortSummaryForm].value[0]
                    obj.AGEGROUPAPI =  response.body[0].includes[Plugin.CohortSummaryAG].value[0]
                    obj.SEXAPI =  response.body[0].includes[Plugin.CohortSummarySex].value[0]
                    obj.REGIONAPI =  response.body[0].includes[Plugin.CohortSummaryRegion].value[0]
       
                    obj.PREDICTIONPERIODAPI =  response.body[0].filePeriod.startDate + '-' + response.body[0].filePeriod.endDate
       
                    cy.writeFile(Plugin.ValerieDataFile, obj)

                } )
            })
         })
    }

    CohortSummaryJSONUpdate() {

        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortMInc, Plugin.CohortSummaryMInc)
        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortMExc, Plugin.CohortSummaryMExc)
        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortPS, Plugin.CohortSummaryPS)
        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortForm, Plugin.CohortSummaryForm)
        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortAG, Plugin.CohortSummaryAG)
        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortSex, Plugin.CohortSummarySex)
        this.UpdateJSONFileWithCohortSummaryData(Plugin.CohortRegion, Plugin.CohortSummaryRegion)


    }

    UpdateJSONFileWithCohortSummaryData(key, cohort_data_pos) {

        cy.readFile(Plugin.ValerieDataFile).then((obj) => {

            ValeriePage.ClickOnElement(Plugin.CohortSummary)
            cy.get(Plugin.CohortSummaryDataClass).then((data) => {

                obj[key] = data[cohort_data_pos].innerText
                cy.writeFile(Plugin.ValerieDataFile, obj)
            })

        })
    }

    NumberOfFilesValidation() {

        this.ValerieAmplifyPageSignIn(Plugin.ValLogin, Plugin.ValPasswd)
        this.ValerieWaitForRefresh()

        ValeriePage.VerifyPageMessage(Plugin.UploadedFilesMsg)

    }

    CohortsValidation(fileName, condition) {

        if (condition === 0) {

            ValeriePage.VerifyStringNotInPage(fileName)
        }

        else {

            ValeriePage.VerifyPageMessage(fileName)
        }
    }

    MissingColumnFileValidation() {

        this.InputFileContentValidation(ValerieCsvFilesFolder + Plugin.MissingColumnsCsvFileName, 1)

    }

    BadDataFileValidation() {

        this.InputFileContentValidation(ValerieCsvFilesFolder + Plugin.BadSampleCsvFileName, 2)
    }

    GoodDataFileValidation() {

        this.InputFileContentValidation(ValerieCsvFilesFolder + Plugin.GoodSampleCsvFileName, 3)
    }

    InputFileContentValidation(fileName, validationType) {

        cy.readFile(fileName).then((content) => {

        switch(validationType) {

            case 1:

                this.MissingColumn(content)
                break;

            case 2:

              this.IncludeBadData(content)
              break;

            case 3:

                this.IncludeGoodData(content)
                break;

            default:
              //N/A
          }
        })

    }

    IncludeColumns(content) {

        expect(content).to.include('days_supply')
        expect(content).to.include('memberid')
        expect(content).to.include('claimid')
        expect(content).to.include('ndc,drug_class_code')
        expect(content).to.include('generic_name')
        expect(content).to.include('brand_name')

        expect(content).to.include('fill_date')
        expect(content).to.include('npi')
        expect(content).to.include('strength')
        expect(content).to.include('quantity')
        expect(content).to.include('year_dob')
        expect(content).to.include('gender')
        expect(content).to.include('drug_class_desc')
        expect(content).to.include('specialty')
        expect(content).to.include('plan_type')
        expect(content).to.include('enrollment_flag')

    }

    MissingColumn(content) {

        expect(content).to.not.include('days_supply')
    }

    IncludeBadData(content) {

        this.IncludeColumns(content)

        expect(content).to.include('null')
        expect(content).to.include('#N/A')
        expect(content).to.include('#VALUE!')

    }

    IncludeGoodData(content) {

        this.IncludeColumns(content)

        expect(content).to.not.include('null')
        expect(content).to.not.include('#N/A')
        expect(content).to.not.include('#VALUE!')

    }
/*
    MembersFormularyValidation() {

        ValeriePage.VerifyElementValue(Plugin.Formulary, 'Formulary:custom')

    }

    MembersClientValidation() {

        ValeriePage.VerifyElementValue(Plugin.Client, 'Client:ABC')

    }


    PredPeriodValidation() {

        ValeriePage.VerifyElementValue(Plugin.PredictionPeriod, '01/01/2021 - 03/01/2021')

    }

    PieChartSubOptimalValidation() {

        ValeriePage.VerifyElementValue(Plugin.PrevGuideLineSub, '77.3%')

    }

    PieChartGLValidation() {

        ValeriePage.VerifyElementValue(Plugin.PrevGuideLine, '22.7%')

    }

    AgeGenderChartFemaleValidation(value) {

        ValeriePage.ValidateTextShownInToolTip(Plugin.AgeGenderChart, Plugin.AgeGenderChartToolTipF, value)

    }

    AgeGenderChartMaleValidation(value) {

        ValeriePage.ValidateTextShownInToolTip(Plugin.AgeGenderChart, Plugin.AgeGenderChartToolTipM, value)

    }

    MemberIDValidation() {

        ValeriePage.VerifyElementValue(Plugin.MemberID, '71875')

    }

    MemberAgeValidation() {

        ValeriePage.VerifyElementValue(Plugin.MemberAge, '53')

    }

    MemberRegValidation() {

        ValeriePage.VerifyElementValue(Plugin.MemberGender, 'ND')

    }

    MemberPlanValidation() {

        ValeriePage.VerifyElementValue(Plugin.MemberPlanType, 'xxx')

    }

    MemberStatusValidation() {

        ValeriePage.VerifyElementValue(Plugin.MemberStatus, 'xxx')

    }
*/
    ClickViewDashBoardButton() {

        ValeriePage.ClickButton(Plugin.ViewDashboardButton)

    }

    ClickMemberProfileButton() {

        ValeriePage.ClickButton(Plugin.MemberProfileButton)

    }

    VerifyValAmplifySignInWithValidCred() {

        this.ValerieAmplifyPageSignIn(Plugin.ValLogin, Plugin.ValPasswd)
        this.ValerieWaitForRefresh()

        ValeriePage.VerifyPageMessage(Plugin.ValSignInConfLabel)

    }

    VerifyValAmplifySignInWithInvalidCred() {

        this.ValerieAmplifyPageSignIn(Plugin.ValLogin, Plugin.ValPasswd + '+')
        
        cy.get(Plugin.ValAmplifyHydratedClass, { includeShadowDom: true } )
          .find(Plugin.ValSignErrorHeader, { includeShadowDom: true } )
          .find(Plugin.ValSignErrorClass, { includeShadowDom: true } )
          .contains(Plugin.ValSignInError)
    }

    VerifyValAmplifySignOut() {

        this.ValerieAmplifyPageLogOut()

        cy.get(Plugin.ValSignInButtonAmplifySlot)
        .find(Plugin.ValSignInHeader, { includeShadowDom: true })
        .contains(Plugin.ValSignOutConfLabel)

    }

    ValerieAmplifyPageSignIn(username, passwd) {

        ValeriePage.GoToUrl(valWeb.val_amplify_url)

        ValeriePage.PopulateField(Plugin.ValUserNameField, username)
        ValeriePage.PopulateField(Plugin.ValPasswordNameField,passwd)

        LoginPage.Pause(2)

        cy.get(Plugin.ValSignInButtonAmplifySlot)
          .find(Plugin.ValSignInButton, { includeShadowDom: true })
          .contains(Plugin.ValSignInButtonLabel).click()

    }

    ValerieAmplifyPageLogOut() {

        ValeriePage.SelectDropDownItem(Plugin.ValLayOutMenuIcon, Plugin.ValSignOutButtonLabel)

    }

    ValerieWaitForRefresh() {

        LoginPage.Pause(3)

        ValeriePage.PageRefresh()

        LoginPage.Pause(2)

    }

    ValerieJSONUpdate() {

        ValeriePage.GoToUrl(valWeb.val_amplify_url)

        this.ValJSONCleanUp()

        this.ValerieAmplifyPageSignIn(Plugin.ValLogin, Plugin.ValPasswd)
        this.ValerieWaitForRefresh()
        
        this.TotalMembersJSONUpdate()
        this.TotalMembers_API_JSONUpdate()
        this.TotalMembers_S3_JSONUpdate()

        this.PredictedT2DCVDJSONUpdate()
        this.PredictedT2DCVD_API_JSONUpdate()
        this.PredictedT2DCVD_S3_JSONUpdate()

        this.OnDiabetesMedJSONUpdate()
        this.OnDiabetesMed_API_JSONUpdate()
        this.OnDiabetesMed_S3_JSONUpdate()

        this.OnDiabetesMedPctJSONUpdate()
        this.OnDiabetesMedPct_API_JSONUpdate()
        this.OnDiabetesMedPct_S3_JSONUpdate()

        this.SubOptimalTreatmentJSONUpdate()
        this.SubOptimalTreatment_API_JSONUpdate()
        this.SubOptimalTreatment_S3_JSONUpdate()

        this.SubOptimalTreatmentPctJSONUpdate()
        this.SubOptimalTreatmentPct_API_JSONUpdate()
        this.SubOptimalTreatmentPct_S3_JSONUpdate()

        this.CohortSummaryJSONUpdate()
        this.CohortSummary_API_JSONUpdate()

        this.MemberOnGLTherapyJSONUpdate()
        //**this.MemberOnGLTherapy_API_JSONUpdate()
        this.MemberOnGLTherapy_S3_JSONUpdate()

    }

    ValJSONCleanUp() {

        cy.writeFile(Plugin.ValerieDataFile, '{ }')

    }

}

export default VALERIE