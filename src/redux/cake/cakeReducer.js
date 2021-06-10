import { BUY_CAKE } from "./cakeTypes"

//siempre tiene un inital state el reducer
const initialState = {
    numOfCakes: 10
}
//the function take two parameters
const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default:
            return state
    }

}

export default cakeReducer