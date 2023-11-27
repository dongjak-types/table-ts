import {ColumnType, IColumn} from "./column/IColumn";
import {IDataSource} from "./IDataSource";
import {Theme} from "@dongjak-public-types/commons";
import {IPagination} from "./IPagination";
import {ILocaleText} from "./ILocaleText";
import {RowSelectionMode} from "./row/RowSelectionMode";
import {IRowAction, RowActionType} from "./rowaction/IRowAction";

/**
 * 这个接口用于定义一个表格
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ITable<T> {

    /**
     * 列
     */
    columns: (IColumn | ColumnType)[],

    /**
     * 数据源
     */
    dataSource: IDataSource<T>,

    /**
     * 主题
     */
    theme?: Theme,

    /**
     * 分页设置
     */
    pagination?: IPagination,

    /**
     * 本地化文本
     */
    localeText?: ILocaleText,

    /**
     * 选择模式
     */
    selectionMode?: RowSelectionMode,

    /**
     * 行操作
     */
    rowActions?: RowActionType[] | IRowAction<T>[],

    /**
     * 主键字段
     */
    pk?: string


    /**
     *  获取选中的行数据
     */
    getSelectedRowData?: () => T[]
}
