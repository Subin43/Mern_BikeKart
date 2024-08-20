import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../ui/Icons";

const Footer = () => {
  const handleSupport = () => {
    window.location.href = 'mailto:support@bikekart.com';
  }
  const handlePhone = () => {
    window.location.href = 'tel:18001231442';
  }
  return (
    <div className="p-4" style={{ backgroundColor: "#363637", color: "white" }}>
      <div className="d-flex justify-content-between p-2">
        <ul className="list-unstyled">
          <li>COMPANY</li>
          <Link to="/about-us" className="text-decoration-none text-white">
            <li>About us</li>
          </Link>
          <Link to="/about" className="text-decoration-none text-white ">
            <li>Contact Us</li>
          </Link>
          <Link to="/Refurbishment" className="text-decoration-none text-white">
            <li>Refurbishment Overview</li>
          </Link>
        </ul>
        {/* <div className='d-flex justify-content-center'> */}
        <ul className="list-unstyled">
          <li>USEFUL LINKS</li>
          <Link to="/terms-and-conditions" className="text-decoration-none text-white">
            <li>Terms & Conditions</li>
          </Link>
          <Link to="/privacy" className="text-decoration-none text-white">
            <li>Privacy & policy</li>
          </Link>
          <Link to="/FAQ" className="text-decoration-none text-white">
            <li>FAQ</li>
          </Link>
        </ul>
        {/* </div> */}
        {/* <div className='d-flex justify-content-end'> */}
        <ul className="list-unstyled">
          <li>REACH US</li>
          {/* <Link to="/tel:18001231442" className="text-decoration-none text-white"> */}
            <li onClick={handlePhone} style={{cursor:"pointer"}}>Call us Call us 18001231442</li>
          {/* </Link> */}
          <Link to="/web.whatsapp.com" className="text-decoration-none text-white">
            <li>WhatsApp Us +91-9629173097</li>
          </Link>
          {/* <Link to="about" className="text-decoration-none text-white">
            <li>Email: support@bikekart.com</li>
          </Link> */}
          <li onClick={handleSupport} style={{cursor:"pointer"}}>
            Email: support@bikekart.com</li>
        </ul>
        {/* </div> */}
        {/* <div className='d-flex justify-content-end'> */}
        <ul className="list-unstyled">
        <li>Follow on</li>
          <Link to="/https://www.linkedin.com/in/christal-subin-832ba4184/" className="text-decoration-none text-white">
            <li><Icons iconId={11} size={20} color="white" /></li>
          </Link>
          <Link to="/https://github.com/Subin43" className="text-decoration-none text-white">
          <li><Icons iconId={13} size={20} color="white" /></li>
          </Link>
          <Link to="/web.whatsapp.com" className="text-decoration-none text-white">
          <li><Icons iconId={12} size={20} color="white" /></li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
