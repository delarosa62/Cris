/// <reference types="Cypress"/>

import AA1_Getters_Setters from './GettersAndSetters'

const AA1 = new AA1_Getters_Setters()
const Plugin = require('../plugins/azure-ad-sso/PluginVariables')

class AccessSolutionsSingleSignOn {

    ValidateSSOCredentials() {

        this.ExecuteSSOPlugin()
        //this.DataValidation(Plugin.CredentialsLogFile, Plugin.WelcomeMsg, Plugin.CredentialsHtm, Plugin.Contain, 0)

    }

    ValidateLoggedOnUser() {

        this.DataValidation(Plugin.CredentialsLogFile, Plugin.WelcomeMsg, Plugin.HomePageHtm, Plugin.Contain, 0)

    }

    ValidateScenariosRowsAddition() {

        this.DataValidation(Plugin.AddRowsLogFile, Plugin.DeleteLink, Plugin.AddedRowsHtm, Plugin.Contain, 1)

    }

    ValidateClickDeleteEvent() {

        this.DataValidation(Plugin.AddRowsLogFile, Plugin.Row2Exists, Plugin.ClickDeleteLinkHtm, Plugin.Contain, 1)

    }

    ValidateScenariosRowsRemoval() {

        this.DataValidation(Plugin.RemoveRowsLogFile, Plugin.RowsRemovalConfirmationMsg, Plugin.AfterRowRemovalHtm, Plugin.NotContain, 1)
 
    }

    DataValidation(LogFile, ConfirmationMsg, HtmFile, AsType, Scroll) {

        this.ProcessDataFromSSOPlugin(LogFile, ConfirmationMsg, HtmFile, Scroll, AsType)

    }

    ScatterPlotChartCombinedValidation() {

        this.ScatterPlotChartValidation(Plugin.ScatterPlotCombinedKey, AA1.api_ntt_program_optimization_plot_url.replace(/EVOUCHER_ONLY/g, 'COMBINED'))

    }

    ScatterPlotChartCombinedValidation2() {

        this.ScatterPlotChartValidation(Plugin.ScatterPlotCombinedKey2, AA1.api_ntt_program_optimization_plot_url.replace(/EVOUCHER_ONLY/g, 'COMBINED'))

    }

    ScatterPlotChartEVouchersOnlyValidation() {

        this.ScatterPlotChartValidation(Plugin.ScatterPlotEVKey, AA1.api_ntt_program_optimization_plot_url)
        
    }

    ScatterPlotChartEVouchersOnlyValidation2() {

        this.ScatterPlotChartValidation(Plugin.ScatterPlotEVKey2, AA1.api_ntt_program_optimization_plot_url)
        
    }

    ProcessDataFromSSOPlugin(FileToRead, TextToSearch, HtmFile, Scroll, AssertionType) {

        cy.readFile(FileToRead).then((FileContent) => {

            if (FileContent.includes(TextToSearch )) { //Plugin.WelcomeMsg)) {

                cy.readFile(FileToRead).should(AssertionType, TextToSearch)

                this.LaunchCurrentUrl(HtmFile, Scroll)
            }
            else {

                cy.readFile(FileToRead).should(Plugin.Contain, 'NO ACTION PERFORMED')
            }

        })
  
    }

    ExecuteSSOPlugin() {

        cy.NavigatingToUrlWithSSO(AA1.aa1_gateway_url)

    }

    LaunchCurrentUrl(Url, ScrollWindow) {

        cy.visit(Url)

        cy.wait(1000)


        if (ScrollWindow > 0) {

            cy.scrollTo('center')

        }

    }

    GetCurrentLocation(PngFileName) {

        return PngFileName.split('./screenshots/').join('')

    }

//=========================== Access Solutions Ntt Program ===============================
AbandonmentRateChartValidation(program) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        let url = '';

        if (program === 0 ) {

            url = AA1.api_ntt_program_abandonment_rate_plot_url
        }

        else if(program === 1){

            url = AA1.api_ntt_program_abandonment_rate_plot_url + '&state=' + Plugin.SBSSelectedState
        }

