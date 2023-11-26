/**
 * 列的值格式化器工具类,用于快速创建列的值格式化器
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export class ValueFormatters {

    /**
     * 使用列的`name`属性创建一个值格式化器
     * @param data
     */
    static nameField = (data: any) => {
        return data?.name
    }


    /**
     * 使用指定属性创建一个值格式化器
     * @param field 属性名
     */
    static filedOf = ( field:string) => {
        return (data?: any) => {
            return data?.[field]
        }
    }
}
