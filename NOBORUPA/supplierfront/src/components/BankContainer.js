import '../styles/container.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUsersLine} from "@fortawesome/free-solid-svg-icons"

const BankContainer =() =>{

    let obj=localStorage.getItem("userBankInfo")
    const allUsers=JSON.parse(obj)

    console.log(allUsers)

    return(
        <div className="container">
            <div className='left'>
                <text>{allUsers.length}</text>
                <text>Users</text>
            </div>
            <div className='right'>
                <FontAwesomeIcon icon={faUsersLine}></FontAwesomeIcon>
            </div>
        </div>
    )
}


export default BankContainer