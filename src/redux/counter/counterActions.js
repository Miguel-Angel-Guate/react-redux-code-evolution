import { COUNTER_REST, COUNTER_SUM } from "./counterTypes"

export const counterSumAction = () => {
    return {
        type: COUNTER_SUM
    }
}
export const counterRestAction = () => {
    return  {
        type: COUNTER_REST
    }
}