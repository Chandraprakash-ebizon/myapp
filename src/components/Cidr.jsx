import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Cidr(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "Environment (VCN) - Subnets",
        "Environment (VCN) - Ext-LB (Public) Subnet",
        "Environment (VCN) - Int-LB (Private) Subnet",
        "Environment (VCN) - (App+DB) Subnet",
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
        <h2 className="title">CIDR</h2>
        <form id="submit-form">
            <div className="comp">
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            </div>
            <div className="text-field-container">
            <div className="text-field-group">
            <label htmlFor="">HUB</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" label="Enter your answer" style={{ width: 300 }}/>
            </Box>
            </div>
            <div className="text-field-group"  style={{ marginLeft: -300 }}>
            <label htmlFor="">DEV</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" label="Enter your answer" style={{ width: 300 }}/>
            </Box>
            </div>
            </div>
            <div className="text-field-container">
            <div className="text-field-group">  
            <label htmlFor="">TEST</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" label="Enter your answer" style={{ width: 300 }}/>
            </Box>
            </div>
            <div className="text-field-group" style={{ marginLeft: -300 }}>
            <label htmlFor="">Prod</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" label="Enter your answer" style={{ width: 300 }}/>
            </Box>
            </div>
            </div>
            <div className="text-field-container">
            <div className="text-field-group">
            <label htmlFor="">DR</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" label="Enter your answer" style={{ width: 300 }}/>
            </Box>
            </div>
            <div className="text-field-group" style={{ marginLeft: -300 }}>
            <label htmlFor="">TBD</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" label="Enter your answer" style={{ width: 300 }}/>
            </Box>
            </div>
            </div>
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

export default Cidr;