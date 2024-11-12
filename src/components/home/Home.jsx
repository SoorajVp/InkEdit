import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [url, setUrl] = useState("");
  return (
    <div class="container">
      <h2>Enter a Document URL</h2>
      <div>
        <label for="website-url">( PDF || DOCX || PPT )</label>
        <br />
        <input
          type="url"
          id="website-url"
          name="website-url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
        <Link to={`/edit?url=${url}`}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
