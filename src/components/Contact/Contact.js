import React from "react";
import './style.css';

const contactStyle = {
    textAlign:"center",
    marginTop: "15%",
    color: "beige",
    fontSize: "20px",
    backgroundColor: "rgb(63, 62, 59)",
    width: "30%",
    marginLeft: "35%",
    padding: "2%",
    opacity: "0.88"
}

const logoStyle = {
    height: "20%",
    width: "20%",
    margin: "1%"
}

const ContactForm = () => {
    return (<>
    <div style={contactStyle}>
        <h1>Social Media Links</h1>
        <h3>Click each logo to visit my profile</h3>
        <br />
        <a href="https://www.linkedin.com/in/juliana-andrews-94290bb6/">
        <img style={logoStyle} src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1-300x300.png" alt="linkedIn Logo" /></a>
        <a href="https://github.com/JAndrews16">
        <img style={logoStyle} src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo-133x120.png" alt="gitHub Logo" /></a>
        <br />
        <br />
        <br />
        <h3>Or feel free to reach out to me via below:</h3>
        <h4>julianakandrews@gmail.com</h4>
        <h4>000-000-0000</h4>
    </div>
        </>
    )
}

export default ContactForm;