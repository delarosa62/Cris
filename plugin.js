'use strict'

const puppeteer = require('puppeteer')
const Plugin= require('./PluginVariables')
const fs = require('fs');
const { exec } = require('child_process');

let pageData = Date.now() + '';

let sbs = false
let cp = false
let mp = false

let pageToken = ''
let browser = ''
let page = ''

let NetPriceClassName0 = ''
let NetPriceClassNameNeg = ''

let SBSNetPriceClassName0 = ''
let SBSNetPriceClassNameNeg = ''

let CPPNetPriceClassName0 = ''
let CPPNetPriceClassNameNeg = ''

let MPNetPriceClassName0 = ''
let MPNetPriceClassNameNeg = ''

let MetricsValuesList = ''
let MetricsWarningValuesList = ''

let ResetPngFile = ''
let ResetButtonSelector = ''

let MetricsValueNotInRange = false
let MetricsValueInRange = false
let MetricsWarningScenarios = false

const GreenIndicator = Plugin.GreenIndicator
const RedIndicator = Plugin.RedIndicator

const green = Plugin.green
const red = Plugin.red

const pass = Plugin.pass
const fail = Plugin.fail

module.exports.GetValUrlTokenIdFromLocalStorage = async function GetUrlTokenIdFromLocalStorage(url) {

try { 

 await LaunchUrl(url)

 for (let i = 1; i <=6; i++) {
      await page.keyboard.press(Plugin.Tab);
 }

  await page.keyboard.type(Plugin.ValLogin);
  await page.keyboard.press(Plugin.Tab);

  await page.keyboard.type(Plugin.ValPasswd);

  await page.keyboard.press(Plugin.Tab);
  await page.keyboard.press(Plugin.Tab);

  await page.keyboard.press(Plugin.Enter);
  await page.waitForTimeout(3000);

  await page.reload()
  await page.waitForTimeout(5000);

  let token = await page.evaluate(() => localStorage.getItem("CognitoIdentityServiceProvider.15fvofuos91ritr2fumnafvdi0.test.idToken"));

  pageToken = ' ===' + token

  await UploadFilesToValerie()

  await LogAndClose()

  return pageToken

}

    catch(e) {

        await browser.close();
        return e + '-----' + pageToken

    }
}

module.exports.FromExternalBrowser = async function VisitWithSSO(url) {

try {

    await CleanUp()
    await LaunchUrl(url)

   pageData = await GetWelcomeMsg() + '==='

   await SelectProductAndDOS()

   await PopulateTable(page, Plugin.ScenariosTableCsselector,
                             Plugin.EvaluateButtonSelector,
                             Plugin.MonthlyTableCellCsselector,
                             Plugin.ScenariosRows, 
                             Plugin.ScenariosColumns,
                             Plugin.PopulatedRows,
                             Plugin.PngNetPricesFiles
                      )

   await ClickModelInputData(Plugin.ModelInputData)

   pageData = pageData +

              await GetDataAbandonmentRateChart(Plugin.AbandonmentRateChart, Plugin.AbandonmentRateChartPng) + '===' +
              await GetDataCopayCardUsageChart(Plugin.CopayCardUsageChart, Plugin.CopayCardUsageChartPng) + '===' +
              await GetDataAdheranceDoTChart(Plugin.AdherenceDoTChart, Plugin.AdherenceDoTChartPng) + '===' +
              await GetDataPersistencetRateChart(Plugin.PersRateChart, Plugin.PersRateChartPng, Plugin.PersRateSelectedItem) + '==='

              await ClickOptimizedProgram()

    pageData = pageData +

              await GetDataCombScatterPlot() + '===' +
              await GetDataCombScatterPlot2() + '===' +
              await GetDataEVouchersScatterPlot() + '===' +
              await GetDataEVouchersScatterPlot2() + '===' +
              await GetSelectedProduct() + '===' +
              await GetSelectedDOS () + '===' +
              '<<await GetSelectedOptimization()>>' + '===' +
              '<<await GetSelectedExtent()>>' + '===' +

              await ProcessMonthlyTable(Plugin.MonthlyTableCellCsselector) +
              await ProcessMonth1to12Table(Plugin.MonthlyTabs, Plugin.MonthlyTableCellCsselector) +
              await ProcessMonth13to24Table(Plugin.MonthlyTabs, Plugin.MonthlyTableCellCsselector) + '===' +

              await ExportScenarios(Plugin.ExportButtonSelector) + '===' +
              await ImportScenarios(0, Plugin.ImportedDataPng) + '===' +

              await GetOptProgParamResultsTable() + '===' +

              await GetOptProgMonthlyResultsTable() +
              await GetOptProgMonth112ResultsTable() +
              await GetOptProgMonth1324ResultsTable() + '===' +

              NetPriceClassName0 + '===' + 
              NetPriceClassNameNeg + '==='

              await MetricsWarningCheck(Plugin.EvaluateButtonSelector, Plugin.MonthlyTableCellCsselector, Plugin.MetricsOutOfRangePng)

    pageData = pageData +

              MetricsValueInRange + '===' + 
              MetricsValueNotInRange + '==='

    pageData = pageData +

              await NTTProgStateByStateEval() +
              await CPProgramNavigation() +
              await MPNavigation()

              await CreateHtmFiles()
console.log('\n>>>>>>>>> MP PageData: ' + pageData) 
              return pageData

   } catch(e) {

                await browser.close();
                console.log('>>> pageData Exception: ' + ' \n========\n ' + e)
                return e + '-----' + pageData

            }

}

function CurrentCellSelector(Csselector, CurrentRow, CurrentColumn) {

    let CsselectorPortion = Csselector.split('=')
    let selector = CsselectorPortion[0] + CurrentRow + CsselectorPortion[2] + CurrentColumn + CsselectorPortion[4]

    return selector

}

function CurrentSelector(Csselector, CurrentPos) {

    let CsselectorPortion = Csselector.split('=')
    let selector = CsselectorPortion[0] + CurrentPos + CsselectorPortion[2]

    return selector

}

async function LaunchUrl(url) {

try {

    browser = await puppeteer.launch(
    { 
      headless: false, 
      executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", //"C:\\Users\\delarosc\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",
      args: ['--start-maximized'],
      defaultViewport: {
        width: 1800,
        height: 800
    }
    })

    var context = await browser.defaultBrowserContext();
    await context.overridePermissions(url, ['clipboard-read']);

    page = await browser.newPage();

    await page.waitForTimeout(1000);

    await page.goto(url, { waitUntil: Plugin.loaded } );

    await page.waitForTimeout(5000)

} catch(e) { return e }

}

async function LogData(page, ScreenName, delay, TakeScreenshot, FullPage) {
  
  try {

    await page.content();

    if (TakeScreenshot) { ScreenCapture(page, ScreenName, delay, FullPage) }

    await page.waitForTimeout(1000);
  }

  catch {

    console.log('>>>>> Screen Capture Exception: ' + e)
  }

}

async function IsTextIncludedInPage(text) {

    let CurrentPageText = await page.$eval('*', el => el.innerText)

    if (CurrentPageText.includes(text)) {

        return true
    }

    else {

        return false
    }
}

async function ClickOnLink(page, TextToClickOn, ElementPosition) {

    const GetElements = await page.$x("//a[contains(., '" + TextToClickOn + "')]");

    await GetElements[ElementPosition].click();
    await LogData(page, Plugin.ClickDeleteLink, 1, true, true);

}

async function ClickElementXpath(page, ElementXpath) {

    const elements = await page.$x(ElementXpath)
    await elements[0].click() 
}

async function AddRows(page, AddButtonCsselector, NumberOfClicks) {

    await ClickButton(page, AddButtonCsselector, NumberOfClicks);
    await LogData(page, Plugin.AddedRows, 0, true, true);

}

async function GetInitValuesFromTable(TableSelector, Value, TableDataItem) {

    try {

        let ValidValue = 0
        let CsSelector = ''

        if (TableDataItem === 0) { /*This will return a valid row 
                                    (Initial Row Number = 0 or 1)*/
    
            CsSelector = CurrentCellSelector(TableSelector, Value, 5)

        }

        else { //returns a valid column (Initial Column Number = 0 or 1)

            CsSelector = CurrentCellSelector(TableSelector, 5, Value)

        }

        ValidValue = await GetElementValueByCsselector(CsSelector)

        return Value

    }

    catch(e) {

        return Value + 1 

    }

}

