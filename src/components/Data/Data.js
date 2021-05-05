/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import AddIcon from "@material-ui/icons/Add";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import HomeIcon from "@material-ui/icons/Home";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Data.css";
import { Grid } from "@material-ui/core";
import Flag from "../../imageSvg/Italy.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Data() {
  const [state, setState] = useState({
    data: {},
  });

  //   Fetching data from the server
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
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
        <div id="identification" className="wrapper">
          <div className="organization-data" >
            <p className="organization-data-text">ORGANIZATION DATA</p>
            <ExpandMoreIcon />
          </div>
          <div id="identification-data" className="container">
            <h2>Identification Data</h2>
            <Grid
              container
              spacing={10}
              direction="row"
              justify="flex-start"
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
              justify="flex-start"
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
          <div className="container">
            <h2>Addresses</h2>

            <DataGrid
              className="grid"
              autoHeight
              rows={state.data.addresses}
              rowHeight={45}
              columns={addressColumns}
            />
          </div>

          <div className="container">
            <div className="title">
              <h2>Contact Information</h2>
              <div className="contact">
                <AddIcon style={{ paddingTop: "3px", color: "#0A55B9" }} />
                <h4 style={{ color: "#0A55B9" }}> New Contact</h4>
              </div>
            </div>
            <DataGrid
              className="grid"
              autoHeight
              rows={state.data.contactInformation}
              rowHeight={45}
              columns={contactInformationColumns}
              style={{ border: "none" }}
            />
          </div>
          <div className="container">
            <h2>Identification Data</h2>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              style={{
                "text-align": "center",
              }}
            >
              <Grid item>
                <div className="headline">OTC TRADING</div>
                <br />
                {state.data.services.otcTrading ? (
                  <CheckCircleIcon
                    fontSize="large"
                    style={{ color: "#1DC340" }}
                  />
                ) : (
                  <CancelRoundedIcon
                    fontSize="large"
                    style={{ color: "#FF6162" }}
                  />
                )}
              </Grid>
              <Grid item>
                <div className="headline">CUSODIAN BANKS FOR FX SPOT</div>{" "}
                <br />
                {state.data.services.custodianBanksForFxSpot ? (
                  <CheckCircleIcon
                    fontSize="large"
                    style={{ color: "#1DC340" }}
                  />
                ) : (
                  <CancelRoundedIcon
                    fontSize="large"
                    style={{ color: "#FF6162" }}
                  />
                )}
              </Grid>
              <Grid item>
                <div className="headline">CLEARING BROKER FOR ETD/OTC</div>
                <br />
                {state.data.services.clearingBroker ? (
                  <CheckCircleIcon
                    fontSize="large"
                    style={{ color: "#1DC340" }}
                  />
                ) : (
                  <CancelRoundedIcon
                    fontSize="large"
                    style={{ color: "#FF6162" }}
                  />
                )}
              </Grid>
              <Grid item>
                <div className="headline">
                  EXECUTING BROKER FOR LISTED DERIVATIVES
                </div>
                <br />
                {state.data.services.executingBroker ? (
                  <CheckCircleIcon
                    fontSize="large"
                    style={{ color: "#1DC340" }}
                  />
                ) : (
                  <CancelRoundedIcon
                    fontSize="large"
                    style={{ color: "#FF6162" }}
                  />
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Data;
