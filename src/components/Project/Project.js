import React from "react";
import "./style.css";
import budgetImg from "../../img/budget-tracker.PNG";
import burgerImg from "../../img/burger.PNG";
import cookbookImg from "../../img/virtual-cookbook.PNG";
import quizImg from "../../img/coding-quiz.PNG";
import passwordImg from "../../img/password-gen.PNG";
import pitchImg from "../../img/pitch.PNG";

const cardStyle = {
    width: "25%",
    height: "25%",
    marginLeft: "6.2%",
    float: "left",
    backgroundColor: "rgb(65, 56, 45)",
    marginBottom: "5%"
}

const imgStyle = {
    height: "100%",
    width: "100%",
    border: "solid beige 5px"
}

const Project = () => {
    return (
        <>
        <div className="portfolio">
            <p id="directions">Click each image to visit the deployed application!</p>
            <div className="rowOne">
             <div className="col mb-4">
                <div style={ cardStyle } className="card h-100">
                    <a href="https://jandrews16.github.io/virtual-cookbook/">
                    <img style={imgStyle} src={cookbookImg} className="card-img-top" alt="virtual Cookbook" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Virtual Cookbook</h5>
                        <p className="card-text">An online cookbook that utilizes local storage so that users can save their favorite recipes.</p>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div style={ cardStyle } className="card h-100">
                    <a href="https://agile-peak-58096.herokuapp.com/">
                    <img style={imgStyle} src={burgerImg} className="card-img-top" alt="burgers" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Burger Log</h5>
                        <p className="card-text">A buger logger that allows users to track burgers eaten and not. This application is linked to a database so all information is saved.</p>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div style={ cardStyle } className="card h-100">
                    <a href="https://jandrews16.github.io/coding-quiz-challenge/">
                    <img style={imgStyle} src={quizImg} className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title">Coding Quiz Challenge</h5>
                        <p className="card-text">Test your knowlegde with this Javascript based application. Try to answer all questions before time runs out!</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="rowTwo">
            <div className="col mb-4">
                <div style={ cardStyle } className="card h-100">
                    <a href="https://jandrews16.github.io/password-generator/">
                    <img style={imgStyle} src={passwordImg} className="card-img-top" alt="..." /></a>
                    <div className="card-body">
                        <h5 className="card-title">Password Generator</h5>
                        <p className="card-text">This applicaitons allows users to generate complex passwords based on selected criteria. Click the image to visit this application.</p>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div style={ cardStyle } className="card h-100">
                    <a href="https://pitchitadventures.herokuapp.com/">
                    <img style={imgStyle} src={pitchImg} className="card-img-top" alt="tent" /></a>
                    <div className="card-body">
                        <h5 className="card-title">PitchIt</h5>
                        <p className="card-text">An online planner for users to track all their camping adventures. Utilizes node mailer to notify users that have been invited on a trip.</p>
                    </div>
                </div>
            </div>

            <div className="col mb-4">
                <div style={ cardStyle } className="card h-100">
                    <a href="https://warm-thicket-96869.herokuapp.com/">
                    <img style={imgStyle} src={budgetImg} className="card-img-top" alt="graph" /></a>
                    <div className="card-body">
                        <h5 className="card-title">Budget Tracker</h5>
                        <p className="card-text">This application allows users to track their monthly budget and view their spending habits.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Project;