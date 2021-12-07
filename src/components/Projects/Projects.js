import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projectImage from '../../Assets/projects_image.svg';
import blogScope from "../../Assets/Projects/BlogScope.PNG";
import shopping from "../../Assets/Projects/Shopping.PNG";
import basicbanking from "../../Assets/Projects/basic banking system.PNG";
import FaceApi from "../../Assets/Projects/FaceAPi.PNG";
import paradise from "../../Assets/Projects/Paradiseao.PNG";
import weather from "../../Assets/Projects/Weather.PNG";
import Particle from '../Particle';
import './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
function Projects() {
  return (
    <>
    <Particle/>
    <Container fluid className="project-section">
      <Container>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
         <Col
            md={7}
            style={{ paddingTop: "10px", paddingBottom: "50px",marginRight:"30px" }}
          >
            <img src={projectImage} alt="project"  className="project-img"/>
          </Col>
          <Col
            md={4}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Projects</strong>
            </h1>
            <p style={{ fontSize: "1.1em",color:"white"}}>My projects makes use of vast variety of latest technology tools. 
            My best experience is to create website using reactjs and deploy them
             to web applications using cloud platform like heroku.</p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogScope}
              isBlog={false}
              title="BlogScope"
              description='Blog website a MERN stack application ,to 
                    write blog about different things, 
                      user can also upload picture with the blog , 
                       it is deployed using Heroku.'
              link="https://github.com/rajbir21-droid/blogwebsite"
              proj="https://blogscope.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FaceApi}
              isBlog={false}
              title="FaceRecognition"
              description="Face recognition is a MERN stack application 
              in which CLARIFAI API is used. You need to register as a user 
              when you open the website. The website is deployed in Heroku's online 
              cloud platform. This is a simple web app that detects the face of 
              a picture through an API call after you submit the link of that picture."
              link="https://github.com/rajbir21-droid/Face-Recognition"
              proj="https://facerecoz.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basicbanking}
              isBlog={false}
              title="basic-banking-system"
              description="An online banking website made using MERN stack where the registered user can make transaction to a selected user."
              link="https://github.com/rajbir21-droid/basic-banking-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Para-Weather"
              description="A weather web app made using Html,Css and js which shows the weather of any state like 
              'Kolkata','Delhi' etc, It shows weather through an api call from 'https://openweathermap.org/api'"
              link="https://github.com/rajbir21-droid/Paraweather"
              proj="https://rajbir21-droid.github.io/Paraweather/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paradise}
              isBlog={false}
              title="Paradiseao"
              description="A simple chat web app made using react js and Firebase with 25 message limit"
              link="https://github.com/rajbir21-droid/paradisao"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping-website"
              description="A Full responsive simple shopping website made using Html,Css and Js
                  with multiple pages."
              link="https://github.com/rajbir21-droid/Paradise69"
              proj="https://rajbir21-droid.github.io/Paradise69/"
            />
          </Col>
        </Row>
        <Button style={{padding:"5px"}}><a style={{color:"white"}}href="https://github.com/rajbir21-droid">Load More</a></Button>
      </Container>
    </Container>
    </>
  );
}

export default Projects;
