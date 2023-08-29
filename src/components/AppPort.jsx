import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AppPort(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
    "Application & Use Cases - Oracle apps",
    "Application & Use Cases - Microsoft apps",
    "Application & Use Cases – SAP apps",
    "Application & Use Cases – IBM apps",
    "Application & Use Cases – Other enterprise apps",
    "Application & Use Cases – Web apps",
    "Application & Use Cases – HCM",
    "Application & Use Cases – EPM",
    "Application & Use Cases – CX",
    "Application & Use Cases – ERP",
    "Application & Use Cases – SCM",
    "Application & Use Cases – CRM",
    "Application & Use Cases – BPM",
    "Application & Use Cases – Data Warehousing",
    "Application & Use Cases – Big Data Warehousing",
    "Application & Use Cases – HPC",
    "Application & Use Cases – IoT",
    "Application & Use Cases – Gaming",
    "Application & Use Cases – Mobile",
    "Application & Use Cases – AI/ML",
    "Application & Use Cases – AR/VR",
    "Application & Use Cases – SaaS",
    "Application & Use Cases – Blockchain",
    "Application & Use Cases – BI",
    "Application & Use Cases – Real-time analysis",
    "Application & Use Cases – Industry-specific solutions",
    "Application & Use Cases – Other (Specify)",
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
        <h2 className="title">APPLICATION PORTFOLIO</h2>
        <form id="submit-form">
            <div className="comp">
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            </div>
            <label htmlFor="">Details (Software, Venders Used)</label>
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

export default AppPort;