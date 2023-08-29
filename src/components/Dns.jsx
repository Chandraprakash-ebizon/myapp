import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Dns(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
      "DNS - Would you want to resolve OCI resources using private DNS? (E.g.customerwesite.com or customer.net etc.)",
      "DNS - What are your (IP Address) On-Perm DNS Listener & DNS Forwarders?",
      "DNS - What is domain and Sub-Domain names to be used in OCI (If the answer to #1 is yes)",
      "DNS - What are your Oracle SAAS application URL (customer.com, customer.com, etc.)",
      "DNS - Are the SAAS applications accessible over internet or only Internally(Organization’s network only)",
      "DNS - Do you want to retain these application URLs’ in OCI?",
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
        <h2 className="title">DNS</h2>
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

export default Dns;