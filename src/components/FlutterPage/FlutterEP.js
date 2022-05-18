import React from "react";
import "./FlutterEP.css";
import EP from "../../images/ep/ep-home.png";
import EP1 from "../../images/ep/ep-add.png";
import { HashLink as Link } from "react-router-hash-link";

const FlutterEP = () => {
  return (
    <div className="fep">
      <div className="fep-header">
        <div className="fep-header-wrapper">
          <img src={EP} alt="" className="fep-header-bkg-img" />

          <Link
            type="button"
            class="btn btn-outline-light fep-header-btn"
            to="/portfolio/flutterEP/#fep-body-id"
          >
            Expense Planner
          </Link>
        </div>
      </div>
      <div className="fep-body" id="fep-body-id">
        <div className="container">
          <div className="fep-body-section">
            <div className="fep-body-section-title">- Showcase -</div>

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
              <div class="carousel-inner do-card fep-body-carousel">
                <div class="carousel-item active">
                  <img
                    class="d-block mx-auto p-5 fep-body-image"
                    src={EP}
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto p-5 fep-body-image"
                    src={EP1}
                    alt="Second slide"
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

          <div className="fep-body-section">
            <div className="fep-body-section-title">- Project FAQ -</div>
            <div class="accordion fep-body-accordion" id="accordionExample">
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
                    I clone this app from one of the Flutter Udemy tutorial as I
                    feel that I could make use of this app in my daily routine
                    to track my money transaction.
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
                          Making use of "mediaQuery" to cater for different
                          mobile screen resolution as well as different mobile
                          orientation.
                        </li>
                        <li class="list-group-item">
                          Optimizing, learning when to use Stateful widget and
                          Stateless widget, to improve performance by not
                          recomputing widget that doesnt need to be re-render.
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
                          For formating Dates: intl
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

export default FlutterEP;
