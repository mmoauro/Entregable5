import React from "react";
import home from '../assets/icons/home.png';
import chat from '../assets/icons/chats.png';
import lupa from '../assets/icons/lupa.png';
import logout from '../assets/icons/logout.png';
import account from '../assets/icons/account.png';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Navbar extends React.Component<any, any> {

    render() {
        return (
            <>
                <Row style={{ borderBottom: "1px solid black", position: "sticky", zIndex: "2" }} className={"mt-3 pb-3"}>
                    <Col md={3} className={"d-flex align-items-center"}>
                        <Link to="/">
                            <img src={home} width={"30px"} height={"30px"} />
                        </Link>
                        <Link to="/chats">
                            <img src={chat} width={"30px"} height={"30px"} />
                        </Link>
                        <div style={{ width: "100%", height: "30px" }} className={"d-flex justify-content-center"}>
                            <img src={lupa} style={{ position: "relative", left: "85%", cursor: "pointer", height: "24px", top: "3px", backgroundColor: "black" }} />
                            <input placeholder={"Buscar en Petbook"} style={{ borderRadius: "50px", width: "100%", height: "100%" }} />
                        </div>
                    </Col>
                    <Col md={"6"}>
                        <Link to="/">
                            <h1 className={"text-center"} style={{ color: "#564E57" }}>Petbook</h1>
                        </Link>
                    </Col>
                    <Col md={3} className={"d-flex align-items-center justify-content-end"}>
                        <img src={account} width={"30px"} height={"30px"} />
                        <Link to="/login">
                            <img src={logout} width={"30px"} height={"30px"} />
                        </Link>
                    </Col>
                </Row>
            </>
        );
    }
}