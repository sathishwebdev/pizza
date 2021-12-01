import React from 'react'
import * as mui from '@mui/material'
import * as Icons from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router'
import { Box } from '@mui/system';
import { useAuth } from './helpers';

function NavBar() {

    const location = useLocation()
    const navigator = useNavigate()
    const auth = useAuth()

    return (
        <Box position="static" >
        <mui.AppBar color="inherit" >
        <mui.Toolbar>
      {location.pathname === '/'? <span></span> : <BackBtn /> }
      <HomeBtn />
      {/* <mui.Button
      color="inherit"
      startIcon={<Icons.List/>}
      onClick={()=>navigator("/all")}
      >
      category
      </mui.Button> */}
  
  { !auth.user? <mui.Button
            sx={{marginLeft:"auto"}}
            color="inherit"
            onClick={()=>navigator("/login")} > Login <Icons.Login />
    </mui.Button>
         : 
            <mui.Button
            sx={{marginLeft:"auto"}}
            color="inherit"
            onClick={()=>navigator(`/orders/${auth.user._id}`)} ><Icons.ShoppingBasket /> Orders
    </mui.Button>}
    </mui.Toolbar>
    </mui.AppBar>
        </Box>
    )
}

export default NavBar

export const BackBtn = () =>{
    let history = useNavigate()
    return <mui.IconButton color="inherit" onClick={()=>history(-1)} ><Icons.ArrowBackIos/> </mui.IconButton> }
  
  export const HomeBtn = () =>{
    let history = useNavigate()
    return <mui.IconButton color="inherit" onClick={()=>history('/')} >
        {/* <Icons.Home />  */}
        <b>PIZZA GUY_</b>
        </mui.IconButton> }  
  