
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';
import { createContext, useEffect, useState } from 'react';
import { auth } from './Components/LogIn/LoginManager';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import OrderDetail from './Components/OrderDetail/OrderDetail';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log('user Found', user);
        setLoggedInUser(user)
      } else {
        console.log('user not Found');
        setLoggedInUser({})
      }
    });
  }, [setLoggedInUser])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/addProduct">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/order">
                <OrderDetail></OrderDetail>
                <PrivateRoute path="/chekout">
                  <Order></Order>
                </PrivateRoute>
              </PrivateRoute>
              <PrivateRoute path="/orderdetail">
                <OrderDetail/>
              </PrivateRoute>
              <PrivateRoute>
                <Order></Order>
              </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;
