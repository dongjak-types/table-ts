import {IColumnEditor} from "./IColumnEditor";

/**
 * 数字编辑器
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface INumberEditor extends IColumnEditor {

    /**
     * 值为空时的占位符
     */
    placeholder?: string

    /**
     * 最小值
     */
    min?: number

    /**
     * 最大值
     */
    max?: number
}
