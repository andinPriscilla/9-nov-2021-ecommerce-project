import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import {Link} from "react-router-dom"

const Products = () => {
    const context = useContext(MyContext)
    const { result, addToCart } = context
    // console.log(result)
    return (

        <div className="cardContainer">

            <h2>We got some new items in Store</h2>
            {result.data.map((item) =>   
                <div key={item.id} className="card">
                    <h3>{item.name}</h3>
                    <Link to='/product-detail' state={item}><img src={item.image_link} alt="" /></Link>
                    <h4>Price {item.price} $</h4>
                    <button onClick={() => addToCart(item)}> ADD to cart</button>
                </div>

            )}

        </div>
    )
}

export default Products