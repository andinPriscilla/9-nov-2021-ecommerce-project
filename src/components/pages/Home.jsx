import React,{useRef,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'


const Home = () => {
    const shop = useContext(MyContext)
    const {form,setForm,error,setError} = shop
  

    const navigate = useNavigate()
    const userRef = useRef()

    const EMAIL = process.env.REACT_APP_EMAIL;
    const ADDRESS = process.envREACT_APP_ADDRESS;

    useEffect(() => {
        userRef.current.focus()
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({address: "", email: ""})
        setError("")
    }

    const changeHandler = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
        
    }


    return (
        <section className="login">
            <h2>Please Login</h2>
            <form action="">
                
                <label htmlFor="">Your E-mail</label>
                <input type="text" name="email" id="email"  ref={userRef} value={form.email} onChange={changeHandler}/>

                <label htmlFor="">Your Address</label>
                <input type="text" name="address" id="address" value={form.address} onChange={changeHandler} />
                <button onClick={() => handleSubmit()}>Submit</button>
            </form>
        </section>
    )
}

export default Home
