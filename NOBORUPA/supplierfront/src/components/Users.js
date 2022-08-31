import '../styles/orderedproducts.css'

const AllUsersDetails=()=>{

    let obj =localStorage.getItem("AllUsers")
    const Items =JSON.parse(obj)

    console.log(Items)

    return(  
    Items.map(orderItems => {
        return(
            <div className="orderedItems">
            <div className="description">
                <div className='left'>
                    {/* <text style={{fontSize: 18, fontWeight: 'bold',paddingBottom:10}}>Full Name: {orderItems.fullName}</text> */}
                    <text style={{fontSize: 14, fontWeight: 400,paddingBottom:10,paddingTop:10}}>User Name: {orderItems.userName}</text>
                </div>
                <div className='right'>
                    <text style={{fontSize: 14, fontWeight: 400,paddingBottom:10}}>Email: {orderItems.email}</text>
                </div>
             
            </div>
          </div>
        )
      })
    

)
};

export default AllUsersDetails;