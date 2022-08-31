import '../styles/container.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShirt} from "@fortawesome/free-solid-svg-icons"

const ProductContainer =() =>{

    let obj=localStorage.getItem("shopItems")
    const shopItems=JSON.parse(obj)


    return(
        <div className="container">
            <div className='left'>
                <text>{shopItems.length}</text>
                <text>Products</text>
            </div>
            <div className='right'>
                <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon>
            </div>
        </div>
    )
}


export default ProductContainer