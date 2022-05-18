import React from "react";
import "./CApot.css";
import Apot1 from "../../images/apot/main.gif";
import Apot2 from "../../images/apot/editor.gif";
import Apot3 from "../../images/apot/apot-menu.png";

import { HashLink as Link } from "react-router-hash-link";

const CApot = () => {
  return (
    <div className="ca">
      <div className="ca-header">
        <div className="ca-header-wrapper">
          <img src={Apot1} alt="" className="ca-header-bkg-img" />

          <Link
            class="btn btn-outline-light ca-header-btn"
            to="/portfolio/CApot/#ca-body-id"
          >
            Apotcalypse
          </Link>
        </div>
      </div>
      <div className="ca-body" id="ca-body-id">
        <div className="container">
          <div className="ca-body-section">
            <div className="ca-body-section-title">-Showcase-</div>

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
              <div class="carousel-inner do-card ca-body-carousel">
                <div class="carousel-item active">
                  <div class="embed-responsive embed-responsive-16by9 d-block mx-auto p-5 ca-body-image">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/-qMEVvWeruA"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ca-body-image"
                    src={Apot1}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ca-body-image"
                    src={Apot2}
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 ca-body-image"
                    src={Apot3}
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

          <div className="ca-body-section">
            <div className="ca-body-section-title">-Project FAQ-</div>
            <div class="accordion ca-body-accordion" id="accordionExample">
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
                    Apotcalypse was developed by a team of 9 members across 2
                    semesters. It is a colony simulator built on a custom 3D
                    game engine whereby the player has to manage the game's
                    crucial resource - Frulets. These Frulets are indispensable
                    and are necessary to impede the "Apotcalypse". The main game
                    loop revolves around managing the aforementioned Frulets,
                    using them to craft various buildings and assigning them to
                    work in different areas of the map. The main goal is to
                    clear the infection levels of the different floors, mainly
                    via the buildings available. Once all 4 floors of infections
                    are cleared, the Apotcalypse will be prevented.
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
                      How did I contribute in this project?
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
                          Implemented a way to track performance and debug
                          informations with the help of Tracey.
                        </li>
                        <li class="list-group-item">
                          Work with another programmer to integrate and use
                          PhysX to develop the physic needed in our game
                          mechanics.
                        </li>
                        <li class="list-group-item">
                          Implemented audio system in our game with the help of
                          FMOD and work with another programmer to composed all
                          the audio needed in this game.
                        </li>

                        <li class="list-group-item">
                          Make use of IMGUI, an GUI editor, to create graphical
                          tools such as those listed above so that designers can
                          easily manipulate the game parameters.
                        </li>

                        <li class="list-group-item">
                          Scripting using the native C++ language to code some
                          of the system and game logic.
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
                        <li class="list-group-item">Programmer</li>
                        <li class="list-group-item">
                          Audio Engineer and Composer
                        </li>
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

export default CApot;
