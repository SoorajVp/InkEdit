import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"; // Import the CSS file

const DocError = () => {
  return (
    <div className="container">
      <h2 className="message">Oops! Error while diplaying document</h2>
      <Link to="/" className="link">
        Go Back
      </Link>
    </div>
  );
};

export default DocError;
