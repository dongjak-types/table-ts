import {IColumnEditor} from "./IColumnEditor";

/**
 * 日期编辑器
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IDateEditor extends IColumnEditor {

    /**
     * 用于存储日期的字段,默认为`format`
     */
    formatField?: string

    /**
     * 用于存储日期值的字段,默认为`value`
     */
    valueField?: string

    /**
     * 用于存储日期的本地化字符串的字段,默认为`localizationStr`
     */
    localizationStrField?: string

    /**
     * 日期编辑器的类型,默认为`DATE`
     */
    dateType?: DateType

    presets?: IDatePreset[]
}

export interface IDatePreset {
label:string
value:any
}

export class DatePresets{

    static past = {"value":0,"localizationStr":"1970-01-01"}
}

/**
 * 日期类型枚举
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export enum DateType {

    /**
     * 日期
     */
    DATE,

    /**
     * 日期和时间
     */
    DATETIME,

    /**
     * 时间
     */
    TIME,

    /**
     * 年份
     */
    YEAR,

    /**
     * 月份
     */
    MONTH
}
