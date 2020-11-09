import React from "react";
import "./style.css";
import profileImg from "../../img/profile.jpg";

const profileImgStyle = {
    position: "relative",
    height: "25%",
    width: "22%",
    borderRadius: "7%",
    border: "inset wheat 3px",
    margin: "2%"
}

const AboutMe = () => {
    return ( <>
        <div className="aboutme">
            <h1 className="hello">Hello, my name is Juliana Andrews</h1>
            <h4>I am a Full Stack Developer located in Kent, WA</h4>
            <img style={ profileImgStyle } src={ profileImg } alt="Juliana Andrews" />
            <div className="skills">
                <h4>Skills Include:</h4>
                <p>HTML5 -- CSS -- JavaScript -- Excel VBA -- Node -- Express -- MySQL -- MongoDB -- React</p>
            </div>
        </div>        
    </>
    )
}

export default AboutMe;