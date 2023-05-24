// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo_star from "../public/Imgs/star_bg.png";

export const horizontalElements: {display: string; justifyContent: string} = {
    display: "flex",
    justifyContent: "space-between"
};

export const MenuBtnLing: {
    borderRadius: string;
    marginRight: string;
    backgroundColor: string;
    color: string;
} = {
    borderRadius: "5px 5px 0px 0px",
    marginRight: "10px",
    backgroundColor: "#1677d7",
    color: "#fff"
};

export const MenuBtnDark: {
    borderRadius: string;
    marginRight: string;
    backgroundColor: string;
    color: string;
} = {
    borderRadius: "5px 5px 0px 0px",
    marginRight: "10px",
    backgroundColor: "#004c97",
    color: "#fff"
};

export const icons: object = {
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "2.5rem",
    color: "#000",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "0.5rem",
    borderRadius: "1rem"
};
export const iconsHome: object = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: "18rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
};

export const styleCard: object = {
    backgroundColor: "#1677D8",
    width: "350px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export const attrLogo: object = {
    src: logo_star,
    style: {...icons, marginTop: "10px", marginLeft: "10px"},
    alt: "logo_star"
};
