// 404.js
import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="title">404</h1>
      <p className="message">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="link">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