async function GetTableNumbersOfRowsAndColumns(TableSelector, initRow, initCol) {

    try {

        let nRows = initRow
        let nCols = initCol

        let ValidData = ''
        let CsSelector = ''

        let TotalNumberOfColumnsNotFound = true

        for (let crow=initRow; crow<100; crow++) {

            try {

                nRows = crow
                CsSelector = CurrentCellSelector(TableSelector, crow, 5)
                ValidData = await GetElementValueByCsselector(CsSelector)
           }

            catch(e) {

                nRows = nRows-1
                break
            }

            if (TotalNumberOfColumnsNotFound) {

             for(let ccol = initCol; ccol<100; ccol++) {

                try {

                    nCols = ccol
                    CsSelector = CurrentCellSelector(TableSelector, 5, ccol)
                    ValidData = await GetElementValueByCsselector(CsSelector)

                }

                catch(e){

                    nCols = nCols-1
                    TotalNumberOfColumnsNotFound = false
                    break
                }
              }
            }
        }

        return nRows + '-' + nCols
    }

    catch(e){

        console.log('>>>>> Exception Error Getting Table Number(s) of Rows and Columns: ' + e)

    }
}

async function GetValuesFromScenTable() {

    let pagetextlines = ''
    let scendata = '';
    let pagetext = ''

    pagetext = await GetPageContent()

    pagetextlines = pagetext.split('\n')

    for(let i = 0; i < pagetextlines.length; i++) {

        if (!isNaN(Number(pagetextlines[i]))) {

            scendata = scendata + Number(pagetextlines[i]) + '|'

        }

    }

    return '|' + scendata

}

async function GetPageContent() {

    await page.keyboard.down('Control');
    await page.keyboard.press('KeyA');
    await page.waitForTimeout(1000);
    await page.keyboard.press('KeyC');
    await page.keyboard.up('Control');

    await ClickButton(page, Plugin.PageHearderSelector, 1)

    const pagetext =  await page.evaluate(() => navigator.clipboard.readText())

    return pagetext
}

async function PopulateTable(page, Csselector, EvalButSelector, TableCellSelector, NumberOfRows, NumberOfColumns, PngFileName, PngNetPricesFiles) {

//CsSelector is the csselector of the scnarios table

try {

    let value = Plugin.ScenarioValues.split(',')
    let csselector = Plugin.csselector
    let i = 0

    TableCellSelector = CurrentCellSelector(TableCellSelector, 20, 6);

    if(cp) {


        NumberOfRows = NumberOfRows - 1

    }

    for(let columns = 3;  columns <= NumberOfColumns+2; columns++) {

        i = 0

        //If this is the Scenarios Table included in the CP Program/Program Evaluation page,
        //this condition statement will be met

        if(cp) {

            if (columns < 5 ) {

                columns = columns + 2
            }

            value = Plugin.MPScenarioValues.split(',')

        }

        else if(mp) {

            if (columns === 3 ) {

                columns = columns - 1
            }

            NumberOfColumns = 1

            value = Plugin.MPScenarioValues.split(',')

        }

        for(let rows = 2; rows <= NumberOfRows+4; rows++) {

            if (rows == 4) { rows = 5 }
            if (rows == 9) { if(!cp) { rows = 10 } }

            csselector = CurrentCellSelector(Csselector, rows, columns);

            await page.type(csselector, value[i])

            await page.waitForTimeout(50);
            i = i+1

        }

        if (mp) { columns = columns + 1 }

    }

        let PngNetPrice0 = PngNetPricesFiles.split(' ')[0]
        let PngNetPriceNeg = PngNetPricesFiles.split(' ')[1]

        NetPriceClassName0 = await GetNetPriceClassNameError( csselector, 
                                                              Plugin.NetPriceInitValue, 
                                                              PngNetPrice0
                                                            )

        NetPriceClassNameNeg = await GetNetPriceClassNameError( csselector, 
                                                                Plugin.NetPriceNegValue, 
                                                                PngNetPriceNeg
                                                              )


    await ClickEvaluateButton(EvalButSelector, TableCellSelector)

    await LogData(page, PngFileName, 1, true, true)

}  catch(e) { return e }
}

async function ClickEvaluateButton(selector, table_selector) {

try {
    
    if (cp) {

        await ClickButton(page, 'body > aad-root > aad-layout > nz-layout > nz-layout > nz-content > aad-cp-model > div > aad-cp-model-evaluation > aad-cp-model-input-table > nz-card > div.ant-card-head.ng-star-inserted > div > div', 1)
        await page.keyboard.press(Plugin.Tab);
        await page.keyboard.press(Plugin.Tab);
        await page.keyboard.press(Plugin.Enter);

    }

    else {
        await ClickButton(page, selector, 1)
    }

    const csselector = table_selector

    if (mp) {

        await page.waitForTimeout(420000) 
    }

    else if(cp) {

        await page.waitForTimeout(1020000)
    }

    await page.waitForSelector(csselector)

    await scrollToBottom(page)

    let selector_value = '-'
    let timeout = 10

    /*
        Keep looping every 3 seconds until some real values are found in this particular cell 
        (row = 6, column = 20). 
    
        Sometimes it takes a little longer than expected to write data to the Program results 
        table. Let's give it a timeout of 30 seconds. If no real data have been written to this table
        in 30 seconds, we will assume that there is a time response issue
    */

    for(let i = 1; i <= timeout; i++) {

        selector_value = await GetElementValueByCsselector(csselector)

        if (selector_value != '-') {
            break;
        }

        await page.waitForTimeout(3000);
    }

} 

catch(e) { 
            console.log('>>>> Click Evaluate Button Exception: ' + e)
            return '>>>> Click Evaluate Button Exception: ' + e
         }
}

async function GetTableRowsAndColumns(table_selector) {

    try {

        let InitRow = 0
        let InitColumn = 0
        let TotalNoOfRows = 0
        let TotalNoOfColumns = 0
        let TotalNumberOfRowsndColumns = 0

        let TableData = ''
        let CurrentRowData = ''

        let CsSelector = ''
        let CurrentCellValue = ''

        InitRow = await GetInitValuesFromTable(table_selector, InitRow, 0)
        InitColumn = await GetInitValuesFromTable(table_selector, InitColumn, 1)

        TotalNumberOfRowsndColumns = await GetTableNumbersOfRowsAndColumns(table_selector, InitRow, InitColumn)

        TotalNoOfRows = TotalNumberOfRowsndColumns.split('-')[0]
        TotalNoOfColumns = TotalNumberOfRowsndColumns.split('-')[1]

        //Get table table data now that you got the initial row and column values
        //and also the total number of rows and columns from the given table

        for(let crow=InitRow; crow<=TotalNoOfRows; crow++) {

            if (crow > InitRow) {

                TableData = TableData + CurrentRowData + '\n'
                CurrentRowData = ''

            }

            for(let ccol=InitColumn; ccol<=TotalNoOfColumns; ccol++) {

                CsSelector = CurrentCellSelector(table_selector, crow, ccol)
                CurrentCellValue = await GetElementValueByCsselector(CsSelector)

                if(mp && CurrentCellValue === '') {
                    break;
                }

                CurrentRowData = CurrentRowData + CurrentCellValue + '|'

            }
        }

        TableData = TableData + CurrentRowData
        /*Tmp = ''

        for(let i=0; i<=TableData.length()-1; i++) {

             TableData = TableData.replace(/\|\|/g, '|')
             if (TableData.includes('||'))
        }

        TableData = TableData.replace(/\|\|\r\n/g, '')*/

        return TableData

    }
    catch(e) {

        console.log('>>>>> Exception Error Getting Table Data: ' + e)
        return '>>>>> Exception Error Getting Table Data: ' + e
    }

}

async function SelectProduct() {

try {

    let product = Plugin.SelectedProduct

    if (cp) {

        product = Plugin.SelectedProduct.replace(/nz-option-item\[2\]/g, 'nz-option-item[1]')

    }
    
    await ClickElementXpath(page, Plugin.SelectProduct)
    await ClickElementXpath(page, product)

    await page.waitForTimeout(15000);


} catch(e) { return e }

}

async function SelectDOS() {

try {

    await ClickElementXpath(page, Plugin.SelectDOS)
    await ClickElementXpath(page, Plugin.SelectedDOS)

    await page.waitForTimeout(3000);

} catch(e) { return e }

}

