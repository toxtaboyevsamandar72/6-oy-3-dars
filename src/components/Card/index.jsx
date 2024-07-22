import React, { useState } from "react";
import './index.css';

function Card() {
  const [tabState, setTabState] = useState("tab1");

  function handleChangeTab(tab) {
    setTabState(tab);
  }

  return (
    <div className="card">
      <h5>2-misol</h5>
      <h2 className="tab-content">
        {tabState === "tab1" && "Hello tab 1"}
        {tabState === "tab2" && "Hello tab 2"}
        {tabState === "tab3" && "Hello tab 3"}
      </h2>
      <button
        className={`wrapper-btn1 ${tabState === "tab1" ? "active" : ""}`}
        onClick={() => handleChangeTab("tab1")}
      >
        Tab 1
      </button>
      <button
        className={`wrapper-btn2 ${tabState === "tab2" ? "active" : ""}`}
        onClick={() => handleChangeTab("tab2")}
      >
        Tab 2
      </button>
      <button
        className={`wrapper-btn3 ${tabState === "tab3" ? "active" : ""}`}
        onClick={() => handleChangeTab("tab3")}
      >
        Tab 3
      </button>
    </div>
  );
}

export default Card;
