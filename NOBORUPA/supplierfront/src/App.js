// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.css";
// import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";

// function App() {
//   return (
//     <Router>
//       <Topbar />
//       <div className="container">
//         <Sidebar />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/users">
//             <UserList />
//           </Route>
//           <Route path="/user/:userId">
//             <User />
//           </Route>
//           <Route path="/newUser">
//             <NewUser />
//           </Route>
//           <Route path="/products">
//             <ProductList />
//           </Route>
//           <Route path="/product/:productId">
//             <Product />
//           </Route>
//           <Route path="/newproduct">
//             <NewProduct />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.css";
// import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import Login from "./pages/login/Login";
// import { useSelector } from "react-redux";

// function App() {
//   const admin = useSelector((state) => state.user.currentUser.isAdmin);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login">
//           <Login />
//         </Route>
//         {admin && (
//           <>
//             <Topbar />
//             <div className="container">
//               <Sidebar />
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path="/users">
//                 <UserList />
//               </Route>
//               <Route path="/user/:userId">
//                 <User />
//               </Route>
//               <Route path="/newUser">
//                 <NewUser />
//               </Route>
//               <Route path="/products">
//                 <ProductList />
//               </Route>
//               <Route path="/product/:productId">
//                 <Product />
//               </Route>
//               <Route path="/newproduct">
//                 <NewProduct />
//               </Route>
//             </div>
//           </>
//         )}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
// import AdminDashboard from './pages/AdminDashboard';
import AllOrderedProducts from './pages/OrderedProducts';
import AllShopProducts from './pages/ShopProducts';
import AllUsers from './pages/AllUsers';
import SupplierDashboard from './pages/SupplierDashboard';

function App() {
  return (
    <div>
      <Router>
          <Route exact path="/" element={<Login/>}/>
          {/* <Route exact path="/admindashboard" element={<AdminDashboard/>}/> */}
          <Route exact path="/adminorders" element={<AllOrderedProducts/>}/>
          <Route exact path="/adminshop" element={<AllShopProducts/>}/>
          <Route exact path="/adminusers" element={<AllUsers/>}/>
          <Route exact path="/supplierdash" element={<SupplierDashboard/>}/>
      </Router>
    </div>
  );
}

export default App;
