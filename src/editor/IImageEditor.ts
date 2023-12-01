import {IColumnEditor} from "./IColumnEditor";

/**
 * 图片编辑器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/19
 */
export interface IImageEditor extends IColumnEditor {
    idField?: string,
    /**
     * 用于获取图片的地址的字段
     */
    srcField?: string,

    /**
     * 文件上传端点
     */
    endpoint?: string,

    /**
     * 是否允许上传多个文件
     */
    multiple?: boolean,

    min?: number,
    max?: number,

    /**
     * 附加的数据
     */
    data?: { [key: string]: any | ((rowData: any) => any) },
    //getValue: (rowData: any) => any
}
