import React, { Component } from "react";
import "./Contact.css";
import { greeting, contactPageData } from "../record";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import address from '../../Assets/address_image.svg';
import blog from '../../Assets/blogs_image.svg';
import pp from '../../Assets/pp.PNG';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Particles from "react-particles-js";
const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;
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
class Contact extends Component {
  render() {
    return (
      <>
      <Particles className="particles" params={particleoption}/>
      <div className="contact-main">
        <div className="basic-contact">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img className="pp"
                  src={pp}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text purple"
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                >
                  {ContactData["description"]}
                </p>
                <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              <span className="purple">Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rajbir21-droid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajbir-banerjee-9ba7721a7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:banerjeerajbir2888@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/j_e_e_t_27/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <Row>
            <Col md={12}>
            <a  href={greeting.resumeLink}
                        target="_blank"
                  rel="noreferrer" ><Button style={{borderRadius:"4px",padding:"5px",marginTop:"10px"}}
                variant="primary">
                   <AiOutlineDownload />
                      &nbsp;See My Resume
                    </Button></a>
                    </Col>
                    </Row>
          </Col>
        </Row>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text">
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                     <a href={blogSection.link}
                       target="_blank"
                  rel="noreferrer" 
                     ><Button style={{borderRadius:"4px",padding:"5px",marginTop:"10px"}}
                     >Visit my page</Button></a>
                </div>
              </div>
              <div className="blog-heading-img-div">
                <img className="blog"
											src={blog}
											alt="blog"
										/> 
              </div>
            </div>
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <img className="address"
											src={address}
											alt="address"
										/> 
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
        
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
        
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
        
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
        
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                </div>
              </div>
            </div>
        </div>
      </div>
      </>
    );
  }
}

export default Contact;