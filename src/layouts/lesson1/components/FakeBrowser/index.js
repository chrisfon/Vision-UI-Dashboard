/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";
import VuiButton from "components/VuiButton";
import "./FBCSS.css";
import Grid from "@mui/material/Grid";
//import Typography from '@material-ui/core/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";
import { useContext,useState,useEffect } from "react";
import { NameContext } from "layouts/lesson1";

function FakeBrowser({browInfo, showBrow}) {

  //const [able,SetAble] = useState([]);

  useEffect(() => {
    //SetAble(true);
   }, []);


  return (
    <div disabled={showBrow}>
      
   {!browInfo && <Card className="h-100" >
      <VuiBox mb="16px" textAlign="center">
        <VuiTypography variant="lg" fontWeight="bold" mb="8px" color="white">
          Example
        </VuiTypography>
        <VuiTypography variant="lg" fontWeight="bold" mb="8px" color="white">
          {browInfo}
        </VuiTypography>
        
        
      </VuiBox>
      <VuiBox >
      <div className="fake-browser" style={{background:"#e8eaed"}}>
    <header className="fake-browser-header">
      <div className="action-btns">
        <span></span>
        <span></span> <span></span>
      </div>
      <div className="address-bar">
      <VuiTypography color="dark" variant="h6" fontWeight="regular" mb="auto">
            www.example.com
          </VuiTypography>
      </div>
      <div className="setting-more">
        <span className="more-btn"></span>
      </div>
    </header>

    <div>
    <nav>
  <div className="menu" style={{boxShadow:"0px 2px 31px 0px rgba(0,0,0,0.52)"}}>
    
    <ul className="menu-list">
      <li><a href=""> Dashboard</a></li>
      <li><a href=""> Sales</a></li>
      <li><a href=""> Customer</a></li>
      <li><a href="">Market</a></li>
      <li><a href="">Feedback</a></li>
    </ul>
   
  </div>
  
  <div className="menu-right">
  <ul className="menu-list">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </ul>
  </div>
</nav>

    </div>


    <section className="fake-window-body" style={{margin:"20px"}}>
       <VuiTypography variant="h6" gutterBottom>
        User Settings
      </VuiTypography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
        
        
        
        
        
      </section>
      
        </div>
      </VuiBox>
    </Card>
   
   
   }

    { browInfo && <Card className="h-100" >
      <VuiBox mb="16px" textAlign="center">
        <VuiTypography variant="lg" fontWeight="bold" mb="8px" color="white">
          Example
        </VuiTypography>
        <VuiTypography variant="lg" fontWeight="bold" mb="8px" color="white">
          {browInfo}
        </VuiTypography>
        
        
      </VuiBox>
      <VuiBox >
      <div className="fake-browser" style={{background:"#e8eaed"}}>
    <header className="fake-browser-header">
      <div className="action-btns">
        <span></span>
        <span></span> <span></span>
      </div>
      <div className="address-bar">
      <VuiTypography color="dark" variant="h6" fontWeight="regular" mb="auto">
            www.example.com
          </VuiTypography>
      </div>
      <div className="setting-more">
        <span className="more-btn"></span>
      </div>
    </header>
    <section className="fake-window-body">
        <div style={{background:"lightblue", border:"2px dotted"}}><VuiTypography align="center" color="dark" variant="h2" fontWeight="regular" mb="auto">
            Online Payment Service
          </VuiTypography>
        </div>
        <div style={{background:"lightblue", border:"2px dotted"}}>
        <VuiTypography align="center" color="dark" variant="h2" fontWeight="regular" mb="auto">
            User Settings
          </VuiTypography>
         </div>
         <VuiTypography align="center" color="dark" variant="h3" fontWeight="regular" mb="auto">
            Username
          </VuiTypography>
        <VuiTypography align="center" color="dark" variant="h4" fontWeight="regular" mb="auto">
            Friendly_User
          </VuiTypography>
          <VuiTypography align="center" color="dark" variant="h3" fontWeight="regular" mb="auto">
            Account Number
          </VuiTypography>
          <VuiTypography align="center" color="dark" variant="h4" fontWeight="regular" mb="auto">
            CR11111111111
          </VuiTypography>
          <VuiTypography align="center" color="dark" variant="h3" fontWeight="regular" mb="auto">
            Account Amount:
          </VuiTypography>
          <VuiTypography align="center" color="dark" variant="h4" fontWeight="regular" mb="auto">
            $6000
          </VuiTypography>

        <VuiBox textAlign="center">

        {<VuiButton variant="gradient" color="primary" align="center">
            Transfer
          </VuiButton>}
          {<VuiButton variant="gradient" color="primary" align="center">
            Add funds
          </VuiButton>}
          {<VuiButton variant="gradient" color="primary" align="center">
            Request Invoice
          </VuiButton>}
        </VuiBox>
        
        
        
        
        
      </section>
      
        </div>
      </VuiBox>
    </Card>}
    </div>
  );
}

export default FakeBrowser;
