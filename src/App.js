
import "./app.css"

import TopBar from './components/topBar/TopBar'
import SideBar from './components/sideBar/SideBar'

import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
