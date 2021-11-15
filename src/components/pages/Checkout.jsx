import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Checkout = () => {
    const context = useContext(MyContext)
    const { cart, totalCalc} = context
    return (
        <div>
            <h1 style={{color:"red",textAlign:"center",paddingTop:"20px"}}>CHECKOUT</h1>
            {cart.map((item) => (
                <div  key={item.id} style={{textAlign:"center"}}>
                    <h3 style={{fontSize:"20px"}}>{item.name}</h3>
                    <span>Quantity :{item.quantity}</span>
                    <p>Price :{item.price * item.quantity}</p>
                    


                </div>
            ))}
        </div>
    )
}

export default Checkout
