import React from "react";
import {Col, Row} from "react-bootstrap";
import RecurringOptions from "components/Zone2/RecurringOptions";
import BannerTxt from "components/BannerTxt";
import RecurringQuestions from "components/Zone2/RecurringQuestions";

const Zone2: React.FC = () => (
    <>
        <Row style={{marginTop: "3rem", borderTop: "1px solid", borderColor: "#FF7900"}}>
            <Col md={"6"}>
                <RecurringOptions />
            </Col>
            <Col md={"3"}>
                <BannerTxt />
            </Col>
            <Col md={"3"}>
                <RecurringQuestions />
            </Col>
        </Row>
    </>
);

export default Zone2;
