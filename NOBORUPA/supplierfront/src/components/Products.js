import '../styles/orderedproducts.css'

const ShopProducts=()=>{

    let obj =localStorage.getItem("shopItems")
    const Items =JSON.parse(obj)

    console.log(Items)

    return(  
    Items.map(orderItems => {
        return(
            <div className="orderedItems">
            <img className='img' src= {orderItems.imageUrl}alt={orderItems.productName}/>
      
            <div className="description">
                <div className='left'>
                    <text style={{fontSize: 18, fontWeight: 'bold',paddingBottom:10}}>Product Name: {orderItems.title}</text>
                    <text style={{fontSize: 14, fontWeight: 400,paddingBottom:10,paddingTop:10}}>Product Id: {orderItems._id}</text>
                </div>

                <div className='right'>
                    <text style={{fontSize: 14, fontWeight: 400,paddingBottom:10}}>Price: {orderItems.price}</text>
                </div>
             
            </div>
          </div>
        )
      })
    

)
};

export default ShopProducts;