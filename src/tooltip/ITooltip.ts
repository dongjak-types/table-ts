import {IStyled} from "../IStyled";

/**
 * 列工具提示公共接口
 *
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export interface ITooltip extends IStyled {

    /**
     * 工具提示的类型
     */
    type?: TooltipType
}

/**
 * 工具提示类型
 * @author dongjak
 * @since 1.0
 * @date 2023/10/7
 */
export type TooltipType = "text"
