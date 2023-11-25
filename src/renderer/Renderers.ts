import {ITagRenderer} from "./ITagRenderer"
import {IImageRenderer} from "./IImageRenderer";


/**
 * 渲染器工具类,用于快速创建各种渲染器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class Renderers {

    /**
     * 创建一个标签渲染器
     * @param config 标签渲染器的配置
     * @return   标签渲染器
     */
    static tag(config: ITagRenderer): ITagRenderer {
        return {
            ...config,
            type: "tag",
            ...{
                labelField: config.labelField ?? "name",
                colorField: config.colorField ?? "color",
                textColorField: config.textColorField ?? "textColor",
                convertValueToOption: config.convertValueToOption ?? ((value: any) => {
                    return value
                })
            }
        }
    }

    /**
     * 创建一个图片渲染器
     * @param config 图片渲染器的配置
     * @return   图片渲染器
     */
    static image<T>(config: IImageRenderer<T> = {}): IImageRenderer<T> {
        return {
            ...config,
            type: "image",
            ...{
                srcField: config.srcField ?? "src",
                altField: config.altField ?? "alt"
            }
        }
    }
}
