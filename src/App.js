
import "./app.css"

import TopBar from './components/topBar/TopBar'
import SideBar from './components/sideBar/SideBar'

import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import AddUser from "./pages/addUser/AddUser"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import AddProduct from "./pages/addProduct/AddProduct"

function App() {
  return (
    <Router className="App">
      <TopBar />
      <div className="container" >
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <UserList />
          </Route>
          <Route path="/user/:userId" exact>
            <User />
          </Route>
          <Route path="/new-user" exact>
            <AddUser />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path="/product/:productId" exact>
            <Product />
          </Route>
          <Route path="/new-product" exact>
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