async function SelectProductAndDOS() {

    //Select Product from dropdown menu
    await ClickElementXpath(page, Plugin.SelectProduct)

    if(!cp) { await page.keyboard.press(Plugin.ArrowDown); }
    await page.keyboard.press(Plugin.Enter);
    await page.waitForTimeout(5000)
        
    //Select DOS from dropdown menu
    await ClickButton(page, Plugin.SBSSelectDOS, 1)
   
    await page.keyboard.press(Plugin.Enter);
    await page.waitForTimeout(3000)
}

async function SelectOptObj() {

    await ClickElementXpath(page, Plugin.SelectOptimization)
    await ClickElementXpath(page, Plugin.SelectedOptimization)

    await page.waitForTimeout(3000);

}

async function SelectExtent() {

    await ClickButton(page, Plugin.SelectExtent, 1);
    await ClickButton(page, Plugin.SelectedExtent, 1)

    await page.waitForSelector(Plugin.OptObjChart);

}

async function SelectPersRateDropDownValue(ElementPos, DropDownSelector) {

    try {

        let FirstElementPosCsSelector = DropDownSelector.replace(/=/g, '')

        /*Click and Select different Dropdown options. In this way, we will minimize the chances 
        to select duplicated values*/

        if(ElementPos === 1) { 

            await ClickButton(page, DropDownSelector, 1);

            await ClickButton(page, FirstElementPosCsSelector, 1);

        }

        else {

            await ClickButton(page, DropDownSelector, 1);

            await page.keyboard.press(Plugin.ArrowDown);

            await page.keyboard.press(Plugin.Enter);

        }

    }
    catch(e) { 
               console.log('>>> SelectPersRateDropDownValueException: ' + e);
               return 'SelectPersRateDropDownValue Exception: ' + e 
             }

}

async function GetSelectedProduct() {

try {
    const value = await GetElementValueByCsselector(Plugin.VerifySelectedProduct)

    return value

} catch(e) { return e }

}

async function GetSelectedDOS() {

try {
    const value = await GetElementValueByCsselector(Plugin.VerifySelectedDOS)

    return value

} catch(e) { return e }

}

async function GetSelectedOptimization() {

    const value = await GetElementValueByCsselector(Plugin.VerifySelectedOptimization)

    return value
}

async function GetSelectedExtent() {

    const value = await GetElementValueByCsselector(Plugin.VerifySelectedExtent)

    return value
}

async function GetChartToolTipText(ChartSelector, ScreenName) {

try {

    await ClickButton(page, ChartSelector, 1)
    await page.waitForTimeout(3000);

    const value = await GetElementValue(ScreenName)
    await page.waitForTimeout(3000);

    return value

} 

catch(e) { console.log(e + ' ------ ' + ScreenName);
             return '>>> ChartToolTip Exception: ' + e + ' ------ ' + ScreenName
}

}

async function GetElementValue(ScreenName) {

    //This function gets all elements in the current page (page scraping) and takes a screenshot

    const value = await page.$eval('*', el => el.innerText)

    if (!sbs) {

        await LogData(page, ScreenName, 1, true, false)

    }

    return value
}

async function GetElementValueByCsselector(csselector) {

    const value = await page.$eval(csselector, el => el.innerText)

    return value
}

async function GetElementHTMLValueByCsselector(csselector) {

    const value = await page.$eval(csselector, el => el.innerHTML)

    return value
}

async function SetElementValue(selector, value) {

    await page.$eval(selector, el => el.value = '');
    await page.type(selector, value)

}

async function GetElementClass(selector) {

    try {
        let ClassName = await page.$eval(selector, el => el.className)
        return ClassName
    }
    catch(e) {

        return e
    }

}

async function GetWelcomeMsg() {

try {
    await ClickNttProgram()
    await ClickProgramEvaluation()

    const value = await GetElementValueByCsselector(Plugin.WelcomeMsgSelector)

    return value

} catch(e) { console.log('>>>>>> Getting Welcome Msg Exception: ' + e); return e }

}

async function GetNetPriceClassNameError(selector, value, PngFileName) {

    try {

        if(cp && value.includes('--')) { value = value.replace(/--/g, '-') }

        await page.waitForTimeout(1000);
        await SetElementValue(selector, value)
    
        let ClassName = await GetElementClass(selector)
    
        await LogData(page, PngFileName, 1, true, true);
    
        await page.waitForTimeout(1000);
        
        if (mp || cp) {

            await SetElementValue(selector, Plugin.MPNetPricePosValue)
        }

        else {

            await SetElementValue(selector, Plugin.NetPricePosValue)
        }
    
        return ClassName

    }

    catch(e) { return e}

    }

async function ClickButton(page, csselector, NumberOfClicks) {

    for(let i = 0; i < NumberOfClicks; i++) {

        await Promise.all([
          await page.click(csselector)
        ] )

     }

}

function GetMonthInTwoDigitsFormat(Month) {

    let TmpMonth = 1*Month

    if (TmpMonth < 10 ) {

        TmpMonth = '0' + TmpMonth
    }

    return TmpMonth
}

async function TypeTextUsingKeyBoard(Text) {

    await page.keyboard.type(Text)
    await page.keyboard.press(Plugin.Enter);
    await page.waitForTimeout(1000)
 
}

async function TypeTextToElement(Selector, Text) {

    await page.type(Selector, Text)
    await page.keyboard.press(Plugin.Enter);
    await page.waitForTimeout(1000)
 
}

async function typeUsername(page, username ) {

    let csselector = Plugin.LoginFieldId;
    let value = username;

    await page.waitForSelector(csselector);

    await page.evaluate((csselector, value) => {

        document.querySelector(csselector).value = value;

    }, csselector, value );

    await page.waitForTimeout(1000);

    await LogData(page, Plugin.Credentials, 0, true, true);

    await page.click(Plugin.SubmitButtonId);
    await page.waitForTimeout(10000);

    await LogData(page, Plugin.HomePage, 5, true, true);
}

async function ScreenCapture(page, ScreenshotName, delay, FullPage) {

    await page.waitForTimeout(delay*100)

    await page.keyboard.press('Print')
    await page.screenshot({ path: ScreenshotName, fullPage: FullPage } );

    await page.waitForTimeout(1000)

}

async function CleanUp() {
    
    try {

        await ExecuteOSCmd(Plugin.DeleteSSCmd)
        await ExecuteOSCmd(Plugin.DelPersRateFileCmd)
    }

    catch(e) { console.log('>>> CleanUp Exception: ============= ' + e)
               return '>>> CleanUp Exception: ============= ' + e
             }
}

async function LogAndClose() {

    await WriteDataToFile(Plugin.CredentialsLogFile, pageData)
    await WriteDataToFile(Plugin.AccessSolutionsDataFile, '{}')
    await page.waitForTimeout(1000);
    await browser.close();

}

async function WriteDataToFile(FileName, data) {

    fs.writeFileSync(FileName, data);

}

async function DeleteFile(FileName) {

    await ExecuteOSCmd(Plugin.IfFileExists + FileName + Plugin.DelFile + FileName)
}

async function ExecuteOSCmd(cmd) {

    exec(cmd, (error, stdout, stderr) => {});
}

async function scrollToBottom(page) {

    const distance = 100; // should be less than or equal to window.innerHeight
    const delay = 100;
    while (await page.evaluate(() => document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight)) {
      await page.evaluate((y) => { document.scrollingElement.scrollBy(0, y); }, distance);
      await page.waitFor(delay);
    }
  }

