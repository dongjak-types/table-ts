import {IColumnEditor} from "./IColumnEditor";
import {ISelectOption} from "./ISelector";

export interface ICarBrandSelect extends IColumnEditor {
    getBrands?: (searchKeyword: string) => Promise<ISelectOption[]>
    getSeries?: (brand: ISelectOption, searchKeyword: string) => Promise<ISelectOption[]>
    getModels?: (series: ISelectOption, searchKeyword: string) => Promise<ISelectOption[]>
    /**
     * 选项的标签字段,默认为`name`
     */
    labelField?: string


    /**
     * 选项的分组字段,默认为`pinyin`
     */
    groupField?: string
}
