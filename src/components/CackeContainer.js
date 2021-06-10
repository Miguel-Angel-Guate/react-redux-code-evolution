import { buyCake } from "../redux"
import {connect} from 'react-redux'

const CakeContainer = (props) => {
    return <>
    <h3>number of cakes - {props.numOfCakes}</h3>
    <button onClick={props.buyCake}>Buy Cake</button>
    </>
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);