async function CreateHtmFiles() {

try{

    await page.waitForTimeout(1000);
    await LogAndClose()

    let NetPrice0Png = Plugin.PngNetPricesFiles.split(' ')[0]
    let NetPriceNegPng = Plugin.PngNetPricesFiles.split(' ')[1]

    let SBSNetPrice0Png = Plugin.SBSPngNetPricesFiles.split(' ')[0]
    let SBSNetPriceNegPng = Plugin.SBSPngNetPricesFiles.split(' ')[1]

    let CPPNetPrice0Png = Plugin.CPProgPngNetPricesFiles.split(' ')[0]
    let CPPNetPriceNegPng = Plugin.CPProgPngNetPricesFiles.split(' ')[1]

    if (fs.existsSync(Plugin.Credentials)) { fs.writeFileSync(Plugin.CredentialsHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.Credentials) + Plugin.cls) }
    if (fs.existsSync(Plugin.HomePage)) { fs.writeFileSync(Plugin.HomePageHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.HomePage) + Plugin.cls) }
    if (fs.existsSync(Plugin.AddedRows)) { fs.writeFileSync(Plugin.AddedRowsHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.AddedRows) + Plugin.cls) }

    if (fs.existsSync(Plugin.PopulatedRows)) { fs.writeFileSync(Plugin.PopulatedRowsHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.PopulatedRows) + Plugin.cls) }
    
    if (fs.existsSync(Plugin.SBSPopulatedRows)) { fs.writeFileSync(Plugin.SBSPopulatedRowsHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.SBSPopulatedRows) + Plugin.cls) }

    if (fs.existsSync(Plugin.CPProgPopulatedRows)) { fs.writeFileSync(Plugin.CPPPopulatedRowsHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.CPProgPopulatedRows) + Plugin.cls) }

    if (fs.existsSync(NetPrice0Png)) { fs.writeFileSync(Plugin.NetPrice0Htm, Plugin.ImgSrc + GetCurrentLocation(NetPrice0Png) + Plugin.cls) }
    if (fs.existsSync(NetPriceNegPng)) { fs.writeFileSync(Plugin.NetPriceNegHtm, Plugin.ImgSrc + GetCurrentLocation(NetPriceNegPng) + Plugin.cls) }
    
    if (fs.existsSync(SBSNetPrice0Png)) { fs.writeFileSync(Plugin.SBSNetPrice0Htm, Plugin.ImgSrc + GetCurrentLocation(SBSNetPrice0Png) + Plugin.cls) }
    if (fs.existsSync(SBSNetPriceNegPng)) { fs.writeFileSync(Plugin.SBSNetPriceNegHtm, Plugin.ImgSrc + GetCurrentLocation(SBSNetPriceNegPng) + Plugin.cls) }

    if (fs.existsSync(CPPNetPrice0Png)) { fs.writeFileSync(Plugin.CPPNetPrice0Htm, Plugin.ImgSrc + GetCurrentLocation(CPPNetPrice0Png) + Plugin.cls) }
    if (fs.existsSync(CPPNetPriceNegPng)) { fs.writeFileSync(Plugin.CPPNetPriceNegHtm, Plugin.ImgSrc + GetCurrentLocation(CPPNetPriceNegPng) + Plugin.cls) }

    if (fs.existsSync(Plugin.ResetButtonClickedPng)) { fs.writeFileSync(Plugin.ResetButtonClickedHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ResetButtonClickedPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.MetricsOutOfRangePng)) { fs.writeFileSync(Plugin.MetricsOutOfRangeHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.MetricsOutOfRangePng) + Plugin.cls) }

    if (fs.existsSync(Plugin.SBSResetButtonClickedPng)) { fs.writeFileSync(Plugin.SBSResetButtonClickedHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.SBSResetButtonClickedPng) + Plugin.cls) }
    
    if (fs.existsSync(Plugin.CPPResetButtonClicked2Png)) { fs.writeFileSync(Plugin.CPPResetButtonClicked2Htm, Plugin.ImgSrc + GetCurrentLocation(Plugin.CPPResetButtonClicked2Png) + Plugin.cls) }
    if (fs.existsSync(Plugin.CPPBellNotificationsPng)) { fs.writeFileSync(Plugin.CPPBellNotificationsHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.CPPBellNotificationsPng) + Plugin.cls) }

    if (fs.existsSync(Plugin.SBSMetricsOutOfRangePng)) { fs.writeFileSync(Plugin.SBSMetricsOutOfRangeHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.SBSMetricsOutOfRangePng) + Plugin.cls) }

    if (fs.existsSync(Plugin.ClickDeleteLink)) { fs.writeFileSync(Plugin.ClickDeleteLinkHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ClickDeleteLink) + Plugin.cls) }
    if (fs.existsSync(Plugin.AfterRowRemoval)) { fs.writeFileSync(Plugin.AfterRowRemovalHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.AfterRowRemoval) + Plugin.cls) }

    if (fs.existsSync(Plugin.AbandonmentRateChartPng)) { fs.writeFileSync(Plugin.AbandonmentRateChartHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.AbandonmentRateChartPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.CopayCardUsageChartPng)) { fs.writeFileSync(Plugin.CopayCardUsageChartHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.CopayCardUsageChartPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.AdherenceDoTChartPng)) { fs.writeFileSync(Plugin.AdherenceDoTChartHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.AdherenceDoTChartPng) + Plugin.cls) }

    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '0.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '0.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '0.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '1.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '1.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '1.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '2.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '2.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '2.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '3.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '3.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '3.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '4.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '4.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '4.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '5.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '5.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '5.png')) + Plugin.cls) }

    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '6.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '6.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '6.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '7.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '7.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '7.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '8.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '8.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '8.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '9.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '9.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '9.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '10.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/,'10.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '10.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '11.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '11.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '11.png')) + Plugin.cls) }
    if (fs.existsSync(Plugin.PersRateChartPng.replace(/.png/, '12.png'))) { fs.writeFileSync(Plugin.PersRateChartHtm.replace(/.htm/, '12.htm'), Plugin.ImgSrc + GetCurrentLocation(Plugin.PersRateChartPng.replace(/.png/, '12.png')) + Plugin.cls) }

    if (fs.existsSync(Plugin.ScatterPlotCombinedChartPng)) { fs.writeFileSync(Plugin.ScatterPlotCombinedChartHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ScatterPlotCombinedChartPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.ScatterPlotCombinedChart2Png)) { fs.writeFileSync(Plugin.ScatterPlotCombinedChart2Htm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ScatterPlotCombinedChart2Png) + Plugin.cls) }
    if (fs.existsSync(Plugin.ScatterPlotEVouchersChartPng)) { fs.writeFileSync(Plugin.ScatterPlotEVouchersChartHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ScatterPlotEVouchersChartPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.ScatterPlotEVouchersChart2Png)) { fs.writeFileSync(Plugin.ScatterPlotEVouchersChart2Htm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ScatterPlotEVouchersChart2Png) + Plugin.cls) }

    if (fs.existsSync(Plugin.ImportedDataPng)) { fs.writeFileSync(Plugin.ImportedDataHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.ImportedDataPng) + Plugin.cls) }

    if (fs.existsSync(Plugin.SBSImportedDataPng)) { fs.writeFileSync(Plugin.SBSImportedDataHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.SBSImportedDataPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.SBSModelInputDataPagePng)) { fs.writeFileSync(Plugin.SBSModelInputDataPageHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.SBSModelInputDataPagePng) + Plugin.cls) }

    if (fs.existsSync(Plugin.CPPImportedDataPng)) { fs.writeFileSync(Plugin.CPPImportedDataHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.CPPImportedDataPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.CPP1ImportedDataPng)) { fs.writeFileSync(Plugin.CPP1ImportedDataHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.CPP1ImportedDataPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.MPImportedDataPng)) { fs.writeFileSync(Plugin.MPImportedDataHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.MPImportedDataPng) + Plugin.cls) }
    if (fs.existsSync(Plugin.MPRefillIncPng)) { fs.writeFileSync(Plugin.MPRefillsIncHtm, Plugin.ImgSrc + GetCurrentLocation(Plugin.MPRefillIncPng) + Plugin.cls) }

} 
  catch(e) {

     console.log('>>>> Exception Creating HTML Files\n===== ' + e)

   }
}

function GetCurrentLocation(PngFileName) {

    try {

        return PngFileName.split('./screenshots/').join('')
    }

    catch {

        console.log('>>>> Exception Getting Location Of HTML Files\n===== ' + e)
    }

}

// ========================== Access Soultions NTT Program - Functions ====================

async function ClickNttProgram() {

    await ClickButton(page, Plugin.NttProgram, 1)
    await page.waitForTimeout(3000);


}

async function ClickModelInputData(ModelInputDataXPath) {

try {
    await page.waitForTimeout(2000);
    await ClickElementXpath(page, ModelInputDataXPath)
    await page.waitForTimeout(3000);

} catch(e) { return e }

}

async function ClickOptimizedProgram() {

try {

    await ClickElementXpath(page, Plugin.OptProg)
    await page.waitForTimeout(3000);

} catch(e) { 
             console.log('Exception OptProg: ' + e); 
             return 'Exception OptProg: ' + e 
           }

}

async function ClickProgramEvaluation() {

    if (sbs) {

        await ClickElementXpath(page, Plugin.SBSProgEvalXPath)

    }

    else if (cp) {

        await ClickElementXpath(page, Plugin.CPProgramEvalXPath)
 
    }

    else {

        await ClickElementXpath(page, Plugin.ProgEval)

    }

    await page.waitForTimeout(3000);

}

