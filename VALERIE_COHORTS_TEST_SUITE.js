import LaunchUrl from '../../POM/LoginPage'
import VALERIE from '../../POM/ValerieDashboard'
import VALERIEAPIs from '../../POM/ValerieAPIData'
import VALERIES3Bckt from '../../POM/ValerieS3BucktData'
import api from '../../POM/APIRequests'

import 'cypress-file-upload'

const Plugin = require('../../plugins/azure-ad-sso/PluginVariables')
const VAL = new VALERIE()
const LoginPage = new LaunchUrl()

const APICALL = new VALERIEAPIs()
const S3 = new VALERIES3Bckt()
const APISTATUS = new api()

afterEach(() => {
    LoginPage.Pause(5)
})

describe('VALERIE API Test Cases', function(){

    it('Step 1a Execute External Plugin - Get Bearer Token from Amplify Home Page', function() {

        APISTATUS.ValGetTokenFromValLocalStorage()

    })

    it('STEP 3 Verify the /cohorts/ Get Cohorts - API returns a JSON file which contains the id property and its response status is equal to 200.', function() {

        APISTATUS.ValGETCohortsValidationWithToken()

    })


    it('STEP 4 Verify the /cohorts/{cohort_id} GET API returns a JSOn file  which contains at least one array of data & some properties and its response status equal to 200.', function() {

        //APISTATUS.ValGETCohortsIdValidation()
        APISTATUS.ValGETSingleCohortValidationWithToken()

    })

    it('STEP 5 Verify the /members/Get Members GET API returns a JSOn file  which contains at least one array of data and its response status equal to 200.', function() {

        //APISTATUS.ValGETMembersValidation()
        APISTATUS.ValGETMembersValidationWithToken()


    })

    it('STEP 6 Verify the /members/agegenderdistributions GET API returns a JSOn file  which contains at least one array of data and its response status equal to 200.', function() {

        //APISTATUS.ValGETMembersAgeGendDistValidation()
        APISTATUS.ValGETMembersAgeGendDistValidationWithToken()
    })

    it('STEP 7 Verify the /members/guidelinetreatments GET API returns a JSOn file  which contains at least one array of data and its response status equal to 200.', function() {

        //APISTATUS.ValGETMembersGLTreatValidation()
        APISTATUS.ValGETMembersGLTreatValidationWithToken()

    })

    it('STEP 8 Verify the /precheck?cohort GET API returns a JSOn file  which contains at least one array of data and its response status equal to 200.', function() {

        //APISTATUS.ValGETMembersGLTreatValidation()
        APISTATUS.ValGETPrecheckValidationWithToken()

    })

    it('STEP 9 Verify the /fnstatus?cohort GET API returns a response status equal to 200.', function() {

        //APISTATUS.ValGETMembersGLTreatValidation()
        APISTATUS.ValGETFnstatusValidationWithToken()

    })

})

describe('VALERIE UI Credentials Validation', function(){

    it('Step 1 Verify Users Can Login with Valid Credentials in the Amplify Home Page', function() {

        VAL.VerifyValAmplifySignInWithValidCred()

    })

    it('Step 2 Verify Sign Out', function() {

        VAL.VerifyValAmplifySignOut()

    })

    it('Step 3 Verify Users Can´t Login with invalid Credentials in the Amplify Home Page', function() {

        VAL.VerifyValAmplifySignInWithInvalidCred()

    })

})

describe('FILE UPLOAD - PRECHECK - Add Cohorts - Using csv file with missing column', function() {

    it('Validate the content of the file Valerie_Bad_Sample.csv. Some values in this file look like these ones -> null, N/A or #VALUE', function() {

        VAL.MissingColumnFileValidation()

    })

    it('Verify the csv input files have been uploaded with no issues', function() {

        VAL.NumberOfFilesValidation()
    })

    it('Verify the File S3/*/Valerie_Missing_Column.csv/precheck.json does exist in the S3 Bucket', function() {
        
        S3.FileExistanceValidation(Plugin.MissingColumnsCsvFileName, 1)

    })

    it('Verify that the number of droppedRows included in the S3/*/Valerie_Missing_Column.csv/precheck.json file must be greater than 0', function() {
    
        S3.PreCheckValidation(Plugin.MissingColumnsCsvFileName, 2)

    })


    it('Verify that the number of droppedRows included in the S3/*/Valerie_Missing_Column.csv/precheck.json file must be greater than or equal to the amount of members', function() {


        S3.PreCheckValidation(Plugin.MissingColumnsCsvFileName, 4)

    })

    it('Verify that the number of droppedRows included in the precheck.json file returned by a call to the API, must be greater than 0', function() {
    
        APICALL.PreCheckValidation(Plugin.MissingColumnsCsvFileName, 2)

    })


    it('Verify that the number of droppedRows included in the precheck.json file returned by a call to the API, must be greater than or equal to the amount of members', function() {


        APICALL.PreCheckValidation(Plugin.MissingColumnsCsvFileName, 4)

    })

    it('Verify There is NOT a new cohort in the dashboard page as a result of adding the file Valerie_Missing_Column.csv', function() {

        VAL.CohortsValidation(Plugin.MissingColumnsCsvFileName, 0)

    })

})

