import React, { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Home = () => {
  const shop = useContext(MyContext);
  const { form, setForm, error, setError, login, setLogin } = shop;

  const navigate = useNavigate();
  const userRef = useRef();

  const EMAIL = process.env.REACT_APP_EMAIL;
  const ADDRESS = process.env.REACT_APP_ADDRESS;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ address: "", email: "" });
    setError("");

    EMAIL === form.email && ADDRESS === form.address
      ? setLogin({ success: true })
      : setError({ error: "Please check your information again" });
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="login">
      <h2>Please Login</h2>
      <form>
        <label htmlFor="">Your E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          ref={userRef}
          value={form.email}
          onChange={changeHandler}
        />

        <label htmlFor="">Your Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={form.address}
          onChange={changeHandler}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {login.success ? (
        navigate("../products", { replace: true })
      ) : (
        <h2>{error.error}</h2>
      )}
    </section>
  );
};

export default Home;
