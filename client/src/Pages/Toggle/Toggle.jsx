import React from "react";
import {Link} from "react-router-dom"
import "./Toggle.css"
const Toggle = () => {
  return <div className="bui">
    <Link to="/" className="jety">Home</Link>
    <Link to="/Questions" className="jety">Questions </Link>
    <Link to="/Tags" className="jety">Tags</Link>
    {/* <Link to="/Users" className="jety">Users </Link> */}
    <Link to="/Otp" className="jety">Chatbot </Link>
    <Link to="https://stackoverflowclonebyprashant.netlify.app/" className="jety">Community </Link>
    <Link to="/Plans" className="jety">Plans </Link>
    
  </div>;
};

export default Toggle;
