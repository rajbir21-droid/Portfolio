import React, { Component } from "react";
import "./Education.css";
import DegreeCard from "../../Degree/Degree";
import { degrees } from "../../record";

class Educations extends Component {
  render() {
    return (
      <div className="main" id="educations">
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;