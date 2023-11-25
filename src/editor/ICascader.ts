import {IColumnEditor} from "./IColumnEditor";
import {ISelectOption} from "./ISelector";

/**
 * 级联选择器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export interface ICascadeSelector extends IColumnEditor {

    /**
     * 值为空时的占位符
     */
    placeholder?: string
    /**
     * 显示几级选项
     */
    level?: number

    /**
     * 选项的标签字段,默认为`name`
     */
    labelField?: string
    /**
     * 选项的值字段,默认为`id`
     */
    valueField?: string
    /**
     * 选项的级别字段,默认为`level`
     */
    levelField?: string
    /**
     * 选项的下级字段,默认为`children`
     */
    childrenField?: string


    getRoots ?: () => Promise<ISelectOption[]>
    getByParent?: (parent: ISelectOption) => Promise<ISelectOption[]>
}
