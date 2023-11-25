import {IColumnEditor} from "./IColumnEditor";


/**
 * 文本编辑器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ITextEditor extends IColumnEditor {

    /**
     * 是否允许为空
     */
    allowEmpty?: boolean

    /**
     * 占位符
     */
    placeholder?: string

    /**
     * 当值为空时的提示信息
     */
    msgOnEmpty?: string
}
