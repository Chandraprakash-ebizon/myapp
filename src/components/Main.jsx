import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Main(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
    "Infrastructure - Tools or methods used for inventory and assessment",
    "Infrastructure – Operating systems",
    "Infrastructure – Hardware and VMs",
    "Infrastructure – Network Topology",
    "Infrastructure – Network Connectivity",
    "Infrastructure – switching & cabling ",
    "Infrastructure – Routers ",
    "Infrastructure – Wireless ",
    "Infrastructure – Server and instance firewalls",
    "Infrastructure – Intrusion detection or prevention systems (IDS/IPS)",
    "Infrastructure –Anti-virus ",
    "Infrastructure –Pen testing and vulnerability assessment ",
    "Infrastructure –Other security tools and software ",
    "Infrastructure –Malware",
    "Infrastructure –ILM",
    "Infrastructure –Disaster recovery",
    "Infrastructure –Backups",
    "Infrastructure –Replication and availability",
    "Infrastructure –DevOps",
    "Infrastructure –Infrastructure automation",
    "Infrastructure –Licensing",
    "Infrastructure –Scaling and cluster management",
    "Infrastructure –Billing and chargeback",
    "Infrastructure –Notifications and alerting",
    "Infrastructure –Service desk and incident management",
    "Infrastructure –Other",
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
        <h2 className="title">CURRENT INFRASTRUCTURE ASSESSMENT</h2>
        <form id="submit-form">
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            <div className="comp">
            <label htmlFor="">Current solution & software used</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your answer" id="fullWidth"/>
            </Box>  
            <label htmlFor="">Oracle SaaS, OCI & marketplace offerings (for new cloud native implementation, lift and shift, refactoring, or replacement)</label>
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
          </div>
    </form>
    </div>
</main>
    );
}

export default Main;