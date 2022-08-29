import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";

import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Payment from "./pages/Payment";


const App = () => {

  const user = useSelector((state)=>state.user.currentUser);
  console.log(user)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/products">
          <ProductList/>
        </Route>
        <Route path="/products/:id">
          <ProductList/>
        </Route>
        <Route path="/product/find/:id">
          <SingleProduct/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/login">
          <Login/>
        {
            user && <Redirect to="/"/>
        }
        </Route>
        <Route path="/register">
          <Register/>
        {/* {
            user ? <Redirect to="/"/>:<Register/>
        } */}
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;