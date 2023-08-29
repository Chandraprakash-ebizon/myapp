import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Second from "./Second";
import AppPort from "./AppPort";
import AppDetails from "./AppDetails";
import CurrentInf from "./CurrentInf";
import OnCloud from "./OnCloud";
import CloudDesign from "./CloudDesign";
import Dns from "./Dns";
import Cidr from "./Cidr";
import IpsecVpn from "./IpsecVpn";
import FastConnect from "./FastConnect";
import Gpt3Example from "./Gpt3Example";

function App() {

  return (
    <Router>
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/second" element={<Second />} />
          <Route path="/appport" element={<AppPort />} />
          <Route path="/appdetails" element={<AppDetails />} />
          <Route path="/currentinf" element={<CurrentInf />} />
          <Route path="/oncloud" element={<OnCloud />} />
          <Route path="/clouddesign" element={<CloudDesign />} />
          <Route path="/dns" element={<Dns />} />
          <Route path="/cidr" element={<Cidr />} />
          <Route path="/ipsecvpn" element={<IpsecVpn />} />
          <Route path="/fastconnect" element={<FastConnect />} />
        </Routes>
        <Gpt3Example/>
      </div>
    </div>
  </Router>
  );
}

export default App;
