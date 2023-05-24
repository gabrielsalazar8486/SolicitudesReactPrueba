import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BannerImg from "./banner.png";
// import BannerImg from "./img.png";
import {Image} from "react-bootstrap";
const Banner: React.FC = () => (
    <>
        <Image src={BannerImg} alt={"Banner"} style={{width: "100%"}} />
    </>
);

export default Banner;
