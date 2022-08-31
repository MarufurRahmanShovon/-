import Navbar from "../components/Navbar"
import AllUsersDetails from "../components/Users"


const AllUsers = () =>{
    return(
        <div className="homescreen">
            <Navbar/>
            <div className="homescreen__detailscol">
                <h1>All Users</h1>
                <AllUsersDetails/>
            </div>
            
        </div>
    )
}

export default AllUsers