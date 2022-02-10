
const rows = 6
const columns = 6

module.exports.ScenariosRows = rows
module.exports.ScenariosColumns = columns

module.exports.aa1_gateway_url = "https://us-contracting-gateway-aa1-test.nah-devapps.am.boehringer.com/ntt-program/program-evaluation"//"https://us-contracting-gateway-aa1-test.nah-devapps.am.boehringer.com/ntt-program/program-evaluation"
    
module.exports.AddButtonCsselector = "body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > " + 
                              "aad-ntt-program > div > aad-program-evaluation > aad-ntt-program-scenarios " + 
                              "> nz-card > div.ant-card-body > div > " + 
                              "div.aad-scenarios__actions.ant-col.ant-col-sm-24.ant-col-md-8 > nz-space > " +
                              "nz-space-item:nth-child(1) > button > span"

module.exports.ExportButtonSelector = "body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-program-evaluation > aad-ntt-program-results > nz-card > div.ant-card-body > div.ant-row.ng-star-inserted > div.aad-ntt-program-results__export.ant-col.ant-col-sm-24.ant-col-md-8 > button > span"
module.exports.ResetButtonSelector = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-program-evaluation > aad-ntt-scenarios-input-table > nz-card > div.ant-card-body > div > div.aad-scenarios__actions.ant-col.ant-col-sm-24.ant-col-md-8 > nz-space > nz-space-item:nth-child(2) > button'

module.exports.EvaluateButtonSelector = "body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-program-evaluation > aad-ntt-scenarios-input-table > nz-card > div.ant-card-body > div > div.ant-col.ant-col-sm-24.ant-col-md-16 > form > div > div:nth-child(1) > nz-space > nz-space-item > button"

module.exports.ScenariosTableCsselector = "body > aad-root > aad-layout > nz-layout > nz-layout > nz-content " +
                                  "> aad-ntt-program > div > aad-program-evaluation > " +
                                  "aad-ntt-scenarios-input-table > nz-card > div.ant-card-body > " +
                                  "nz-table > nz-spin > div > div > nz-table-inner-default > div > " +
                                  "table > tbody > tr:nth-child(=" + rows + "=) > " + 
                                  "td:nth-child(=" + columns + "=) > input"

module.exports.MonthlyTableCellCsselector = 'body > aad-root > aad-layout > nz-layout > nz-layout > ' +
                                  'nz-content > aad-ntt-program > div > aad-program-evaluation > ' +
                                  'aad-ntt-program-results > nz-card > div.ant-card-body > ' +
                                  'nz-spin > div > nz-tabset > div > div > ' +
                                  'div.ant-tabs-tabpane.ant-tabs-tabpane-active.ng-star-inserted > ' +
                                  'aad-ntt-program-results-table > nz-table > nz-spin > div > div > ' +
                                  'nz-table-inner-default > div > table > tbody > tr:nth-child(=2=) > ' +
                                  'td:nth-child(=3=)'

module.exports.OptProgramParResultsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                              'nz-layout > nz-content > aad-ntt-program > ' +
                                              'div > aad-optimized-program > ' +
                                              'aad-optimized-program-parameters > nz-card > ' +
                                              'div.ant-card-body > nz-card > div > nz-table ' +
                                              '> nz-spin > div > div > nz-table-inner-default ' +
                                              '> div > table > tbody > tr:nth-child(=2=) > ' +
                                              'td:nth-child(=3=)'

module.exports.OptProgMonthResultsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                             'nz-layout > nz-content > aad-ntt-program > div ' +
                                             '> aad-optimized-program > nz-card > ' +
                                             'div.ant-card-body > nz-spin > div > nz-tabset > ' +
                                             'div > div > ' +
                                             'div.ant-tabs-tabpane.ng-star-inserted.ant-tabs-' +
                                             'tabpane-active > aad-optimized-program-results-' +
                                             'table > nz-table > nz-spin > div > div > ' +
                                             'nz-table-inner-default > div > table > tbody > ' +
                                             'tr:nth-child(=1=) > td:nth-child(=3=)'

module.exports.OptProgMonth112ResultsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                                'nz-layout > nz-content > aad-ntt-program > ' +
                                                'div > aad-optimized-program > nz-card > ' +
                                                'div.ant-card-body > nz-spin > div > nz-tabset ' +
                                                '> div > div > div.ant-tabs-tabpane.ng-star-' +
                                                'inserted.ant-tabs-tabpane-active > ' +
                                                'aad-optimized-program-results-table > ' +
                                                'nz-table > nz-spin > div > div > nz-table-inner-' +
                                                'default > div > table > tbody > tr:nth-child(=1=) ' +
                                                '> td:nth-child(=3=)'

module.exports.OptProgMonth1324ResultsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                                 'nz-layout > nz-content > aad-ntt-program > ' +
                                                 'div > aad-optimized-program > nz-card > ' +
                                                 'div.ant-card-body > nz-spin > div > nz-tabset ' +
                                                 '> div > div > div.ant-tabs-tabpane.ng-star-' +
                                                 'inserted.ant-tabs-tabpane-active > ' +
                                                 'aad-optimized-program-results-table > nz-table > '+
                                                 'nz-spin > div > div > nz-table-inner-default > ' +
                                                 'div > table > tbody > tr:nth-child(=1=) > ' +
                                                 'td:nth-child(=3=)'

module.exports.PageHearderSelector = 'body > aad-root > aad-layout > nz-layout > nz-layout > ' +
                                     'nz-header > div > div.aad-header-placeholder'

module.exports.TableCellDelimiter = '----> '

module.exports.CurrentMonth = (1*( new Date().getMonth() ))+1;
module.exports.CurrentYear = new Date().getFullYear();
module.exports.CurrentDay = new Date().getDay()

module.exports.GreenIndicator = '▲'
module.exports.RedIndicator = '▼'

module.exports.value = ''

module.exports.green = 'green'
module.exports.red = 'red'

module.exports.pass = 'pass'
module.exports.fail = 'fail'

module.exports.true = 'true'

module.exports.status = ''

module.exports.TableCell = ''
module.exports.color = ''

module.exports.optprginitrow = 1
module.exports.optprginitcolumn = 2

module.exports.optprgmaxrow = 9
module.exports.optprgmaxcolumn = 8

module.exports.current = 0
module.exports.ScenarioValues = "0,100,20,30,100,80,10"

module.exports.IfFileExists = 'if exist '
module.exports.DelFile = ' del '

module.exports.csselector = ''
module.exports.error = 'error'

module.exports.NetPriceInitValue = '0'
module.exports.NetPriceNegValue = '--9'
module.exports.NetPricePosValue = '10'

module.exports.MetricsThreshold = 5
module.exports.MetricsWarningMsg = 'The evaluation model may be inaccurate as check metrics are beyond +/-5%'
//-module.exports.MetricsWarningSelector = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-program-evaluation > aad-ntt-program-results > nz-card > div.ant-card-body > nz-alert.ng-tns-c78-16.ng-star-inserted > div > div'

module.exports.METRICSVALUESINRANGE = 'METRICSVALUESINRANGE'
module.exports.METRICSVALUESNOTINRANGE = 'METRICSVALUESNOTINRANGE'

module.exports.SBSMETRICSVALUESINRANGE = 'SBSMETRICSVALUESINRANGE'
module.exports.SBSMETRICSVALUESNOTINRANGE = 'SBSMETRICSVALUESNOTINRANGE'

module.exports.DialogOkButtonXpath = "//*[@id='cdk-overlay-0']/div/div/div[2]/div/div/div[2]/button[2]/span"

module.exports.loaded = 'domcontentloaded'
module.exports.ssologin = 'crisdumar.de_la_rosa.ext@boehringer-ingelheim.com'

module.exports.LoginFieldId = 'input[name=loginfmt]'
module.exports.SubmitButtonId = 'input[type=submit]'

