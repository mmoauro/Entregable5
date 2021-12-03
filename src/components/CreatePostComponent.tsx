import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import face from '../assets/icons/face.png';
import clip from '../assets/icons/clip.png';

export class CreatePostComponent extends React.Component<any, any> {

    render() {
        return (
            <>
                <div style={{border: "1px solid black", borderRadius: "20px"}} className="p-3 ocultado">
                    <div className="d-flex justify-content-center m-2">
                        <textarea placeholder="Di algo..." style={{width: "85%", borderRadius:"20px", margin: "2px"}}></textarea>
                    </div>
                    <Row className="mt-4">
                        <Col md="2" className="d-flex justify-content-end">
                                <img src={face} alt="emoji" width="30px" height="30px"/>
                                <img src={clip} alt="clip" width="30px" height="30px"/>
                        </Col>
                        <Col className="d-flex justify-content-end" style={{marginRight: "8%"}}>
                            <Button style={{ backgroundColor: "#D42DD8", color: "white", borderRadius: "30px", border: "none", width: "20%", height: "40px" }}>Publicar</Button>
                        
                        </Col>

                    </Row>
                </div>
            </>
        )
    }

}