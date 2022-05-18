import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import "./PortfolioHome.css";
import Apot from "../../images/apot/apot-menu.png";
import Goal from "../../images/goal/home_screen.png";
import EP from "../../images/ep/ep-home.png";
import Collab from "../../images/collab/Home.jpg";
import Quote from "../../images/quote/home.png";
import Conquest from "../../images/conquest/home.png";
import PortfolioLogo from "../../images/portfolio.png";
import CHH from "../../images/hh/main.png";
import ATodoJsonServer_Listing from "../../images/ATodoJsonServer/Angular_JsonServer_Todo_Listing.png";
import IMG_RTodoJsonServer from "../../images/RTodoJsonServer/Todo_React_Redux_JsonServer.png";
import { HashLink as Link } from "react-router-hash-link";

const PortfolioHome = () => {
  return (
    <div className="portfolio-home" id="PortfolioTop">
      <div className="ph-header">
        <div className="ph-header-wrapper">
          <div className="ph-header-title">Portfolio.</div>
          <Link
            class="btn btn-outline-light ph-header-btn"
            to="/portfolio/#ph-body-id"
          >
            Featured Projects
          </Link>
        </div>
      </div>
      <div className="ph-body" id="ph-body-id">
        <div className="container">
          <div className="ph-body-type">
            <div class="row ph-body-row">
              <div className="ph-body-title">React</div>
              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="To-do List with Json Server"
                  text="Simulate a mock backend with using Json Server and using React for frontend."
                  image={IMG_RTodoJsonServer}
                  routeLink="/portfolio/RTodoJsonServer"
                />
              </div>
            </div>

            <div class="row ph-body-row">
              <div className="ph-body-title">Angular</div>
              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="To-do List with Json Server"
                  text="Simulate a mock backend using Json Server and using Angular for frontend."
                  image={ATodoJsonServer_Listing}
                  routeLink="/portfolio/ATodoJsonServer"
                />
              </div>
            </div>

            <div class="row ph-body-row">
              <div className="ph-body-title">C++</div>
              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="Apotcalypse"
                  text="Apotcalypse is a colony simulator built on a custom 3D game engine using C++. This game revolve around how the player manage a very cruical resource- Frulets! Go forth and control the frulets to stop the impending Apotcalypse!"
                  image={Apot}
                  routeLink="/portfolio/CApot"
                />
              </div>

              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="Halley’s Heaven"
                  text="Halley’s Heaven is a 2D platformer, hack and slash game built on Alpha engine using C++. This game revolve around how well you can make use of your umbrella abilities to defeat the monster and manuever around the map."
                  image={CHH}
                  routeLink="/portfolio/CHH"
                />
              </div>
            </div>

            <div class="row ph-body-row">
              <div className="ph-body-title">Flutter</div>

              <div class="col-lg-4 d-flex align-items-stretch">
                <CustomCard
                  title="To-Do List"
                  text="A typical To-Do List Application developed in flutter."
                  image={Goal}
                  routeLink="/portfolio/flutterTodo"
                />
              </div>

              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="Expense Planner"
                  text="Expense planner keeps track of all the money transactions for the current week."
                  image={EP}
                  routeLink="/portfolio/flutterEP"
                />
              </div>
            </div>

            <div class="row ph-body-row">
              <div className="ph-body-title">Java</div>

              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="Let's Collab"
                  text="This app were created for shop owners to have a platform to exchange promotion ideas, communicate and finally collaborate with each other to cross sell their shop products by organizing promotions between the involved shop owners."
                  image={Collab}
                  routeLink="/portfolio/javaCollab"
                />
              </div>

              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="QuoteForYou"
                  text="Reading inspirational quote on a regular basis can help a person become more successful, and think more positive.

                  Keep on spreading good positive vibes and hope you all are having an awesome day!"
                  image={Quote}
                  routeLink="/portfolio/javaQuote"
                />
              </div>
            </div>

            <div class="row ph-body-row">
              <div className="ph-body-title">Unity3D</div>

              <div class="col-lg-4 col-sm-6">
                <CustomCard
                  title="Conquest"
                  text="Exciting 2D Hack-And-Slash Mobile Game."
                  image={Conquest}
                  routeLink="/portfolio/unityConquest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;
