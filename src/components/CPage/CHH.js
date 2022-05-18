import React from "react";
import "./CHH.css";
import HH from "../../images/hh/main.png";
import { HashLink as Link } from "react-router-hash-link";

const CHH = () => {
  return (
    <div className="chh">
      <div className="chh-header">
        <div className="chh-header-wrapper">
          <img src={HH} alt="" className="chh-header-bkg-img" />

          <Link
            class="btn btn-outline-light chh-header-btn"
            to="/portfolio/CHH/#chh-body-id"
          >
            Halley’s Heaven
          </Link>
        </div>
      </div>
      <div className="chh-body" id="chh-body-id">
        <div className="container">
          <div className="chh-body-section">
            <div className="chh-body-section-title">- Showcase -</div>

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
              <div class="carousel-inner do-card chh-body-carousel">
                <div class="carousel-item active">
                  <div class="embed-responsive embed-responsive-16by9 d-block mx-auto p-5 ca-body-image">
                    <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/embed/N9bUWXHfAqE"
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

          <div className="chh-body-section">
            <div className="chh-body-section-title">- Project FAQ -</div>
            <div class="accordion chh-body-accordion" id="accordionExample">
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
                    Halley’s Heaven is a 2D platformer, hack and slash game
                    built on Alpha engine using C++. This game revolve around
                    how well you can make use of your umbrella abilities to
                    defeat the monster and manuever around the map.
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
                          Game engine architecture
                        </li>
                        <li class="list-group-item">
                          Creating the art assets using Adobe Illustrator.
                        </li>
                        <li class="list-group-item">
                          Creating the art animation using Adobe After Effects.
                        </li>

                        <li class="list-group-item">
                          Parallax Scrolling of the background
                        </li>
                        <li class="list-group-item">UI System</li>
                        <li class="list-group-item">
                          Making the video trailer for this game.
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
                        <li class="list-group-item">Artist</li>
                        <li class="list-group-item">Programmer</li>
                        <li class="list-group-item">Video creator</li>
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

export default CHH;