module.exports.Credentials = './screenshots/1-Credentials.png'
module.exports.HomePage = './screenshots/1-LoggedOn.png'
module.exports.AddedRows = './screenshots/2-AddedRows.png'
module.exports.PopulatedRows = './screenshots/3-PopulatedRows.png'
module.exports.SBSPopulatedRows = './screenshots/3-SBSPopulatedRows.png'
module.exports.CPProgPopulatedRows = './screenshots/3-CPProgPopulatedRows.png'
module.exports.ResetButtonClickedPng = './screenshots/3-ResetButtonClicked.png'
module.exports.SBSResetButtonClickedPng = './screenshots/3-SBSResetButtonClicked.png'
module.exports.CPPResetButtonClickedPng = './screenshots/3-CPPResetButtonClicked.png'
module.exports.CPPResetButtonClicked2Png = './screenshots/3-CPProgResetButtonClicked2.png'
module.exports.CPPBellNotificationsPng = './screenshots/3-CPPBellNotificationsPng.png'
module.exports.MPBellNotificationsPng = './screenshots/3-MPBellNotificationsPng.png'
module.exports.MetricsOutOfRangePng = './screenshots/3-MetricsOutOfRange.png'
module.exports.SBSMetricsOutOfRangePng = './screenshots/3-SBSMetricsOutOfRange.png'
//module.exports.NetPriceNegPng = './screenshots/3-PopulatedRowsNetPriceNeg.png'
//module.exports.NetPrice0Png = './screenshots/3-PopulatedRowsNetPrice0.png'
module.exports.PngNetPricesFiles = './screenshots/3-PopulatedRowsNetPrice0.png ./screenshots/3-PopulatedRowsNetPriceNeg.png'
module.exports.SBSPngNetPricesFiles = './screenshots/3-SBSPopulatedRowsNetPrice0.png ./screenshots/3-SBSPopulatedRowsNetPriceNeg.png'
module.exports.SBSModelInputDataPagePng = './screenshots/6-SBSModelInputDataCharts.png'
module.exports.CPProgPngNetPricesFiles = './screenshots/3-CPPPopulatedRowsNetPrice0.png ./screenshots/3-MPPopulatedRowsNetPriceNeg.png'
module.exports.MPPngNetPricesFiles = './screenshots/3-MPPopulatedRowsNetPrice0.png ./screenshots/3-CPPPopulatedRowsNetPriceNeg.png'
module.exports.ClickDeleteLink = './screenshots/4-ClickDeleteLink.png'
module.exports.AfterRowRemoval = './screenshots/5-AfterRowRemoval.png'
module.exports.AbandonmentRateChartPng = './screenshots/6-AbandonmentRateChart.png'
module.exports.CopayCardUsageChartPng = './screenshots/7-CopayCardUsageChart.png'
module.exports.AdherenceDoTChartPng = './screenshots/8-AdherenceDoTChart.png'
module.exports.PersRateChartPng = './screenshots/9-PersRateChart.png'
module.exports.ScatterPlotCombinedChartPng = './screenshots/10-OptObjCombinedChart.png'
module.exports.ScatterPlotCombinedChart2Png = './screenshots/10-OptObjCombinedChart2.png'
module.exports.ScatterPlotEVouchersChartPng = './screenshots/10-OptObjEVouchersChart.png'
module.exports.ScatterPlotEVouchersChart2Png = './screenshots/10-OptObjEVouchersChart2.png'
module.exports.ImportedDataPng = './screenshots/11-ImportedData.png'
module.exports.SBSImportedDataPng = './screenshots/11-SBSImportedData.png'
module.exports.CPPImportedDataPng = './screenshots/11-CPPImportedData.png'
module.exports.CPP1ImportedDataPng = './screenshots/11-CPP1ImportedData.png'
module.exports.MPImportedDataPng  = './screenshots/11-MPImportedData.png'
module.exports.MPRefillIncPng  = './screenshots/11-MPRefillsIncluded.png'

module.exports.CredentialsHtm = "./screenshots/50-Credentials.htm"
module.exports.HomePageHtm = "./screenshots/50-LoggedOn.htm"
module.exports.AddedRowsHtm = "./screenshots/51-AddedRows.htm"
module.exports.PopulatedRowsHtm = "./screenshots/52-PopulatedRows.htm"
module.exports.ResetButtonClickedHtm = './screenshots/52-ResetButtonClicked.htm'
module.exports.MetricsOutOfRangeHtm = './screenshots/52-MetricsOutOfRange.htm'
module.exports.NetPrice0Htm = "./screenshots/52-PopulatedRowsNetPrice0.htm"
module.exports.NetPriceNegHtm = "./screenshots/52-PopulatedRowsNetPriceNeg.htm"

module.exports.SBSPopulatedRowsHtm = "./screenshots/52-SBSPopulatedRows.htm"
module.exports.SBSResetButtonClickedHtm = './screenshots/52-SBSResetButtonClicked.htm'
module.exports.SBSMetricsOutOfRangeHtm = './screenshots/52-SBSMetricsOutOfRange.htm'
module.exports.SBSNetPrice0Htm = "./screenshots/52-SBSPopulatedRowsNetPrice0.htm"
module.exports.SBSNetPriceNegHtm = "./screenshots/52-SBSPopulatedRowsNetPriceNeg.htm"

module.exports.CPPPopulatedRowsHtm = "./screenshots/52-CPPPopulatedRows.htm"
module.exports.CPPResetButtonClicked2Htm = './screenshots/52-CPPResetButtonClicked2.htm'
module.exports.CPPNetPrice0Htm = "./screenshots/52-CPPPopulatedRowsNetPrice0.htm"
module.exports.CPPNetPriceNegHtm = "./screenshots/52-CPPPopulatedRowsNetPriceNeg.htm"
module.exports.CPPBellNotificationsHtm = './screenshots/52-CPPBellNotifications.htm'

module.exports.ClickDeleteLinkHtm = "./screenshots/53-ClickDeleteLink.htm"
module.exports.AfterRowRemovalHtm = "./screenshots/54-AfterRowRemoval.htm"
module.exports.AbandonmentRateChartHtm = "./screenshots/55-AbandonmentRateChart.htm"
module.exports.CopayCardUsageChartHtm = "./screenshots/56-CopayCardUsageChart.htm"
module.exports.AdherenceDoTChartHtm = "./screenshots/57-AdherenceDoTChart.htm"
module.exports.PersRateChartHtm = "./screenshots/58-PersRateChart.htm"
module.exports.ScatterPlotCombinedChartHtm = "./screenshots/59-OptObjCombinedChart.htm"
module.exports.ScatterPlotCombinedChart2Htm = "./screenshots/59-OptObjCombinedChart2.htm"
module.exports.ScatterPlotEVouchersChartHtm = "./screenshots/59-OptObjEVouchersChart.htm"
module.exports.ScatterPlotEVouchersChart2Htm = "./screenshots/59-OptObjEVouchersChart2.htm"
module.exports.ImportedDataHtm = "./screenshots/60-ImportedData.htm"
module.exports.SBSImportedDataHtm = "./screenshots/60-SBSImportedData.htm"
module.exports.SBSModelInputDataPageHtm = './screenshots/61-SBSModelInputDataCharts.htm'

module.exports.CPP1ImportedDataHtm = "./screenshots/60-CPP1ImportedData.htm"
module.exports.CPPImportedDataHtm = "./screenshots/60-CPPImportedData.htm"
module.exports.MPImportedDataHtm = "./screenshots/60-MPImportedData.htm"
module.exports.MPRefillsIncHtm = "./screenshots/60-MPRefillsData.htm"


module.exports.ImgSrc =  "<img src=\""
module.exports.cls = "\" />"
module.exports.pct = '%'

module.exports.CsvScenariosFileToImport = 'Import-to-Dashboard.csv'
module.exports.CsvMetricsWarningScenariosFile = 'Import-Neg_Scenarios-to-Dashboard.csv'
module.exports.CsvCPFileToImport = 'CP_External_Patients_Template_New_Format_Raja_test5.csv'

module.exports.CredentialsLogFile = 'C:\\CypressAutomation\\AA1\\pageData.txt'//./screenshots/6-CredentialsLog.txt'
module.exports.AddRowsLogFile = 'C:\\CypressAutomation\\AA1\\pageData.txt'//./screenshots/7-AddRowsLog.txt'
module.exports.RemoveRowsLogFile = 'C:\\CypressAutomation\\AA1\\pageData.txt'//./screenshots/8-RemoveRowsLog.txt'

module.exports.DeleteLink = 'Delete'
module.exports.splitLine = '\n==============================\n'

module.exports.WelcomeMsg = 'NTT Program'
module.exports.WelcomeMsgSelector = 'body > aad-root > aad-layout > nz-layout > nz-layout > aad-page-title > div > h1'
module.exports.Row2Exists = 'Delete\n2'
module.exports.RowsRemovalConfirmationMsg = 'Delete\n2'

module.exports.Contain = 'contain'
module.exports.NotContain = 'not.contain'
module.exports.HasText = 'have.text'

//======================== Access Solutions NTT Program -  Global Variables Xpaths & Csselectors ==============

module.exports.NttProgram = 'body > aad-root > aad-layout > nz-layout > nz-sider > div > ul > li > div.ant-menu-submenu-title'

module.exports.SelectProduct = '//*[@id="product"]/nz-select-top-control/nz-select-search/input'
module.exports.SelectedProduct = '//*[@id="cdk-overlay-0"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[1]/div'

module.exports.SelectDOS = '//*[@id="dos"]/nz-select-top-control/nz-select-search/input'
module.exports.SelectedDOS = '//*[@id="cdk-overlay-1"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[1]/div'

module.exports.SelectOptimization = '//*[@id="objective"]/nz-select-top-control/nz-select-search/input'
module.exports.SelectedOptimization = '//*[@id="cdk-overlay-2"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item[3]/div'

module.exports.SelectExtent = '#extent > nz-select-top-control > nz-select-search > input'
module.exports.SelectedExtent = '#cdk-overlay-5 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item.ant-select-item.ant-select-item-option.ng-star-inserted.ant-select-item-option-active > div'

module.exports.VerifySelectedProduct = '#product > nz-select-top-control > nz-select-item'
module.exports.VerifySelectedDOS = '#dos > nz-select-top-control > nz-select-item'

