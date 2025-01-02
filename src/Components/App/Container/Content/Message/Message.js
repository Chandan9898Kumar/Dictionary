import React from 'react';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import {styled} from '@mui/system';
import "./styles.css"

const StyledFace = styled(SentimentDissatisfiedRoundedIcon)`
    font-size: 64px;
    margin: auto;
`

function Message({word}){
    return(
        <section className="box">
            <div className="icon_face">
                <StyledFace/>
            </div>
            
            <h1 className="message_title">No Definitions Found</h1>
            <div className="message">{`${word.message} ${word.resolution}`}</div>
        </section>
    )
}

export default Message;