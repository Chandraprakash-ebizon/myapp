import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function OnCloud(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
    "On Cloud - How much Data do you anticipate on sending from On-Prem to Oracle Cloud (#Mb/s,# Gb/s  etc.)",
    "On Cloud - Are you planning on Internet access to web services on the Oracle Cloud (i.e. Users on the Internet access your Webservers on Oracle Cloud)?",
    "On Cloud – Do you need compute Instances to have Inbound access from the Internet?",
    "On Cloud – Do you need compute Instances to have Outbound access to the Internet?",
    "On Cloud – Do you need to have custom DNS servers or DNS resolutions between On premise and OCI",
    "On Cloud – Do you need a Firewall Virtual appliance deployed in OCI",
    "On Cloud – Will you need Public or Private Load Balancers?",
    "On Cloud – Are you planning to use Virtual Machine or Bare Metal?",
    "On Cloud – What Oracle region(s) are you planning to connect to?",
  ];

  const handleNextClick = () => {
    if (currentSectionIndex + 1 < sectionTitles.length) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  }

  const handlePrevClick = () => {
    if (currentSectionIndex - 1 >= 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const isLastSection = currentSectionIndex === sectionTitles.length - 1;

    return (
    <main>
    <div className="container">
        <h2 className="title">ON CLOUD</h2>
        <form id="submit-form">
            <div className="comp">
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            </div>
            <label htmlFor="">Details</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your answer" id="fullWidth" multiline rows={6}/>
            </Box>  
            <div className="button-container">
            {currentSectionIndex > 0 && (
              <button className="btn prev" type="button" onClick={handlePrevClick}>PREVIOUS</button>
            )}
            {!isLastSection && (
              <button className="btn nxt" type="button" onClick={handleNextClick}>NEXT</button>
            )}
            {isLastSection && (
              <input className="btn sum" type="submit" value="SUBMIT" />
            )}
          </div>
    </form>
    </div>
</main>
    );
}

export default OnCloud;