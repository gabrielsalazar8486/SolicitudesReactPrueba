import React from "react";
import {Image} from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LogoImg from "./../../public/Imgs/Logo.png";
const Logo: React.FC = () => <Image src={LogoImg} width={"100%"} />;
export default Logo;
