import {Operator} from "@dongjak-public-types/commons";


/**
 * 列过滤器公共接口
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IColumnFilter {
    /**
     *   过滤器的类型
     */
    type?: ColumnFilterType
label?:string
    property?:string
    component?:any
    value?:string
    operator?: Operator
}


/**
 * 列过滤器的类型
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/11/29
 */
export type ColumnFilterType =
    "text"|
    "select"