async function GetDataAbandonmentRateChart(ChartSelector, PngFileName) {

try {

    const value = await GetChartToolTipText(ChartSelector, PngFileName)
    const value0 = value.split(Plugin.AbnmntRateToolTipRegExp)[1].split('\n')[0]

    const value1 = value.split(value0)[1] + value0

    return value1.replace(/ # /g, '<br> # ').replace(/\)Copay Bucket:/g, 'Copay Bucket:')

} catch(e) { return e }

}

async function GetDataCopayCardUsageChart(ChartSelector, PngFileName) {

try {

    const value = await GetChartToolTipText(ChartSelector, PngFileName)

    const value0 = value.split(Plugin.CopayBucketRegExp)[1]
                        .split('\n')[0]

    const value1 = Plugin.CopayBucketRegExp + value0.replace(/ Usage: /g, '<br> Usage: ')

    return value1

} catch(e) { return e }

}

async function GetDataAdheranceDoTChart(ChartSelector, PngFileName) {

try {

    const value = await GetChartToolTipText(ChartSelector, PngFileName)

    const value0 = value.split(Plugin.CopayBucketRegExp)[1]
                        .split('\n')[0]

    const value1 = Plugin.CopayBucketRegExp + value0.replace(/ Adherence: /g, '<br> Adherence: ')

    return value1

} catch(e) { return e }

}

async function GetDataPersistencetRateChart(ChartSelector, PngFileName, DropDownSelector) {

try {

    let value = ''
    let value0 = ''
    let value1 = ''

    let PersRateSelectedItem  = ''
    let PersRateItemsList = ''

    let PrevValue = ''
    let CurrentValue = ''

    for (let i=1; i<=24; i++) {

        await SelectPersRateDropDownValue(i, DropDownSelector)

        PersRateSelectedItem = await GetElementValueByCsselector(DropDownSelector)

        value = await GetChartToolTipText(ChartSelector, PngFileName.replace(/.png/, i + '.png'))

        if (value.includes(Plugin.PersRateRegExp)) {
            
            value0 = value.split(Plugin.PersRateRegExp)[1]
                          .split(Plugin.PersRateDayRegExp)[1]

            value1 = Plugin.PersRateDayRegExp + value0.replace(/ Persistence Rate: /g, '<br> Persistence Rate: ')
            CurrentValue = value1 + '***' + PersRateSelectedItem + '|'

            if (CurrentValue !== PrevValue) {

                PersRateItemsList = PersRateItemsList + value1 + '***' + PersRateSelectedItem + '|'
                PrevValue = CurrentValue

            }

        }
    }

    return PersRateItemsList

} catch(e) { 
             console.log('Error Pers rate Chart selecting Item: ' + e); 
             return 'Error Pers rate Chart selecting Item: ' + e 
           }

}

async function GetDataCombScatterPlot() {

 try {

    return GetDatOptObjChart(
                      Plugin.ScatterPlotCombinedChartTab,
                      Plugin.ScatterPlotCombinedChart,
                      Plugin.ScatterPlotCombinedChartPng
    )

 } catch(e) { console.log('Exception on Scatter Plot - GetDataCombScatterPlot: ' + e); return e }
    
}

async function GetDataCombScatterPlot2() {

    try {
 
       return GetDatOptObjChart(
                         Plugin.ScatterPlotCombinedChartTab,
                         Plugin.ScatterPlotCombinedChart2,
                         Plugin.ScatterPlotCombinedChart2Png
       )
   
    } catch(e) { return e }
       
   }

async function GetDataEVouchersScatterPlot() {
 
 try {

    return GetDatOptObjChart(
                      Plugin.ScatterPlotEVouchersChartTab,
                      Plugin.ScatterPlotEVouchersChart, 
                      Plugin.ScatterPlotEVouchersChartPng 
    )

 } catch(e) { return e }
    
}

async function GetDataEVouchersScatterPlot2() {
 
    try {

       return GetDatOptObjChart(
                         Plugin.ScatterPlotEVouchersChartTab,
                         Plugin.ScatterPlotEVouchersChart2, 
                         Plugin.ScatterPlotEVouchersChart2Png 
       )
   
    } catch(e) { return e }
       
}

async function GetDatOptObjChart(ScatterPlotTab, ScatterPlotChart, ScatterPlotPng) {

try {

    await ClickButton(page, ScatterPlotTab, 1)

    let value = await GetChartToolTipText(ScatterPlotChart, ScatterPlotPng)

/*In case there aren´t any tooltip text data when the chart is clicked, 
try to click on a point where some text data is visible & store it in the 'value' variable*/

    if (!value.includes('CC Maximum Buydown:')) {
        
        const frame = await page.waitForSelector(ScatterPlotChart);
        
        const rect = await page.evaluate(el => {
            const {x, y} = el.getBoundingClientRect();
            return {x, y};
        }, frame);

        for(let i = 0; i < 200; i++) {

            await Promise.all([

                await page.mouse.click(rect.x + i*10, rect.y + i*10)
            ] )

            await page.waitForTimeout(10)

            value = await page.$eval('*', el => el.innerText)

            await page.waitForTimeout(1000)

            if (value.includes('CC Maximum Buydown:')) {

                await LogData(page, ScatterPlotPng, 1, true, true)
                break;
 
            }

    }
  }

    const value0 = Plugin.ObjsRegExp1 + value.split(Plugin.ObjsRegExp1)[1].split(Plugin.ObjsRegExp2)[0]
                                //.split('MCC')[1]

    const value1 = value0.replace(/CC Maximum Buydown: /g, '<br>CC Maximum Buydown: ')
                         .replace(/EV Min Target Copay: /g, '<br>EV Min Target Copay: ')
                         .replace(/EV Eligibility Floor: /g, '<br>EV Eligibility Floor: ')
                         .replace(/EV Eligibility Ceiling: /g, '<br>EV Eligibility Ceiling: ')
                         .replace(/EV Maximum Buydown: /g, '<br>EV Maximum Buydown: ')
                         .replace(/\n/g, '') + '<br>'

    return value1

} catch(e) { console.log('Exception GetDataObjChart: ' + e); 
             return 'Exception GetDataObjChart: ' + e 
           }

}

async function ProcessMonthlyTable(table_selector) {

try {

    if (!sbs) { await ClickProgramEvaluation() }

    const results = await GetProgramResultsData(table_selector)
    return results

} catch(e) { return e }

}

async function ProcessMonth1to12Table(monthly_tab_selector, table_selector) {

try {

    await ClickButton(page, monthly_tab_selector, 1)

    const results = await GetProgramResultsData(table_selector)
    return results

} catch(e) { return e }

}

async function ProcessMonth13to24Table(monthly_tab_selector, table_selector) {

try {

    await ClickButton(page, monthly_tab_selector.replace(/2/g, '3'), 1)

    const results = await GetProgramResultsData(table_selector)
    return results

} catch(e) { return e }

}

async function GetOptProgParamResultsTable() {

try {

    const results = await GetOptProgParamResultsSummary(Plugin.OptProgramParResultsSelector, false)
    return results

} catch(e) { console.log('Exception OptParamResultsTable: ' + e); 
             return 'Exception OptParamResultsTable: ' + e 
           }

}

async function GetOptProgMonthlyResultsTable() {

try {

    const results = await GetOptProgParamResultsSummary(Plugin.OptProgMonthResultsSelector, true)
    return results

} catch(e) { return e }

}

async function GetOptProgMonth112ResultsTable() {

try {

    await ClickButton(page, Plugin.OptPgrMonthlyTabs, 1)

    const results = await GetOptProgParamResultsSummary(Plugin.OptProgMonth112ResultsSelector, true)
    return results

} catch(e) { return e }

}

async function GetOptProgMonth1324ResultsTable() {

try {

    await ClickButton(page, Plugin.OptPgrMonthlyTabs
                      .replace(' div:nth-child(2) ', ' div:nth-child(3) '), 1)

    const results = await GetOptProgParamResultsSummary(Plugin.OptProgMonth1324ResultsSelector, true)
    return results

} catch(e) { return e }

}

async function GetProgramResultsData(tablecellselector) {

    let status = Plugin.status
    let TableCell = Plugin.TableCell
    let color = Plugin.color
    
    let current_value = Plugin.current
    let value = Plugin.value

    let current_value1 = Plugin.current
    let value1 = Plugin.value

    let csselector = Plugin.csselector
    
    let TableRowsCount = 0
    
    let ProgramResults = ''

    TableRowsCount = (await page.$$('tr')).length - 12
    
for(let rows = 1; rows <= TableRowsCount; rows++) {

    for(let columns = 2;  columns <= 8; columns++) {

        csselector = CurrentCellSelector(tablecellselector, rows, columns);

        TableCell = await GetElementHTMLValueByCsselector(csselector)

        if (columns === 2) {

            current_value1 = 1*TableCell.split(Plugin.TableCellDelimiter)[0].replace(/,/g, '')
            current_value = 1*TableCell.split(Plugin.TableCellDelimiter)[0].replace(/,/g, '').replace(/%/g, '')

            if (isNaN(current_value1)) { await IsPercentage(current_value) }           
            
        }

        else {

            value1 = 1*TableCell.split(Plugin.TableCellDelimiter)[1].replace(/,/g, '').replace(/ /g, '')
            value = 1*TableCell.split(Plugin.TableCellDelimiter)[1].replace(/,/g, '').replace(/ /g, '').replace(/%/g, '')

            if (isNaN(value1)) { await IsPercentage(value) }

            color = TableCell.split(' ')[4]

            if(color === GreenIndicator) { 

                color = green
            }

            if(color === RedIndicator) 
            {
                color = red
            }

            if ((color === green && value > current_value) || (color === red && value < current_value) ) {

                status = pass

            }

            else if ((color === green && value < current_value) || (color === red && value > current_value)) {

                status = fail

            }

            ProgramResults = ProgramResults + current_value + '-' + value + '-' + color + '-' + status + '|'

        }

            await page.waitForTimeout(40);
    }
            ProgramResults = ProgramResults + '\n'

}

 return ProgramResults
}

async function GetOptProgParamResultsSummary(tablecellselector, monthlyresults) {

try {

    let status = Plugin.status

    let TableCell = Plugin.TableCell
    let CurrentValueCell = Plugin.TableCell

    let color = Plugin.color
    
    let current_value = Plugin.current
    let value = Plugin.value

    let current_value1 = Plugin.current
    let value1 = Plugin.value

    let csselector = Plugin.csselector
    let current_value_csselector = Plugin.csselector

    let param_values = ''
    let status_values = ''
    
    let initrows = Plugin.optprginitrow
    let initcolumns = Plugin.optprginitcolumn
    
    let maxcolumns = Plugin.optprgmaxcolumn
    let maxrows = (await page.$$('tr')).length - 12

    await page.waitForTimeout(10000)

    if(monthlyresults === false) {

        await ClickOptimizedProgram()

        initrows = 1*initrows + 1 
        initcolumns = 1*initcolumns + 1

        maxrows = Plugin.optprgmaxrow
        maxcolumns = 1*maxcolumns
    }

    for(let columns = initcolumns; columns <= maxcolumns; columns++) {

        for(let rows = initrows;  rows <= maxrows; rows++) {

            if (monthlyresults === false) {
                
                if (rows == 4) { rows = 5 }
                if (rows == 9) { rows = 10 }
            }

            csselector = CurrentCellSelector(tablecellselector, rows, columns);
            current_value_csselector = CurrentCellSelector(tablecellselector, rows, 2);

            TableCell = await GetElementHTMLValueByCsselector(csselector)
            CurrentValueCell = await GetElementHTMLValueByCsselector(current_value_csselector)

            if (monthlyresults === false) {

                if (TableCell === ' - ') {

                  value = TableCell + ''
                }

                else {

                  value1 = 1*TableCell.replace(/,/g, '')
                  value = 1*TableCell.replace(/,/g, '').replace(/%/g, '')

                  if (isNaN(value1)) { await IsPercentage(value) }

                }
            }

            else {
                
                current_value1 = 1*CurrentValueCell.split(Plugin.TableCellDelimiter)[0].replace(/,/g, '').replace(/ /, '')
                current_value = 1*CurrentValueCell.split(Plugin.TableCellDelimiter)[0].replace(/,/g, '').replace(/ /, '').replace(/%/g, '')

                if (isNaN(current_value1)) { await IsPercentage(current_value) }

                if (columns > 2 ) {


                    color = TableCell.split(' ')[4]

                    if (TableCell.split(Plugin.TableCellDelimiter)[1] === '- ') {

                        value = TableCell.split(Plugin.TableCellDelimiter)[1]
                    }

                    else {

                        value1 = 1*TableCell.split(Plugin.TableCellDelimiter)[1].replace(/,/g, '').replace(/ /g, '')
                        value = 1*TableCell.split(Plugin.TableCellDelimiter)[1].replace(/,/g, '').replace(/ /g, '').replace(/%/g, '')
                        
                        if (isNaN(value1)) { await IsPercentage(value) }

                    }

                    if(color === GreenIndicator) { 

                        color = green
                    }
        
                    if(color === RedIndicator) 
                    {
                        color = red
                    }
        
                    if ((color === green && value > current_value) || (color === red && value < current_value) ) {
        
                        status = pass
        
                    }
        
                    else if ((color === green && value < current_value) || (color === red && value > current_value)) {
        
                        status = fail
        
                    }
                }

            }

            if (columns > 2) {

                param_values = param_values + value + '|'
                status_values = status_values + status + '-'

            }

            await page.waitForTimeout(20);
        }

        if (columns > 2) {

            status_values = status_values + '\n'
            param_values = param_values + status_values
            status_values = ''

        }

    }

    return param_values.replace(/ /g, '').replace(/,/g, '').replace(/%/g, '')

} catch(e) { 
             console.log('Exception - Program Param Results Summary: ' + e); 
             return 'Exception - Program Param Results Summary: ' + e 
           }

}

async function ExportScenarios(selector) {

try {
        
    await DeleteExportedFiles()

    await ClickButton(page, selector, 1)
    await page.waitForTimeout(10000);

    if(!cp && !sbs && !mp) {

     for(let i=1; i<10; i++) {

        exec(Plugin.FileExportCheck, (error, stdout, stderr) => {

            exec(Plugin.CreateFileCmd, (error,stdout, stderr) => { } )

        });

      if (fs.existsSync(Plugin.TmpExportFile)) {

        break;
      }

      await page.waitForTimeout(3000);

     }

    }

// use vbs code to write excel sheet scenarios to exports.txt so its content can be validated by cypress
   exec('GetScenariosDataFromExcel.vbs', (error, stdout, stderr) => { });

   const value = await GetValuesFromScenTable()

   return value

} catch(e) { console.log('>>> Export Exception: ' + e); return e }

}

async function ImportScenarios(ElementNo, PngFileName) {

try {

    let FileToImport = ''

    if(mp) {

        FileToImport = Plugin.CsvMPFileToImport

    }
    
    else if (!cp || (cp && ElementNo === 1)) {

        FileToImport = Plugin.CsvScenariosFileToImport
    }

    else {

        FileToImport = Plugin.CsvCPFileToImport

    }

    await ImportFile(FileToImport, ElementNo)
    await page.waitForTimeout(1000)

    // use vbs code to write excel sheet scenarios into exports.txt so its content can be validated by cypress
    exec('GetScenariosDataFromCsv.vbs', (error, stdout, stderr) => {});

    const value = await GetValuesFromScenTable()

    await LogData(page, PngFileName, 1, true, true);

    return value

} catch(e) { return e }

}

async function DeleteExportedFiles() {

    await DeleteFile(Plugin.OldExportedFiles)

    if(!cp && !sbs && !mp) {
        await DeleteFile(Plugin.TmpExportFile)
    }
}

async function ImportFile(filePath, ElementNo) {

try {
    const element = await page.$$("input[type=file]");
    await element[ElementNo].uploadFile(filePath);
    await element[ElementNo].evaluate(upload => upload.dispatchEvent(new Event('change', { bubbles: true })));
}
catch(e) { console.log('>>> Importing File Exception: ' + e) 
           return '>>> Importing File Exception: ' + e 
         }
}

async function ResetScenarios(selector, pngfile) {

    await page.waitForTimeout(1000)
    await ClickButton(page, selector, 1)
    await LogData(page, pngfile, 1, true, true);
    await page.waitForTimeout(2000)

}

async function CsvFileDownLoadInfo(CsSelector, PngFileName, ExecutionMsgDelim) {

    try {
        let DownLoadConfirmationMsg = ''
        let DownLoadConfirmationTS = ''
        let DownLoadConfirmationTxt = ''
    
        await ClickButton(page, CsSelector, 1)
        await page.waitForTimeout(1000)
    
        await LogData(page, PngFileName, 1, true, true)
    
        DownLoadConfirmationTxt = await GetPageContent()
        DownLoadConfirmationMsg = DownLoadConfirmationTxt.split(ExecutionMsgDelim)[1]
    
        DownLoadConfirmationTS = DownLoadConfirmationMsg.split('\r\n ')[1].split('\r\n')[0] + ' - ' +
                                 DownLoadConfirmationMsg.split('\r\n ')[1].split('\r\n')[1].replace(/ /g, '')

        DownLoadConfirmationTS = DownLoadConfirmationTS + ' - ' + DownLoadConfirmationMsg.split('\r\n')[1]

        return DownLoadConfirmationTS.replace(/======/g, '===')

    }
    
    catch(e)
    
        {

         console.log('>>>>> Bell Notification Download Error: ' + e)

         return '>>>>> Bell Notification Download Error: ' + e
    
        }
    }

 async function PopulateProgramParameters(program) {

        //Populate Scenarios Table and simulate a click on the Evaluate, Reset, Import & Export Buttons
    
        try {
    
            if (program === 1) { //cpp
    
               await PopulateTable(
                                      page, 
                                      Plugin.CPProgScenTableCsSelector,
                                      Plugin.CPPEvalButtonSelector,
                                      Plugin.CPPResultsTableCsSelector,
                                      Plugin.CPProgScenRows, 
                                      Plugin.CPProgScenColumns,
                                      Plugin.CPProgPopulatedRows,
                                      Plugin.CPProgPngNetPricesFiles
    
                                  )
            }
    
            else if (program === 2) { //mp
    
                   await PopulateTable(
    
                    page, 
                    Plugin.MPScenTableCsSelector,
                    Plugin.MPEvalButtonSelector,
                    Plugin.MPResultsTableCsSelector,
                    Plugin.CPProgScenRows, 
                    Plugin.CPProgScenColumns,
                    Plugin.MPPopulatedRows,
                    Plugin.MPPngNetPricesFiles
    
                )
            }
        }
    
        catch(e) { console.log('>>> ' + program + '. Program Program Parameters Exception: ' + e); return e; }
    }

// Access Solutions NTT Programs Check Metrics Functions

async function ResetMetricsValues() {
    //Reset Metrics Values as the metrics will be processed again from scratch for 
    //the SBS feature

        MetricsValuesList = ''
        MetricsWarningValuesList = ''

        MetricsValueNotInRange = false
        MetricsValueInRange = false
        MetricsWarningScenarios = false
}

async function MetricsWarningCheck(Selector, TableSelector, PngFileName) {

    try {
     
        MetricsWarningScenarios = true
        let CurrentTableSelector = CurrentCellSelector(TableSelector, 20, 6)

        if (sbs) {

            ResetPngFile = Plugin.SBSResetButtonClickedPng
            ResetButtonSelector = Plugin.SBSResetButtonCsSelector

        }

        else {

            ResetPngFile = Plugin.ResetButtonClickedPng
            ResetButtonSelector = Plugin.ResetButtonSelector

        }
 
        await ClickProgramEvaluation()

        await ResetScenarios(ResetButtonSelector, ResetPngFile)

        await ImportFile(Plugin.CsvMetricsWarningScenariosFile, 0)
        await ClickEvaluateButton(Selector, CurrentTableSelector)

        await page.waitForTimeout(3000);

        await ProcessMonthlyTable(TableSelector)
        await page.waitForTimeout(3000);

        await LogData(page, PngFileName, 1, true, true);

        await page.waitForTimeout(1000);

        MetricsValueNotInRange = MetricsWarningValuesList + MetricsValueNotInRange
        MetricsValueInRange = MetricsValuesList + MetricsValueInRange

    }

    catch(e) { 
               console.log('Metrics Warning Check Exception: ' + e )
               return 'Metrics Warning Check Exception: ' + e
             }
    
}

async function IsPercentage(value){

       await IfMetricsValueIsOutSideOfTheRange(value)

}

async function IfMetricsValueIsOutSideOfTheRange(value) {

    let CurrentPageHasText = await IsTextIncludedInPage(Plugin.MetricsWarningMsg)

    if(Math.abs(value) > Plugin.MetricsThreshold && CurrentPageHasText && MetricsWarningScenarios) { //|| isNaN(value)) {

        MetricsValueNotInRange = true
        MetricsWarningValuesList = MetricsWarningValuesList + value + '|'

    }

    if(Math.abs(value) <= Plugin.MetricsThreshold && !CurrentPageHasText && !MetricsWarningScenarios) {

        MetricsValueInRange = true
        MetricsValuesList = MetricsValuesList + value + '|'

    }

}

// ========================== Access Solutions NTT Program State By State =================

async function NTTProgStateByStateEval() {

    try {

        await ResetMetricsValues()

        await ClickButton(page, Plugin.StateByState, 1);
        await page.waitForTimeout(3000)
 
        await ClickElementXpath(page, Plugin.SBSProgEvalXPath)
        await page.waitForTimeout(3000)
 
        //Select State from dropdown menu
        await ClickElementXpath(page, Plugin.SBSSelectState)
  
        for(let i=0; i<=40; i++) {
            await page.keyboard.press(Plugin.ArrowDown);
        }

        await page.keyboard.press(Plugin.Enter);
        await page.waitForTimeout(3000)

        await SelectProductAndDOS()
 
    //Get Selected State, Product and DOS in the Product Selection Section
    const SBSSelectedState = await GetElementValueByCsselector(Plugin.SBSSelectedStateCsSelector)
    const SBSSelectedProduct = await GetElementValueByCsselector(Plugin.SBSSelectProductCsSelector)
    const SBSSelectedDOS = await GetElementValueByCsselector(Plugin.SBSSelectDOSCsSelector)

    await PopulateTable(page,  Plugin.SBSScenTableCsSelector,
                               Plugin.SBSEvalButtonSelector,
                               Plugin.SBSMonthlyTableCellCsSelector,
                               Plugin.CPProgScenRows, 
                               Plugin.CPProgScenColumns,
                               Plugin.SBSPopulatedRows,
                               Plugin.SBSPngNetPricesFiles
                       );

    sbs = true

    let results =

    SBSSelectedState + '===' +
    SBSSelectedProduct + '===' +
    SBSSelectedDOS + '===' +

    await ProcessMonthlyTable(Plugin.SBSMonthlyTableCellCsSelector) +
    await ProcessMonth1to12Table(Plugin.SBSMonthlyTabs, Plugin.SBSMonthlyTableCellCsSelector) +
    await ProcessMonth13to24Table(Plugin.SBSMonthlyTabs, Plugin.SBSMonthlyTableCellCsSelector) + 
    '===' +

    await ExportScenarios(Plugin.SBSExportButtonCsSelector) + '===' +
    await ImportScenarios(0, Plugin.SBSImportedDataPng) + '==='

    SBSNetPriceClassName0 = NetPriceClassName0
    SBSNetPriceClassNameNeg = NetPriceClassNameNeg

    results = results + SBSNetPriceClassName0 + '===' + 
                        SBSNetPriceClassNameNeg + '==='

    await ClickButton(page, Plugin.SBSMonthlyTabs.replace(/2/g, '1'), 1)
    await MetricsWarningCheck(Plugin.SBSEvalButtonSelector, Plugin.SBSMonthlyTableCellCsSelector, Plugin.SBSMetricsOutOfRangePng)

    results = results +

    MetricsValueInRange + '===' + 
    MetricsValueNotInRange + '===' +

    await SBSModelInputData()

    return results

    }

    catch(e) {

        console.log('>>> NTT program State By State Exception: ' + e)
        return '>>> NTT program State By State Exception: ' + e;

    }
}
async function SBSModelInputData() {

 try {

    await ClickModelInputData(Plugin.SBSModelInputData);

    let results = 

    await GetDataAbandonmentRateChart(Plugin.SBSAbandonmentRateChart, Plugin.AbandonmentRateChartPng) + '===' +
    await GetDataCopayCardUsageChart(Plugin.SBSCopayCardUsageChart, Plugin.CopayCardUsageChartPng) + '===' +
    await GetDataAdheranceDoTChart(Plugin.SBSAdherenceDoTChart, Plugin.AdherenceDoTChartPng) + '===' +
    await GetDataPersistencetRateChart(Plugin.SBSPersRateChart, Plugin.PersRateChartPng, Plugin.SBSPersRateSelectedItem) + '==='

    sbs = false;

    await LogData(page, Plugin.SBSModelInputDataPagePng, 1, true, true)

    return results;
 }

 catch {

     console.log('>>>> SBS Model Input Data Exception:\n======' + e);
     return '>>>> SBS Model Input Data Exception\n======' + e

 }

}
// ========================== Access Solutions CP Program Functions =======================

async function CPProgramNavigation() {

 try {

    let CPPEXPORTDATA = ''
    let CPPIMPORTDATA = ''
    let pageData = Plugin.CPPDELIM

    cp = Plugin.true

   await ClickButton(page, Plugin.CPProgramCsSelector, 1);
   await page.waitForTimeout(1000)

   await ClickElementXpath(page, Plugin.CPProgramEvalXPath)
   await page.waitForTimeout(3000)

   await SelectProductAndDOS()
   await page.waitForTimeout(3000)

   pageData = pageData + await GetSelectedProduct() + '===' +
              await GetSelectedDOS () + '==='

   await ClickButton(page, Plugin.RelDatMthCsSelector, 1)
   await page.keyboard.press(Plugin.ArrowDown);
   await page.keyboard.press(Plugin.Enter);
   await page.waitForTimeout(1000)

   await TypeTextToElement(Plugin.EarltCohMthCsSelector, Plugin.EarliestCohortDate)

   await ClickButton(page, Plugin.ProgramTermCsSelector, 1)
   await page.waitForTimeout(1000)

   await TypeTextToElement(Plugin.ProgramTermCsSelector, Plugin.ProgTermStartDate)

   await TypeTextUsingKeyBoard(Plugin.ProgTermEndDate)

   await ImportScenarios(0, Plugin.CPPImportedDataPng)
   await page.waitForTimeout(3000)

   try { await PopulateProgramParameters(1) } catch(e) {}
   await page.waitForTimeout(3000)

   CPPNetPriceClassName0 = NetPriceClassName0
   CPPNetPriceClassNameNeg = NetPriceClassNameNeg

   pageData = pageData + CPPNetPriceClassName0 + '===' + 
                         CPPNetPriceClassNameNeg + '==='

   CPPEXPORTDATA = await ExportScenarios(Plugin.CPProgrExportButSelector)
   await page.waitForTimeout(1000)

   CPPIMPORTDATA = await ImportScenarios(1, Plugin.CPP1ImportedDataPng)
   await page.waitForTimeout(1000)

   await ClickButton(page, Plugin.CPProgParamTitle, 1)
   await page.waitForTimeout(1000)

   try { await ResetScenarios(Plugin.CPProgResBut2CsSelector, Plugin.CPPResetButtonClicked2Png) } catch(e) {}

   pageData = pageData +

   CPPEXPORTDATA + '===' +
   CPPIMPORTDATA + '===' +

   await GetCPSelectedItems() +
   await CsvFileDownLoadInfo(Plugin.CPProgBellIconCsSelector, Plugin.CPPBellNotificationsPng, Plugin.CPPExecutionMsgDelim) + '===' +
   await GetTableRowsAndColumns(Plugin.CPPResultsTableCsSelector) + '==='

   cp = false

   return pageData

 }

  catch(e) { 
             console.log('>>>CP Program Navigation Exception: ' + e);
             cp = false
             return '>>>CP Program Navigation Exception: ' + e; 
           }

}

async function GetCPSelectedItems() {

    try {

        let PageContent = await GetPageContent()

        let SelectedItems = PageContent.replace(/,/g, '')
                                       .split(Plugin.ProgramStartEndDatesDelim)[1]
                                       .split('\r\n')

        let ProgramTermStart = SelectedItems[3]
        let ProgramTermEnd = SelectedItems[4]
        let EarliestCohortDate = SelectedItems[7]
        let RelayDataMonth = Plugin.RelDatMthDate + '-' + await IsTextIncludedInPage(Plugin.RelDatMothDefaultValue)
        let CohortPatientsData = SelectedItems[9]

        return ProgramTermStart + '===' +
               ProgramTermEnd + '===' +
               EarliestCohortDate + '===' +
               RelayDataMonth + '===' +
               CohortPatientsData + '==='
    }

    catch(e) {

        console.log('>>>>> Get CPP Selected Items Exception: ' + e)
        return '>>>>> Get CPP Selected Items Exception: ' + e

    }
}

// ========================== Access Solutions MP Program Functions =======================

async function MPNavigation() {

    try {

       let MPEXPORTDATA = ''
       let MPIMPORTEDDATA = ''
       let pageData = Plugin.MPDELIM
       let pageContent = ''

       mp = Plugin.true
   
       await ClickElementXpath(page, Plugin.MonthlyProjectionsEvalXPath)
       await page.waitForTimeout(3000)

       await SelectProductAndDOS()
       await page.waitForTimeout(3000)

       pageData = pageData + await GetSelectedProduct() + '===' +
                  await GetSelectedDOS () + '==='

       try { await ResetScenarios(Plugin.MPResButCsSelector, Plugin.CPPResetButtonClicked2Png) } catch(e) {}

       await ImportScenarios(0, Plugin.MPImportedDataPng)
       await page.waitForTimeout(3000)

       pageContent = await GetPageContent()
       MPIMPORTEDDATA = pageContent.split(Plugin.MPProgrParamDelim)[1]
                                   .split('\r\n')[3]


       try { await PopulateProgramParameters(2) } catch(e) {}
       await page.waitForTimeout(3000)

       MPNetPriceClassName0 = NetPriceClassName0
       MPNetPriceClassNameNeg = NetPriceClassNameNeg
   
       pageData = pageData + MPNetPriceClassName0 + '===' + 
                            MPNetPriceClassNameNeg + '==='
   
       MPEXPORTDATA = await ExportScenarios(Plugin.MPExportButSelector)
       await page.waitForTimeout(1000)
   
       await ClickButton(page, Plugin.MPParamTitle, 1)
       await page.waitForTimeout(1000)
   
       pageData = pageData +

       MPEXPORTDATA + '===' +
       MPIMPORTEDDATA + '===' +

       await CsvFileDownLoadInfo(Plugin.CPProgBellIconCsSelector, Plugin.MPBellNotificationsPng, Plugin.MPExecutionMsgDelim) + '===' +
       await GetTableRowsAndColumns(Plugin.MPResultsTableCsSelector) + '==='

       await ClickElementXpath(page, Plugin.MPRefillsIncludedXPath)

       pageData = pageData + 
       await GetTableRowsAndColumns(Plugin.MPRefillsIncludedTableCsSelector) + '==='

       await LogData(page, Plugin.MPRefillIncPng, 1, true, true)
       mp = false

       return pageData
   
    }
   
     catch(e) { 
                console.log('>>>MP Program Navigation Exception: ' + e);
                mp = false
                return '>>>MP Program Navigation Exception: ' + e; 
              }
   
   }

// ========================== Valerie functions ==============================

async function UploadFilesToValerie() {

    let MissingFileCmd = Plugin.RunScriptToUploadFilesToVal + ' ' +
                         Plugin.MissingColumnsCsvFileName + ' ' +
                         Plugin.WindExplValCsvFilesFolder

    let BadSampleFileCmd = Plugin.RunScriptToUploadFilesToVal + ' ' +
                           Plugin.BadSampleCsvFileName + ' ' +
                           Plugin.WindExplValCsvFilesFolder

    let GoodSampleFileCmd = Plugin.RunScriptToUploadFilesToVal + ' ' +
                            Plugin.GoodSampleCsvFileName + ' ' +
                            Plugin.WindExplValCsvFilesFolder

    await UploadFileToValerie(MissingFileCmd )
    await UploadFileToValerie(BadSampleFileCmd)
    await UploadFileToValerie(GoodSampleFileCmd)

}

async function UploadFileToValerie(CsvFileUploadScript) {

  await ClickButton(page, Plugin.ADDFILESBUTTON, 1)

  await page.waitForTimeout(1000)

  exec(CsvFileUploadScript, (error, stdout, stderr) => { } );

  await page.waitForTimeout(10000)

}

async function LaunchValerie(url) {

    await LaunchUrl(url)
    await LogData(page, 'N/A', 1, false, true);

}

async function ValerieWebData(selector) {

    await ClickButton(page, selector, 1)
    await page.waitForTimeout(50);
    await LogData(page, 'N/A', 1, false, true);

}

// ==================================================================================