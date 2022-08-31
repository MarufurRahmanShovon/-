import React from 'react'
import '../styles/navbarstyles.css'
import '../styles/formstyles.css'
import { Search , ShoppingCartOutlined , AccountBalanceWalletOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Navbar() {

    const navigate=useNavigate();

    let obj=localStorage.getItem("userInfo")
    const data =JSON.parse(obj)

    
    
    let obj1=localStorage.getItem("userBankInfo")
    const bankInfo =JSON.parse(obj1)


  return (
    <div className="navbar">
        <div className="wrapperLeft">
            <text className='logo' onClick={() => navigate("/admindashboard")}>নবরূপা</text>
            
        </div>
        <div className="wrapperRight">
            <text style={{color: 'white',fontSize: 18, fontWeight: 400,cursor:'pointer'}} > {data.userName}</text>
            {/* <AccountBalanceWalletOutlined className='menuIcon' style={{color: 'white'}}></AccountBalanceWalletOutlined> */}
            <div className='menuText' onClick={() => navigate("/")}>Logout</div>
        </div>
     
    </div>
  )
}

export default Navbar



