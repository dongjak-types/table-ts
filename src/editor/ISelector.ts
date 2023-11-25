import {IColumnEditor} from "./IColumnEditor";

/**
 * 下拉选择器的选项
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ISelectOption {
    [key: string]: any
}

/**
 * 下拉选择器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ISelector extends IColumnEditor {
    /**
     * 占位符
     */
    placeholder?: string
    /**
     * 选项,可以是一个{@link Array}<{@link ISelectOption}>,也可以是一个方法,如果是一个方法,则会在编辑器打开时调用该方法,并将返回值作为选项
     */
    options?: ISelectOption[] | (() => Promise<ISelectOption[]>)
    /**
     * 选项的标签字段,默认为`name`
     */
    labelField?: string
    /**
     * 选项的值字段,默认为`id`
     */
    valueField?: string

    /**
     * 选择器的返回值类型,默认为`OPTION`
     */
    returnValueType?: SelectorReturnValueType

    /**
     * 把原始值转换成一个选项对象,默认情况下直接将原始值视作选项对象
     * @param value 原始值
     */
    convertValueToOption?: (value: any) => ISelectOption
}
/**
 * 选择器的返回值类型
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export enum SelectorReturnValueType {
    /**
     * 返回选项的值
     */
    VALUE,
    /**
     * 返回整个选项
     */
    OPTION
}
