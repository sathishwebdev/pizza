import React, { useState } from 'react'
import * as Icon from '@mui/icons-material'
import * as mui from '@mui/material'
import { useAuth } from './helpers';
import Recipe from './Recipe'

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

  


function Orders() {

    const auth = useAuth();
    const data = auth.user
    console.log(auth.user)

    
        const [total, setTotal] = useState(!data.order? null : data.order.reduce((acc, sum)=>acc+sum.price ,0))

    
    return (
        <div className="App" >
            <h1 style={{textTransform:"uppercase"}}>Orders </h1>
            <p>{!data.order ? '' : `${data.order.length} items` } </p>
            <div className="recipes" style={{
                marginBottom:"80px",
                borderRadius:"0px"    
            }}>
                <table className="table">
                    <tbody className="pad" >
                        {!data.order ? <div>
                            <p>Nothing ordered yet ! <p>Order Something</p></p>
                            <div>
                                <Button>
                                  <Icon.LocalPizzaRounded/>  Make a Own Pizza
                                </Button>
                            </div>
                        </div> : data.order.map((data, id)=>OrderedItems(data.price, id , setTotal, data))}
                        {!total? '' :<tr 
                        style={{
                            backgroundColor:"black",
                            color:"white"
                        }}  >                      
                            <td colSpan="3" style={{textAlign:"center"}}>Total</td>
                            <td colSpan="3" style={{textAlign:"center"}}><p><Icon.CurrencyRupeeRounded /> { total}</p></td>
                        </tr>}
                    </tbody>
                </table>
                
            </div>
    {!data.order ? '' : <div className="placeOrder" >
        <Button
            sx={{
                width:"100%",
                height: "60px",
                margin: "0px"
            }}
        >
            Place Order
        </Button>
    </div>}
    </div>
    )
}

export default Orders


const OrderedItems =(amount, id, setTotal, data)=>{
    let image = "https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
    let [price, setPrice] = useState(amount)
    let [count, setCount] = useState(1)

    const addCount = () =>{
        setCount(++count)
        data[id].price = 50 * count
        setPrice(50 * count)
        setTotal(data.reduce((acc, sum)=>acc+sum.price ,0))
    }

    const lessCount = ()=>{
        if(count >1){
            setCount(--count)
            data[id].price = 50 * count
            setPrice(50*count)
            setTotal(data.reduce((acc, sum)=>acc+sum.price ,0))
        }
    }
     

    return <tr key={id} className="pad">
        <td>{id+1}.</td>
        <td>
            <div className="table-thumb">
                <img height="150px" src={image} />
            </div>
        </td>
        <td>Food name <p style={{fontSize:"small"}} >description</p></td>
        <td>
            <div style={{textAlign:"center"}} >
                <Icon.CurrencyRupeeRounded />{price} 
            </div>
        </td>
        <td >
            <div className="counts" >
                <Button
                onClick={lessCount}
                >
                    -
                </Button>
                <div className="count" >
                    <p>{count}</p>
                </div>
                <Button
                onClick={addCount}
                >
                    +
                </Button>        
            </div>
        </td>
    </tr>
}


