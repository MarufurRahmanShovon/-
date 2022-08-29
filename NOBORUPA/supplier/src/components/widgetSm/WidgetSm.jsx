import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
// import { userRequest } from "../../requestMethods";
const axios = require('axios')



export default function WidgetSm() {
  // const [users,setUsers] = useState([]);
  // useEffect(()=>{
  //   const getUsers = async()=>{
  //     try{
  //       const res = await userRequest.get("users/?new=true");
  //       setUsers(res.data);
  //     }catch{}
  //   };
  //   getUsers();
  // },[]);

//           const [products,setProducts] = useState([])
//           const[filteredProducts, setFilteredProducts]= useState([])
//           const location = useLocation()
//           var url= location.pathname.split("/")[1]?location.pathname.split("/")[1]:false

//         //   console.log("url",location.pathname,url)

//           useEffect(()=>{
//                     const getProducts = async()=>{
//                     try {     
//                               // console.log("msg",sort,category,filter)
//                               // const res = await axios.get("http://localhost:5000/api/v1/products")
//                               const res =await axios.get("http://localhost:8000/api/v1/products")
//                               setProducts(res.data)

//                               console.log(res)

//                     } catch (error) {
                                        
//                     }
//                     }
//                     getProducts()
//           },[])

// useEffect(()=>{        
//           if(url==="products"){
//           setFilteredProducts(products.filter((item)=> Object.entries().every(([key,value])=>item[key].includes(value))))}},[products])
//           // ekhane first e 



  
// jhdbvskjdnvk
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

// import "./widgetSm.css";
// import { Visibility } from "@material-ui/icons";
// import { useEffect, useState } from "react";
// import { userRequest } from "../../requestMethods";

// export default function WidgetSm() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const res = await userRequest.get("users/?new=true");
//         setUsers(res.data);
//       } catch {}
//     };
//     getUsers();
//   }, []);
  
//   return (
//     <div className="widgetSm">
//       <span className="widgetSmTitle">New Join Members</span>
//       <ul className="widgetSmList">
//         {users.map((user) => (
//           <li className="widgetSmListItem" key={user._id}>
//             <img
//               src={
//                 user.img ||
//                 "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
//               }
//               alt=""
//               className="widgetSmImg"
//             />
//             <div className="widgetSmUser">
//               <span className="widgetSmUsername">{user.username}</span>
//             </div>
//             <button className="widgetSmButton">
//               <Visibility className="widgetSmIcon" />
//               Display
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }