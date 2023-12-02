import {ITextEditor} from "./ITextEditor";
import {DateType, IDateEditor} from "./IDateEditor";
import {ITextAreaEditor} from "./ITextAreaEditor";
import {IAdministrativeAreaEditor} from "./IAdministrativeAreaEditor";
import {ISelector, SelectorReturnValueType} from "./ISelector";
import {INumberEditor} from "./INumberEditor";
import {IImageEditor} from "./IImageEditor";
import {ICascadeSelector} from "./ICascader";
import {ICarBrandSelect} from "./ICarBrandSelect";
import {IBoolSelector} from "./IBoolSelector";
import {IColumnEditor} from "./IColumnEditor";


/**
 * 编辑器工具类,用于快速创建各种编辑器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class Editors {
    static hidden(field: string, value: any) {
        return {
            field,
            type:'hidden',
            value
        } as IColumnEditor
    }

    /**
     * 创建一个文本编辑器
     * @param config
     */
    static text(config: ITextEditor): ITextEditor {
        return {
            ...config,
            type: "text",
            ...{
                placeholder: config.placeholder ?? `请输入${config.label}`,
                rules: config?.required ? [
                    'required'
                ] : [],
            } as ITextEditor
        }
    }

    /**
     * 创建一个数字编辑器
     * @param config 数字编辑器的配置
     */
    static number(config: INumberEditor = {}): INumberEditor {
        return {
            ...config,
            type: "number",
            ...{
                rules: config?.required ? [
                    {
                        required: true,
                        validator: (value: any) => {
                            if (value === undefined || value === null || value === "") {
                                return false
                            }
                            if (config.min !== undefined && config.min !== null && value < config.min) {
                                return false
                            }
                            if (config.max !== undefined && config.max !== null && value > config.max) {
                                return false
                            }
                            return true
                        },
                        message: `${config.label}必须是${config.min}到${config.max}${config.msgSuffix ?? '之间的数字'}`
                    }
                ] : [],
                placeholder: config.placeholder ?? `请输入${config.label}`,
            } as ITextEditor
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
                multiple: config.multiple ?? false,
                rules: config?.required ? [
                    {
                        required: true,
                        validator: (value: any[] | undefined, {message}: { message: string }) => {

                            if (value === undefined || value === null || value.length === 0) {
                                return new Error(`最少需要上传一张${config.label}`)
                            }

                            if (value.length > (config.max ?? Number.MAX_VALUE)) {
                                return new Error(`最多只能上传${config.max ?? Number.MAX_VALUE}张${config.label}`)
                            }

                            return true
                        }
                    }
                ] : [],
            } as IImageEditor)
        }
    }

    /**
     * 创建一个下拉选择器
     * @param config 选择器的配置
     */
    static select(config: ISelector): ISelector {
        return {
            ...config,
            type: "select",
            ...{
                labelField: config.labelField ?? "name",
                valueField: config.valueField ?? "id",
                placeholder: config.placeholder ?? `请选择${config.label}`,
                returnValueType: config.returnValueType ?? SelectorReturnValueType.OPTION,
                convertValueToOption: config.convertValueToOption ?? ((value: any) => {
                    return value
                }),
                rules: config?.required ? [
                    {
                        required: true,
                        validator: (value: any | undefined) => {

                            if (value === undefined || value === null || value.length === 0) {
                                return new Error(`最少需要选择一种${config.label}`)
                            }


                            return true
                        }
                    }
                ] : [],
            } as ISelector
        }
    }


    static bool(config: IBoolSelector): ISelector {
        return Editors.select({
            label: config.label, field: config.field,
            returnValueType: config.returnValueType ?? SelectorReturnValueType.VALUE,
            convertValueToOption: (value: any) => {
                return {
                    id: value,
                    name: value ? config.trueText ?? "是" : config.falseText ?? "否",
                }
            },
            options: [
                {
                    id: true,
                    name: config.trueText ?? "是"
                },
                {
                    id: false,
                    name: config.falseText ?? "否"
                }
            ],
            value: config.value
        })
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
                dateType: config.dateType ?? DateType.DATE,
                rules: config?.required ? [
                    {
                        required: true,
                        validator: (value: any | undefined) => {
                            if (value === undefined || value === null || value.length === 0) {
                                return new Error(`${config.label}不能为空`)
                            }
                            return true
                        }
                    }
                ] : []
            } as IDateEditor
        }
    }

    /**
     * 创建一个文本域编辑器
     * @param config 文本域编辑器的配置
     */
    static textArea(config: ITextAreaEditor = {
        rows: 3,
        width: 300,
        height: 200
    }): ITextAreaEditor {
        return {
            ...config,
            type: "text_area",
            ...{
                rows: config.rows ?? 3,
                width: config.width ?? 300,
                height: config.height ?? 200
            }
        }
    }

    /**
     * 创建一个新的行政区域编辑器
     * @param config 行政区域编辑器的配置
     */
    static area(config: IAdministrativeAreaEditor): IAdministrativeAreaEditor {
        return {
            level: 3,
            ...config,
            type: "area",
            ...{
                placeholder: config.placeholder ?? `请选择${config.label ?? ''}`,
                labelField: config.labelField ?? "name",
                valueField: config.valueField ?? "id",
                parentField: config.parentField ?? "parentId",
                levelField: config.levelField ?? "level",
            }
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
