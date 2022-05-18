import React from "react";
import "./Subject.css";

const Subject = ({ link, text }) => {
  return (
    <div class="card">
      <img
        class="card-img-top image-container"
        src={link}
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{text}</h5>
      </div>
    </div>
  );
};

export default Subject;
