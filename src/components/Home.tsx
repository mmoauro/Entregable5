import React from "react";
import { Col, Row } from "react-bootstrap";
import { PublicidadComponent } from "./PublicidadComponent";
import { RecommendedUsers } from "./RecommendedUsers";
import { LastPostsComponent } from "./LastPostsComponent";
import { SearchComponent } from "./SearchComponent";

interface Props {
    toggleSpinner: (boolean: boolean) => void,
    showingSpinner: boolean;
    isSearchPage?: boolean;
}

export class Home extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.props.toggleSpinner(true);
        setTimeout(() => {
            this.props.toggleSpinner(false);
        }, 500);
    }

    render() {
        return (
            !this.props.showingSpinner &&

            <>
                <Row>
                    <Col md={3}>
                        <PublicidadComponent />
                    </Col>
                    <Col md={6}>
                        {this.props.isSearchPage ?
                            <SearchComponent />
                            :
                            <LastPostsComponent />
                        }
                    </Col>
                    <Col md={3}>
                        <RecommendedUsers />

                    </Col>
                </Row>
            </>
        );
    }
}

