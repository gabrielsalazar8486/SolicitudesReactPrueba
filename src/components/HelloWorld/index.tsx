import React from "react";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import Zone1 from "components/Zone1";
import Zone2 from "components/Zone2";

const HelloWorld: React.FC = () => (
    <div style={{fontFamily: "Open Sans", fontSize: "14px"}}>
        <Navbar />
        <Banner />
        <Zone1 />
        <Zone2 />
    </div>
);

export default HelloWorld;
