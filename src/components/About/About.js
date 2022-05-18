import React from "react";
import "./About.css";
import Me from "../../images/me.png";
import Subject from "../Subject/Subject";
import AS from "../../images/androidstudio.png";
import C from "../../images/c.png";
import CPlusPlus from "../../images/cplusplus.png";
import CSharp from "../../images/csharp.jpg";
import Css from "../../images/css.png";
import GD from "../../images/godot.png";
import H from "../../images/html5.png";
import Java from "../../images/java.png";
import JS from "../../images/javascript.png";
import P from "../../images/python.png";
import RJs from "../../images/reactjs.png";
import Unity from "../../images/unity.png";
import Flutter from "../../images/flutter.jpg";
import Dart from "../../images/dart.png";
import Jup from "../../images/j.png";
import FlutterTodo from "../../images/goal/home_screen.png";
import Apot from "../../images/apot/apot-menu.png";
import Collab from "../../images/collab/CreatePost.jpg";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <div className="about" id="AboutMe">
      <div className="container">
        <h2 className="title">- About Me -</h2>
        <div className="about-body">
          <div className="left">
            <div className="leftCard">
              <img src={Me} class="img-thumbnail" alt="..." />
            </div>
          </div>
          <div className="right">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link about-btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Motivation
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    I always find coding to be cool because you can just write
                    words on the computer and it can potentially develop into an
                    application that can actually solve a problem in real life.
                    The difficulties faced along the way certainly was
                    challenging, but nonetheless, whenever a breakthrough was
                    made, it brings me immense joy as if I have leveled up.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed about-btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Skillsets
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <div class="container">
                      <div class="row mt-2 mb-2">
                        <div class="col">
                          <Subject link={Java} text="Java" />
                        </div>
                        <div class="col">
                          <Subject link={C} text="C" />
                        </div>
                        <div class="col">
                          <Subject link={CPlusPlus} text="C++" />
                        </div>
                        <div class="col">
                          <Subject link={CSharp} text="C#" />
                        </div>
                        <div class="col">
                          <Subject link={P} text="Python" />
                        </div>
                      </div>
                      <div class="row mt-2 mb-2">
                        <div class="col">
                          <Subject link={Dart} text="Dart" />
                        </div>
                        <div class="col">
                          <Subject link={H} text="Html5" />
                        </div>
                        <div class="col">
                          <Subject link={JS} text="Javascript" />
                        </div>
                        <div class="col">
                          <Subject link={Css} text="CSS" />
                        </div>
                        <div class="col">
                          <Subject link={RJs} text="ReactJS" />
                        </div>
                      </div>
                      <div class="row mt-2 mb-2">
                        <div class="col">
                          <Subject link={AS} text="Android Studio" />
                        </div>
                        <div class="col">
                          <Subject link={Unity} text="Unity" />
                        </div>
                        <div class="col">
                          <Subject link={Flutter} text="Flutter" />
                        </div>
                        <div class="col">
                          <Subject link={Jup} text="Jupyter" />
                        </div>
                        <div class="col">
                          <Subject link={GD} text="GoDot" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed about-btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Have I work in a team before?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    During my university life, we have 4 major projects where I
                    got the opportunities to work with very amazing artists,
                    designers and other programmers to code multiple C++ game
                    engines from scratch and use that engine to develop console,
                    2D, 3D games. Through these projects, I improved not only my
                    programming skills but also my soft skills. I personally
                    treat soft skills equally important as coding skills during
                    a group project because the progress of a project can easily
                    be delayed by a miscommunication which could easily be
                    avoided if we communicate more effectively.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed about-btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What can I do exactly?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <div>
                      <p>
                        For game programming, I have used C++ and co-develop
                        with another team member to create tools such as
                        AIBehaviourTree editor for designers to create AI, and
                        also integerated third party libraries such as FMOD,
                        PhyX, IMGUI and use them to build the essential
                        mechanics for our game. Beside C++, I have also explored
                        Unity Engine (C#) to deploy 2 mobile game applications
                        on the playstore. While participating for a game jam as
                        a solo, I also explored a new engine call GoDot and
                        develop a 2D mini-game application on PC platform.
                      </p>
                      <p>
                        For mobile software application, I have learnt Java and
                        deployed a motivation quote app in the playstore where I
                        first started thinking about the business aspect to
                        generate income using mobile applications. I have also
                        developed another mobile software app as one of the two
                        programmer for a competition by the IMDA Open Innovation
                        Platform Project by City Development Limited. This app
                        allows different account user to communicate with each
                        other by posting forum request on the app where upon
                        mutual consent, they can start to exchange information
                        using the messaging feature that we implemented using
                        java and firebase database. Later on, I came across
                        Flutter with dart due to it being known for it's fast
                        prototype process. It piqued my interest and I picked up
                        the language to develop a to-do-list app to add into my
                        portfolio and to satisfy my curiousity.
                      </p>
                      <p>
                        For web development, I have used my free time to
                        complete a couple of courses that is offered in
                        Udemy.com and created this portfolio website using
                        reactJS with bootstrap.
                      </p>
                    </div>
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <ol class="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        ></li>
                      </ol>
                      <div class="carousel-inner do-card about-body-carousel">
                        <div class="carousel-item active">
                          <div class="embed-responsive embed-responsive-16by9 d-block mx-auto p-5 about-body-image">
                            <iframe
                              class="embed-responsive-item"
                              src="https://www.youtube.com/embed/-qMEVvWeruA"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="embed-responsive embed-responsive-16by9 d-block mx-auto p-5 about-body-image">
                            <iframe
                              class="embed-responsive-item"
                              src="https://www.youtube.com/embed/JEMROB4QLnA"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="embed-responsive embed-responsive-16by9 d-block mx-auto p-5 about-body-image">
                            <iframe
                              class="embed-responsive-item"
                              src="https://www.youtube.com/embed/9xaW51OyWl0"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>

                    <Link
                      type="button"
                      class="btn btn-warning mt-3"
                      to="/portfolio/"
                    >
                      Check out more portfolio here!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
