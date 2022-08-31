import '../styles/container.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const OrderContainer =() =>{

    let obj=localStorage.getItem("orderItems")
    const orderedProducts=JSON.parse(obj)

    console.log(orderedProducts)

    return(
        <div className="container">
            <div className='left'>
                <text>{orderedProducts.length}</text>
                <text>Orders</text>
            </div>
            <div className='right'>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </div>
        </div>
    )
}


export default OrderContainer