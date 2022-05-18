import React from "react";
import "./ATodoJsonServer.css";
import ATodoJsonServer_Listing from "../../images/ATodoJsonServer/Angular_JsonServer_Todo_Listing.png";
import ATodoJsonServer_Add from "../../images/ATodoJsonServer/Angular_JsonServer_Todo_AddingTask.png";
import { HashLink as Link } from "react-router-hash-link";

const ATodoJsonServer = () => {
  return (
    <div className="ajs">
      <div className="ajs-header">
        <div className="ajs-header-wrapper">
          <img
            src={ATodoJsonServer_Listing}
            alt=""
            className="ajs-header-bkg-img"
          />

          <Link
            type="button"
            class="btn btn-outline-light ajs-header-btn"
            to="/portfolio/ATodoJsonServer/#ajs-body-id"
          >
            To-Do-List w/ Angular + JsonServer
          </Link>
        </div>
      </div>
      <div className="ajs-body" id="ajs-body-id">
        <div className="container">
          <div className="ajs-body-section">
            <div className="ajs-body-section-title">- Showcase -</div>

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
              </ol>
              <div class="carousel-inner do-card ajs-body-carousel">
                <div class="carousel-item active">
                  <img
                    class="d-block mx-auto p-5 ajs-body-image"
                    src={ATodoJsonServer_Listing}
                    alt="Zeroth slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ajs-body-image"
                    src={ATodoJsonServer_Add}
                    alt="First slide"
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

          <div className="ajs-body-section">
            <div className="ajs-body-section-title">- Project FAQ -</div>
            <div class="accordion ajs-body-accordion" id="accordionExample">
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
                    I created this app in Angular during my internship, as
                    I was tasked to work in a project in Angular and .Net framework. So by creating a
                    simple application like a todo list application was able to help me
                    solidify my understanding towards Angular.
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
                          Understanding the flow of Angular (Unlike react, they
                          have some convention that we must follow)
                        </li>
                        <li class="list-group-item">Routing in Angular</li>
                        <li class="list-group-item">
                          Learning the css library, Angular Material.
                        </li>
                        <li class="list-group-item">
                          Passing of data and handling http request and
                          response.
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
                      What packages/libraries have I used?
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
                        <li class="list-group-item">Angular Material</li>
                        <li class="list-group-item">
                          JsonServer for mock backend
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
                        <li class="list-group-item">Frontend-Programmer</li>
                        <li class="list-group-item">
                          Backend-Programmer (Although I used JsonServer)
                        </li>
                        <li class="list-group-item">Tester</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFive">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed about-btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Github link for this project
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <div class="container">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <a
                            href="https://github.com/omg3011/P1_AngularCatalog_with_JsonServer"
                            target="_blank"
                          >
                            Github Link
                          </a>
                        </li>
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

export default ATodoJsonServer;
