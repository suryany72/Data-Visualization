import * as fromConstants from '../constants'
import * as fromHelpers from '../helpers'

type report =import('../helpers').report

// export const  generateView = (_data: any, _vType: string,cssClass?:string) => {

//     if (_vType === fromConstants.reportMapper.TABLE) {
//       return fromHelpers.generateReport(_data,cssClass)
//     }

// }
export const  generateView = (_viewType:Record<string,Object>) => {

  
    return fromHelpers.generateReport(_viewType)
  

}
