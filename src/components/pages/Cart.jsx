import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Cart = () => {
    const context = useContext(MyContext)
    const { cart, removeItem, addToCart, decrementItem,totalCalc,login } = context

    const navigate = useNavigate()

    const checkAndNavigate = () => {
        login.success ? (navigate("/checkout",{ replace: true })) : (navigate("/home" ,{ replace: true }))
        } 

    return (
        <section className="cart">
            {cart.length === 0 ? <p style={{color:"brown",textAlign:"center",fontSize:"40px", paddingTop:"10%"}}>There is no item in your cart</p> : cart.map((item) =>
                <div key={item.id}>
                    <p style={{color:"brown",textAlign:"center",fontSize:"30px", paddingTop:"1"}}>{item.name}</p>
                    <p>{item.price} $</p>
                    <img src={item.image_link} alt="cartItem" />
                    <p>{item.quantity}</p>
                    <button onClick={() => addToCart(item)}>+</button>
                    &nbsp;
                    <button onClick={() => decrementItem(item)}>-</button>
                    &nbsp;
                    <button onClick={() => removeItem(item)}>Remove Item</button>

                    
                </div>
            )}
            <div className="total" >
                        <p>TOTAL PRICE : {(totalCalc(cart)).toFixed(2)} €</p>
                        {cart.length > 0 && <button onClick={() => checkAndNavigate()}>checkout</button>}
                    </div>
        </section>
    )
}

export default Cart
