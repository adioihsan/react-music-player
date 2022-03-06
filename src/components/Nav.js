import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
function Nav({ isLibOpen, setIsLibOpen }) {
  function openLibHandler() {
    setIsLibOpen(!isLibOpen);
  }
  return (
    <nav className="top-nav">
      <h1>RM-Player</h1>
      <button className="btn-lib" onClick={openLibHandler}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
export default Nav;
