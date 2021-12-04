import React,{useEffect, useState} from 'react'
import { baseUrl } from './App'
import * as mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import { useNavigate } from 'react-router'
import { useAuth } from './helpers'


 function Recipie() {
    const [storeData, setStoreData] = useState(null)
    
    useEffect( () =>{
        fetch(`${baseUrl}`)
        .then(response=>response.json())
        .then(data =>setStoreData(data))
    },[])

     // style 

  const Button = mui.styled(mui.Button)(({ theme }) => ({
    color: theme.palette.getContrastText(mui.colors.purple[500]),
    backgroundColor: "#000000",
    margin: "3%",

    '&:hover': {
      backgroundColor: "#a5a5a5",
      color: "black",
      boxShadow: "0px 0px 15px 1px"
    },
  }));

// to order 

  let navigate = useNavigate()
  let auth = useAuth()


    return (
        <div className="App">
            {!storeData? <p>Loading...</p>: <div className="recipes">
                {storeData.map(({_id,name,imageUrl, description, category, price})=>(
                    RecipieCard({_id, imageUrl, name, category, description, Button, auth, price}, navigate)
                ))}
                </div>}
        </div>
    )
}

export default Recipie

export function RecipieCard({_id, imageUrl, name, category, description, Button, auth, price}, navigate) {
    
    return <div key={_id} className="container">
        <div className="imgCon">
            <img src={imageUrl} alt={name} title={name} />
        </div>
        <div className="tag">
            <p>{category}</p>
        </div>
        <div className="recipe-name-cont">
            <div style={{ maxWidth: "200px" }}>
                <p style={{ textTransform: "uppercase", fontSize: "medium" }}>{name}</p>
                <p style={{ fontSize: "small" }}>{description}</p>
            </div>
            <div style={{ maxWidth: "100px" }}>
                <div><p style={{ fontSize: "10px" }}>from *</p>
                    <p></p> </div>
            </div>
            <div>
                <Button
                    onClick={() => {
                        !auth.user ? navigate("/login") : navigate(`/food/${_id}`)
                    } }
                >
                    <Icon.CurrencyRupeeRounded />{price.reg}
                </Button>
            </div>
        </div>
    </div>
}