module.exports.VerifySelectedOptimization = '#objective > nz-select-top-control > nz-select-item'
module.exports.VerifySelectedExtent = '#extent > nz-select-top-control > nz-select-item'

module.exports.SelectOptObj = '#objective > nz-select-top-control > nz-select-search'
module.exports.SelectedOptObj = '#cdk-overlay-2 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item.ant-select-item.ant-select-item-option.ant-select-item-option-selected.ng-star-inserted.ant-select-item-option-active > div'
module.exports.SelectExtent = '#extent > nz-select-top-control > nz-select-search'
module.exports.SelectedExtent = '#cdk-overlay-3 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item.ant-select-item.ant-select-item-option.ng-star-inserted.ant-select-item-option-active > div'

module.exports.SelectPersRateDropDown = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-model-input-data > div > aad-persistence-rate-graph > div > nz-select > nz-select-top-control > nz-select-item'
module.exports.PersRateSelectedItem = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-model-input-data > div > aad-persistence-rate-graph > div > nz-select > nz-select-top-control > nz-select-item'
module.exports.PersRateDropDownItem = '#cdk-overlay-2 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item:nth-child(=1=)'

module.exports.ScenCellsLoc = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-program-evaluation > aad-ntt-scenarios-input-table > nz-card > div.ant-card-body > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(=2=) > td:nth-child(=3=) > input'
module.exports.EvaluateButton = 'Evaluate'

module.exports.ProgEval = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li/div[2]/ul/li[1]/a'
module.exports.OptProg = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li[1]/div[2]/ul/li[2]/a'
module.exports.ModelInputData = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li/div[2]/ul/li[3]/a'
module.exports.AbandonmentRateChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-model-input-data > div > aad-abandonment-rate-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g.subplot.xy2 > g.plot > g > g > g > g:nth-child(11)'
module.exports.CopayCardUsageChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-model-input-data > div > aad-copay-card-usage-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g > g > g:nth-child(12)'
module.exports.AdherenceDoTChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-model-input-data > div > aad-adherence-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g:nth-child(2) > g > g:nth-child(12) > path'
module.exports.PersRateChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-model-input-data > div > aad-persistence-rate-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.gridlayer > g.x > path:nth-child(6)'
module.exports.ScatterPlotCombinedChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > div > div > div.ant-tabs-tabpane.ng-star-inserted.ant-tabs-tabpane-active > aad-optimization-plot:nth-child(1) > div > plotly-plot > div > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-ns-resize'
module.exports.ScatterPlotCombinedChart2 = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > div > div > div.ant-tabs-tabpane.ng-star-inserted.ant-tabs-tabpane-active > aad-optimization-plot:nth-child(2) > div > plotly-plot > div > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-ns-resize'
module.exports.ScatterPlotEVouchersChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > div > div > div.ant-tabs-tabpane.ng-star-inserted.ant-tabs-tabpane-active > aad-optimization-plot:nth-child(1) > div > plotly-plot > div > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-ns-resize'
module.exports.ScatterPlotEVouchersChart2 = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > div > div > div.ant-tabs-tabpane.ng-star-inserted.ant-tabs-tabpane-active > aad-optimization-plot:nth-child(2) > div > plotly-plot > div > div > div > svg:nth-child(1) > g.draglayer.cursor-crosshair > g > rect.nsewdrag.drag.cursor-ns-resize'
module.exports.AbnmntRateToolTipRegExp = '# New Starters: '
module.exports.CopayCardUsageRegExp = 'Data Source: FIA '
module.exports.AdherenceDoTRegExp = 'Adherence [DoT]'
module.exports.CopayBucketRegExp = 'Copay Bucket: '
module.exports.PersRateRegExp = ' ...'
module.exports.PersRateDayRegExp = 'Days : '
module.exports.ObjsRegExp1 = 'CC Target Copay: '
module.exports.ObjsRegExp2 = '\n'

module.exports.MonthlyTabs = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-program-evaluation > aad-ntt-program-results > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > nz-tabs-nav > div > div > div:nth-child(2) > div'
module.exports.OptPgrMonthlyTabs = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > nz-tabs-nav > div > div > div:nth-child(2) > div'

module.exports.ScatterPlotCombinedChartTab = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > nz-tabs-nav > div > div > div:nth-child(4)'
module.exports.ScatterPlotEVouchersChartTab = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > nz-tabs-nav > div > div > div:nth-child(5)'
module.exports.CurrentChartToggleLegend = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-ntt-program > div > aad-optimized-program > nz-card:nth-child(3) > div.ant-card-body > nz-spin > div > nz-tabset > div > div > div.ant-tabs-tabpane.ng-star-inserted.ant-tabs-tabpane-active > aad-optimization-plot > div > plotly-plot > div > div > div > svg:nth-child(3) > g.infolayer > g.legend > g > g > g:nth-child(4) > rect'                                

module.exports.TmpExportFile = '%userprofile%\\Downloads\\export.txt'
module.exports.PersRateDataJsonFile = '%userprofile%\\Downloads\\PersRateData.json'
module.exports.OldExportedFiles = '%userprofile%\\Downloads\\*Z*xlsx'

module.exports.FileExportCheck = 'if exist %userprofile%\\Downloads\\*Z*xlsx echo true'
module.exports.CreateFileCmd = 'echo  > %userprofile%\\Downloads\\export.txt'
module.exports.GetExportedImportedDataCmd = 'more %userprofile%\\Downloads\\export.txt'
module.exports.DeleteSSCmd = 'del /q screenshots\\*'
module.exports.DelPersRateFileCmd = 'del /q %userprofile%\\Downloads\\PersRateData.json'
module.exports.ReadPersRateFileCmd = 'more %userprofile%\\Downloads\\PersRateData.json'

// Program Results Variables to be included in the AccessSolutionsData.json file

module.exports.MONTHLYINCREMENTALROI = 'MONTHLYINCREMENTALROI'
module.exports.MONTHLYINCREMENTALREV = 'MONTHLYINCREMENTALREV'
module.exports.MONTHLYINCREMENTALCOSTS = 'MONTHLYINCREMENTALCOSTS'
module.exports.MONTHLYMARGINALROI = 'MONTHLYMARGINALROI'
module.exports.MONTHLYMARGINALREV = 'MONTHLYMARGINALREV'
module.exports.MONTHLYMARGINALCOSTS = 'MONTHLYMARGINALCOSTS'
module.exports.MONTHLYTOTALRXPRES = 'MONTHLYTOTALRXPRES'
module.exports.MONTHLYTOTALPAIDRX = 'MONTHLYTOTALPAIDRX'
module.exports.MONTHLYTOTALPAIDRXVOUCHER = 'MONTHLYTOTALPAIDRXVOUCHER'
module.exports.MONTHLYTOTALPAIDRXCOPAY = 'MONTHLYTOTALPAIDRXCOPAY'
module.exports.MONTHLYTOTALPAIDRXDBLDIP = 'MONTHLYTOTALPAIDRXDBLDIP'
module.exports.MONTHLYTOTALPAIDRXNODISC = 'MONTHLYTOTALPAIDRXNODISC'
module.exports.MONTHLYPREPROGRAMABANDRATE = 'MONTHLYPREPROGRAMABANDRATE'
module.exports.MONTHLYPOSTPROGRAMABANDRATE = 'MONTHLYPOSTPROGRAMABANDRATE'
module.exports.MONTHLYPREPROGRAMADHERENCE = 'MONTHLYPREPROGRAMADHERENCE'
module.exports.MONTHLYPOSTPROGRAMADHERENCE = 'MONTHLYPOSTPROGRAMADHERENCE'
module.exports.MONTHLYPREPROGRAMCOPAY = 'MONTHLYPREPROGRAMCOPAY'
module.exports.MONTHLYPOSTPROGRAMCOPAY = 'MONTHLYPOSTPROGRAMCOPAY'
module.exports.MONTHLYPCTGCLAIMSQLF = 'MONTHLYPCTGCLAIMSQLF'
module.exports.MONTHLYINCRNEWSTARTS = 'MONTHLYINCRNEWSTARTS'
module.exports.MONTHLYAVGBUYDOWNPERRX = 'MONTHLYAVGBUYDOWNPERRX'
module.exports.MONTHLYAVGVOUCHERBUYDOWNPERRX = 'MONTHLYAVGVOUCHERBUYDOWNPERRX'
module.exports.MONTHLYAVGCCBUYDOWNPERRX = 'MONTHLYAVGCCBUYDOWNPERRX'
module.exports.MONTHLYGROSSTONET = 'MONTHLYGROSSTONET'
module.exports.MONTHLYINCRRXS = 'MONTHLYINCRRXS'

module.exports.MONTHLYCHECKTOTALREVPERS = 'MONTHLYCHECKTOTALREVPERS'
module.exports.MONTHLYCHECKTOTALREVPERSPCT = 'MONTHLYCHECKTOTALREVPERSPCT'
module.exports.MONTHLYCHECKINCRREVPERS = 'MONTHLYCHECKINCRREVPERS'
module.exports.MONTHLYCHECKINCRREVPERSPCT = 'MONTHLYCHECKINCRREVPERSPCT'
module.exports.MONTHLYCHECKINCRROI112 = 'MONTHLYCHECKINCRROI112'
module.exports.MONTHLYCHECKINCRROI1324 = 'MONTHLYCHECKINCRROI1324'

