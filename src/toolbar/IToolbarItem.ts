import {VNode} from "vue";

export interface IToolbarItem {
    /**
     * 按钮类型
     */
    type: ToolbarItemType
btnType:"default"|"tertiary"|"primary"|"info"|"success"|"warning"|"error"
    text: string
    icon:string|VNode
    position:"left"|"right"
    handler?: (...args:any) => void
}

export type ToolbarItemType = 'add' | 'delete' | 'edit' | 'refresh' | 'export' | 'import'
