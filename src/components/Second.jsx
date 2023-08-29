import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Second(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
    "Hardware - Server name (FQDN)",
    "Hardware - Role",
    "Hardware – Physical or Virtual details",
    "Hardware – Domain",
    "Hardware – Applications or software installed on the server",
    "Hardware – IP Addresses",
    "Hardware – Services",
    "Hardware – Performance metrics used",
    "Hardware – Cores or CPU’s",
    "Hardware – Memory",
    "Hardware – Storage",
    "Hardware – Peak CPU utilization percentage",
    "Hardware – Average CPU utilization percentage",
    "Hardware – Peak memory utilization",
    "Hardware – Dependencies and connections",
    "Hardware – Age and depreciation information",
  ];

  const handleNextClick = () => {
    if (currentSectionIndex + 1 < sectionTitles.length) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSectionIndex - 1 >= 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const isLastSection = currentSectionIndex === sectionTitles.length - 1;

    return (
    <main>
    <div className="container">
        <h2 className="title">INFRASTRUCTURE INVENTORY</h2>
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
            {/* <label htmlFor="">Oracle SaaS, OCI & marketplace offerings (for new cloud native implementation, lift and shift, refactoring, or replacement)</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your answer" id="fullWidth" />
            </Box>
            <label htmlFor="">Comments (examples: open to changing vendor, wants byol)</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your answer" id="fullWidth" />
            </Box> */}
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

export default Second;