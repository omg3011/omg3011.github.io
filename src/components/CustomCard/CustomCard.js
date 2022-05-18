import React from "react";
import "./CustomCard.css";
import { HashLink as Link } from "react-router-hash-link";

const CustomCard = ({ title, text, image, routeLink }) => {
  return (
    <div class="card w-100">
      <img
        src={image}
        class="card-img-top custom-card-img-top custom-card-padding"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title custom-card-title">{title}</h5>
        <p class="card-text">{text}</p>
        <Link
          className="nav-link"
          exact
          to={routeLink}
          class="btn btn-warning custom-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CustomCard;
