/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "./Data.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Addresses from "./addresses/Addresses";
import Contact from "./contact/Contact";
import Identification from "./identification/Identification";
import Services from "./services/Services";

function Data() {
  return (
    <>
      <div id="identification" className="wrapper">
        <div className="organization-data">
          <p className="organization-data-text">ORGANIZATION DATA</p>
          <ExpandMoreIcon />
        </div>
        <div id="identification-data" className="container">
          <h2>Identification Data</h2>
          <Identification />
        </div>
        <div className="container">
          <h2>Addresses</h2>
          <Addresses />
        </div>
        <div className="container">
          <div className="title">
            <h2>Contact Information</h2>
            <div className="contact">
              <AddIcon style={{ paddingTop: "3px", color: "#0A55B9" }} />
              <h4 style={{ color: "#0A55B9" }}> New Contact</h4>
            </div>
          </div>
          <Contact />
        </div>

        <div className="container">
          <h2>Services</h2>
          <Services />
        </div>
      </div>
    </>
  );
}

export default Data;
