import { useSelector, useDispatch } from "react-redux";
import { counterSumAction } from "../redux";
import { counterRestAction } from "../redux/counter/counterActions";

const CounterContainer = () => {
    const count = useSelector(state => state.countRedu.count)
    const dispatch = useDispatch()
    return <>
    <h2>number   {count}</h2>
    <button onClick={() => dispatch(counterSumAction())}>+</button>
    <button onClick={() => dispatch(counterRestAction())}> - </button>
    </>
}
 
export default CounterContainer;