        cy.request( { method: AA1.api_get_method, url: url })
        .then((content) => {

            var i;
            var ChartType

            if(program === 0) {

                ChartType = obj.ABANDONMENTRATECOPAYBUCKET

            }

            else if(program === 1) {

                ChartType = obj.SBSABANDONMENTRATECOPAYBUCKET
            }

            for(i = 0; i < content.body[0].text.length-1; i++) {
        
                if(content.body[0].text[i].includes(ChartType)) {
                   break;
                }
            }

            expect(content.body[0].text[i]).to.contain(ChartType)
       })
   })
 }

 CopayCardUsageChartValidation(program) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        let url = '';

        if (program === 0 ) {

            url = AA1.api_ntt_program_copay_card_plot_url
        }

        else if(program === 1){

            url = AA1.api_ntt_program_copay_card_plot_url + '&state=' + Plugin.SBSSelectedState
        }

        cy.request( { method: AA1.api_get_method, url: url})
        .then((content) => {

            var i;
            var ChartType

            if(program === 0) {

                ChartType = obj.COPAYCARDUSAGE

            }

            else if (program === 1) {

                ChartType = obj.SBSCOPAYCARDUSAGE
            }

            for(i = 0; i < content.body[0].text.length-1; i++) {
        
                if(content.body[0].text[i].includes(ChartType)) {
                   break;
                }
            }

            expect(content.body[0].text[i]).to.contain(ChartType)
       })
   })
 }

 AdherenceDoTChartValidation(program) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        let url = '';

        if (program === 0 ) {

            url = AA1.api_ntt_program_adherence_plot_url
        }

        else if(program === 1){

            url = AA1.api_ntt_program_adherence_plot_url + '&state=' + Plugin.SBSSelectedState
        }

        cy.request( { method: AA1.api_get_method, url: url})
        .then((content) => {

            var i;
            var ChartType

            if(program === 0) {

                ChartType = obj.ADHERENCEDOT

            }

            else if (program === 1) {

                ChartType = obj.SBSADHERENCEDOT
            }

            for(i = 0; i < content.body[1].text.length-1; i++) {
        
                if(content.body[1].text[i].includes(ChartType)) {
                   break;
                }
            }

            expect(content.body[1].text[i]).to.contain(ChartType)
        })
    })
 }

 PersRateChartValidation(program) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        var i;
        var found = 0;

        var PersRateArray = '.'
        var PersRateName = ''
        var PersRateNameAPI = ''
        var PersRateCurrentValue = ''

        var CurrentPos = 0

        var CurrentAPIContent = ''
        var url = ''

        if(program === 0) {

            PersRateArray = obj.PERSISTENCERATE.split('|')
            url = AA1.api_ntt_program_persistence_rate_plot_url

        }

        else if (program === 1) { //This is for testing State Program -
                                  //Model Input Data Pers Rate Chart

            PersRateArray = obj.SBSPERSISTENCERATE.split('|')
            url = AA1.api_ntt_program_persistence_rate_plot_url + '&state=' + Plugin.SBSSelectedState
        }

        for(let pers_array_item = 0; pers_array_item < PersRateArray.length-1; pers_array_item++) {

           PersRateCurrentValue = PersRateArray[pers_array_item].split('***$')[0]
           PersRateName = PersRateArray[pers_array_item].split('***$')[1]

            cy.exec('echo { "Name":"' + PersRateName + '", "Value":"' + PersRateCurrentValue + '" } > ' + Plugin.PersRateDataJsonFile)
           
            cy.request( { method: AA1.api_get_method, url: url.replace(/copay=0/g, 'copay=' + PersRateName) } )
           .then((content) => {

            cy.exec(Plugin.ReadPersRateFileCmd).then ((CurrentPersRateData) => {

                for(let pers_rate_api_pos = 0; pers_rate_api_pos < content.body.length; pers_rate_api_pos++) {

                    PersRateNameAPI = content.body[pers_rate_api_pos].name.split('$')[1]

                    if(JSON.parse(CurrentPersRateData.stdout).Name === PersRateNameAPI) {

                        CurrentPos = pers_rate_api_pos
                        found = 0

                        for(i = 0; i < content.body[CurrentPos].text.length-1; i++) {

                            CurrentAPIContent = content.body[CurrentPos].text[i]

                            if(CurrentAPIContent.includes(JSON.parse(CurrentPersRateData.stdout).Value) ) {

                                found = 1
                                break;

                            }
                        }

                        if (found === 1 ) {

                            expect('$' + JSON.parse(CurrentPersRateData.stdout).Name).to.contain('$' + PersRateNameAPI)
                            expect(CurrentAPIContent).to.contain(JSON.parse(CurrentPersRateData.stdout).Value)

                            break;
                        }

                    }

                }

                if (found === 0) {

                    expect('$' + JSON.parse(CurrentPersRateData.stdout).Name).to.contain('$' + PersRateNameAPI)
                    expect(CurrentAPIContent).to.contain(JSON.parse(CurrentPersRateData.stdout).Value)

                }

           })
        })
        }
    })
  }

 ScatterPlotChartValidation(ScatterPlotChart, url) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        cy.request( { method: AA1.api_get_method, url: url})
        .then((content) => {

            var i;
            var j;
            var found;

            for(j = 0; j < content.body.length-1; j++) {

                found = 0
                
                for(i = 0; i < content.body[j].text.length-1; i++) {
                    
                    if(content.body[j].text[i].includes(obj[ScatterPlotChart]) ) {

                        found = 1;
                        break;
                    }
                }

                if (found === 1) { break;}
            }

            expect(content.body[j].text[i]).to.contain(obj[ScatterPlotChart])
        })
    })
 }

 WelcomeMsgValidation() {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        expect(Plugin.WelcomeMsg).to.contain(obj.WELCOMEMESSAGE)

    })
 }

