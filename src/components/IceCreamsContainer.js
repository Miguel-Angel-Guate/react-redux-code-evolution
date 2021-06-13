import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamsContainers = () => {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return <>
    <h2>num of IceCream - {numOfIceCreams}</h2>
    <button onClick={() => dispatch(buyIceCream())}>buy cake</button>
    </>
}
export default IceCreamsContainers;