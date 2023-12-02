
export interface IToolbarItem {
    /**
     * 按钮类型
     */
    type: ToolbarItemType
    componentType?: "button" |   "custom"
    component?:any
btnType?:"default"|"tertiary"|"primary"|"info"|"success"|"warning"|"error"
    text?: string
    icon?:any
    position?:"left"|"right"
    handler?: (...args:any) => void
}

export type ToolbarItemType = 'add' | 'delete' | 'edit' | 'refresh' | 'export' | 'import'|"show_columns"
