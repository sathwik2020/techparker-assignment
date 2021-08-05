import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./url-config";

import Thumbnails from "./components/ThumbnailList";
import ImageDetails from "./components/ImageDetails";

import "./App.css";

function App() {
  // initialize and set templates and active template
  const [templates, setTemplates] = useState([]);
  const [activeTemplate, setActiveTemplate] = useState({});

  // get templates from api service
  const fetchTemplates = async () => {
    const res = await axios.get(BASE_URL);

    setTemplates(res.data);
    setActiveTemplate(res.data[0]);
  };

  // when component loads fetch templates
  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div id="container">
      <header>Filmstrip View</header>
      <div id="main" role="main">
        <ImageDetails template={activeTemplate} />

        <Thumbnails
          templates={templates}
          setActiveTemplate={setActiveTemplate}
          activeTemplate={activeTemplate}
        />
      </div>
      <footer>
        <a href="instructions.pdf">Download PDF Instructions</a>
      </footer>
    </div>
  );
}

export default App;
