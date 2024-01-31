import React from "react";
import { Tab, Nav, Col, Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and development",
      imgUrl: projImg3,
    },
  ];

  return (
    <div>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                web developers play a crucial role in building the online
                presence of businesses and individuals by creating visually
                appealing, functional, and user-friendly websites and web
                applications. Their skills span a range of technologies, and
                their work contributes to the overall success and performance of
                the digital world.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          src={colorSharp2}
          className="background-image-right"
          alt="rightBackground"
        />
      </section>
    </div>
  );
}

export default Projects;
