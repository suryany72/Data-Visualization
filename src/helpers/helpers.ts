import * as fromConstants from '../constants'
import { bootStrap } from './bootStrap'

export const checkDataType = (object: any) => {
    const stringConstructor = "test".constructor;
    const arrayConstructor = [].constructor;
    const objectConstructor = ({}).constructor;


    if (object === null) {
        return fromConstants.objMapper.NULL
    }
    if (object === undefined) {
        return fromConstants.objMapper.UNDEFINED;
    }
    if (object.constructor === stringConstructor) {
        return fromConstants.objMapper.STRING
    }
    if (object.constructor === arrayConstructor) {
        return fromConstants.objMapper.ARRAY
    }
    if (object.constructor === objectConstructor) {
        return fromConstants.objMapper.OBJECT;
    }

}
export const headerRow = (tableHeaders: string[],_isbootStrap?:boolean): string => {
    let tableHeaderRow = `<tr ${_isbootStrap?'scope="col"':''}>`
    tableHeaders.forEach((e) => {
        tableHeaderRow += `<th >${e.toUpperCase()}<a href="#" onClick=${handlefilter}> <img class="image" /></a></th>`


    })
    tableHeaderRow += '</tr>'
    return tableHeaderRow

}
const handlefilter =(filterOption:string,column:string[]) =>{

    return 
}
export const DataRow = (tableHeaders: string[],_isbootStrap?:boolean): string => {
    let tableDataRow = `<tr ${_isbootStrap?'scope="row"':''}>>`
    tableHeaders.forEach((e) => {
        tableDataRow += `<td>${e.toUpperCase()}</td>`
    })
    tableDataRow += '</tr>'
    return tableDataRow

}
export const  json2array= (json:any) => {
    const result:string[] = [];
    const keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}
export const CreateBootstrapStyles = () => {
    
    const link = document.createElement('link');
    link.href = bootStrap.src0
    link.rel = "stylesheet"
    link.integrity = "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    link.crossOrigin = "anonymous"

    document.getElementsByTagName('head')[0].prepend(link)
    const script = document.createElement('script');
    script.src = bootStrap.src1;
    script.integrity = "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    script.crossOrigin = "anonymous"
    document.getElementsByTagName('head')[0].firstChild.appendChild(script)
}