import React from "react";
import { Chat } from "../model/chat/Chat";

interface Props {
    chat: Chat;
}

export class ChatComponent extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    render () {
        return (
            <>
                <div className="d-flex align-items-center" style={{borderBottom: "1px solid #564E57", padding:"20px", height:"136px"}}>
                    <img src={this.props.chat.user.img} style={{width: "100px", height:"100px", borderRadius:"50px"}} />
                    <h3 style={{marginLeft: "20px"}}>{this.props.chat.user.name}</h3>
                </div>
                <div style={{paddingLeft: "20px"}}>
                   {this.props.chat.messages.map((message, index) => {
                       return (
                           <>
                            <div
                                className={"mt-5 d-flex align-items-center p-2 d-flex justify-content-between align-items-center"}
                                style={{backgroundColor: message.author ? "#D42DD8" : "#858585", color:"white", position: "relative", left:message.author ? "70%" : "0px", minHeight:"40px",  maxWidth:"400px", borderRadius:"10px"}}
                            >
                                <div>
                                      {message.text} 
                                </div>
                             <p style={{fontSize:"12px", color: "#564E57", marginBottom: "0px"}}>
                                {message.time}
                             </p>
                              
                            </div>
                           </>
                       )
                   })} 
                </div>
            </>
        )
    }

}