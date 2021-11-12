import React, {useEffect, useState} from 'react'

import MyContext from './MyContext'

const MyProvider = (props) => {
    const [result, setResult] = useState({data:[], loading:true, error: ""})
    
    const [cart,setCart] = useState([])

    const [form,setForm] = useState({address:"", email: ""})
    const [error,setError] = useState({error: ""})



    const addToCart = (element) => {
       const addItem = cart.find((item )=> item.id === element.id)

       if(addItem === undefined) {

           setCart([...cart, {...element, quantity:1} ])
       }else {
           
          addItem.quantity += 1
          const itemIndex = cart.indexOf(addItem)
          const clone = [...cart]
          clone.splice(itemIndex,1, addItem)
          setCart(clone)
       }
        
    }
     console.log(cart)
     
    
useEffect(() => {
try {
const getData = async () => {
const resp = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline" )
const data = await resp.json()
setResult({data:data, loading:false, error: ""})
}
getData()
} catch (error) {
console.log(error); 
}


},[])

if (result.loading) return (<p>loading...</p> ) 


const removeItem = (element) => {
    const delItem = cart.find((item) => item.id === element.id)
    const index = cart.indexOf(delItem)

    

    const clone = [...cart]
    clone.splice(index,1)
    setCart(clone)
}

const decrementItem = (element) => {
    const minus = cart.find((item) => item.id === element.id)
    const index = cart.indexOf(minus)

    minus.quantity -= 1

   const clone = [...cart]

    minus.quantity >= 1 ? clone.splice(index,1,minus) : clone.splice(index,1)
    setCart(clone)


}

    return (
        <MyContext.Provider value={{result,cart,addToCart,removeItem, decrementItem,form,setForm,error,setError}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
 // console.log(cart)