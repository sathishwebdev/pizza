import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import CartIcon from "@mui/icons-material/ShoppingCart";
import MenuProfile from "./MenuProfile";
import pizzaIcon from "../assets/pizza-guy.jpg"
import {Badge, IconButton} from '@mui/material'
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  const { cartItems } = useSelector((state) => state.cart.cartItems);

  const { user_login } = useSelector((state) => state.users.login);

  const navigate = useNavigate() 
  return (
    <Navbar
      style={{backgroundColor:"#081421", fontFamily: 'hussor-bold'}}
      bg=""
      className="shadow-lg p-3 mb-5 d-flex align-items-center"
    >
      <Link to="/">
        <Navbar.Brand className=""><img src={pizzaIcon} style={{height: 40, width:40, marginLeft: 20}} alt='logo' /><span style={{fontFamily:"sans-serif", color: "#fff", marginLeft: 20}}>PIZZA GUY</span></Navbar.Brand>
      </Link>

        <Nav className="ml-auto" style={{
          fontSize:'30px'
        }} >
          {user_login ? (
           <Nav.Link> <MenuProfile user_login={user_login}/></Nav.Link>
          ) : (
              <Nav.Link ><Link to="/login" style={{color: "#fff"}}>Login</Link></Nav.Link>
            
          )}
            <Nav.Link>
             <Badge color="info" badgeContent = {cartItems.length}> 
              <IconButton
                onClick={()=> {
                  navigate('/cart')
                }}
              >
                <CartIcon sx={{
                  color:'#fff'
                }} />
              </IconButton>
             </Badge>
            </Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavBar;