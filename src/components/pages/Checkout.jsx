import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Checkout = () => {
    const context = useContext(MyContext)
    const { cart, removeItem,  decrementItem,totalCalc} = context
    return (
        <div>
            <h1>CHECKOUT</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p> Item price{item.price * item.quantity}</p>
                    <span>Item quantity{item.quantity}</span>


                </div>
            ))}
        </div>
    )
}

export default Checkout
