import React from "react";
import "./style.css";

const bannerStyle = {
    backgroundColor: "rgb(58, 58, 58)",
    position: "absolute",
    zIndex: "-5",
    marginTop: "2%",
    opacity: "0.9",
    width: "100%",
    height: "21%",
    textAlign: "center"
}

const Header = () => {
    return ( <>
        <div style={ bannerStyle }>
        <div>
            <p className="headerText">"Do not go where the path may lead, go instead where there is no path and leave a trail."<br />-Ralph Waldo Emerson</p>
        </div>
        </div>        
    </>
    )
}

export default Header;