module.exports.MONTH1to12INCREMENTALROI = 'MONTH1to12INCREMENTALROI'
module.exports.MONTH1to12INCREMENTALREV = 'MONTH1to12INCREMENTALREV'
module.exports.MONTH1to12INCREMENTALCOSTS = 'MONTH1to12INCREMENTALCOSTS'
module.exports.MONTH1to12MARGINALROI = 'MONTH1to12MARGINALROI'
module.exports.MONTH1to12MARGINALREV = 'MONTH1to12MARGINALREV'
module.exports.MONTH1to12MARGINALCOSTS = 'MONTH1to12MARGINALCOSTS'
module.exports.MONTH1to12TOTALNEWPATIENT = 'MONTH1to12TOTALNEWPATIENT'
module.exports.MONTH1to12TOTALPRJCTEDRX = 'MONTH1to12TOTALPRJCTEDRX'
module.exports.MONTH1to12TOTALINCREMENTALRX = 'MONTH1to12TOTALINCREMENTALRX'
module.exports.MONTH1to12PROJCTEDFSWV = 'MONTH1to12PROJCTEDFSWV'
module.exports.MONTH1to12PROJECTEDFSWCC = 'MONTH1to12PROJECTEDFSWCC'
module.exports.MONTH1to12PROJECTEDFSWDBLDIP = 'MONTH1to12PROJECTEDFSWDBLDIP'
module.exports.MONTH1to12PROJECTEDFSWDISC = 'MONTH1to12PROJECTEDFSWDISC'
module.exports.MONTH1to12RELAYADMINCOST = 'MONTH1to12RELAYADMINCOST'
module.exports.MONTH1to12RELAYBUYDOWNCOST = 'MONTH1to12RELAYBUYDOWNCOST'
module.exports.MONTH1to12RELAYTOTALCOST= 'MONTH1to12RELAYTOTALCOST'
module.exports.MONTH1to12MCKSONADMCOST = 'MONTH1to12MCKSONADMCOST'
module.exports.MONTH1to12MCKSONBUYDOWNCOST = 'MONTH1to12MCKSONBUYDOWNCOST'
module.exports.MONTH1to12MCKSONTOTALCOST = 'MONTH1to12MCKSONTOTALCOST'
module.exports.MONTH1to12TOTALREV = 'MONTH1to12TOTALREV'
module.exports.MONTH1to12GROSSPROFIT = 'MONTH1to12GROSSPROFIT'
module.exports.MONTH1to12GROSSINCREMENTALPROFIT = 'MONTH1to12GROSSINCREMENTALPROFIT'

module.exports.MONTH13to24INCREMENTALROI = 'MONTH13to24INCREMENTALROI'
module.exports.MONTH13to24INCREMENTALREV = 'MONTH13to24INCREMENTALREV'
module.exports.MONTH13to24INCREMENTALCOSTS = 'MONTH13to24INCREMENTALCOSTS'
module.exports.MONTH13to24MARGINALROI = 'MONTH13to24MARGINALROI'
module.exports.MONTH13to24MARGINALREV = 'MONTH13to24MARGINALREV'
module.exports.MONTH13to24MARGINALCOSTS = 'MONTH13to24MARGINALCOSTS'
module.exports.MONTH13to24TOTALNEWPATIENT = 'MONTH13to24TOTALNEWPATIENT'
module.exports.MONTH13to24TOTALPRJCTEDRX = 'MONTH13to24TOTALPRJCTEDRX'
module.exports.MONTH13to24TOTALINCREMENTALRX = 'MONTH13to24TOTALINCREMENTALRX'
module.exports.MONTH13to24PROJCTEDFSWV = 'MONTH13to24PROJCTEDFSWV'
module.exports.MONTH13to24PROJECTEDFSWCC = 'MONTH13to24PROJECTEDFSWCC'
module.exports.MONTH13to24PROJECTEDFSWDBLDIP = 'MONTH13to24PROJECTEDFSWDBLDIP'
module.exports.MONTH13to24PROJECTEDFSWDISC = 'MONTH13to24PROJECTEDFSWDISC'
module.exports.MONTH13to24RELAYADMINCOST = 'MONTH13to24RELAYADMINCOST'
module.exports.MONTH13to24RELAYBUYDOWNCOST = 'MONTH13to24RELAYBUYDOWNCOST'
module.exports.MONTH13to24RELAYTOTALCOST= 'MONTH13to24RELAYTOTALCOST'
module.exports.MONTH13to24MCKSONADMCOST = 'MONTH13to24MCKSONADMCOST'
module.exports.MONTH13to24MCKSONBUYDOWNCOST = 'MONTH13to24MCKSONBUYDOWNCOST'
module.exports.MONTH13to24MCKSONTOTALCOST = 'MONTH13to24MCKSONTOTALCOST'
module.exports.MONTH13to24TOTALREV = 'MONTH13to24TOTALREV'
module.exports.MONTH13to24GROSSPROFIT = 'MONTH13to24GROSSPROFIT'
module.exports.MONTH13to24GROSSINCREMENTALPROFIT = 'MONTH13to24GROSSINCREMENTALPROFIT'

module.exports.SBSMONTHLYINCREMENTALROI = 'SBSMONTHLYINCREMENTALROI'
module.exports.SBSMONTHLYINCREMENTALREV = 'SBSMONTHLYINCREMENTALREV'
module.exports.SBSMONTHLYINCREMENTALCOSTS = 'SBSMONTHLYINCREMENTALCOSTS'
module.exports.SBSMONTHLYMARGINALROI = 'SBSMONTHLYMARGINALROI'
module.exports.SBSMONTHLYMARGINALREV = 'SBSMONTHLYMARGINALREV'
module.exports.SBSMONTHLYMARGINALCOSTS = 'SBSMONTHLYMARGINALCOSTS'
module.exports.SBSMONTHLYTOTALRXPRES = 'SBSMONTHLYTOTALRXPRES'
module.exports.SBSMONTHLYTOTALPAIDRX = 'SBSMONTHLYTOTALPAIDRX'
module.exports.SBSMONTHLYTOTALPAIDRXVOUCHER = 'SBSMONTHLYTOTALPAIDRXVOUCHER'
module.exports.SBSMONTHLYTOTALPAIDRXCOPAY = 'SBSMONTHLYTOTALPAIDRXCOPAY'
module.exports.SBSMONTHLYTOTALPAIDRXDBLDIP = 'SBSMONTHLYTOTALPAIDRXDBLDIP'
module.exports.SBSMONTHLYTOTALPAIDRXNODISC = 'SBSMONTHLYTOTALPAIDRXNODISC'
module.exports.SBSMONTHLYPREPROGRAMABANDRATE = 'SBSMONTHLYPREPROGRAMABANDRATE'
module.exports.SBSMONTHLYPOSTPROGRAMABANDRATE = 'SBSMONTHLYPOSTPROGRAMABANDRATE'
module.exports.SBSMONTHLYPREPROGRAMADHERENCE = 'SBSMONTHLYPREPROGRAMADHERENCE'
module.exports.SBSMONTHLYPOSTPROGRAMADHERENCE = 'SBSMONTHLYPOSTPROGRAMADHERENCE'
module.exports.SBSMONTHLYPREPROGRAMCOPAY = 'SBSMONTHLYPREPROGRAMCOPAY'
module.exports.SBSMONTHLYPOSTPROGRAMCOPAY = 'SBSMONTHLYPOSTPROGRAMCOPAY'
module.exports.SBSMONTHLYPCTGCLAIMSQLF = 'SBSMONTHLYPCTGCLAIMSQLF'
module.exports.SBSMONTHLYINCRNEWSTARTS = 'SBSMONTHLYINCRNEWSTARTS'
module.exports.SBSMONTHLYAVGBUYDOWNPERRX = 'SBSMONTHLYAVGBUYDOWNPERRX'
module.exports.SBSMONTHLYAVGVOUCHERBUYDOWNPERRX = 'SBSMONTHLYAVGVOUCHERBUYDOWNPERRX'
module.exports.SBSMONTHLYAVGCCBUYDOWNPERRX = 'SBSMONTHLYAVGCCBUYDOWNPERRX'
module.exports.SBSMONTHLYGROSSTONET = 'SBSMONTHLYGROSSTONET'
module.exports.SBSMONTHLYINCRRXS = 'SBSMONTHLYINCRRXS'

module.exports.SBSMONTHLYCHECKTOTALREVPERS = 'SBSMONTHLYCHECKTOTALREVPERS'
module.exports.SBSMONTHLYCHECKTOTALREVPERSPCT = 'SBSMONTHLYCHECKTOTALREVPERSPCT'
module.exports.SBSMONTHLYCHECKINCRREVPERS = 'SBSMONTHLYCHECKINCRREVPERS'
module.exports.SBSMONTHLYCHECKINCRREVPERSPCT = 'SBSMONTHLYCHECKINCRREVPERSPCT'
module.exports.SBSMONTHLYCHECKINCRROI112 = 'SBSMONTHLYCHECKINCRROI112'
module.exports.SBSMONTHLYCHECKINCRROI1324 = 'SBSMONTHLYCHECKINCRROI1324'

