import {IPage, IQueryPayload} from "@dongjak-public-types/commons";
import {JsonResponse} from "@dongjak-public-types/commons";


/**
 * 数据源接口
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IDataSource<T> {

    /**
     * 获取数据
     * @param queryPayload 查询载荷
     */
    get(queryPayload: IQueryPayload): Promise<JsonResponse<IPage<T>>>

    /**
     * 保存或更新
     * @param row 行
     */
    saveOrUpdate(row: T): Promise<JsonResponse<boolean>>

    /**
     * 删除行
     * @param rowIds 行ID列表
     */
    deleteRows(rowIds: number[]): Promise<JsonResponse<boolean>>
}
