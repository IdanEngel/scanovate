import React from "react";
import "./Sidebar.css";
import DomainRoundedIcon from "@material-ui/icons/DomainRounded";
import { Link } from "react-router-dom";

function Sidebar() {
  // Variable that holds all the list link components
  const routeLinks = (
    <ul>
      <li className="route-links">
        <Link to="/mandates" className="a">
          <b> Mandates </b>
        </Link>
      </li>
      <li className="route-links">
        <Link to="/beneficialOwners" className="a">
          <b>Beneficial Owners</b>
        </Link>
      </li>
      <li className="route-links">
        <Link to="/cases" className="a">
          <b> Cases</b>
        </Link>
      </li>
      <li className="route-links">
        <Link to="/resources" className="a">
          <b>Resources</b>
        </Link>
      </li>
      <li className="route-links">
        <Link to="/auditLogs" className="a">
          <b> Audit Logs</b>
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="sidebar">
      <div className="side-headline">
        <div
          style={{
            backgroundColor: "#0063D6",
            borderRadius: "50%",
            height: "40px",
            width: "43px",
            marginTop: "1rem",
            marginRight: "1rem"
          }}
        >
          <DomainRoundedIcon
            style={{
              color: "white",
              fontSize: "33px",
              paddingTop: "6px",
              paddingLeft: "5px",
              textAlign: "center",
            }}
          />
        </div>
        <h2
          style={{ color: "#0566D7", fontSize: "26px", paddingBottom: "1rem",  }}
        >
          Assocurazioni Generali SPA
        </h2>
        <br />
      </div>
      <div className="sidebar-data-wrapper">
        <ul className="sidebar-data">
          <div className="status">
            <li className="status-header">status: </li>
            <li className="approved">Approved</li>
          </div>
          <div className="status">
            <li className="status-header">Business Category: </li>
            <li>Client</li>
          </div>
          <div className="status">
            <li className="status-header">Creation Date: </li>
            <li>15/03/2020</li>
          </div>
          <div className="status">
            <li className="status-header">Updated: </li>
            <li>2 Days ago by Case </li>
            <li className="c-tag">#c1582473</li>
          </div>
        </ul>
      </div>
      <div className="data-header">
        <p>Data</p>
      </div>
      {routeLinks}
    </div>
  );
}

export default Sidebar;
