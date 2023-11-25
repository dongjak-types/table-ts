import { ICascadeSelector} from "./ICascader";
import {IAdministrativeArea} from "../row/model/IAdministrativeArea";

/**
 * 行政区域编辑器
 * @author dongjak
 * @since 1.0
 * @date 2023/10/17
 */
export interface IAdministrativeAreaEditor extends ICascadeSelector {
    /**
     * 行政区域级别,默认为`3`,即省市区
     */
    level?: number
    /**
     * 行政区域的标签字段,默认为`name`
     */
    labelField?: string
    /**
     * 行政区域的值字段,默认为`id`
     */
    valueField?: string
    /**
     * 行政区域的父级字段,默认为`parentId`
     */
    parentField?: string
    /**
     * 行政区域的级别字段,默认为`level`
     */
    levelField?: string
    /**
     * 用于获取所有省份的方法
     */
    getProvinces: () => Promise<IAdministrativeArea[]>
    /**
     * 用于获取某个省份下的所有城市的方法
     * @param province 省份
     */
    getCitiesByProvince: (province: IAdministrativeArea) => Promise<IAdministrativeArea[]>
    /**
     * 用于获取某个城市下的所有区县的方法
     * @param city  城市
     */
    getDistrictsByCity: (city: IAdministrativeArea) => Promise<IAdministrativeArea[]>
}