module.exports.SBSMONTH1to12INCREMENTALROI = 'SBSMONTH1to12INCREMENTALROI'
module.exports.SBSMONTH1to12INCREMENTALREV = 'SBSMONTH1to12INCREMENTALREV'
module.exports.SBSMONTH1to12INCREMENTALCOSTS = 'SBSMONTH1to12INCREMENTALCOSTS'
module.exports.SBSMONTH1to12MARGINALROI = 'SBSMONTH1to12MARGINALROI'
module.exports.SBSMONTH1to12MARGINALREV = 'SBSMONTH1to12MARGINALREV'
module.exports.SBSMONTH1to12MARGINALCOSTS = 'SBSMONTH1to12MARGINALCOSTS'
module.exports.SBSMONTH1to12TOTALNEWPATIENT = 'SBSMONTH1to12TOTALNEWPATIENT'
module.exports.SBSMONTH1to12TOTALPRJCTEDRX = 'SBSMONTH1to12TOTALPRJCTEDRX'
module.exports.SBSMONTH1to12TOTALINCREMENTALRX = 'SBSMONTH1to12TOTALINCREMENTALRX'
module.exports.SBSMONTH1to12PROJCTEDFSWV = 'SBSMONTH1to12PROJCTEDFSWV'
module.exports.SBSMONTH1to12PROJECTEDFSWCC = 'SBSMONTH1to12PROJECTEDFSWCC'
module.exports.SBSMONTH1to12PROJECTEDFSWDBLDIP = 'SBSMONTH1to12PROJECTEDFSWDBLDIP'
module.exports.SBSMONTH1to12PROJECTEDFSWDISC = 'SBSMONTH1to12PROJECTEDFSWDISC'
module.exports.SBSMONTH1to12RELAYADMINCOST = 'SBSMONTH1to12RELAYADMINCOST'
module.exports.SBSMONTH1to12RELAYBUYDOWNCOST = 'SBSMONTH1to12RELAYBUYDOWNCOST'
module.exports.SBSMONTH1to12RELAYTOTALCOST= 'SBSMONTH1to12RELAYTOTALCOST'
module.exports.SBSMONTH1to12MCKSONADMCOST = 'SBSMONTH1to12MCKSONADMCOST'
module.exports.SBSMONTH1to12MCKSONBUYDOWNCOST = 'SBSMONTH1to12MCKSONBUYDOWNCOST'
module.exports.SBSMONTH1to12MCKSONTOTALCOST = 'SBSMONTH1to12MCKSONTOTALCOST'
module.exports.SBSMONTH1to12TOTALREV = 'SBSMONTH1to12TOTALREV'
module.exports.SBSMONTH1to12GROSSPROFIT = 'SBSMONTH1to12GROSSPROFIT'
module.exports.SBSMONTH1to12GROSSINCREMENTALPROFIT = 'SBSMONTH1to12GROSSINCREMENTALPROFIT'

module.exports.SBSMONTH13to24INCREMENTALROI = 'SBSMONTH13to24INCREMENTALROI'
module.exports.SBSMONTH13to24INCREMENTALREV = 'SBSMONTH13to24INCREMENTALREV'
module.exports.SBSMONTH13to24INCREMENTALCOSTS = 'SBSMONTH13to24INCREMENTALCOSTS'
module.exports.SBSMONTH13to24MARGINALROI = 'SBSMONTH13to24MARGINALROI'
module.exports.SBSMONTH13to24MARGINALREV = 'SBSMONTH13to24MARGINALREV'
module.exports.SBSMONTH13to24MARGINALCOSTS = 'SBSMONTH13to24MARGINALCOSTS'
module.exports.SBSMONTH13to24TOTALNEWPATIENT = 'SBSMONTH13to24TOTALNEWPATIENT'
module.exports.SBSMONTH13to24TOTALPRJCTEDRX = 'SBSMONTH13to24TOTALPRJCTEDRX'
module.exports.SBSMONTH13to24TOTALINCREMENTALRX = 'SBSMONTH13to24TOTALINCREMENTALRX'
module.exports.SBSMONTH13to24PROJCTEDFSWV = 'SBSMONTH13to24PROJCTEDFSWV'
module.exports.SBSMONTH13to24PROJECTEDFSWCC = 'SBSMONTH13to24PROJECTEDFSWCC'
module.exports.SBSMONTH13to24PROJECTEDFSWDBLDIP = 'SBSMONTH13to24PROJECTEDFSWDBLDIP'
module.exports.SBSMONTH13to24PROJECTEDFSWDISC = 'SBSMONTH13to24PROJECTEDFSWDISC'
module.exports.SBSMONTH13to24RELAYADMINCOST = 'SBSMONTH13to24RELAYADMINCOST'
module.exports.SBSMONTH13to24RELAYBUYDOWNCOST = 'SBSMONTH13to24RELAYBUYDOWNCOST'
module.exports.SBSMONTH13to24RELAYTOTALCOST= 'SBSMONTH13to24RELAYTOTALCOST'
module.exports.SBSMONTH13to24MCKSONADMCOST = 'SBSMONTH13to24MCKSONADMCOST'
module.exports.SBSMONTH13to24MCKSONBUYDOWNCOST = 'SBSMONTH13to24MCKSONBUYDOWNCOST'
module.exports.SBSMONTH13to24MCKSONTOTALCOST = 'SBSMONTH13to24MCKSONTOTALCOST'
module.exports.SBSMONTH13to24TOTALREV = 'SBSMONTH13to24TOTALREV'
module.exports.SBSMONTH13to24GROSSPROFIT = 'SBSMONTH13to24GROSSPROFIT'
module.exports.SBSMONTH13to24GROSSINCREMENTALPROFIT = 'SBSMONTH13to24GROSSINCREMENTALPROFIT'

module.exports.EXPORTEDDATA = 'EXPORTEDDATA'
module.exports.IMPORTEDDATA = 'IMPORTEDDATA'

module.exports.SBSEXPORTEDDATA = 'SBSEXPORTEDDATA'
module.exports.SBSIMPORTEDDATA = 'SBSIMPORTEDDATA'

module.exports.CPPEXPORTEDDATA = 'CPPEXPORTEDDATA'
module.exports.CPPIMPORTEDDATA = 'CPPIMPORTEDDATA'

module.exports.MPEXPORTEDDATA = 'MPEXPORTEDDATA'

//Access Solutions Optimized Program Parameters results Summary [USD]

module.exports.ROI_Combined = 'ROI_COMBINED'
module.exports.ROI_eVouchers_Only = 'ROI_EVOUCHER_ONLY'
module.exports.G2N_Combined = 'G2N_COMBINED'
module.exports.G2N_eVouchers_Only = 'G2N_EVOUCHER_ONLY'
module.exports.NRX_Combined = 'NRX_COMBINED'
module.exports.NRX_eVouchers_Only = 'NRX_EVOUCHER_ONLY'

module.exports.Monthly_ROI_Combined = 'MONTHLY_ROI_COMBINED'
module.exports.Monthly_ROI_eVouchers_Only = 'MONTHLY_ROI_EVOUCHER_ONLY'
module.exports.Monthly_G2N_Combined = 'MONTHLY_G2N_COMBINED'
module.exports.Monthly_G2N_eVouchers_Only = 'MONTHLY_G2N_EVOUCHER_ONLY'
module.exports.Monthly_NRX_Combined = 'MONTHLY_NRX_COMBINED'
module.exports.Monthly_NRX_eVouchers_Only = 'MONTHLY_NRX_EVOUCHER_ONLY'

module.exports.Month112_ROI_Combined = 'MONTH112_ROI_COMBINED'
module.exports.Month112_ROI_eVouchers_Only = 'MONTH112_ROI_EVOUCHER_ONLY'
module.exports.Month112_G2N_Combined = 'MONTH112_G2N_COMBINED'
module.exports.Month112_G2N_eVouchers_Only = 'MONTH112_G2N_EVOUCHER_ONLY'
module.exports.Month112_NRX_Combined = 'MONTH112_NRX_COMBINED'
module.exports.Month112_NRX_eVouchers_Only = 'MONTH112_NRX_EVOUCHER_ONLY'

module.exports.Month1324_ROI_Combined = 'MONTH1324_ROI_COMBINED'
module.exports.Month1324_ROI_eVouchers_Only = 'MONTH1324_ROI_EVOUCHER_ONLY'
module.exports.Month1324_G2N_Combined = 'MONTH1324_G2N_COMBINED'
module.exports.Month1324_G2N_eVouchers_Only = 'MONTH1324_G2N_EVOUCHER_ONLY'
module.exports.Month1324_NRX_Combined = 'MONTH1324_NRX_COMBINED'
module.exports.Month1324_NRX_eVouchers_Only = 'MONTH1324_NRX_EVOUCHER_ONLY'

