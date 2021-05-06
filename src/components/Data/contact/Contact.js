import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Contact() {
    const [state, setState] = useState({
        data: {},
      });
    
      //   Fetching data from the server
      useEffect(() => {
        axios.get("http://localhost:5000/contactInformation").then((res) => {
          setState({
            data: res.data,
          });
        });
      }, []);

        //   Setting the contact information column list
  const contactInformationColumns = [
    {
      field: "id",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {params.value === 0 ? (
            <ContactPhoneIcon
              style={{ color: "#1883FE", position: "absolute" }}
            />
          ) : null}
        </div>
      ),
      width: 30,
    },
    { field: "fullName", headerName: "FULL NAME", width: 140, sortable: true },
    { field: "position", headerName: "POSITION", width: 125 },
    { field: "email", headerName: "EMAIL", width: 160, minWidth: 160 },
    { field: "mobile", headerName: "MOBILE PHONE", minWidth: 200, width: 200 },
    { field: "businessPhone", headerName: "BUSINESS PHONE", width: 170 },
    { field: "fax", headerName: "FAX", width: 150 },
    {
      field: "x",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
          }}
        >
          <MoreVertIcon style={{ color: "#586176", cursor: "pointer" }} />
        </div>
      ),
      width: 30,
    },
  ];
    return (
        <>
        {Object.keys(state.data).length > 0 ? (
             <DataGrid
             className="grid"
             autoHeight
             rows={state.data}
             rowHeight={55}
             columns={contactInformationColumns}
             style={{ border: "none" }}
           />
        ) : null}
      </>
    )
}

export default Contact
