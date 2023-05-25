// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import logo_star from "../public/Imgs/star_bg.png";
import {CSSProperties} from "react";

export const horizontalElements: CSSProperties = {
    display: "flex",
    justifyContent: "space-between"
};

export const MenuBtn: CSSProperties = {
    marginLeft: "2rem",
    color: "#444C5E",
    textAlign: "center",
    justifyContent: "center",
    width: "10rem",
    fontSize: "14px"
};

export const HoverMenuBtn: CSSProperties = {
    marginLeft: "2rem",
    width: "10rem",
    color: "#1677D8",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid",
    borderColor: "#FF7900"
};

export const icons: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "2.5rem",
    color: "#000",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "0.5rem",
    marginLeft: "2.5rem"
};
export const iconsHome: CSSProperties = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: "10rem",
    backgroundColor: "transparent"
};

export const styleCard: CSSProperties = {
    backgroundColor: "transparent",
    width: "15rem",
    height: "10rem",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#004C97",
    color: "#004C97"
};

export const recurringOption: CSSProperties = {
    backgroundColor: "transparent",
    width: "10rem",
    height: "10rem",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#004C97",
    color: "#444C5E",
    borderRadius: "10rem",
    marginTop: "1rem"
};

export const hoverStyleCard: CSSProperties = {
    backgroundColor: "transparent",
    width: "15rem",
    height: "10rem",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF7900",
    color: "#444C5E"
};

export const attrLogo: object = {
    src: logo_star,
    style: {...icons, marginTop: "10px", marginLeft: "10px"},
    alt: "logo_star"
};
