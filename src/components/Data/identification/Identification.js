import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";

function Identification() {
  const [state, setState] = useState({
    data: {},
  });

  //   Fetching data from the server
  useEffect(() => {
    axios.get("http://localhost:5000/identificationData").then((res) => {
      setState({
        data: res.data,
      });
    });
  }, []);
  return (
    <>
      {Object.keys(state.data).length > 0 ? (
        <Grid
          style={{
            padding: "2rem 1rem 1rem 1rem",
            borderTopStyle: "groove",
            borderWidth: "thin",
            borderColor: "#eff4f92e"
          }}
        >
          <Grid
            container
            spacing={7}
            direction="row"
            justify="flex-start"
            style={{ paddingBottom: "2rem" }}
          >
            <Grid item>
              <div className="headline">COMPANY NAME</div>
              <b>{state.data.companyName}</b>
            </Grid>
            <Grid item>
              <div className="headline">LEI CODE</div>
              <b>{state.data.leiCode}</b>
            </Grid>
            <Grid item>
              <div className="headline">VAT NUMBER</div>
              <b>{state.data.vatNumber}</b>
            </Grid>
          </Grid>
          <Grid container spacing={10} direction="row" justify="flex-start">
            <Grid item>
              <div className="headline">COMPANY EMAIL</div>
              <b>{state.data.companyEmail}</b>
            </Grid>
            <Grid item>
              <div className="headline">COMPANY PHONE</div>
              <b> {state.data.companyPhone}</b>
            </Grid>
            <Grid item>
              <div className="headline">COMPANY FAX</div>
              <b>{state.data.companyFax}</b>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
}

export default Identification;