describe('FILE UPLOAD - PRECHECK - Add Cohorts - Using csv file with data formatted INCORRECTLY', function() {

    it('Validate the content of the file Valerie_Bad_Sample.csv. Some entries in this file look like: -> null, N/A or #!VALUE', function() {

        VAL.BadDataFileValidation()

    })

    it('Verify the File S3/*/Valerie_Bad_Sample.csv/precheck.json does exist in the S3 Bucket', function() {
        
        S3.FileExistanceValidation(Plugin.BadSampleCsvFileName, 1)

    })

    it('Verify that the number of droppedRows included in the S3/*/Valerie_Bad_Sample.csv/precheck.json file must be greater than 0', function() {
    
        S3.PreCheckValidation(Plugin.BadSampleCsvFileName, 2)

    })


    it('Verify that the number of droppedRows included in the S3/*/Valerie_Bad_Sample.csv/precheck.json file must be lower than or equal to the amount of members', function() {

        S3.PreCheckValidation(Plugin.BadSampleCsvFileName, 3)

    })

    it('Verify that the number of droppedRows included in the precheck.json file returned by a call to the API, must be greater than 0', function() {
    
        APICALL.PreCheckValidation(Plugin.BadSampleCsvFileName, 2)

    })


    it('Verify that the number of droppedRows included in the precheck.json file returned by a call to the API, must be lower than or equal to the amount of members', function() {


        APICALL.PreCheckValidation(Plugin.BadSampleCsvFileName, 3) //TBD

    })

    it('Verify There is NOT a new cohort in the dashboard page as a result of adding the file Valerie_Bad_Sample.csv', function() {

        VAL.CohortsValidation(Plugin.BadSampleCsvFileName, 0)

    })
})

describe('FILE UPLOAD - PRECHECK - Add Cohorts - Using csv file with data in the CORRECT format', function() {

    it('Validate the content of the file Valerie_Good_Sample.csv. Entries like these ones: null, N/A or #VALUE, etc should not be included in the file content', function() {

        VAL.GoodDataFileValidation()

    })

    it('Verify the File S3/*/Valerie_Good_Sample.csv/precheck.json does exist in the S3 Bucket', function() {
        
        S3.FileExistanceValidation(Plugin.GoodSampleCsvFileName, 1)

    })

    it('Verify that the number of droppedRows included in the S3/*/Valerie_Good_Sample.csv/precheck.json file must be equal to 0', function() {
    
        S3.PreCheckValidation(Plugin.GoodSampleCsvFileName, 1)

    })

    it('Verify that the number of droppedRows included in the precheck.json file returned by a call to the API, must be equal to 0', function() {
    
        APICALL.PreCheckValidation(Plugin.GoodSampleCsvFileName, 1)

    })

    it('Verify There IS a new cohort in the dashboard page as a result of adding the file Valerie_Good_Sample.csv', function() {

        VAL.CohortsValidation(Plugin.GoodSampleCsvFileName, 1)

    })
})

describe('Valerie Cohorts Deletion', function() {

    it('Validate Cohort Deletion From Dashboard Page', function() {


        S3.MemberOnGLTherapyValidationxxxxx()

    })

    it('Validate Cohort Deletion Using the Delete /cohort{cohortid} API', function() {


        S3.MemberOnGLTherapyValidationxxxxx()

    })

    it('Validate Cohort Deletion in the S3 Bucket', function() {

        S3.MemberOnGLTherapyValidationxxxxx()

    })

})


