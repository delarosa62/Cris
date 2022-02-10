/// <reference types="Cypress"/>

import AA1_Getters_Setters from './GettersAndSetters'

const AA1 = new AA1_Getters_Setters()
var data_log_msg = ""

class DataProcessing {
   
    ProcessMonthlyTable() {

        this.ProcessTable(AA1.monthly_data_source_file, AA1.monthly_table)

    }

    ProcessAnnualTable() {

        this.ProcessTable(AA1.annual_data_source_file, AA1.annual_table)

    }

    ProcessOlderTable() {

        this.ProcessTable(AA1.annual_2_data_source_file, AA1.annual_table_2)

    }

    ProgramResultsComparison() {

        this.ProcessMonthlyTable()
        this.ProcessAnnualTable()
        this.ProcessOlderTable()

    }

    ProcessTable(data_source_file, table_name) {

        cy.fixture(data_source_file).then(testdata => {
            testdata.forEach(data => { cy.get(table_name).find('tr')
            .eq(data.id).find('td')
            .each(($current_value, $index) => {
                this.WriteComparisonResults($current_value, data.scenario_values[$index])
            })
            })       
        })
    }

    WriteComparisonResults(value_from_dashboard, value_from_data_source) {

        value_from_dashboard = value_from_dashboard.text().split(',').join('')

        data_log_msg = AA1.dummy_msg + value_from_data_source + 
                       AA1.dashboard_msg + value_from_dashboard + "\n"
    
        this.LogResults(value_from_dashboard, value_from_data_source, data_log_msg)         

    }

    LogResults(value1, value2, log_msg) {

        if(value1.includes(value2) ) {
            cy.log(AA1.pass_log_msg + log_msg)
        }

        else {
            cy.log(AA1.failure_log_msg + log_msg )
        } 

    }
}

export default DataProcessing