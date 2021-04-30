/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import "./Data.css";
import { Grid, RootRef } from "@material-ui/core";

function Data() {
  const [state, setState] = useState({
    data: {},
  });

  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      setState({
        data: res.data,
      });
    });
  }, []);
  console.log(state.data);

  const addressColumns = [
    // { field: "id", headerName: "ID", width: 200, sortable: true },
    { field: "address", headerName: "ADDRESS", width: 200, sortable: true },
    { field: "city", headerName: "CITY" },
    { field: "province", headerName: "PROVINCE", width: 130 },
    { field: "zip", headerName: "ZIP" },
    { field: "country", headerName: "COUNTRY", width: 125 },
    { field: "civicNumber", headerName: "CIVIC NUMBER", width: 170 },
  ];
  const contactInforrmationColumns = [
    // { field: "id", headerName: "ID", width: 200, sortable: true },
    { field: "fullName", headerName: "FULL NAME", width: 140, sortable: true },
    { field: "position", headerName: "POSITION", width: 125 },
    { field: "email", headerName: "EMAIL", width: 160, minWidth: 160 },
    { field: "mobile", headerName: "MOBILE PHONE", minWidth: 200, width: 200 },
    { field: "businessPhone", headerName: "BUISNES PHONE", width: 170 },
    { field: "fax", headerName: "FAX", width: 150 },
  ];

  return (
    <>
      <h1>Data</h1>
      {Object.keys(state.data).length > 0 ? (
        <div className="wrapper">
          <div className="container">
            <h2>Identifaction Data</h2>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <div className="headline">COMPANY NAME</div>
                <b>{state.data.identificationData.companyName}</b>
              </Grid>
              <Grid item>
                <div className="headline">LEI CODE</div>
                <b>{state.data.identificationData.leiCode}</b>
              </Grid>
              <Grid item>
                <div className="headline">VAT NUMBER</div>
                <b>{state.data.identificationData.vatNumber}</b>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              direction="row"
              justify="center"
              alignItems="space-evenly"
            >
              <Grid item>
                <div className="headline">COMPANY EMAIL</div>
                <b>{state.data.identificationData.companyEmail}</b>
              </Grid>
              <Grid item>
                <div className="headline">COMPANY PHONE</div>
                <b> {state.data.identificationData.companyPhone}</b>
              </Grid>
              <Grid item>
                <div className="headline">COMPANY FAX</div>
                <b>{state.data.identificationData.companyFax}</b>
              </Grid>
            </Grid>
          </div>
          <div
            className="container"
            style={
              {
                //   width: "90%",
              }
            }
          >
            <h2>Addresses</h2>
            <DataGrid
              className="grid"
              autoHeight
              rows={state.data.addresses}
              rowHeight={25}
              columns={addressColumns}
            />
          </div>

          <div className="container">
            <h2>Contact Information</h2>{" "}
            <DataGrid
              className="grid"
              autoHeight
              rows={state.data.contactInforrmation}
              rowHeight={25}
              columns={contactInforrmationColumns}
            />
          </div>
          <div className="container">
            <h2>Identifaction Data</h2>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <div className="headline">COMPANY NAME</div>
                <b>{state.data.identificationData.companyName}</b>
              </Grid>
              <Grid item>
                <div className="headline">LEI CODE</div>
                <b>{state.data.identificationData.leiCode}</b>
              </Grid>
              <Grid item>
                <div className="headline">VAT NUMBER</div>
                <b>{state.data.identificationData.vatNumber}</b>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={10}
              direction="row"
              justify="center"
              alignItems="space-evenly"
            >
              <Grid item>
                <div className="headline">COMPANY EMAIL</div>
                <b>{state.data.identificationData.companyEmail}</b>
              </Grid>
              <Grid item>
                <div className="headline">COMPANY PHONE</div>
                <b> {state.data.identificationData.companyPhone}</b>
              </Grid>
              <Grid item>
                <div className="headline">COMPANY FAX</div>
                <b>{state.data.identificationData.companyFax}</b>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Data;
