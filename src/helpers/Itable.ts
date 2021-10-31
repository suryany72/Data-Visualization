export interface table {
    column?: Column[]
    data: string[]
    className?: CSSDef
    events?: EventDef
    nullDataText?: string
    pagination?: Pagination
    virtualScroll?: boolean
}
export interface Column {
    sortable?: boolean
    filterable?: boolean
    type?: string | number | Date
    width?: string
    draggable?: boolean
    linkable?: boolean
    className?: CSSDef
    subTable?: table
}
export interface Pagination {
    className: CSSDef
    type: number | string
}
export interface EventDef {
    handleSort: Event
    handlePage: Event
    handleClick: Event
    handleDrag: Event
}
export interface CSSDef {
    className?: string[]
    isBootStrapClass?:boolean
    fileName?: string
}
export interface FilterDef {
    type: number | string
    data: string[]
}