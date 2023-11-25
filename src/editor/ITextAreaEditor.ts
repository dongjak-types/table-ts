import {ITextEditor} from "./ITextEditor";

/**
 * 文本域编辑器
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ITextAreaEditor extends ITextEditor {

    /**
     * 行数
     */
    rows?: number
}