ProductValidation() {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        cy.request( { method: AA1.api_get_method, url: AA1.api_ntt_program_products_url })
        .then((content) => {

            var i;

            for(i = 0; i < content.body.products.length-1; i++) {
        
                if(content.body.products[i].includes(obj.PRODUCT.toUpperCase())) {
                   break;
                }
            }

            expect(content.body.products[i]).to.contain(obj.PRODUCT.toUpperCase())
        })
    })
 }

 DOSValidation() {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        cy.request( { method: AA1.api_get_method, url: AA1.api_ntt_program_products_url })
        .then((content) => {

            var i;

            for(i = 0; i < content.body.dos[obj.PRODUCT.toUpperCase()].length-1; i++) {

                if(content.body.dos[obj.PRODUCT.toUpperCase()][i] + ''.includes(obj.DOS)) {
                  break;
                }
            }

         expect(content.body.dos[obj.PRODUCT.toUpperCase()][i] + '').to.eq(obj.DOS)

        })
    })
 }

 OptimizationValidation() {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        cy.request( { method: AA1.api_get_method, url: AA1.api_ntt_program_optimization_url })
        .then((content) => {

            var i;

            const objective = content.body.objectives
            let objectivekey = ''

            for(var key in objective) {

                if(objective[key].includes(obj.OPTIMIZATION)) {

                    objectivekey = key
                    break;

                }

            }

            for(i = 0; i < content.body.products[obj.PRODUCT.toUpperCase()][obj.DOS].objective.length-1; i++) {

                if(content.body.products[obj.PRODUCT.toUpperCase()][obj.DOS].objective[i].includes(key)) {
                  break;
                }
            }

         expect(content.body.products[obj.PRODUCT.toUpperCase()][obj.DOS].objective[i]).to.eq(key)

        })
    })

 }

 ExtentValidation() {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        cy.request( { method: AA1.api_get_method, url: AA1.api_ntt_program_optimization_url })
        .then((content) => {

            var i;

            const extent = content.body.extent
            let extentkey = ''

            for(var key in extent) {

                if(extent[key].includes(obj.EXTENT)) {

                    extentkey = key
                    break;

                }

            }

            for(i = 0; i < content.body.products[obj.PRODUCT.toUpperCase()][obj.DOS].extent.length-1; i++) {

                if(content.body.products[obj.PRODUCT.toUpperCase()][obj.DOS].extent[i].includes(key)) {
                  break;
                }
            }

         expect(content.body.products[obj.PRODUCT.toUpperCase()][obj.DOS].extent[i]).to.eq(key)

        })
    })

 }

 ValidateProgramEvaluationResults(key) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

       expect(content[key]).not.to.contain(Plugin.fail)
       expect(content[key]).to.contain(Plugin.pass)

    })

 }

 ValidateExportImport(index) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        cy.exec(Plugin.GetExportedImportedDataCmd).then(function(data) {

            let key = ''
            let excelcontent = data.stdout.split('\r\n')[index].replace(/ /g, '')
                                                               .replace(/,/g, '.')

            if (index === 1) {

                key = Plugin.EXPORTEDDATA
            }

            else if (index === 2) {

                key = Plugin.IMPORTEDDATA
            }

            else if (index === 3) {

                key = Plugin.SBSEXPORTEDDATA
            }

            else if (index === 4) {

                key = Plugin.SBSIMPORTEDDATA
            }

            else if (index === 6) {

                key = Plugin.CPPEXPORTEDDATA

            }

            else if (index === 7) {

                key = Plugin.CPPIMPORTEDDATA
            }

            else if (index === 9) {

                key = Plugin.MPEXPORTEDDATA

            }

            expect(content[key]).to.contain(excelcontent)
        })

    })
 }

 ValidateParematerResults(id) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((obj) => {

        let list_of_values = obj[id].split('|')

        for (let i = 0; i < list_of_values.length-1; i++) {
            
            if (list_of_values[i] !== Plugin.pass && list_of_values[i] !== Plugin.fail) {
                
                expect(obj[id + '_API']).to.contain(list_of_values[i])
            }

        }

        expect(obj[id]).not.to.contain(Plugin.fail)
        //expect(obj[id]).to.contain(Plugin.pass)
        expect(obj[id]).not.to.contain('undefined')
        expect(obj[id]).not.to.contain('Error')
        expect(obj[id]).not.to.eq('')

    })
 }

