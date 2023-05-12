import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BannerImg from "./img.png";
const Banner: React.FC = () => (
    <>
        <img src={BannerImg} alt={"Banner"} style={{width: "100%"}} />
    </>
);

export default Banner;
