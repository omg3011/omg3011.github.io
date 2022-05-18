import React from "react";
import "./UnityConquest.css";
import Conquest from "../../images/conquest/home.png";
import { HashLink as Link } from "react-router-hash-link";

const UnityConquest = () => {
  return (
    <div className="uc">
      <div className="uc-header">
        <div className="uc-header-wrapper">
          <img src={Conquest} alt="" className="uc-header-bkg-img" />

          <Link
            class="btn btn-outline-light uc-header-btn"
            to="/portfolio/unityConquest/#uc-body-id"
          >
            Conquest
          </Link>
        </div>
      </div>
      <div className="uc-body" id="uc-body-id">
        <div className="container">
          <div className="uc-body-section">
            <div className="uc-body-section-title">- Showcase -</div>

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
              </ol>
              <div class="carousel-inner do-card uc-body-carousel">
                <div class="carousel-item active">
                  <div class="embed-responsive embed-responsive-16by9 d-block mx-auto p-5 ca-body-image">
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
          </div>

          <div className="uc-body-section" id="uc-body-id">
            <div className="uc-body-section-title">- Project FAQ -</div>
            <div class="accordion uc-body-accordion" id="accordionExample">
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
                    This was my first mobile game application I deployed in
                    playstore. I created this during my free time while serving
                    army. I was struggling with the art side and even almost
                    quit because the art doesn't seem to provide me with the
                    game feel. But because I do not want to leave things half
                    done, I managed to overcome it by trying again and again,
                    until I did it.
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
                          Creating my own art, using only the primitive shapes.
                        </li>
                        <li class="list-group-item">
                          Joystick Implementation for mobile controls.
                        </li>

                        <li class="list-group-item">
                          Game balancing for the player, enemy minion and enemy
                          boss.
                        </li>
                        <li class="list-group-item">
                          Animation for combat and making sure it sychronize
                          with the audio and particles.
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
                        <li class="list-group-item">Designer</li>
                        <li class="list-group-item">Artist</li>
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

export default UnityConquest;
