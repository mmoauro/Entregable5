import React from "react";
import {Col, Row} from "react-bootstrap";
import {PublicidadComponent} from "./PublicidadComponent";
import {RecommendedUsers} from "./RecommendedUsers";
import {LastPostsComponent} from "./LastPostsComponent";

export class Home extends React.Component<any, any> {

    render() {
        return (
            <>
                <Row>
                    <Col md={3}>
                        <PublicidadComponent/>
                    </Col>
                    <Col md={6}>
                        <LastPostsComponent/>
                    </Col>
                    <Col md={3}>
                        <RecommendedUsers/>

                    </Col>
                </Row>
            </>
        );
    }
}

