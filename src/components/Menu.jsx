import React from "react";
import "../styles/menu.css";
import ProductCard, { productList } from "./ProductCard";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (props) => {
    dispatch({ type: "addToCart", payload: props });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="menu">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          addToCartHandler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Menu;
