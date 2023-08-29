import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FastConnect(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "FastConnect - What FastConnect option are you planning to use?",
        "FastConnect - Who is your current WAN or backbone provider?",
        "FastConnect - Can your provider deliver circuits or cross connects as needed for connection to OCI? Are there any locations where they cannot?",
        "FastConnect - Is your Data Center currently co-located at any of the Oracle Cloud Centers?",
        "FastConnect - How are you planning to deploy redundancy?",
        "FastConnect - Can you assign a /30 or /31 IP address with a private ASN for FastConnect?",
        "FastConnect - Are you planning to connect to any Oracle Public Services?",
        "FastConnect - Do you have your own registered IANA IP addresses and public BGP AS number?",
        "FastConnect - Will you be setting up public and private peering?",
        "FastConnect - If using BGP dynamic routing, what are the BGP session subnets (/31) to use for each tunnel? - The subnets must be part of the encryption domain.",
        "FastConnect - What is your VPN Address for tunnels?",
        // For Tunnel 1
        // For Tunnel 2
        "FastConnect - What is the ASN # of your network?",
        "FastConnect - If using static routing, what are the subnets for your on-premises network?",
        "FastConnect - On-prem network allow ICMP type 3 code 4",
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
        <h2 className="title">FAST CONNECT</h2>
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

export default FastConnect;