describe('VALERIE UI Test Cases', function(){

    it('Launching Valerie Url and Updating Valerie JSON file', function() {

        VAL.ValerieJSONUpdate()

    })

    it('TOTAL MEMBERS Validation From API Call', function() {

        APICALL.TotalMembersValidation()

    })

    it('TOTAL MEMBERS Validation from S3', () => {

        S3.TotalMembersValidation()

    })

    it('Predicted T2D CVD Validation From API Call', function() {

        APICALL.PredictedT2DCVDValidation()

    })

    it('PredictedT2DCVD Validation from S3', () => {

        S3.PredictedT2DCVDValidation()

    })

    it('Members On Diabetes Medication based on Valerie API', function() {

        APICALL.OnDiabetesMedValidation()

    })

    it('Members on Diabetes Medication stored in Valerie S3 Buckets', function() {

        S3.OnDiabetesMedValidation()
    })

    it('Pctg Of Members On Diabetes Medication based on Valerie API', function() {

        APICALL.OnDiabetesMedPctValidation()

    })

    it('Pctg Of Members on Diabetes Medication stored in Valerie S3 Buckets', function() {

        S3.OnDiabetesMedPctValidation()
    })

    it('Suboptimal Treatment Based on Valerie API Call', function() {

        APICALL.SubOptimalTreatmentValidation()
    })

    it('Suboptimal Treatment info based on Valerie S3 Storage', function() {

        S3.SubOptimalTreatmentValidation()

    })

    it('Suboptimal Treatment Pctg Based on Valerie API Call', function() {

        APICALL.SuboptimalTreatmentPctValidation()
    })

    it('Suboptimal Treatment Pctg based on Valerie S3 Storage', function() {

        S3.SuboptimalTreatmentPctValidation()

    })
})

describe('Valerie UI Cohort Summary Test Cases', function() {

    it('Validate Cohort Medical Inclusion', function() {

        APICALL.CohortMedIncValidation()

    })

    it('Validate Cohort Medical Exclusion', function() {

        APICALL.CohortMedExcValidation()

    })

    it('Validate Cohort Provider Specialty', function() {

        APICALL.CohortProviderSpecialtyValidation()

    })

    it('Validate Cohort Formulary', function() {

        APICALL.CohortFormValidation()

    })

    it('Validate Cohort Age Group', function() {

        APICALL.CohortAgeGroupValidation()

    })

    it('Validate Cohort Sex', function() {

        APICALL.CohortSexValidation()

    })

    it('Validate Cohort Region', function() {

        APICALL.CohortRegionValidation()

    })

})

describe('VIEWDASHBOARD BUTTON AFTER CLICK - UI TEST CASES', function() {


    it('Age Gender Chart Female Validation From API', function() {

        VAL.ClickViewDashBoardButton()
        VAL.AgeGenderChartFemaleValidation(S3.AgeGenderChartFemale())

    })

    it('Age Gender Chart Female Validation From S3', function() {

        VAL.AgeGenderChartFemaleValidation(S3.AgeGenderChartFemale())

    })

    it('Age Gender Chart Male Validation From API', function() {


        VAL.AgeGenderChartFemaleValidation(S3.AgeGenderChartFemale())

    })

    it('Age Gender Chart Male Validation From S3', function() {

        VAL.AgeGenderChartFemaleValidation(S3.AgeGenderChartFemale())

    })

    it('Member On GL Therapy Validation Fom API', function() {

        APICALL.MemberOnGLTherapyValidation()

    })

    it('Member On GL Therapy Validation From S3', function() {


        S3.MemberOnGLTherapyValidation()

    })

})

describe('Members List with predicted T2D W/CVD', function() {

    it('Validate Member ID using API', function() {

        VAL.AgeGenderChartFemaleValidationxxxxx(S3.AgeGenderChartFemale())

    })

    it('Validate Member ID in the S3 Bucket', function() {

        APICALL.MemberOnGLTherapyValidationxxxx()

    })

    it('Validate Member Age using API', function() {

        VAL.AgeGenderChartFemaleValidationxxxxx(S3.AgeGenderChartFemale())

    })

    it('Validate Member Age in the S3 Bucket', function() {

        APICALL.MemberOnGLTherapyValidationxxxx()

    })

    it('Validate Member Region using API', function() {

        VAL.AgeGenderChartFemaleValidationxxxxx(S3.AgeGenderChartFemale())

    })

    it('Validate Member Region in the S3 Bucket', function() {

        APICALL.MemberOnGLTherapyValidationxxxx()

    })

    it('Validate Member Plan using API', function() {

        VAL.AgeGenderChartFemaleValidationxxxxx(S3.AgeGenderChartFemale())

    })

    it('Validate Member Plan in the S3 Bucket', function() {

        APICALL.MemberOnGLTherapyValidationxxxx()

    })

    it('Validate Member Status using API', function() {

        VAL.AgeGenderChartFemaleValidationxxxxx(S3.AgeGenderChartFemale())

    })

    it('Validate Member Status in the S3 Bucket', function() {

        APICALL.MemberOnGLTherapyValidationxxxx()

    })

})