module.exports.ScatterPlotCombinedKey = 'SCATTERPLOTCHARTCOMB'
module.exports.ScatterPlotCombinedKey2 = 'SCATTERPLOTCHARTCOMB2'
module.exports.ScatterPlotEVKey = 'SCATTERPLOTCHARTEV'
module.exports.ScatterPlotEVKey2 = 'SCATTERPLOTCHARTEV2'

module.exports.AccessSolutionsDataFile = 'AccessSolutionsData.json'

//============== Access Solutions State Program Global Variables, Selectors and Xpaths =================

module.exports.SBSScenTableCsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                        'nz-layout > nz-content > aad-sbs-program > div > ' +
                                        'aad-sbs-program-evaluation > aad-sbs-scenarios-input' +
                                        '-table > nz-card > div.ant-card-body > nz-table > ' +
                                        'nz-spin > div > div > nz-table-inner-default > div > ' +
                                        'table > tbody > tr:nth-child(=2=) > td:nth-child(=3=) > ' +
                                        'input'

module.exports.SBSEvalButtonSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                       'nz-layout > nz-content > aad-sbs-program > div > ' +
                                       'aad-sbs-program-evaluation > aad-sbs-scenarios-input-' +
                                       'table > nz-card > div.ant-card-body > div > ' +
                                       'div.ant-col.ant-col-sm-24.ant-col-md-16 > form > ' +
                                       'div > div:nth-child(1) > nz-space > nz-space-item > ' +
                                       'button > span'

module.exports.SBSExportButtonCsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                           'nz-layout > nz-content > aad-sbs-program > div > ' +
                                           'aad-sbs-program-evaluation > aad-sbs-program-results ' +
                                           '> nz-card > div.ant-card-body > div.ant-row.ng-star-' +
                                           'inserted > div.aad-sbs-program-results__export.ant-col.' +
                                           'ant-col-sm-24.ant-col-md-8 > button > span'

module.exports.SBSResetButtonCsSelector =  'body > aad-root > aad-layout > nz-layout > ' +
                                           'nz-layout > nz-content > aad-sbs-program > ' +
                                           'div > aad-sbs-program-evaluation > aad-sbs-' +
                                           'scenarios-input-table > nz-card > div.ant-card-' +
                                           'body > div > div.aad-scenarios__actions.ant-col.' +
                                           'ant-col-sm-24.ant-col-md-8 > nz-space > ' +
                                           'nz-space-item:nth-child(2) > button > span'

module.exports.SBSMonthlyTableCellCsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                               'nz-layout > nz-content > aad-sbs-program > ' +
                                               'div > aad-sbs-program-evaluation > ' +
                                               'aad-sbs-program-results > nz-card > ' +
                                               'div.ant-card-body > nz-spin > div > ' +
                                               'nz-tabset > div > div > div.ant-tabs-tabpane.' +
                                               'ant-tabs-tabpane-active.ng-star-inserted > ' +
                                               'aad-sbs-program-results-table > nz-table > ' +
                                               'nz-spin > div > div > nz-table-inner-default > ' +
                                               'div > table > tbody > tr:nth-child(=1=) > ' +
                                               'td:nth-child(=3=)'

module.exports.StateByState = 'body > aad-root > aad-layout > nz-layout > nz-sider > div > ul > li:nth-child(2) > div.ant-menu-submenu-title > span'
module.exports.SBSProgEvalXPath = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li[2]/div[2]/ul/li[1]/a'

module.exports.SBSSelectState = '//*[@id="state"]/nz-select-top-control/nz-select-search/input'
module.exports.SBSSelectedStateCsSelector = '#state > nz-select-top-control > nz-select-item'
module.exports.SBSSelectedState = 'TX'

module.exports.SBSSelectProductCsSelector = '#product > nz-select-top-control > nz-select-item'
module.exports.SBSSelectedProduct = '//*[@id="cdk-overlay-4"]/nz-option-container/div/cdk-virtual-scroll-viewport/div[1]/nz-option-item/div'
module.exports.SBSSelectDOSCsSelector = '#dos > nz-select-top-control > nz-select-item'
module.exports.SBSSelectDOS = '#dos > nz-select-top-control > nz-select-search > input'
module.exports.SBSSelectedDOS = '#cdk-overlay-2 > nz-option-container > div > cdk-virtual-scroll-viewport > div.cdk-virtual-scroll-content-wrapper > nz-option-item.ant-select-item.ant-select-item-option.ng-star-inserted.ant-select-item-option-active > div'

module.exports.SBSMonthlyTabs = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-sbs-program > div > aad-sbs-program-evaluation > aad-sbs-program-results > nz-card > div.ant-card-body > nz-spin > div > nz-tabset > nz-tabs-nav > div > div > div:nth-child(2) > div'
module.exports.SBSModelInputData = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li[2]/div[2]/ul/li[2]/a'
module.exports.SBSAbandonmentRateChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-sbs-program > div > aad-sbs-model-input-data > div > aad-sbs-abandonment-rate-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g.subplot.xy2 > g.plot > g > g > g > g:nth-child(11)'
module.exports.SBSCopayCardUsageChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-sbs-program > div > aad-sbs-model-input-data > div > aad-sbs-copay-card-usage-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g > g > g:nth-child(12)'
module.exports.SBSAdherenceDoTChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-sbs-program > div > aad-sbs-model-input-data > div > aad-sbs-adherence-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.plot > g > g:nth-child(2) > g > g:nth-child(12) > path'
module.exports.SBSPersRateChart = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-sbs-program > div > aad-sbs-model-input-data > div > aad-sbs-persistence-rate-graph > plotly-plot > div > div > div > svg:nth-child(1) > g.cartesianlayer > g > g.gridlayer > g.x > path:nth-child(6)'
module.exports.SBSPersRateSelectedItem = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-sbs-program > div > aad-sbs-model-input-data > div > aad-sbs-persistence-rate-graph > div > nz-select > nz-select-top-control > nz-select-item'

//============== Access Solutions CP Program Global Variables - csselectors and xpaths =============

module.exports.CPPEvalButtonSelector = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-cp-model > div > aad-cp-model-evaluation > aad-cp-model-input-table > nz-card > div.ant-card-body > div > div.ant-col.ant-col-sm-24.ant-col-md-16 > form > div > div:nth-child(1) > nz-space > nz-space-item > button'

module.exports.CPProgResButCsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                        'nz-layout > nz-content > aad-cp-model > ' +
                                        'aad-cp-model-product-selection > nz-card > ' +
                                        'div.ant-card-body > div:nth-child(1) > ' +
                                        'div.ant-col.ant-col-sm-24.ant-col-md-2 > ' +
                                        'nz-space > nz-space-item > button > span'

module.exports.CPProgResBut2CsSelector = 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > ' +
                                         'aad-cp-model > div > aad-cp-model-evaluation > ' +
                                         'aad-cp-model-input-table > nz-card > ' +
                                         'div.ant-card-body > div > div.aad-scenarios__' +
                                         'actions.ant-col.ant-col-sm-24.ant-col-md-8 > ' +
                                         'nz-space > nz-space-item:nth-child(2) > button > ' +
                                         'span'

module.exports.CPProgrExportButSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                       'nz-layout > nz-content > aad-cp-model > div > ' +
                                       'aad-cp-model-evaluation > aad-cp-model-results > ' +
                                       'nz-card > div.ant-card-body > div.ant-row.ng-star-' +
                                       'inserted > div.aad-cp-model-results__export.ant-col.' +
                                       'ant-col-sm-24.ant-col-md-8 > button > span'

module.exports.CPProgScenTableCsSelector =  'body > aad-root > aad-layout > nz-layout > nz-layout > '+
                                            'nz-content > aad-cp-model > div > aad-cp-model-evaluation ' +
                                            '> aad-cp-model-input-table > nz-card > div.ant-card-body > ' +
                                            'nz-table > nz-spin > div > div > nz-table-inner-default > ' +
                                            'div > table > tbody > ' + 
                                            'tr:nth-child(=' + rows + '=) > ' + 
                                            'td:nth-child(=' + columns + '=) > input'

module.exports.CPPResultsTableCsSelector = 'body > aad-root > aad-layout > ' +
                                           'nz-layout > nz-layout > nz-content > ' +
                                           'aad-cp-model > div > aad-cp-model-evaluat' + 
                                           'ion > aad-cp-model-results > nz-card > ' +
                                           'div.ant-card-body > nz-spin > div > ' +
                                           'nz-tabset > div > div > div > aad-cp-model-' +
                                           'results-table > nz-table > nz-spin > div > ' +
                                           'div > nz-table-inner-default > div > table > ' +
                                           'tbody > tr:nth-child(=33=) > td:nth-child(=8=)'

module.exports.CPProgBellIconCsSelector = 'body > aad-root > aad-layout > ' +
                                          'nz-layout > nz-layout > nz-header > ' +
                                          'div > aad-program-queue > div > ' +
                                          'nz-badge > button > i > svg'

