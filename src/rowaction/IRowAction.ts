import {ITable} from "../ITable";

/**
 * 行动作公共接口
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IRowAction<T> {
    /**
     * 文本
     */
    text: string

    /**
     * 图标
     */
    icon?: string

    /**
     * 点击事件
     * @param row
     */
    onClick: (rows: T | T[]) => void


    /**
     * 是否显示
     * @param row
     * @param table
     */
    display: (rows: T | T[], table: ITable<T>) => boolean
}

/**
 * 行动作类型
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export type RowActionType = "add" | "edit" | "delete" | "print" | "export" | "refresh"
