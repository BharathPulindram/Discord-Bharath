import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Message.css";
function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>
                    Bharath
                <span className="message__timestamp">12.00 am</span>
                </h4>
                <p>hi bro !!</p>
            
            </div>
        </div>
    )
}

export default Message
