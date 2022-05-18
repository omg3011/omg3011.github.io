import React from "react";
import "./JavaQuote.css";
import Quote1 from "../../images/quote/home.png";
import Quote2 from "../../images/quote/second.png";
import Quote3 from "../../images/quote/3rd.png";
import Quote4 from "../../images/quote/4th.png";
import { HashLink as Link } from "react-router-hash-link";

const JavaQuote = () => {
  return (
    <div className="jq">
      <div className="jq-header">
        <div className="jq-header-wrapper">
          <img src={Quote1} alt="" className="jq-header-bkg-img" />

          <Link
            class="btn btn-outline-light jq-header-btn"
            to="/portfolio/javaQuote/#jq-body-id"
          >
            QuoteForYou
          </Link>
        </div>
      </div>
      <div className="jq-body" id="jq-body-id">
        <div className="container">
          <div className="jq-body-section">
            <div className="jq-body-section-title">- Showcase -</div>

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
              </ol>
              <div class="carousel-inner do-card jq-body-carousel">
                <div class="carousel-item active">
                  <img
                    class="d-block mx-auto p-5 jq-body-image"
                    src={Quote1}
                    alt="Zeroth slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jq-body-image"
                    src={Quote2}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jq-body-image"
                    src={Quote3}
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jq-body-image"
                    src={Quote4}
                    alt="Third slide"
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

          <div className="jq-body-section">
            <div className="jq-body-section-title">- Project FAQ -</div>
            <div class="accordion jq-body-accordion" id="accordionExample">
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
                    I created this app in Java using android studio during my
                    army days where everyone was unmotivated and just waiting
                    for time to pass. Hence this app was created hoping that one
                    can gain motivation looking at quotes by famous people.
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
                          Design and wireframe on A4 size paper.
                        </li>
                        <li class="list-group-item">
                          Using different xml to cater for different size
                          resolution.
                        </li>
                        <li class="list-group-item">
                          Using firebase database to store the texts and images
                          for each quotes.
                        </li>
                        <li class="list-group-item">
                          Adding admob to learn how to monetize.
                        </li>
                        <li class="list-group-item">
                          Conducted digital marketing through Twitter sharing
                          (Only tried free marketing by tweeting to related
                          tweets that talks about motivation).
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
                      My role in this project
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

export default JavaQuote;
