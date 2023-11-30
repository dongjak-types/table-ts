import {ISelectFilter} from "./ISelectFilter";
import {SelectorReturnValueType} from "../editor/ISelector";

export class Filters{

    /**
     * 创建一个下拉选择器
     * @param config 选择器的配置
     * @param placeholder 编辑器的占位符
     */
    static select(config: ISelectFilter, placeholder: string | undefined = undefined): ISelectFilter {
        return {
            ...config,
            type: "select",
            placeholder,
            ...{
                labelField: config.labelField ?? "name",
                valueField: config.valueField ?? "id",
                returnValueType: config.returnValueType ?? SelectorReturnValueType.VALUE,
                convertValueToOption: config.convertValueToOption ?? ((value: any) => {
                    return value
                })
            }
        }
    }

}
