import {TextEditorBuilder} from "./TextEditorBuilder";
import {ITextAreaEditor} from "../ITextAreaEditor";


/**
 * 文本域编辑器构建器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export class TextAreaEditorBuilder extends TextEditorBuilder {
    protected readonly config: ITextAreaEditor = {}


    /**
     * 行数
     * @param rows
     */
    rows(rows: number) {
        this.config.rows = rows
        return this
    }


}
