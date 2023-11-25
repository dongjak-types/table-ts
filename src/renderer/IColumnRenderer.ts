import {IStyled} from "../IStyled";

/**
 * 列渲染器公共接口
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface IColumnRenderer extends IStyled{

    /**
     * 渲染器的类型
     */
    type?: ColumnRendererType
}

/**
 * 列渲染器类型
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export type ColumnRendererType = "default" | "link" | "image" | "select" | "tag" | "long-text"
