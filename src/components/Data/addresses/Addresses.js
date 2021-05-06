/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeIcon from "@material-ui/icons/Home";
import Flag from "../../../imageSvg/Italy.svg";
import { DataGrid } from "@material-ui/data-grid";

function Addresses() {
  const [state, setState] = useState({
    data: {},
  });

  //   Fetching data from the server
  useEffect(() => {
    axios.get("http://localhost:5000/addresses").then((res) => {
      setState({
        data: res.data,
      });
    });
  }, []);

  //   Setting the address column list
  const addressColumns = [
    {
      field: "id",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // paddingTop: '5px'
          }}
        >
          {params.value === 0 ? (
            <HomeIcon style={{ color: "#1883FE", position: "absolute" }} />
          ) : null}
        </div>
      ),
      width: 30,
    },
    {
      field: "address",
      headerName: "ADDRESS",
      width: 200,
      sortable: true,
      resizable: true,
    },
    { field: "city", headerName: "CITY" },
    { field: "province", headerName: "PROVINCE", width: 130 },
    { field: "zip", headerName: "ZIP" },
    {
      field: "country",
      headerName: "COUNTRY",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "27px", height: "28px", padding: "5px" }}
            src={Flag}
            alt="d"
          />
          {params.value}
        </div>
      ),
      width: 125,
    },
    { field: "civicNumber", headerName: "CIVIC NUMBER", width: 170 },
  ];
  return (
    <>
      {Object.keys(state.data).length > 0 ? (
          <DataGrid
            className="grid"
            autoHeight
            rows={state.data}
            rowHeight={45}
            columns={addressColumns}
          />
      ) : null}
    </>
  );
}

export default Addresses;
