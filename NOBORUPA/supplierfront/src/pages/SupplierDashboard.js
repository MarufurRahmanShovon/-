import React from "react"
import '../styles/supplierdash.css'
import { useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import OrderedProducts from "../components/orders"



 const SupplierDashboard = () =>{

    let obj=localStorage.getItem("userBankInfo")
    const supplierInfo=JSON.parse(obj)

     
    console.log(supplierInfo)
    
    const navigate=useNavigate();

    return(
        <div className="supplier">
            <Navbar/>
            <div className="container_wrapper">
            <div className="left">
                <h2>Account Info</h2>
                <text>Account No:{supplierInfo.accountNumber}</text>
                <text style={{marginTop:10}}>Balance:{supplierInfo.balance}</text>
            </div>
            <div className="right">
                <h1>All Ordered Products</h1>
                <OrderedProducts/>
            </div>    
            </div>

        </div>
    )
 }

 export default SupplierDashboard