import React from "react";
import "./FlutterTodo.css";
import Goal from "../../images/goal/home_screen.png";
import Flutter0 from "../../images/goal/figma.png";
import Flutter1 from "../../images/goal/main.png";
import Flutter2 from "../../images/goal/create_goal.png";
import Flutter3 from "../../images/goal/home_screen.png";
import Flutter4 from "../../images/goal/task_swipe_to_delete.png";
import Flutter5 from "../../images/goal/create_task.png";
import Flutter6 from "../../images/goal/goal_press_to_delete.png";
import { HashLink as Link } from "react-router-hash-link";

const FlutterTodo = () => {
  return (
    <div className="ftd">
      <div className="ftd-header">
        <div className="ftd-header-wrapper">
          <img src={Goal} alt="" className="ftd-header-bkg-img" />

          <Link
            type="button"
            class="btn btn-outline-light ftd-header-btn"
            to="/portfolio/flutterTodo/#ftd-body-id"
          >
            To-Do-List
          </Link>
        </div>
      </div>
      <div className="ftd-body" id="ftd-body-id">
        <div className="container">
          <div className="ftd-body-section">
            <div className="ftd-body-section-title">- Showcase -</div>

            <div
              id="carouselExampleIndicators"
              class="carousel slide "
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
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="6"
                ></li>
              </ol>
              <div class="carousel-inner do-card ftd-body-carousel">
                <div class="carousel-item active">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter0}
                    alt="Zeroth slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter1}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter2}
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter3}
                    alt="Third slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter4}
                    alt="Fourth slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter5}
                    alt="Fifth slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ftd-body-image"
                    src={Flutter6}
                    alt="Sixth slide"
                  />
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
          </div>

          <div className="ftd-body-section">
            <div className="ftd-body-section-title">- Project FAQ -</div>
            <div class="accordion ftd-body-accordion" id="accordionExample">
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
                    I created this app in flutter because I have just finished
                    an Udemy course on Flutter and would like to test myself,
                    how much knowledge I managed to retain. Hence, I decided to
                    opt for creating a simple to-do list application.
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
                      What are the key milestones?
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
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          Design and wireframe in Figma
                        </li>
                        <li class="list-group-item">
                          Implemented SharedPreference for persistence local
                          save data
                        </li>
                        <li class="list-group-item">
                          State Management with Providers/Consumer
                        </li>
                        <li class="list-group-item">
                          Optimizing, monitoring App Lifecycle
                        </li>
                      </ul>
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
                      What packages have I used?
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
                    <div class="container">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          For State Management: provider
                        </li>
                        <li class="list-group-item">
                          For formating Dates: intl
                        </li>
                        <li class="list-group-item">
                          For picking colors from palette:
                          flutter_material_color_picker
                        </li>
                        <li class="list-group-item">
                          For local persistence saving: shared_preferences
                        </li>
                      </ul>
                    </div>
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
                      My role in this project
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
                    <div class="container">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Researcher</li>
                        <li class="list-group-item">Designer</li>
                        <li class="list-group-item">Programmer</li>
                        <li class="list-group-item">Playtester</li>
                      </ul>
                    </div>
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

export default FlutterTodo;
