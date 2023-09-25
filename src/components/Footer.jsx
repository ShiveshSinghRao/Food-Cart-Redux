import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
        <div className="f1-inner">
          <h2>About Us</h2>
        </div>
        <div className="f1-inner">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          laboriosam voluptate architecto iusto maiores facilis, sequi quam!
          Obcaecati tempore nisi distinctio, voluptas, eum quos et, aspernatur
          aperiam nobis vitae natus.
        </div>
      </div>
      <div className="f2">
        <div className="contact">
          <h2>Contact Details</h2>
        </div>

        <div id="contactId" className="f2-inner">
          Email:shiveshsinghrao@gmail.com
        </div>
        <div className="f2-inner">Contact:999999999899</div>
      </div>
    </div>
  );
};

export default Footer;
