import {ITooltip, TooltipType} from "../tooltip/ITooltip";
import {ITable} from "../ITable";
import {ColumnRendererType, IColumnRenderer} from "../renderer/IColumnRenderer";
import {IColumnEditor} from "../editor/IColumnEditor";
import {ColumnFilterType, IColumnFilter} from "../filter/IColumnFilter";


/**
 * 这个接口用于定义一个表格列
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export interface IColumn {
    /**
     * 列的标题
     */
    label: string
    /**
     * 列的字段
     */
    field: string

    /**
     * 提交值时使用的字段
     */
    submitField?: string

    /**
     * 提交值时使用的值获取器
     * @param newValue 列的新值
     * @param rowData 行数据
     */
    submitValueGetter?: (newValue: any, rowData: any) => any
    /**
     * 工具提示
     */
    tooltip?: ITooltip | TooltipType | ((table: ITable<any>) => ITooltip);
    /**
     * 列的渲染器
     */
    renderer?: IColumnRenderer | ColumnRendererType
    /**
     * 列的编辑器
     */
    editor?: IColumnEditor | ((table: ITable<any>) => IColumnEditor);


    /**
     * 列的过滤器
     */
    filter?: IColumnFilter| ColumnFilterType
    /**
     * 列的值获取器,默认情况下直接从行数据中获取
     * @param row
     */
    valueGetter?: (row: any) => any
    /**
     * 列的值格式化器,默认情况下直接返回原始值
     * @param data
     */
    valueFormatter?: (data: any) => any
}

/**
 * 列类型
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export type ColumnType = "select" | "actions" | "status"
