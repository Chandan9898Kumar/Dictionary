import React, {useState, useEffect} from 'react';
import windowIcon from './Icons/icon-new-window.svg';
import "./styles.css";


function Source({word}) {
    const [source, setSource] = useState("");

    useEffect(() => {
        const allSources = word.sourceUrls;

        for(let currentSource in allSources){
            if(allSources[currentSource]){
                setSource(allSources[currentSource]);
                break;
            }
        }
    }, [])


    return(
        <section className="sourceContainer">
            <div className="line"></div>
            <div className="source">
                <h3 className="source_Title">Source</h3>
                <a href={source} className="source_Link" target="_blank">
                    {source}
                    <img src={windowIcon} className="windowIcon"/>
                </a>
            </div>            
        </section>
    )
}

export default Source;