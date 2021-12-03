import React from "react";
import home from '../assets/icons/home.png';
import chat from '../assets/icons/chats.png';
import lupa from '../assets/icons/lupa.png';
import logout from '../assets/icons/logout.png';
import account from '../assets/icons/account.png';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/styles.css';


export class Navbar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>

                <div className="mt-4 mobile" style={{borderBottom: "1px solid black"}}>
                    <Row>
                        <Col className="d-flex justify-content-around">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <img src={home} alt="home" width={"35px"} height={"35px"} />
                            </Link>
                            <Link to="/chats">
                                <img src={chat} alt="chats" width={"35px"} height={"35px"} />
                            </Link>
                            <img src={account} alt="profile" width={"35px"} height={"35px"} />
                            <Link to="/login">
                                <img src={logout} alt="logout" width={"35px"} height={"35px"} />
                            </Link>
                        </Col>

                    </Row>
                    <Row className="mt-3 d-flex justify-content-center p-2">
                        <div style={{ width: "100%", height: "30px" }} className={"d-flex justify-content-center"}>
                            <Link to="/search" style={{ position: "relative", left: "85%" }}>
                                <img src={lupa} alt="lens" style={{ cursor: "pointer", height: "24px", top: "3px" }} />
                            </Link>
                            <input placeholder={"Buscar en Petbook"} style={{ borderRadius: "50px", width: "100%", height: "100%" }} />
                        </div>
                    </Row>
                </div>


                <Row style={{ borderBottom: "1px solid black", position: "sticky", zIndex: "2" }} className={"mt-3 pb-3 navbar ocultado"}>
                    <Col md={3}>
                        <Row>
                            <Col md="5" className="d-flex justify-content-around ">
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <img src={home} alt="home" width={"35px"} height={"35px"} />
                                </Link>
                                <Link to="/chats">
                                    <img src={chat} alt="chats" width={"35px"} height={"35px"} />
                                </Link>
                            </Col>
                            <Col md="7">
                                <div style={{ width: "100%", height: "30px" }} className={"d-flex justify-content-center"}>
                                    <Link to="/search" style={{ position: "relative", left: "85%" }}>
                                        <img src={lupa} alt="lens" style={{ cursor: "pointer", height: "24px", top: "3px" }} />
                                    </Link>
                                    <input placeholder={"Buscar en Petbook"} style={{ borderRadius: "50px", width: "100%", height: "100%" }} />
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col md={"6"} >
                        <Link to="/">
                            <h1 className={"text-center "} style={{ color: "#564E57", textDecoration: "no" }}>Petbook</h1>
                        </Link>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Row>
                                <Col className="d-flex justify-content-end">
                                    <img src={account} alt="profile" width={"35px"} height={"35px"} />
                                </Col>
                                <Col md={"2"}>
                                    <div>
                                        <Link to="/login">
                                            <img src={logout} alt="logout" width={"35px"} height={"35px"} />
                                        </Link>
                                    </div>
                                </Col>
                            </Row>

                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}