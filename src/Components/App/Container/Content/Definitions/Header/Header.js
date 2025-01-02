import React, {useState, useEffect} from 'react';
import playIcon from './Icons/icon-play.svg';
import './styles.css';

function Header({word}) {
    const [phonetic, setPhonetic] = useState();

    const handleAudio = async () => {
        const allAudioFiles = word.phonetics;     //not every element in the phonetics arrays has an audio file,
        let audioFile = "";                     //so i will iterate to find the first element with the file
        for(let file in allAudioFiles){
            if(allAudioFiles[file].audio){   
                audioFile = allAudioFiles[file].audio;
                break;
            }   
        }
        const audio = new Audio(audioFile);
        audio.type = audioFile.includes("mp3") ? "audio/mp3" : "audio/wav";

        try{
            await audio.play();
        }
        catch(err){
            console.log("failed to play");
        }
    }

    const handleMouseEnter = () => {
        const iconBackground = document.querySelector("#iconBackground");
        const iconArrow = document.querySelector("#iconArrow");
        iconBackground.style.opacity = "1";
        iconArrow.style.fill = "white";
    }

    const handleMouseLeave = () => {
        const iconBackground = document.querySelector("#iconBackground");
        const iconArrow = document.querySelector("#iconArrow");
        iconBackground.style.opacity = "";
        iconArrow.style.fill = "";
    }

    useEffect(() => {
        const allPhonetics = word.phonetics;
        let phoneticString = "";

        for(let phonetic in allPhonetics){
            if(allPhonetics[phonetic].text){
                phoneticString = allPhonetics[phonetic].text;
                break;
            }
        }
        setPhonetic(phoneticString);
    }, [word])

    return(
        <section className="header">
            <div className="title_phonetic">
                <h1 className="title">
                    {word.word}
                </h1>
                <h3 className="phonetic">
                    {phonetic}
                </h3>                
            </div>
            <svg id="svg_flex_item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" onClick={handleAudio}>
                <g fillRule="evenodd" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <circle id="iconBackground" cx="37.5" cy="37.5" r="37.5"/>
                    <path id="iconArrow" d="M29 27v21l21-10.5z"/>
                </g>
            </svg>             
        </section>
    )
}

export default Header;