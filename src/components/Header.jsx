import React from "react";
import { Link , useLocation } from "react-router-dom";


function Header(){

  const location = useLocation();

    return <header>
       <div className="logo">
         <img className="left-img" src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/Picture2.png" alt="left"/>
         <h1><u>Discovery and Assessment</u></h1>
         <img className="right-img" src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/new_logo.png" alt="right"/>
        </div>

      <div className="nav-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === "/main" ? "active" : ""}`}>
              <Link to="/main">Current Infrastructure Assessment</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/second" ? "active" : ""}`}>
              <Link to="/second">Infrastructure Inventory</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/appport" ? "active" : ""}`}>
              <Link to="/appport">Application Portfolio</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/appdetails" ? "active" : ""}`}>
              <Link to="/appdetails">Application Details</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/currentinf" ? "active" : ""}`}>
              <Link to="/currentinf">Current Infrastructure Architecture Questionnaire</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/oncloud" ? "active" : ""}`}>
              <Link to="/oncloud">On Cloud</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/clouddsign" ? "active" : ""}`}>
              <Link to="/clouddesign">Cloud Design</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/dns" ? "active" : ""}`}>
              <Link to="/dns">DNS</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/cidr" ? "active" : ""}`}>
              <Link to="/cidr">CIDR</Link>
            </li>
              <li className={`nav-item ${location.pathname === "/ipsecvpn" ? "active" : ""}`}>
              <Link to="/ipsecvpn">IPSec VPN</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/fastconnect" ? "active" : ""}`}>
              <Link to="/fastconnect">Fast Connect</Link>
            </li>
          </ul>
        </nav>
      </div>

        {/* <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item"><a href="/">Current Infrastructure Assessment</a></li>
            <li className="nav-item"><a href="/second">Infrastructure Inventory</a></li>
            <li className="nav-item"><a href="#">Application Portfolio</a></li>
            <li className="nav-item"><a href="#">Application Details</a></li>
        </ul>
      </nav> */}

  </header>
}

export default Header;