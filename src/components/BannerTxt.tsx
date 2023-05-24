import React from "react";
import {Image} from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BannerText from "./../../public/Imgs/bannerTxt.png";
const BannerTxt: React.FC = () => <Image src={BannerText} width={"100%"} />;
export default BannerTxt;
