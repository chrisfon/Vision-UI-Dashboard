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

import { useState,useEffect, useContext } from "react";
import { NameContext } from "layouts/lesson1";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";


// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";


function L1Info({ SetbrowInfo, SetShowBrow }) {

  
  
  const [message,setMessage] = useState([]);
  const [pageID,setPageID] = useState(0);
  const [insText,setInsText] = useState([]);
  const [showInsBtn,setShowInsBtn] = useState([]);
  const [showInsBtn2,setShowInsBtn2] = useState([]);
  const [showIns,setShowIns] = useState([]);
  const [numLines,SetnumLines] = useState([]);

  const changemsg = () =>{
    switch(pageID){
      
      case 0: setMessage("Welcome to the first vulnerability we will be learning about. Broken Object Level Authorization.\n Click next and follow the steps.")
       setShowInsBtn(false);
       setShowIns(false);
       setShowInsBtn2(false); 
       SetbrowInfo(false);
       break;
       case 1: setMessage("Object Level Authorization is a means of access control mechanism that is in charge of validating that a user can only access objects that they have permision to view or manipulate.\nIt is a crucial part of any API because APIs can contain tons of valuable information from every user or type of object. \n For example; an api to pull user information such as account number, amount, etc.")
       break;
       case 2: setMessage("OWASP defines a Broken Object Level Authorization (or BOLA) vulnerability as failures in this mechanism that typically lead to unauthorized information disclosure, modification, or destruction of all data.")
       break;
       case 3: setMessage("As an example of this we can take an API that is used by a website that utlizes an API to pull user information when accesing and editing their profile.\n In this case we can check out our inspect and it will show us that the API uses a structure in their query that follows api/users/[ID].\nIn this case, if a BOLA vulnerability is present, and no verification of that the user making the call has permission to view the information called; then the attacker will be able to view the settings and information of any user by sending a GET request with another ID of his choice.")
       showVulnCode();
       SetShowBrow(false);
       break;
       case 4:setMessage("TRY IT!\n Click the inspect button in the browser to see the JSON object that is being pulled when accessing the user settings.\n In this case it calls to our api using the GET method towards api/user/[userID]");
       setShowIns(false);
       setShowInsBtn(true);
       SetbrowInfo(false);
       break;
       case 5:setMessage("With any program to call to APIs we can try and call to the API using another user ID; try it again with the button below and notice the changes in red. \n In this case since there is no verification that the user making the API call is actually logged into the user they are searching, then it will let said user request information by using any userID.")
       SetbrowInfo(true);
       setShowInsBtn(false);
       setShowIns(false);
       setShowInsBtn2(true);
       break;
       case 6:setMessage("There are different ways to help fix this type of Vulnerability.\n A posible way that it can be mitigated can be through the use of UUIDs instead of a manually set or structured way to set ID. A UUID is an ID that is randomly generated with no specific pattern. This can make it much more difficult for attackers to identify other users ID.\n Another important step a developer must take to ensure that only authorized users can see their information is to validate that whoever is making the API call has permission to view the object before sending the API call.");
       setShowInsBtn2(false);
       setShowIns(false);
       break;
       case 7:setMessage("Keep in mind that when testing an API's security for this type of vulnerability it is important to Identify session labels (what is used by the API to identify the logged-in user.), then send API requests using different user's session labels to make sure only the information the user has permission to view is opened. If not the vulnerability still exists.")
       nextMsg;
       break;
       default: //setPageID(0);
       break;
    }
  }

  const nextMsg = () =>{
    if (pageID < 7 || pageID === 0){
      setPageID(pageID + 1);
      changemsg(pageID);
      
    }else{
      setPageID(0);
    }
    changemsg(pageID);
    console.log(pageID);
 }

 const prevMsg = () =>{
  if (pageID >= 0 ){
    setPageID(pageID - 1);
    changemsg(pageID);
    
  }else{
    //alert("No more pages.");
  }
  changemsg(pageID);
  console.log(pageID);
}

 const showInspect = () =>{
  SetnumLines(12);
  setInsText("HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n { \n'UserID' : '0412', \n'Username' : 'Friendly_User', \n'AccountNum' : 'CR11111111111',\n'Account Amount' : '6000'\n}");
  setShowIns(!showIns);
  //setShowInsBtn(!showInsBtn);
  //console.log(showIns);
  
}
const showInspect2 = () =>{
  SetnumLines(12);
  setInsText("HTTP1.1 200\nServer:openresy/1.17\nContent-Type: application/json\nConnection: keep-alive\nCache-Control: no-cache, no-store\n Expires: 0\nX-Frame-Options: DENY\n {\n'UserID' : '0134', \n'Username' : 'OtherUser', \n'AccountNum' : 'CR1212121212',\n'Account Amount' : '9999'\n}");
  setShowIns(!showIns);
  //setShowInsBtn2(!showInsBtn2);
  //console.log(showIns);
  
}

const showVulnCode = () =>{
  SetnumLines(6);
  setInsText("class UserSettingsController <Application>\n   def show\n         @usersettings = UserSettings.find(params.[id])\n         render json: @usersettings\n   end\nend");
  setShowIns(!showIns);
  
  
}

  useEffect(() => {
    
    //console.log(browInfo);
    changemsg(pageID);
    setPageID(pageID+1);
    console.log(pageID);
    setShowIns(false);
    setShowInsBtn(false);
    setShowInsBtn2(false);
    //setShowInsBtn2(false);
   }, []);


   //future use
   /*
<VuiButton variant="gradient" color="primary" onClick={prevMsg} fullWidth>
            Back
          </VuiButton>
  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
        Step {pageID}/6
                  </VuiTypography>
   */
  return (
    <Card
      sx={{
        height: "100% !important",
      }}
    >
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
        Broken Object Level Authorization
                  </VuiTypography>
      </VuiBox>
      <VuiBox>
        
      
          <VuiTypography color="text" variant="h4" fontWeight="regular" mb="auto"  style={{whiteSpace: 'pre-line'}}>
            {message}
          </VuiTypography>
        <VuiButton variant="gradient" color="primary" onClick={() => {nextMsg(); changemsg(pageID)}} fullWidth>
            Next
          </VuiButton>
          
          
          {showInsBtn && 
          <VuiButton variant="gradient" color="warning" onClick={showInspect} fullWidth>
          Inspect
        </VuiButton>
          }
          {showInsBtn2 && 
          <VuiButton variant="gradient" color="warning" onClick={showInspect2} fullWidth>
          Inspect
        </VuiButton>
          }
      </VuiBox>
      <VuiBox>
      {showIns && <VuiInput color="error" placeholder={insText} multiline rows={numLines} sx={{mt:2}}>
        
                  </VuiInput>}
          
      
      </VuiBox>
    </Card>
  );
}

export default L1Info;
