import { generateView } from "./_view/data"
// import { table, Column, json2array, className } from './helpers'

(function () {
    const jsonData = [{ "person": "me", "age": "30" }, { "person": "you", "age": "25" }]

    // use case datacentric table
    type rt = Record<"DataCentricTable", Object>

    const rt_view: rt = {
        DataCentricTable: jsonData
    }

    const div = generateView(rt_view)


    document.body.appendChild(div)

    // use case table
    // const columnDef = {
    //     sortable: true,
    //     filterable: true,
    //     width: '30px',
    //     draggable: true,
    //     linkable: false

    // }
    
    // const columns: Column[] = []
    // jsonData.map(ele => {
    //     if (!ele.age) {
    //         columns.push(columnDef)
    //     }
    // }
    // )
    // const tblClass: className = {
    //     isBootStrapClass:true,
    //     className: ['table', 'table-dark', 'table-striped']
    // }
    // const tbl: table = {
    //     column: columns,
    //     data: json2array(jsonData),
    //     className: tblClass
    // }
    // type rt_table = Record<"Table", Object>

    // const rt_table_view: rt_table = {
    //     Table: tbl
    // }
    // const div = generateView(rt_table_view)


    // document.body.appendChild(div)
})()
