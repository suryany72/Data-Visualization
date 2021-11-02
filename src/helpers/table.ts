import * as fromHelpers from './helpers'
import * as fromConstants from '../constants'
import * as fromCss from "./styles.css"
import { table, CSSDef } from './Itable'
import { reportType, report } from './reportType'

export const generateReport = (_report: typeof reportType): HTMLDivElement => {
    let div
    (Object.keys(_report) as Array<report>).find(key => {
        if (key === 'DataCentricTable') {

            div = generateTable(null, _report[key])

        }
        if (key === 'Table') {

            div = generateTable(_report[key] as table, null)

        }
    })
    return div

}

const generateTable = (_table?: table, _data?: any) => {
    const dataSource = _table?.data ? _table.data : _data
    if (fromHelpers.checkDataType(dataSource) === fromConstants.objMapper.ARRAY) {
        return generateHTMLTable(dataSource, _table ? _table.className : null)

    }

}

const generateHTMLTable = (data: any, css?: CSSDef): HTMLDivElement => {


    const sTag = `<table class=${fromCss.default}>`
    const eTag = '</table>'
    let tblStr = sTag + fromHelpers.headerRow(Object.keys(data[0]), css?.isBootStrapClass)
    data.forEach((element: {}) => {
        tblStr += fromHelpers.DataRow(Object.values(element), css?.isBootStrapClass)

    })
    tblStr += eTag
    const tblHTML = document.createElement('div')
    tblHTML.innerHTML = tblStr

    if (css?.isBootStrapClass) {


        fromHelpers.CreateBootstrapStyles()
        fromHelpers.addCssClass(css.className, tblHTML)


    }
    return tblHTML
}


