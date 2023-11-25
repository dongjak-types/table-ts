import {ITextEditor} from "./ITextEditor";
import {DateType, IDateEditor} from "./IDateEditor";
import {ITextAreaEditor} from "./ITextAreaEditor";
import {IAdministrativeAreaEditor} from "./IAdministrativeAreaEditor";
import {ISelector, SelectorReturnValueType} from "./ISelector";
import {INumberEditor} from "./INumberEditor";
import {IImageEditor} from "./IImageEditor";
import {ICascadeSelector} from "./ICascader";
import {ICarBrandSelect} from "./ICarBrandSelect";


/**
 * 编辑器工具类,用于快速创建各种编辑器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class Editors {

    /**
     * 创建一个文本编辑器
     * @param allowEmpty 是否允许为空
     * @param placeholder 编辑器的占位符
     */
    static text(allowEmpty = true, placeholder: string | undefined = undefined): ITextEditor {
        return {
            type: "text",
            allowEmpty,
            placeholder
        }
    }

    /**
     * 创建一个日期编辑器
     * @param config 日期编辑器的配置
     */
    static date(config: IDateEditor = {
        valueField: "value",
        formatField: "format",
        localizationStrField: "localizationStr",
        dateType: DateType.DATE
    }): IDateEditor {
        return {
            ...config,
            type: "date",
            ...{
                formatField: config.formatField ?? "format",
                valueField: config.valueField ?? "value",
                localizationStrField: config.localizationStrField ?? "localizationStr",
                dateType: config.dateType ?? DateType.DATE
            }
        }
    }

    /**
     * 创建一个文本域编辑器
     * @param config 文本域编辑器的配置
     */
    static textArea(config: ITextAreaEditor = {
        allowEmpty: true,
        rows: 3,
        width: 300,
        height: 200
    }): ITextAreaEditor {
        return {
            ...config,
            type: "text_area",
            ...{
                allowEmpty: config.allowEmpty ?? true,
                rows: config.rows ?? 3,
                width: config.width ?? 300,
                height: config.height ?? 200
            }
        }
    }

    /**
     * 创建一个新的行政区域编辑器
     * @param config 行政区域编辑器的配置
     * @param placeholder   编辑器的占位符
     */
    static area(config: IAdministrativeAreaEditor, placeholder: string | undefined = undefined): IAdministrativeAreaEditor {
        return {
            level: 3,
            ...config,
            type: "area",
            placeholder,
            ...{
                labelField: config.labelField ?? "name",
                valueField: config.valueField ?? "id",
                parentField: config.parentField ?? "parentId",
                levelField: config.levelField ?? "level",
            }
        }
    }

    /**
     * 创建一个下拉选择器
     * @param config 选择器的配置
     * @param placeholder 编辑器的占位符
     */
    static select(config: ISelector, placeholder: string | undefined = undefined): ISelector {
        return {
            ...config,
            type: "select",
            placeholder,
            ...{
                labelField: config.labelField ?? "name",
                valueField: config.valueField ?? "id",
                returnValueType: config.returnValueType ?? SelectorReturnValueType.OPTION,
                convertValueToOption: config.convertValueToOption ?? ((value: any) => {
                    return value
                })
            }
        }
    }


    /**
     * 创建一个数字编辑器
     * @param placeholder 编辑器的占位符
     * @param min 最小值
     * @param max 最大值
     */
    static number(placeholder: string | undefined = undefined, min: number | undefined = undefined, max: number | undefined = undefined): INumberEditor {
        return {
            type: "number",
            min,
            max,
            placeholder
        }
    }

    /**
     * 创建一个图片编辑器
     * @param config
     */
    static image(config: IImageEditor = {}): IImageEditor {
        return {
            ...config,
            type: "image",
            ...({
                idField: config.idField ?? "id",
                srcField: config.srcField ?? "src",
                multiple: config.multiple ?? false
            } as IImageEditor)
        }
    }

    /**
     * 创建一个级联选择器
     * @param config 配置
     */
    static cascader(config: ICascadeSelector = {}): ICascadeSelector {
        return {
            ...config,
            type: "cascade_select",
            ...({
                labelField: config.labelField ?? "name",
                valueField: config.valueField ?? "id",
                levelField: config.levelField ?? "level",
                childrenField: config.childrenField ?? "children"
            } as ICascadeSelector)
        }
    }


    /**
     * 创建一个车辆品牌选择器
     * @param config 配置
     */
    static carBrandSelect(config: ICarBrandSelect = {}): ICarBrandSelect {
        return {
            ...config,
            type: "car_brand_select",
            ...({
                labelField: config.labelField ?? "name",
                groupField: config.groupField ?? "pinyin"
            } as ICarBrandSelect)
        }
    }
}
