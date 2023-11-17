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

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrderOverview() {
  const test = () => {console.log("We in there")}

  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Orders overview
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
      <div class="fake-browser" style={{background:"white"}}>
    <header class="fake-browser-header">
      <div class="action-btns">
        <span></span>
        <span></span> <span></span>
      </div>
      <div class="address-bar">
        <input type="text" value="https://ExampleWebsite.com"/>
      </div>
      <div class="setting-more">
        <span class="more-btn"></span>
      </div>
    </header>
    <section class="fake-window-body">
        <div style={{background:"grey"}}><h1>Online Payment Service</h1>
        </div>
        <div style={{background:"lightgrey"}}>
         <h3>USER SETTINGS</h3>
         </div>
        <p>Username:</p>
        <p><input type="text" value="Friendly_User"></input></p>
        <p>Account Number:</p>
        <p><input type="text" value="CR11111111111"></input></p>
        <p>Account Amount:</p>
        <p><input type="text" value="$6000"></input></p>

        {<div bg="white" className="row">
            <textarea className="InsText">{"insText"}</textarea> 
            
         {<VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>}
        </div>}
        {<VuiButton variant="contained" color="success" onClick={test}>
            NEXT
          </VuiButton>}
        
        
        
        
      </section>
      
        </div>
      </VuiBox>
    </Card>
  );
}

export default OrderOverview;
