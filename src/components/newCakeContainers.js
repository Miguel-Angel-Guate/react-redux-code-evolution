import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { useState } from 'react';

const NewCakeContainers = () => {
    const [number, setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return <>
    <h2>num of cakes with hooks - {numOfCakes}</h2>
    <input type="text" 
            value={number}
            onChange={e => setNumber(e.target.value)}
            />
    <button onClick={() => dispatch(buyCake(number))}>buy {number} cakes</button>
    </>
}
 
export default NewCakeContainers;