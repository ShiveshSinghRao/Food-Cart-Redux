import React from "react";
import Pimg from "../images/panner.jpg";
import Simg from "../images/samosa.jpg";
import Nimg from "../images/noodles.jpg";
import Iimg from "../images/idli.jpg";
import Dimg from "../images/daal.jpg";
import Timg from "../images/Thali.jpg";
import Soimg from "../images/Soup.jpg";
import "../styles/product.css";
export const productList = [
  {
    name: "Panner",
    price: 129,
    imgSrc: Pimg,
    id: "abcd",
  },
  {
    name: "Paratha",
    price: 15,
    imgSrc: Simg,
    id: "abcd12",
  },
  {
    name: "Noodles",
    price: 45,
    imgSrc: Nimg,
    id: "abcdf12457",
  },
  {
    name: "Idli",
    price: 25,
    imgSrc: Iimg,
    id: "abcdfasdf1wew",
  },
  {
    name: "Daal Roti",
    price: 45,
    imgSrc: Dimg,
    id: "abcdf1asfdsaaaaa",
  },
  {
    name: "Thali",
    price: 185,
    imgSrc: Timg,
    id: "abcdf1gdfgsdvvvvvv",
  },
  {
    name: "Soup",
    price: 35,
    imgSrc: Soimg,
    id: "abcdf1ssss1111111111",
  },
];

const ProductCard = ({ name, id, price, addToCartHandler, imgSrc }) => {
  return (
    <div>
      <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>₹{price}</h4>
        <button
          onClick={() =>
            addToCartHandler({ name, id, price, imgSrc, quantity: 1 })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
