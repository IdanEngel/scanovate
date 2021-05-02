import React from "react";
import "./Sidebar.css";
import DomainRoundedIcon from "@material-ui/icons/DomainRounded";
import { Link } from "react-router-dom";

function Sidebar() {
    // Variable that holds all the list link components 
  const routeLinks = (
    <ul>
      <li>
        <Link to="/mandates">Mandates</Link>
      </li>
      <li>
        <Link to="/beneficialOwners">Beneficial Owners</Link>
      </li>
      <li>
        <Link to="/cases">Cases</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      <li>
        <Link to="/auditLogs">Audit Logs</Link>
      </li>
    </ul>
  );
  return (
    <div className="sidebar">
      <div className="side-headline">
        <DomainRoundedIcon style={{ color: "#0063D6" }} />
        <h3 style={{ color: "#0566D7" }}>Assocurazioni Generali SPA</h3>
        <br />
      </div>
        {routeLinks}
    </div>
  );
}

export default Sidebar;
