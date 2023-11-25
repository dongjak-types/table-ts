import {IColumnRenderer} from "./IColumnRenderer";


/**
 * 图片渲染器
 * @author dongjak
 * @since 1.0
 * @date 2023/10/19
 */
export interface IImageRenderer<T> extends IColumnRenderer {

    /**
     * 用于获取图片的地址的字段
     */
    srcField?: string

    /**
     * 用于获取图片的`alt`的字段
     */
    altField?: string

    /**
     * 节流模式,如果为`true`则只会在页面上显示一张图片,其余的图片会打开灯箱时才加载
     */
    throttleMode?: boolean

}
