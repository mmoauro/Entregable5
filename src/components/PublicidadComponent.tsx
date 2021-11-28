import React from "react";
import sappia from '../assets/sappia.png';
import {Publicidad} from "../model/Publicidad";
import gatti from '../assets/gatti.jpeg';

export class PublicidadComponent extends React.Component<any, any> {
    publicidades: Publicidad[] = [
        {
            img: sappia
        },
        {
            img: gatti
        }
    ];


    render () {
        return (
            <>
                <div style={{marginLeft: "50px"}}>
                    {this.publicidades.map((publicidad, index) => {
                        return (
                            <>
                                <div style={{border: "1px solid black", width: "75%", borderRadius: "20px"}} className={"d-flex justify-content-center mt-5"}>
                                    <img src={publicidad.img}/>
                                </div>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}