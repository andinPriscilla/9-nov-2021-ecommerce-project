import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const ProductDetail = () => {
  const context = useContext(MyContext);
  const { addToCart } = context;

  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  console.log(item);

  return (
    <section
      className="product-detail"
      style={{
        backgroundImage: `url(${item.image_link})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    
      }}
    >
      <h1>{item.name}</h1>
      <h3>{item.description}</h3>
      <h3>
        Available Colors :{" "}
        {item.product_colors.map((element, index) => (
          <span key={index} style={{ backgroundColor: `${element.hex_value}` }}>
            {element.colour_name === null
              ? element.hex_value
              : element.colour_name}{" "}
          </span>
        ))}
      </h3>
      <p style={{ color: "red" }}>Price{item.price}€</p>
      <button onClick={() => addToCart(item)}>ADD to cart</button>
      <button onClick={() => navigate(-1)}>return to shop</button>
    </section>
  );
};

export default ProductDetail;
