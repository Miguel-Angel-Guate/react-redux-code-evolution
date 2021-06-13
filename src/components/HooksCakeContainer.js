import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return <>
    <h2>num of cakes with hooks - {numOfCakes}</h2>
    <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </>
}
 
export default HooksCakeContainer;