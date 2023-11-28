import {IToolbarItem, ToolbarItemType} from "./IToolbarItem";

export interface IToolbar{
    items:(IToolbarItem|ToolbarItemType)[]
}