module.exports.CPProgramCsSelector = 'body > aad-root > aad-layout > nz-layout > nz-sider > ' +
                                     'div > ul > li:nth-child(3) > div.ant-menu-submenu-title > span'

module.exports.CPProgramEvalXPath = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li[3]/div[2]/ul/li/a'
module.exports.ProgramTermCsSelector = '#programTerm > div > div:nth-child(1) > input'

module.exports.EarltCohMthCsSelector = '#cohortStartDate > div > div > input'
module.exports.RelDatMthCsSelector = '#relayDate > nz-select-arrow > i > svg'
module.exports.CPProgParamTitle = 'body > aad-root > aad-layout > nz-layout > nz-layout > ' +
                                  'nz-content > aad-cp-model > aad-cp-model-product-selection ' +
                                  '> nz-card > div.ant-card-head.ng-star-inserted > div > div'

module.exports.ProgramStartEndDatesDelim = 'Program period'
module.exports.ProgTermStartDate = '2022-07'//'2022-06'
module.exports.ProgTermEndDate = '2023-06'//'2022-12'
module.exports.EarliestCohortDate = '2021-07'//'2021-01'
module.exports.RelDatMthDate = 'June 2022'
module.exports.RelDatMthDateMonthNotSelected = 'June 2022-false'
module.exports.RelDatMothDefaultValue = 'Select Month'

module.exports.CPPExecutionMsg = 'cp-execution.csv'
module.exports.CPPExecutionMsgDelim = 'CP Program execution '

module.exports.CPPDELIM = '<<CPPFEATURE>>'
module.exports.CPPANNUALTABLEKEY = 'CPPANNUAL-'

module.exports.CPPANNUALRESULTSFILE = 'CPP_Annual_Table_Results_QA.txt'

module.exports.CPProgScenRows = rows
module.exports.CPProgScenColumns = columns

//============== Access Solutions Monthly Projections Global Variables - csselectors and xpaths =============

module.exports.MPEvalButtonSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                      'nz-layout > nz-content > aad-ntt-program > ' +
                                      'div > aad-ntt-monthly-projections > aad-ntt-' +
                                      'program-single-scenario-input > nz-card > ' +
                                      'div.ant-card-body > div.aad-actions-row.ng-' +
                                      'star-inserted > form > div > div:nth-child(1) > ' +
                                      'nz-space > nz-space-item > button'

module.exports.MPResButCsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                    'nz-layout > nz-content > aad-ntt-program > ' +
                                    'div > aad-ntt-monthly-projections > aad-ntt-' +
                                    'program-single-scenario-input > nz-card > '+
                                    'div.ant-card-body > div.aad-actions-row.ng-'+
                                    'star-inserted > nz-space > nz-space-item:nth-' +
                                    'child(2) > button > span'

module.exports.MPExportButSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                     'nz-layout > nz-content > aad-ntt-program > ' +
                                     'div > aad-ntt-monthly-projections > aad-ntt-' +
                                     'monthly-projections-results > nz-card > ' +
                                     'div.ant-card-body > div.ant-row.ng-star-' +
                                     'inserted > div.aad-ntt-program-results__export.' +
                                     'ant-col.ant-col-sm-24.ant-col-md-8 > button'

module.exports.MPScenTableCsSelector =  'body > aad-root > aad-layout > nz-layout > ' +
                                        'nz-layout > nz-content > aad-ntt-program > ' +
                                        'div > aad-ntt-monthly-projections > aad-ntt-'+
                                        'program-single-scenario-input > nz-card > ' +
                                        'div.ant-card-body > div.aad-monthly-' +
                                        'projections-input.ng-star-inserted > ' +
                                        'nz-table > nz-spin > div > div > nz-table-' +
                                        'inner-default > div > table > tbody > tr:nth-' +
                                        'child(=2=) > td:nth-child(=2=) > input'

module.exports.MPResultsTableCsSelector = 'body > aad-root > aad-layout > nz-layout > ' +
                                          'nz-layout > nz-content > aad-ntt-program > ' +
                                          'div > aad-ntt-monthly-projections > aad-ntt-' +
                                          'monthly-projections-results > nz-card > div.ant' +
                                          '-card-body > nz-spin > div > nz-tabset > div > ' +
                                          'div > div.ant-tabs-tabpane.ant-tabs-tabpane-active.' +
                                          'ng-star-inserted > aad-ntt-monthly-projections-results' +
                                          '-table > nz-table > nz-spin > div > div > nz-table-inner-' +
                                          'scroll > div > table > tbody > tr:nth-child(=32=) > ' +
                                          'td:nth-child(=10=)'

module.exports.MPRefillsIncludedTableCsSelector = 'body > aad-root > aad-layout > ' +
                                                  'nz-layout > nz-layout > ' +
                                                  'nz-content > aad-ntt-program > ' +
                                                  'div > aad-ntt-monthly-projections > ' +
                                                  'aad-ntt-monthly-projections-results > ' +
                                                  'nz-card > div.ant-card-body > nz-spin > ' +
                                                  'div > nz-tabset > div > div > div.ant-tabs-' +
                                                  'tabpane.ng-star-inserted.ant-tabs-tabpane-' +
                                                  'active > aad-ntt-monthly-projections-results-' +
                                                  'table > nz-table > nz-spin > div > div > ' +
                                                  'nz-table-inner-scroll > div > table > tbody > ' +
                                                  'tr:nth-child(=26=) > td:nth-child(=8=)'

module.exports.CsvMPFileToImport = 'MP_Jardiance_30_first3months_2021.csv'//='monthly_projections_input_sample.csv'

module.exports.MonthlyProjectionsEvalXPath = '/html/body/aad-root/aad-layout/nz-layout/nz-sider/div/ul/li[1]/div[2]/ul/li[4]/a'
module.exports.MPRefillsIncludedXPath = '/html/body/aad-root/aad-layout/nz-layout/nz-layout/nz-content/aad-ntt-program/div/aad-ntt-monthly-projections/aad-ntt-monthly-projections-results/nz-card/div[2]/nz-spin/div/nz-tabset/nz-tabs-nav/div/div/div[2]/div'

module.exports.MPExecutionMsg = 'monthly-projections.csv'
module.exports.MPExecutionMsgDelim = 'Monthly Projection execution '

module.exports.MPDELIM = '<<MPFEATURE>>'

module.exports.MPREFILLSTABLEKEY = 'MPNOREFILLS-'
module.exports.MPREFILLSNOTINCLTABLEKEY = 'MPREFILLSINCL-'

module.exports.MPNOREFILLSRESULTSFILE = 'MP_NoRefills_Projection_Results_QA.txt'
module.exports.MPREFILLSINCLRESULTSFILE = 'MP_RefillsIncl_Projection_Results_QA.txt'

module.exports.MPImportMsg = '.csv was successfully imported.'
module.exports.MPProgrParamDelim = 'Program Parameters'

module.exports.MPParamTitle = 'body > aad-root > aad-layout > nz-layout > ' +
                              'nz-layout > nz-content > aad-ntt-program > ' +
                              'div > aad-ntt-monthly-projections > aad-ntt-program-' +
                              'single-scenario-input > nz-card > div.ant-card-head.' +
                              'ng-star-inserted > div > div'

module.exports.MPScenarioValues = "10,175,34.99,60,125,40.01,122.02"
module.exports.MPNetPricePosValue = '122.02'

// ======================= Valerie Global variables ===========================

module.exports.DetailsButtonXpath = '/html/body/app-root/layout-main/div/nz-layout/nz-layout/nz-content/div/div/app-dashboard-cohorts/div[2]/div[1]/app-cohort-container/div/div/div/div/a'
module.exports.AgeAndSexDistSelector = '#ageGenderBar > svg > g:nth-child(2) > g.c3-chart > g.c3-event-rects > rect'

module.exports.MembersIdentUSMapSelector = 'body > app-root > layout-main > div > nz-layout ' +
                                        '> nz-layout > nz-content > div > div > ' +
                                        'app-cohort-detail > div > div.col-lg-9.col-9.col-sm-' +
                                        '9.col-xl-9 > div.row.justify-content-center > div > ' +
                                        'div > div.card-body > app-valerie-markers-map > ' +
                                        'google-chart > div > div > div:nth-child(1) > div > ' +
                                        'svg > g > g:nth-child(2) > g:nth-child(3) > ' +
                                        'g:nth-child(=28=) > circle'

module.exports.ValerieDataFile = 'ValeriePageData.json'

//========= VALERIE DASHBOARD elements csselectors IDs ==================================

