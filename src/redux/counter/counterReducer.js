import { COUNTER_REST, COUNTER_SUM } from "./counterTypes"

const initialStateSum = {
    count: 0
}

const counterReducer = (state = initialStateSum, action) => {
    switch(action.type) {
        case COUNTER_SUM: return {
            ...state,
            count: state.count + 1
        }
        case COUNTER_REST: return {
            ...state, 
            count: state.count -1
        }
        default:
            return state
    }
}
export default counterReducer