import React, { useState } from "react";
import { BASE_URL } from "../url-config";
function ThumbnailList({ templates, activeTemplate, setActiveTemplate }) {
  // returns disabled for next arrow class if there are no thumbnails to show
  const thumbnailURL = BASE_URL + "images/thumbnails/";

  const [currentScroll, setCurrentScroll] = useState(0);

  // check if template exists before 4 positions
  const canMoveNext = () => {
    if (templates[currentScroll + 4] === undefined) {
      return false;
    }
    return true;
  };
  // check if template exists after 4 positions
  const canMovePrev = () => {
    if (templates[currentScroll - 4] === undefined) {
      return false;
    }
    return true;
  };

  // disable next button
  const isNextDisabled = () => {
    if (canMoveNext() === false) {
      return "disabled";
    }
  };
  // disable prev button
  const isPreviousDisabled = () => {
    if (canMovePrev() === false) {
      console.log("diabled");
      return "disabled";
    }
  };

  // move forward the visible thumbnails by 4 positions
  const moveNext = () => {
    if (canMoveNext()) {
      setCurrentScroll(currentScroll + 4);
    }
  };

  // move backward the visible thumbnails by 4 positions
  const movePrev = () => {
    if (canMovePrev()) {
      setCurrentScroll(currentScroll - 4);
    }
  };

  // return visible thumbnails
  const scrollTemplates = () => {
    return templates.slice(Number(currentScroll), currentScroll + 4);
  };

  // when thumbnail is clicked, change the active template
  const updateTemplate = (id) => {
    let template = templates.filter((templateItem) => {
      return templateItem.id === id;
    });
    setActiveTemplate(template[0]);
  };

  // Highlight the active thumbnail
  const setActive = (id) => {
    if (activeTemplate.id === id) {
      return "active";
    }
  };

  const renderedThumbnails = scrollTemplates().map((template) => {
    return (
      <a
        href="#/"
        key={template.id}
        title={template.id}
        className={setActive(template.id)}
        onClick={() => updateTemplate(template.id)}
      >
        <img
          src={thumbnailURL + template.thumbnail}
          alt="7111-m"
          width="145"
          height="121"
        />
        <span>{template.id}</span>
      </a>
    );
  });

  return (
    <div className="thumbnails">
      <div className="group">
        {renderedThumbnails}

        <span
          className={`previous ${isPreviousDisabled()}`}
          onClick={movePrev}
          title="Previous"
        >
          Previous
        </span>
        <a
          href="#/"
          className={`next ${isNextDisabled()}`}
          onClick={moveNext}
          title="Next"
        >
          Next
        </a>
      </div>
    </div>
  );
}
export default ThumbnailList;
