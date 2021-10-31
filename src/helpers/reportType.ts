import * as tblDef from './Itable'

export const reportType: Record<report, object> = {
    'Table': tblDef,
    'DataCentricTable':Object ,
    'PieChart': Object,
    'DataCentricPieChart': Object,
    'Histogram': Object,
    'DataCentricHistogram': Object,
    'DrillDown': Object,
    'DataCentricDrillDown': Object
}

export type report = "Table"|
"DataCentricTable"|
"PieChart"|
"DataCentricPieChart"|
"Histogram"|
"DataCentricHistogram"|
"DrillDown"|
"DataCentricDrillDown"