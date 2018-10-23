import React from "react";
import { Row, Col } from "reactstrap";
import Title from "../title";
import "./index.css";

const Stage = props => (
<Col xs="12" md={props.size}>
<div className="ws-dashboard__stage-title">{props.title}</div>
<div className="ws-dashboard__stage-cards">Card List</div>
</Col>
);

const Dashboard = (props) =>(
    <Row>
        {props.stages.map(stage => (<Stage {...stage} />))}
    </Row>
);

export default Dashboard;