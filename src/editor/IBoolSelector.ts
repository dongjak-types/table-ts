import {ISelector} from "./ISelector";

export interface IBoolSelector extends ISelector{


    trueText?:string
    falseText?:string
    trueValue?:any
    falseValue?:any
}
