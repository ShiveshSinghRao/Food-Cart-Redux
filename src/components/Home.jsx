import React from "react";
import Carousel from "./Carousel";
import rider from "../images/logo.png";
import "../styles/home.css";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Carousel />

      <div className="home">
        <div className="homeContainer">
          <div className="imgDiv">
            <img src={rider} alt="1" />
          </div>
        </div>
        <div className="homeContainer">
          <div className="homeText">
            <div className="homeContent">
              <h2>Healthy Bites </h2>
            </div>
            <div className="homeContent">
              Savor Nutrient-Rich Dishes. Fresh salads, lean protein, and
              organic options. A Taste of Wellness in Every Bite!" Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Natus tempora ipsa
              veritatis porro, repellendus laboriosam ipsum ullam, quae
              perferendis expedita iste officiis esse tenetur doloremque
              temporibus cum quo nobis at exercitationem praesentium atque harum
              obcaecati a. Excepturi maxime quia temporibus, praesentium natus
              quibusdam, ipsam iusto commodi porro illum, adipisci deleniti nemo
              nesciunt quo blanditiis aspernatur dolor nisi unde neque in. Odit
              commodi officiis accusantium error? Deserunt fugiat in rem
              perspiciatis tempore velit magnam corrupti explicabo consequuntur!
              Provident sit quisquam veniam quam vitae deserunt officiis,
              voluptatibus pariatur obcaecati qui odit ipsa illum maxime illo
              voluptate ipsam minima ducimus possimus tempora voluptatem!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