module.exports.ViewDashboardButton = 'VIEW DASHBOARD'
module.exports.PredictedT2DCVD = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > div.vd-cohort-results.ant-card-grid.ng-star-inserted > div:nth-child(1) > nz-statistic > div > div.ant-statistic-content > nz-statistic-number > span > span.vd-cohort-result-value.ng-star-inserted'
module.exports.PredictedT2DCVDpct = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > div.vd-cohort-results.ant-card-grid.ng-star-inserted > div:nth-child(1) > nz-statistic > div > div.ant-statistic-content > nz-statistic-number > span > span:nth-child(1)'
module.exports.SubOptimalTreatment = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > div.vd-cohort-results.ant-card-grid.ng-star-inserted > div:nth-child(2) > nz-statistic > div > div.ant-statistic-content > nz-statistic-number > span > span.vd-cohort-result-value.ng-star-inserted'
module.exports.SubOptimalTreatmentpct = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > div.vd-cohort-results.ant-card-grid.ng-star-inserted > div:nth-child(2) > nz-statistic > div > div.ant-statistic-content > nz-statistic-number > span > span:nth-child(1)'
module.exports.OnDiabetesMed = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > vd-input-info > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td.vd-cohort-population__value'
module.exports.OnDiabetesMedPct = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > vd-input-info > div > div:nth-child(3) > table > tbody > tr:nth-child(2) > td.vd-cohort-population__value'
module.exports.TotalMembers = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div:nth-child(1) > vd-cohort-view > nz-card > div.ant-card-body > vd-input-info > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td.vd-cohort-population__value'
module.exports.Formulary = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div.ant-col.ant-col-12.vd-cohort-list__item.ng-star-inserted > vd-cohort-view > nz-card > div.ant-card-body > vd-input-info > div > div:nth-child(1) > input:nth-child(3)'
module.exports.Client = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div.ant-col.ant-col-12.vd-cohort-list__item.ng-star-inserted > vd-cohort-view > nz-card > div.ant-card-body > vd-input-info > div > div:nth-child(1) > input:nth-child(2)'
module.exports.NumberOfCohorts = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > nz-tabset > nz-tabs-nav > div.ant-tabs-nav-wrap > div > div.ant-tabs-tab.ng-star-inserted.ant-tabs-tab-active > div > a'
module.exports.NumberOfiles = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > nz-tabset > nz-tabs-nav > div.ant-tabs-nav-wrap > div > div:nth-child(1) > div > a'
module.exports.PredictionPeriod = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div.ant-col.ant-col-12.vd-cohort-list__item.ng-star-inserted > vd-cohort-view > nz-card > div.ant-card-body > div:nth-child(5) > span.vd-cohort-pp-value'

module.exports.PrevGuideLineSub = '#pie-chart > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-arcs > g.c3-chart-arc.c3-target.c3-target-sub-optimal > text'
module.exports.PrevGuideLine = '#pie-chart > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-arcs > g.c3-chart-arc.c3-target.c3-target-guideline > text'
module.exports.AgeGenderChart = '#ageGenderBar > svg > g:nth-child(2) > g.c3-chart > g.c3-event-rects > rect'
module.exports.AgeGenderChartToolTipM = '#ageGenderBar > div > table > tbody > tr.c3-tooltip-name--Male'
module.exports.AgeGenderChartToolTipF = '#ageGenderBar > div > table > tbody > tr.c3-tooltip-name--Female'

module.exports.MemberProfileButton = 'Profile'
module.exports.MemberID = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td.vd-cohort-member-list__value.ant-table-cell'
module.exports.MemberGLTherapy = //'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > span'
                                 '#pie-chart > svg > g:nth-child(2) > g.c3-chart > g.c3-chart-arcs'
module.exports.MemberGender = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td:nth-child(4)'
module.exports.MemberAge = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td:nth-child(5)'
module.exports.MemberRegion = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td:nth-child(6)'
module.exports.MemberPlanType = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td:nth-child(7)'
module.exports.MemberStatus = 'body > vd-root > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-detail > div > div > div.vd-cohort-dashboard__pr.ant-col > nz-card:nth-child(2) > div.ant-card-body > vd-member-list > nz-table > nz-spin > div > div > nz-table-inner-default > div > table > tbody > tr:nth-child(1) > td:nth-child(8)'

module.exports.CohortSummary = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > vd-cohorts-container > vd-cohort-list > div > div > div.ant-col.ant-col-12.vd-cohort-list_item.ng-star-inserted > vd-cohort-view > nz-card > div.ant-card-body > div:nth-child(4) > a'
module.exports.CohortSummaryDataClass = 'td.vd-cohort-summary__value'

// Cohort elements Position in the cohort table
module.exports.CohortSummaryMInc = 0
module.exports.CohortSummaryMExc = 1
module.exports.CohortSummaryPS = 2
module.exports.CohortSummaryForm = 3
module.exports.CohortSummaryAG = 4
module.exports.CohortSummarySex = 5
module.exports.CohortSummaryRegion = 6

// Cohort JSON keys included in the ValeriePagedata.json file
module.exports.CohortMInc = 'MEDICALINCLUSION'
module.exports.CohortMExc = 'MEDICALEXCLUSION'
module.exports.CohortPS = 'PROVIDERSPECIALITY'
module.exports.CohortForm = 'FORMULARY'
module.exports.CohortAG = 'AGEGROUP'
module.exports.CohortSex = 'SEX'
module.exports.CohortRegion = 'REGION'

//Amplify Home Page Ids

module.exports.ValLogin = 'test'
module.exports.ValPasswd = 'Test111111!'

module.exports.ValUserNameField = 'input[name=username]'
module.exports.ValPasswordNameField = 'input[name=password]'

module.exports.ValSignInButtonAmplifySlot = '[slot="sign-in"]'
module.exports.ValSignInButton = '[data-test="sign-in-sign-in-button"]'
module.exports.ValSignInButtonLabel = 'Sign In'
module.exports.ValSignInHeader = '[data-test="sign-in-header-section"]'

module.exports.ValSignErrorHeader = '[data-test="authenticator-error"]'
module.exports.ValSignErrorClass = '[class="toast"]'
module.exports.ValSignInError = 'Incorrect username or password.'

module.exports.ValAmplifyHydratedClass = '[class="hydrated"]'
module.exports.ValSignOutButton = '[data-test="sign-out-button"]'
module.exports.ValSignOutButtonLabel = 'Logout'
module.exports.ValSignOutConfLabel = 'Sign in to your account'

module.exports.ValSignInConfLabel = 'Valerie'

module.exports.ValLayOutMenuIcon = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-header > ul > div > a'

module.exports.Tab = 'Tab'
module.exports.Enter = 'Enter'
module.exports.ArrowDown = 'ArrowDown'

//Valerie Upload File(s)
module.exports.ADDFILESBUTTON = 'body > vd-root > vd-layout > amplify-auth-container > amplify-authenticator > nz-layout > nz-content > div > vd-dashboard > nz-tabset > nz-tabs-nav > div.ant-tabs-extra-content.ng-star-inserted > vd-file-select > form > button > span'

module.exports.RunScriptToUploadFilesToVal = 'TypekeysToWindow.vbs'
module.exports.ValerieCsvFilesFolder = 'cypress/ValerieCsvFiles/'
module.exports.WindExplValCsvFilesFolder = ' "\\OneDrive - Boehringer Ingelheim\\Escritorio\\CypressAutomation\\cypress\\ValerieCsvFiles"'

module.exports.MissingColumnsCsvFileName = 'Valerie_Missing_Column.csv'
module.exports.BadSampleCsvFileName = 'Valerie_Bad_Sample.csv'
module.exports.GoodSampleCsvFileName = 'Valerie_Good_Sample.csv'
module.exports.DefaultCsvOutputFileName = 'valerie_L1_sample_TEST6.csv'
module.exports.DefaultCsvInputFileName = 'valerie_L1_sample_TEST8.csv'
module.exports.PreCheckFileName = 'precheck.json'

module.exports.UploadedFilesMsg = 'YOUR FILES (3)'

//Valerie AWS S3 Commands
module.exports.TotalMembersCmd = 'aws s3 cp s3://pbm-output-fn-872182989319-us-east-1/precheck_msg/valerie_L1_sample_TEST6.csv/precheck.json -'
module.exports.PredictionsAWSCmd = 'aws s3 cp s3://pbm-output-fn-872182989319-us-east-1/predictions/valerie_L1_sample_TEST6.csv/main_consume_results_pred.csv -'
module.exports.MembersProfileCmd = 'aws s3 cp s3://pbm-output-fn-872182989319-us-east-1/member_profile/valerie_L1_sample_TEST6.csv/main_consume_results_mem_pro.json -'
module.exports.FileUploadLocCmd = 'aws s3 cp s3://pbm-input-fn-872182989319-us-east-1/valerie_L1_sample_TEST7.csv -'

module.exports.S3LSINCMD = 'aws s3 ls s3://pbm-input-fn-872182989319-us-east-1/'
module.exports.S3LSOUTCMD = 'aws s3 ls s3://pbm-output-fn-872182989319-us-east-1/precheck_msg/'
module.exports.S3CATCMD = 'aws s3 cp s3://pbm-output-fn-872182989319-us-east-1/precheck_msg/'

//=============================== SET BI PROXY ENV Variables CMDs ================================

module.exports.SETBIPROXYCMD = 'set http_proxy=http://appaccess-zscaler.boehringer.com:80/&set https_proxy=http://appaccess-zscaler.boehringer.com:80/&set proxy=http://appaccess-zscaler.boehringer.com:80/'
module.exports.DELETEPROXYCMD = 'set http_proxy=&set https_proxy=&set proxy='