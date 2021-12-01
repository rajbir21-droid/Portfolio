import React from "react";
import "./Experience.css";
import { experience } from "../record";
import ExperienceAccordin from './ExperienceAccordin'
import dxperience from '../../Assets/experience.svg';
import Particles from "react-particles-js";
const particleoption={
  particles: {
    number: {
      value: 460,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: false,
      opacity: 0.03,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
}
function Experience(){
      return(
        <section>
         <Particles className="particles" params={particleoption}/>
        <div className="resume-section">
          <div className="basic-experience">
              <div className="experience-heading-div">
                <div className="experience-heading-img-div">
                   <img
                        src={dxperience}
                                alt=""
                                  />
                  
                </div>
                <div className="experience-heading-text-div">
                  <h1
                    className="experience-heading-text purple"
                
                  >
                    {experience.title}
                  </h1>
                  <h3
                    className="experience-heading-sub-text"
                
                  >
                    {experience["subtitle"]}
                  </h3>
                  <p
                    className="experience-header-detail-text subTitle"
                  >
                    {experience["description"]}
                  </p>
                </div>
              </div>
          </div>
          <ExperienceAccordin sections={experience["sections"]}/>
        </div>
        </section>
      );
  }
  
  export default Experience;