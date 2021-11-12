import React, {useContext} from 'react'
import MyContext from  '../../context/MyContext'

const Cart = () => {
    const context = useContext(MyContext)
    const {cart, removeItem, addToCart, decrementItem} = context

    console.log(cart)

    return (
        <div className="cart">
            {cart.length === 0 ? <p>there is no item in your cart</p> : cart.map((item) =>
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <img src={item.image_link} alt="cartItem" />
                <p>{item.quantity}</p>
                <button onClick={() =>addToCart(item)}>+</button>
                &nbsp;
                <button onClick={() =>decrementItem(item)}>-</button>
                &nbsp;
                <button onClick={() => removeItem(item)}>Remove Item</button>
            </div>
            )}
        </div>
    )
}

export default Cart
