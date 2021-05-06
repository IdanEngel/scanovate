import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

function Services() {

    const [state, setState] = useState({
        data: {},
      });
    
      //   Fetching data from the server
      useEffect(() => {
        axios.get("http://localhost:5000/services").then((res) => {
          setState({
            data: res.data,
          });
        });
      }, []);
    return (
        <>
        {Object.keys(state.data).length > 0 ? (
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
               {state.data.otcTrading ? (
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
               {state.data.custodianBanksForFxSpot ? (
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
               {state.data.clearingBroker ? (
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
               {state.data.executingBroker ? (
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
        ) : null}
      </>
    )
}

export default Services
