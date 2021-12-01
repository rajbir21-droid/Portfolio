import React from "react";
import './Loader.css';
import { FaRocket } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
const Loader=()=>{
    return(
    <div className="container1">
    <div className="loader">
      <div className="rocket">
        <i className="fa-rocket"><FaRocket/></i>
        <i className="fa-cloud"><FaCloud/></i>
        <i className="fa-cloud"><FaCloud/></i>
        <i className="fa-cloud"><FaCloud/></i>
        <i className="fa-cloud"><FaCloud/></i>
      </div>
      <span>
        <i></i>
      </span>
    </div>
  </div>
    );
}


export default Loader;