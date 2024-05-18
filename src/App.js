import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Click a company below to track your courier.
      </h2>
      <div className="button-container">
        <img
          src="https://trackon.in/images/logo.svg"
          alt="Trackon Logo"
          className="company-logo"
          style={{ width: "172px" }}
        />
        <a
          href="https://trackon.in/Tracking/t2/MultipleTracking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="custom-button" style={{ background: "#f45c09" }}>
            Click Here
          </button>
        </a>
        <img
          src="https://www.delhivery.com/_nuxt/img/Delhivery_logo.dcef706.png"
          alt="Trackon Logo"
          className="company-logo"
          style={{ background: "#101218", width: "172px", height: "56px" }}
        />
        <a
          href="https://www.delhivery.com/tracking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="custom-button" style={{ background: "#000" }}>
            Click Here
          </button>
        </a>
        <img
          src="https://www.dtdc.in/img/logos/logo-footer.png"
          alt="Trackon Logo"
          className="company-logo"
          style={{ background: "#101218", width: "172px", height: "56px" }}
        />
        <a
          href="https://www.dtdc.in/tracking.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="custom-button"
            style={{ background: "#fff", color: "#000" }}
          >
            Click Here
          </button>
        </a>
        <img
          src="https://www.bluedart.com/image/layout_set_logo?img_id=1414225&t=1715615127373"
          alt="Trackon Logo"
          className="company-logo"
          style={{ width: "172px", height: "56px" }}
        />
        <a
          href="https://bluedart.com/tracking"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="custom-button">Click Here</button>
        </a>
      </div>
    </>
  );
}

export default App;
