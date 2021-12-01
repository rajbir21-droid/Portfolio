import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceAccordin.css";

class ExperienceAccordion extends Component {
  render() {
    return (
      <div className="experience-accord">
          {this.props.sections.map((section) => {
            return (
              <div
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} />
                  );
                })}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ExperienceAccordion;