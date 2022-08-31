import Navbar from "../components/Navbar"
import OrderedProducts from "../components/orders"

const AllOrderedProducts = () =>{
    return(
        <div className="homescreen">
            <Navbar/>
            <div className="homescreen__detailscol">
                <h1>All Orders</h1>
                <OrderedProducts/>
            </div>
            
        </div>
    )
}

export default AllOrderedProducts