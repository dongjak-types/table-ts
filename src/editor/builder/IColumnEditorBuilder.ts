import { IColumnEditor } from "../IColumnEditor";


/**
 * 列编辑器构建器公共接口
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export interface IColumnEditorBuilder<T extends IColumnEditor>{
    build(): T;
}
