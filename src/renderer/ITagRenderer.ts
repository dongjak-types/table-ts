import {IColumnRenderer} from "./IColumnRenderer";

/**
 * 把列的值渲染成一个标签
 *
 * <p style="width: 100px; height: 50px; background-color: red;text-align:center;">标签文本</p>
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ITagRenderer extends IColumnRenderer {
    /**
     * 标签文本用哪个字段来展示,如果不指定,默认为`name`
     * */
    labelField?: string
    /**
     * 标签的颜色用哪个字段来展示,如果不指定,默认为`color`
     * */
    colorField?: string
    /**
     * 标签的文本颜色用哪个字段来展示,如果不指定,默认为`textColor`
     * */
    textColorField?: string

    /**
     * 把原始值转换成一个标签项目,默认情况下直接将原始值视作标签项目
     * @param value 原始值
     */
    convertValueToOption?: (value: any) => ITagOption
}

/**
 * 这个接口用于表示一个标签项目
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ITagOption{
    [key: string]: any
}