NetPriceZeroValueValidation(item) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        if(item === 0) {

            expect(content.NETPRICECLASSNAME0).to.contain(Plugin.error)

        }

        else if(item === 1) {

            expect(content.SBSNETPRICECLASSNAME0).to.contain(Plugin.error)

        }

        else if(item === 2) {

            expect(content.CPPNETPRICECLASSNAME0).to.contain(Plugin.error)

        }

        else if(item === 3) {

            expect(content.MPNETPRICECLASSNAME0).to.contain(Plugin.error)

        }
 
     })
}

NetPriceNegValueValidation(item) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        if (item === 0) {

            expect(content.NETPRICECLASSNAMENEG).to.contain(Plugin.error)
        }

        else if(item === 1) {

            expect(content.SBSNETPRICECLASSNAMENEG).to.contain(Plugin.error)
        }

        else if(item === 2) {

            expect(content.CPPNETPRICECLASSNAMENEG).to.contain(Plugin.error)
        }

        else if(item === 3) {

            expect(content.MPNETPRICECLASSNAMENEG).to.contain(Plugin.error)
        }

     })

}

CheckMetricsValueInRange(inRange, item) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        let MetricsInRangeKey = '';
        let MetricsNotInRangeKey = '';

        if (item === 0) {

            MetricsInRangeKey = Plugin.METRICSVALUESINRANGE
            MetricsNotInRangeKey = Plugin.METRICSVALUESNOTINRANGE

        }

        else if(item === 1) {

            MetricsInRangeKey = Plugin.SBSMETRICSVALUESINRANGE
            MetricsNotInRangeKey = Plugin.SBSMETRICSVALUESNOTINRANGE

        }
        
        if (inRange) {

            expect(content[MetricsInRangeKey]).to.contain(Plugin.true)
        }

        else {

            expect(content[MetricsNotInRangeKey]).to.contain(Plugin.true)

        }

     })

}

