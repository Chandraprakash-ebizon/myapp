import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AppDetails(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
    "Application - Application name & brief description",
    "Application – Cloud strategy for the app: Retire, Re-host (IaaS), Re-platform (PaaS), Replace (SaaS), Rebuild ()cloud native)",
    "Application – Transaction rate (peak and average)",
    "Application – CDN",
    "Application – File system",
    "Application – Application caching",
    "Application – Backups",
    "Application – Archival",
    "Application – NoSQL database",
    "Application – Big Data database",
    "Application – Data Warehouse",
    "Application – Users (Peak and average)",
    "Application – Transaction rate (peak and average)",
    "Application – Expected growth (user, transaction, & data)",
    "Application – Application Security (encryption, keys, WAF, DDOS, IDS, IPS)",
    "Application – User management (identities, roles, federation, LDAP, SSO, AD, SAML)",
    "Application – Data classification",
    "Application – Messaging & workflow",
    "Application – Big Data database",
    "Application – Database backup & recovery",
    "Application – DNS",
    "Application – Disaster Recovery",
    "Application – Application backup & recovery",
    "Application – Availability & fault tolerance",
    "Application – Scaling (horizontal & Vertical)",
    "Application – DevOps",
    "Application – Application monitoring",
    "Application – Source code control",
    "Application – Billing & Chargeback",
    "Application – Governance",
    "Application – Auditing requirements",
    "Application – Notifications, alerting",
    "Application – Logging, monitoring, & Log management",
    "Application – Service desk & incident management",
    "Application – SI, vendors, providers",
    "Application – Other",
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
        <h2 className="title">APPLICATION DETAILS</h2>
        <form id="submit-form">
            <div className="comp">
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            </div>
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
            <label htmlFor="">Comments</label>
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
    </form>
    </div>
</main>
    );
}

export default AppDetails
;