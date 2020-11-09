import React from "react";

const footerStyle = {
    position: "fixed",
    marginTop: "80%"
}

const Footer = () => {
    return (
        <>
            <div className="attributions" style={footerStyle}>
                Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> and 
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from 
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </>
    )
}

export default Footer;