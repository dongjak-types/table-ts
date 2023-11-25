import {Renderers} from "../renderer/Renderers";
import {Editors} from "../editor/Editors";
import {SelectorReturnValueType} from "../editor/ISelector";
import {IColumn} from "./IColumn";


/**
 * 列工具类,用于快速创建列定义
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export class Columns {

    /**
     * 快速创建一个值是布尔类型的列
     * @param config
     */
    static bool(config: {
        label?: string,
        field?: string,
        trueText?: string,
        falseText?: string,
        trueColor?: string,
        falseColor?: string,
        editable?: boolean
    } = {}) {
        return {
            label: config.label, field: config.field, renderer: Renderers.tag({
                labelField: "name",
                convertValueToOption: (value: any) => {
                    return {
                        id: value,
                        name: value ? config.trueText ?? "是" : config.falseText ?? "否",
                        color: value ? config.trueColor ?? "green" : config.falseColor ?? "red",
                        textColor: "white"
                    }
                },
            }),
            editor: Editors.select({
                returnValueType: SelectorReturnValueType.VALUE,
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
                ]
            })
        } as IColumn
    }
}
