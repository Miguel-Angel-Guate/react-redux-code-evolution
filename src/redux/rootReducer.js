import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import counterReducer from './counter/counterReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    countRedu: counterReducer
})
export default rootReducer