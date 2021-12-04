import React,{useEffect, useState}from 'react'
import { useParams } from 'react-router'
import { baseUrl } from './App'
import * as Icon from '@mui/icons-material'
import * as mui from '@mui/material'

function FoodDetail() {
    const [storeData, setStoreData] = useState(null)
    const [type, setType] = useState("Regular")
    let {itemName} = useParams()
    useEffect( () =>{
        fetch(`${baseUrl}`)
        .then(response=>response.json())
        .then(data =>setStoreData(data))
    },[])
    let data = !storeData?  [{}] : storeData.filter(items=>items.name === itemName)
    let {_id,name,imageUrl, description, category, price} = data[0]
    let amount = 0
    if(type==="Regular"){
        amount = price? price.reg : 0
    }else if(type==="Medium"){
        amount = price? price.med : 0
    }else if(type==="Large"){
        amount = price? price.lar : 0
    }

    // style 

  const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000000",
    margin: "2%",

    '&:hover': {
      backgroundColor: "#a5a5a5",
      color: "black",
      boxShadow: "0px 0px 15px 1px"
    },
  }));


    return (
        <div className="App">
            <h1 style={{textTransform:"uppercase"}} >{itemName}</h1>
           { !data?  <p>Loading...</p>:<div key={_id} className="">
        <div className="">
            <img src={imageUrl} alt={name} title={name} />
        </div>
        
        <div className="busket-name-cont" style={{maxWidth:"600px"}} >
            <div 
               style={{
                   border:"1px solid green",
                   color:"green",
                   width:"40px",
                   textAlign:"center",
                    height:"40px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <p>{category}</p>
            </div>

            <div style={{ maxWidth: "200px" }}>
                <p style={{ textTransform: "uppercase", fontSize: "medium" }}>{name}</p>
                <p style={{ fontSize: "small" }}>{description}</p>
            </div>
            <div style={{ maxWidth: "100px" }}>
                <div>
                <mui.Select
                    id="type"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                >
                    <mui.MenuItem value={"Regular"}>Regular</mui.MenuItem>
                    <mui.MenuItem value={"Medium"}>Medium</mui.MenuItem>
                    <mui.MenuItem value={"Large"}>Large</mui.MenuItem>
                </mui.Select>
                </div>
            </div>
            <div>
                <p>
                    <Icon.CurrencyRupeeRounded />
                    {amount}
                </p>
            </div>
        </div>


        <div className="busket-name-cont" style={{maxWidth:"600px"}} >
            
            <div>
                <mui.Select
                id="category"
                    value="Veg"
                    onChange={(e)=>setType(e.target.value)}
                >
                    <mui.MenuItem value={"Veg"}><div 
               style={{
                   border:"1px solid green",
                   color:"green",
                   width:"30px",
                   textAlign:"center",
                    height:"30px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <p style={{
                    fontSize: "20px"
                }} ><Icon.Circle /> </p>
            </div></mui.MenuItem>
            <mui.MenuItem value={"Non-Veg"}><div 
               style={{
                   border:"1px solid brown",
                   color:"brown",
                   width:"30px",
                   textAlign:"center",
                    height:"30px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <p><Icon.Circle /></p>
            </div></mui.MenuItem>
                </mui.Select>
                </div>
            <div style={{ maxWidth: "200px" }}>
               <p style={{ textTransform: "uppercase", fontSize: "medium" }}>Toppings</p>
                <p style={{ fontSize: "small" }}>If you want extras</p>
            </div>
            <div style={{ maxWidth: "100px" }}>
                <div>
                <mui.Select
                    id="own-type"
                    value="Regular"
                    onChange={(e)=>setType(e.target.value)}
                >
                    <mui.MenuItem value={"Regular"}>Regular</mui.MenuItem>
                    <mui.MenuItem value={"Medium"}>Medium</mui.MenuItem>
                    <mui.MenuItem value={"Large"}>Large</mui.MenuItem>
                </mui.Select>
                </div>
            </div>
            <div>
                <Icon.CurrencyRupeeRounded />
                10
            </div>
        </div>



    </div>
    
    

    }

    <div className="placeOrder" >
        <Button
            sx={{
                width:"100%",
                height: "60px",
                margin: "0px"
            }}
        >
            Make Order
        </Button>
    </div>
        </div>
    )
}

export default FoodDetail
