import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function IpsecVpn(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "IPSec VPN - Does your Internet connection has enough capacity to support the required Bandwidth (BW) to connect to the Oracle cloud?",
        "IPSec VPN - Does your CPE has enough horse power to support the required BW to connect to the Oracle cloud?",
        "IPSec VPN - Can you provide redundant Internet connections from your premises network?",
        "IPSec VPN - Will your CPE(s) sit behind a NAT device?",
        "IPSec VPN - If yes what is the private IP address of your CPE device(s)? Please note that in question 4 you need to provide the public IP address.",
        "IPSec VPN - What is the public IP address of your CPE(s)?",
        "IPSec VPN - Does your CPE support route or policy based tunnels?",
        "IPSec VPN - What is the make and model of your Customer Premises Equipment (CPE)?",
        "IPSec VPN - What level of firmware is your CPE running?",
        "IPSec VPN - Will you be doing port address translation (PAT) between CPE device and your VCN?",
        "IPSec VPN - What type of routing do you plan to use?",
        "IPSec VPN - Can your CPE and security policy support this Phase 1 Parameters?",
        "IPSec VPN - Can your CPE and security policy support this Phase 2 Parameters?",
        "IPSec VPN - Can your CPE and security policy support single Encryption Domain?",
        "IPSec VPN - Do you have the capability to prioritize traffic through multiple tunnels via your routing protocol?",
        "IPSec VPN - What Oracle region(s) are you planning to connect to?",
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
        <h2 className="title">IPSec VPN</h2>
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

export default IpsecVpn;