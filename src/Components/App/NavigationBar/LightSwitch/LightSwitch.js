import React, {useState, useRef, useEffect} from 'react';
import ChangeTheme from './ChangeTheme';
import './styles.css';

function LightSwitch(){
    const [turnSwitch, setTurnSwitch] = useState(false);
    const moon = useRef(null);

    const handleSwitch = () => {
        const head = document.querySelector(".head");
        const lightSwitch = document.querySelector(".lightSwitch");

        if(!turnSwitch){
            head.style.left = "20px";
            lightSwitch.style.backgroundColor = "#A445ED";
            moon.current.style.stroke = "#A445ED";
        }
            
        else{
            head.style.left = "";
            lightSwitch.style.backgroundColor = "";
            moon.current.style.stroke = "";
        }

        setTurnSwitch((prevState) => {
            return !prevState
        })
    }

    const handleMouseEnter = () => {
        moon.current.style.stroke = "#A445ED";
    }

    const handleMouseLeave = () => {
        if(turnSwitch) return;
        moon.current.style.stroke = "";
    }

    useEffect(() => {
        ChangeTheme(turnSwitch);
    }, [turnSwitch])

    return(
        <>
           
            <div className="lightSwitch" onClick={handleSwitch}>
                <div className="head"></div>
            </div>  
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <path 
                    ref={moon}
                    id="moon"
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
            </svg>
        </>
    )
}

export default LightSwitch