import React from 'react'
import {Route, Routes, useLocation, Navigate} from 'react-router-dom'
import { useAuth } from './helpers';
import LoginForm from './forms/LoginForm';
import Orders from './orders';
import Recipe from './Recipe'
import UserLoginForm from './forms/userLogin';
import UserSignUp from './forms/userSignUp';
import Profile from './profile';
import FoodDetail from './foodDetail';

function RouteConfig() {
    return (
        <Routes>
            <Route exact path ="/admin/pizzaGuy" element = {<LoginForm />} />

            <Route exact path ="/" element = {<Recipe />} />

            <Route exact path ="/login" element = {<UserLoginForm />} />
            <Route exact path ="/signup" element = {<UserSignUp />} />

              <Route 
                exact
                path="/orders"
                element = {
                  <PrivateRoute>
                    <Orders />
                  </PrivateRoute>
                } />

                <Route 
                exact
                path="/profile"
                element = {
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } />
                
                <Route 
                exact
                path="/food/:itemName"
                element = {
                  <PrivateRoute>
                    <FoodDetail />
                  </PrivateRoute>
                } />

            <Route path="/*" element = {<div className="App"><h2>404</h2></div>} />

        </Routes>
    )
}

export default RouteConfig;

function PrivateRoute({children, ...rest}) {
    let auth = useAuth();
    let location = useLocation();

    return !auth.user ? <Navigate to="/login" state={{ from: location }} /> : children    
  }