//================= Additional methods for State Program feature =========================

SBSProductValidation(option) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        if (option === 0) {

            expect(content.SBSSTATE).to.contain(Plugin.SBSSelectedState)

        }

        else if (option === 1) {

            expect(content.SBSPRODUCT.toUpperCase()).to.contain(AA1.main_product)
        }

        else {

            expect(content.SBSDOS).to.contain(AA1.default_dos)
        }
    })
}

//====================== CP Program Methods ==============================

CPPProductValidation(option) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        if (option === 0) {

            expect(content.CPPPRODUCT.toUpperCase()).to.contain(AA1.main_product)
        }

        else if (option === 1) {

            expect(content.CPPDOS).to.contain(AA1.default_dos)
        }

        else if (option === 2) {

            expect(content.CPPPROGRAMTERMSTARTDATE).to.contain(Plugin.ProgTermStartDate)
        }

        else if (option === 3) {

            expect(content.CPPPROGRAMTERMENDDATE).to.contain(Plugin.ProgTermEndDate)
        }

        else if (option === 4) {

            expect(content.CPPEARLIESTCOHORTMONTH).to.contain(Plugin.EarliestCohortDate)
        }

        else if (option === 5) {

            expect(content.CPPRELAYDATAMONTH).to.contain(Plugin.RelDatMthDateMonthNotSelected)//=RelDatMthDate)
        }

        else if (option === 6) {

            expect(content.CPPCUSTOMCOHORTPATIENTSDATA).to.contain(Plugin.CsvCPFileToImport)
        }

    })
}

CPPBellNotifications(option) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        if (option === 0) {

            expect(content.CPPBELLNOTIFICATIONEXECUTIONMSG).to.contain(Plugin.CPPExecutionMsg)
        }

        else if (option === 1) {

            expect(content.CPPBELLNOTIFICATIONEXECUTIONMSG).not.to.contain(':')
            expect(content.CPPBELLNOTIFICATIONEXECUTIONMSG).to.contain('min ago')
        }

        if (option === 2) {

            expect(content.MPBELLNOTIFICATIONEXECUTIONMSG).to.contain(Plugin.MPExecutionMsg)
        }

        else if (option === 3) {

            expect(content.MPBELLNOTIFICATIONEXECUTIONMSG).not.to.contain(':')
            expect(content.MPBELLNOTIFICATIONEXECUTIONMSG).to.contain('min ago')
        }

    })
}

//======================== Monthly Projections Methods ===============================

MPProductSelectionValidation(option) {

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {

        if (option === 0) {

            expect(content.MPPRODUCT.toUpperCase()).to.contain(AA1.main_product)
        }

        else if (option === 1) {

            expect(content.MPDOS).to.contain(AA1.default_dos)
        }

        else if (option === 2) {

            expect(content.MPFILEIMPORTED).to.contain(Plugin.MPImportMsg)
        }

    })

}

TableValidation(TableKey){

    cy.readFile(Plugin.AccessSolutionsDataFile).then((content) => {
        
        let TableRow = content[TableKey]
        let RowFromFile = content[TableKey + '-TXT']

        let TableValues = TableRow.split('|')
        let ValuesFromFile = RowFromFile.split('|')

        expect('Values From Page Table => ' + TableRow.replace(/ /g, '').toUpperCase()).to.contain(ValuesFromFile[0].replace(/ /g, '').toUpperCase())
        expect('Values From File => ' + RowFromFile.replace(/ /g, '').toUpperCase()).to.contain(TableValues[0].replace(/ /g, '').toUpperCase())

        for(let i=0; i<TableValues.length; i++) {

            if (i>0 && TableValues[i] !== '' && ValuesFromFile[i] !== '') {

                expect(Math.abs(1*TableValues[i] - 1*ValuesFromFile[i])).lte(1)

            }

        }
    
    })

}

}

export default AccessSolutionsSingleSignOn