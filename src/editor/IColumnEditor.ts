import {IStyled} from "../IStyled";


/**
 * 列编辑器公共接口
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IColumnEditor extends IStyled {

    /**
     * 编辑器的类型
     */
    type?: ColumnEditorType

}

/**
 * 列编辑器的类型
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export type ColumnEditorType =
    "text"
    | "text_area"
    | "number"
    | "area"
    | "select"
    | "date"
    | "image"
    | "cascade_select"
    | "car_brand_select"
