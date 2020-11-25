import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import "./Home.css";
import NavigationBar from "../Navbar/NavigationBar";

export default class Home extends Component {
  generateRandomState() {
    let state = Math.random().toString(36).substring(7);
    console.log("State: " + state);

    return (
      <Button
        //https://github.com/reddit-archive/reddit/wiki/OAuth2
        className="float-none styledBtn"
        href={`https://www.reddit.com/api/v1/authorize.compact?client_id=CLIENTIDHERE&response_type=code&state=${state}&redirect_uri=http://localhost:9874/login&scope=vote%20history%20identity%20read%20save`}
      >
        Sign in
      </Button>
    );
  }

  render() {
    return (
      <div>
        <section className="color">
          <NavigationBar />
          <section id="title">
            <Container>
              <Row>
                <Col lg="8">
                  <h1 className="big-heading">
                    Explore your Reddit saved content
                  </h1>
                  <div id="big-heading-description">
                    Reddit's saved section sucks. Hopefully this can make your
                    experience better!
                  </div>
                  <div className="big-heading">
                    {this.generateRandomState()}
                  </div>
                </Col>
                <Col lg="4"></Col>
              </Row>
            </Container>
          </section>
        </section>

        <section>
          <section id="features">
            <Container>
              <Row>
                <Col lg="3">
                  <div className="featureIcon borderItem">
                    <FontAwesomeIcon icon={faImages} size="lg" />
                  </div>
                  <header className="featureTitle">
                    Easily visualize your information
                  </header>
                </Col>

                <Col lg="3">
                  <div className="featureIcon borderItem">
                    <FontAwesomeIcon icon={faFileExport} size="lg" />
                  </div>
                  <header className="featureTitle">
                    Export saved data to your computer
                  </header>
                </Col>

                <Col lg="3">
                  <div className="featureIcon borderItem">
                    <FontAwesomeIcon icon={faArchive} size="lg" />
                  </div>
                  <header className="featureTitle">
                    Manage your saved information
                  </header>
                </Col>

                <Col lg="3">
                  <div className="featureIcon borderItem">
                    <FontAwesomeIcon icon={faLock} size="lg" />
                  </div>
                  <header className="featureTitle">Safe</header>
                </Col>
              </Row>
              <Row>
                <Col lg="3">
                  <section>
                    See your saved Reddit data in an easy to view format,
                    without all the clutter.
                  </section>
                </Col>
                <Col lg="3">
                  <section>
                    Export your saved information to a file on your computer
                    that you can keep forever.
                  </section>
                </Col>
                <Col lg="3">
                  <section>
                    Hoarding too many memes? Delete the clutter straight in the
                    dashboard, easy and painless.
                  </section>
                </Col>
                <Col lg="3">
                  <section>
                    Utilizes OAuth 2.0, so your login information and data is
                    never stored on our server.
                  </section>
                </Col>
              </Row>
            </Container>
          </section>
        </section>

        <section>
          <section id="stack">
            <Container>
              {/* <Row>
                <Col>
                  <header>
                    <h1>Github source</h1>
                  </header>
                </Col>
              </Row> */}
              <Row>
                <Col>
                  <h2 className="sectionTitle borderItem">Stack</h2>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <div>
                    <h3 className="sectionSubtitle">Front-End</h3>
                    <ul>
                      <li>JavaScript</li>
                      <ul>
                        <li>React</li>
                        <ul>
                          <li>Bootstrap (React-Bootstrap)</li>
                        </ul>
                        <li>FontAwesome</li>
                      </ul>
                    </ul>
                  </div>
                </Col>
                <Col lg="6">
                  <h3 className="sectionSubtitle">Back-End</h3>
                  <ul>
                    <li>Python</li>
                    <ul>
                      <li>Flask</li>
                      <li>PRAW: The Python Reddit API Wrapper</li>
                    </ul>
                    <li>
                      JavaScript
                      <ul>
                        <li>MongoDB (disabled for public)</li>
                      </ul>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="sectionSubtitle">Libraries Used</h3>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <div>
                    <ul>
                      <li>React-Bootbox</li>
                      <li>React-Loading-Skeleton</li>
                    </ul>
                  </div>
                </Col>
                <Col lg="6">
                  <ul>
                    <li>Flask</li>
                    <ul>
                      <li>Flask-CORS</li>
                    </ul>
                    <li>configparser</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section>
          <section id="source">
            <Container>
              <Row>
                <Col>
                  <h2 className="sectionTitle borderItem">Source Code</h2>
                  <Button
                    className="styledBtn"
                    href="https://github.com/LitePenguins/Redd"
                    style={{
                      float: "left",
                      backgroundColor: "#ff5757",
                    }}
                    target="_blank"
                  >
                    Github
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </div>
    );
  }
}
