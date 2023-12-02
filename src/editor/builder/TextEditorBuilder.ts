import {IColumnEditorBuilder} from "./IColumnEditorBuilder";
import {ITextEditor} from "../ITextEditor";


/**
 * 文本编辑器构建器
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export class TextEditorBuilder implements IColumnEditorBuilder<ITextEditor>{
    protected readonly config: ITextEditor = {}

    constructor() {
    }

    /**
     * 宽度
     * @param width
     */
    width(width: number) {
        this.config.width = width
        return this
    }

    /**
     * 高度
     * @param height
     */
    height(height: number) {
        this.config.height = height
        return this
    }



    /**
     * 占位符
     * @param placeholder
     */
    placeholder(placeholder: string) {
        this.config.placeholder = placeholder
        return this
    }


    /**
     * 构建
     */
    build(): ITextEditor {
        return this.config
    }
}
