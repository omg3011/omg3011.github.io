import React from "react";
import "./JavaCollab.css";
import Collab1 from "../../images/collab/Home.jpg";
import Collab2 from "../../images/collab/CreateCollab.jpg";
import Collab3 from "../../images/collab/ViewCollab.jpg";
import Collab4 from "../../images/collab/CreatePost.jpg";
import Collab5 from "../../images/collab/Footfall_Insight.jpg";
import Collab6 from "../../images/collab/MallInsights.jpg";
import Collab7 from "../../images/collab/TeamPhoto.jpg";
import { HashLink as Link } from "react-router-hash-link";

const JavaCollab = () => {
  return (
    <div className="jc">
      <div className="jc-header">
        <div className="jc-header-wrapper">
          <img src={Collab1} alt="" className="jc-header-bkg-img" />

          <Link
            type="button"
            class="btn btn-outline-light jc-header-btn"
            to="/portfolio/javaCollab/#jc-body-id"
          >
            Let's Collab
          </Link>
        </div>
      </div>
      <div className="jc-body" id="jc-body-id">
        <div className="container">
          <div className="jc-body-section">
            <div className="jc-body-section-title">- Showcase -</div>

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
              <div class="carousel-inner do-card jc-body-carousel">
                <div class="carousel-item active">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab1}
                    alt="Zeroth slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab2}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab3}
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab4}
                    alt="Third slide"
                  />
                </div>

                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab5}
                    alt="Four slide"
                  />
                </div>

                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab6}
                    alt="5 slide"
                  />
                </div>

                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 jc-body-image"
                    src={Collab7}
                    alt="6 slide"
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

          <div className="jc-body-section">
            <div className="jc-body-section-title">- Project FAQ -</div>
            <div class="accordion jc-body-accordion" id="accordionExample">
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
                    I have participated in a competition by the IMDA Open
                    Innovation Platform Project by City Development Limited. My
                    team including myself, consist of 2 programmer, 1 designer,
                    and 1 business major student. We worked to create an app for
                    shop owners to have a platform to exchange promotion ideas,
                    communicate and finally collaborate with each other to cross
                    sell their shop products by organizing cross-promotions
                    between the involved shop owners.
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
                          Programmer linking up with designer if their wireframe
                          design can be coded out in android studio
                        </li>
                        <li class="list-group-item">
                          Using different xml to cater for different size
                          resolution.
                        </li>
                        <li class="list-group-item">
                          Setting up backend using firebase database for
                          creating accounts, user authentications, chat
                          services, storing images.
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
                        <li class="list-group-item">Front-end Programmer</li>
                        <li class="list-group-item">Back-end Programmer</li>
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

export default JavaCollab;
