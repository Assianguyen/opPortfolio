// import React, { Component } from 'react';
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import Greeting from '../../containers/greeting/Greeting';
// import { Fade } from "react-reveal";
// import "./Hackathon.css";
// import { style } from "glamor";



import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio";
import { style } from "glamor";
import "./Hackathon.css"
import { link } from "glamor";
import { NavBar, Nav, NavItem } from 'react-bootstrap';

import Keti from"../../components/PDF/Keti-pdf"

import "../../components/videoHackathon/videoHackathon"
import VideoHack from "../../components/videoHackathon/videoHackathon";



function Hackathon(props) {
    const theme = props.theme;
    return (
        <div>
            <Header theme={props.theme} setTheme={props.setTheme} />
            <div className="main">
                <div className="course-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <div className="course-heading-img-div">
                            <img
                                className="om2m-pic"
                                src={require(`../../assests/images/growing-plant.png`)}
                                alt=""
                                style={{ width: "40%" }}
                            />
                        </div>
                        <h1 className="course-header" style={{ color: theme.text }}>
                            Hackathon
                        </h1>
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Descriptive part
                        </h1>
                        <h1 className="course-text" style={{ color: theme.text }}>
                            <br />
                            <b>Context and background </b> <br/><br />
                            The Hackathon is part of the Analysis and data processing, business applications module even though it had more to do with the Middleware & Service module.<br />
                            The 2021 Hackathon took place from 30/09/2021 to 15/11/2021 and was organized and managed by <b>KETI</b> (Korea Eletronics Technology Institute) and <b>ETSI</b> (European Telecommunication Standards Institute).
                            This international competition aimed to promote the OM2M standard. Divided in group of 5 students from different backgrounds, our goal was to develop an IoT solution to help citizen by solving social and/or environmental issues.
                            The solution had to be build with any of the oneM2M platforms.<br />
                            Our group was composed of 2 students from the Electronic department,
                            1 from the Physics department and 1 from Computer Science.
                            The idea came to us when we thought of a solution that could help reduce the waste of natural ressources. From that, we thought naturally about the water used in agriculture and gardens.
                            Our vision was to design a system that would reduce water consumption and manage the growth of plants or even crops in the long run. <br />
                            That is how we settled on the following solution: an automated watering system that would allow to monitor the surroundings and the state of a plant to predict and activate its watering.<br />
                            To do so, we used several sensors and one actuator to switch on the watering automatically or on command.
                        
                        </h1>
                            <div className="om2m-img-div">
                                <img
                                    className="om2m-logo"
                                    src={require(`../../assests/images/om2m.png`)}
                                    alt=""
                                    style={{ width: "20%" }}
                                />
                            </div>

                            <div className="om2m-img-div">
                                <img
                                    className="etsi-logo"
                                    src={require(`../../assests/images/etsi-logo.svg`)}
                                    alt=""
                                    style={{ width: "20%" }}
                                />
                            </div>
                            
                            <div className="keti-img-div">
                                <img
                                    className="keti-logo"
                                    src={require(`../../assests/images/keti_logo.png`)}
                                    alt=""
                                    style={{ width: "15%", marginLeft: "44%", marginTop:"-14%", position: "fixed"}}
                                />
                            </div>
                            <h1 className="course-text2" style={{ color: theme.text }}>
                            <b>Personal contribution</b> <br /><br />
                            Our goal was to divide efficiently the different tasks according to the members' background. <br />
                            Time management was essential since we only had about one month to complete not only the project but deliver a hackster.io project describing step by step how to build the IoT solution as well as a demonstration video.<br></br>
                            Since I come from the Embedded Systems curriculum, I was in charge of the Hardware part, writing and implementing the Application Dedicated Node that aimed to retrieve and send data via OM2M.
                            <br />I ended up also contributing to the Middle Node by modifying the monitor java script code that was deployed on the Raspberry Pi. With Agathe Lievre, another member of the team coming from an Electronics background, we made the node-red flow
                            to create the interface of our system. We also deployed and tested the entire setup of the system to make sure the system worked correctly. We were also in charge of filming and editing the demonstration video of our solution.
                            After that, I wrote the Readme and the hackster.io to explain the setup, the wiring and the use of this system.
                            <br />
                            <br />
                            <b>Results</b> <br /><br />
                            At the end of this competition, we managed to implement and deploy the main functionalities we aimed for. <br/>
                            Our system was able to retrieve data such as temperature, humidity, light to analyze if the plant studied had to be watered. 
                            The user could open or close the solenoid valve that controlled the water inlet from the node-red interface. 
                            The system could also operate in autonomy: if the humidity was too low, the watering was automatically turned on. <br/>
                            We also monitored with an ultrasound sensor the distance variation with the plant to determine if it was growing healthy and send on the user interface a warning otherwise. <br/>
                            We were able to display on graphs the real-time data of every sensor as well as data such as the weather forecasting, which could help the user anticipate when of if the plants need watering.
                            We presented the setup and all the features of our IoT solution in the following video:  
                           
                            </h1>
                        <br /><br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Technical part
                        </h1>
                        <h1 className="course-text" style={{ color: theme.text }}>
                            This project was very challenging technically for me since I had to assimilate a new concept, middleware, and more precisely, OneM2M. <br/>
                            Here is a quick summary of our project: sensors were wired to an ESP38266 board on the Application Dedicated Node side. This node had to connect and send data via WiFi to the Middle Node or Gateway, which in our case, was a Raspberry Pi. 
                            After having collected the data, the RaspPi had to send the gathered information to the OM2M platform. The node-red flow deployed on the Infrastructure Node could then send http GET requests to retrieve the sensors data and display it on the dashboard.
                           <br/> Since the user could control the system on the interface, the node-red had to be able to send POST requests to the ESP8266 via the OM2M platform to control the water actuator.<br/><br/><br/>

                            Since I had been assigned on the Arduino code and the handling of the hardware, I was confronted to some difficulties with some sensors and actuators, in particular the solenoid valve as well as the water flow sensor. 
                            Thankfully, I had experience from previous projects handling the ESP8266 which was the microcontroller we used in this project. <br/> Some components needed soldering, and I was able to do it without major difficulties since I had done extensive soldering during my 2021 summer internship.
                            I took a long time making the solenoid valve work as I did not understand that it needed a lot of water pressure to work properly. I disassembled the module to understand how it operated and I lost a lot of time experimenting with the voltage generator before
                            coming the conclusion that i needed to connect it to a hose for the water to go through with enough pressure. <br/>Concerning the water flow, I was sadly not able to make it work during our project and we had no time to reorder one in time. I also had some difficulty working with the relay that controlled the valve since I was not 
                            sure about the circuit.<br/><br/>

                            When making the node red, I had a hard time parsing the response from the http requests made the the OM2M platform. Indeed, the monitor java script loaded in the Raspberry Pi was not sending the data correctly, in other words in an object that would be easily parsed in a function. Agathe and I had to modify 
                            the Java script to send coherent messages. We first tried parsing the messages as they were sent but we quickly realized it was easier to change the monitorjs directly. Understanding the JSON format took us some time.
                            The next problem rose when we had to process the ultrasound data which aimed to measure whether or not the plant had grown. Since the ESP8266 only returned a raw value, the node-red had to interpret the data. Coming up with a way process the height data took a lot of reflection. Indeed, the node-red did not provide
                            node to do an esay comparison. To solve this problem, we had to apply a filter node that would block any transmission of messages unless the value read changed. We also had to add a delay to let the system the time to receive the data.<br/>

                            The hardest part was deploying the entire system with the circuit, the Raspberry Pi and the node-red because each time an error would occur, it was really hard to pinpoint the reason why.<br/>
                            To give an example, the last day of the competition, I had the whole system working perfectly and after relaunching the ESP8266 with the same code, the soleinoid valve would not open anymore to let the water go through. <br/>
                            Even though I knew the prblem was coming from the hardware, I had to isolate every sub-system to check for short cicuits or wrong wiring. Turns out that it was the relay that had blown.



                            

                            Technical problems
                            Missions
                            Too much reesponsability, too little time
                        </h1>
                        <br /><br />
                        <h1 className="course-title" style={{ color: theme.accentColor }}>
                            Analytic part
                        </h1>
                        <Keti></Keti>
                        <br />
                    </Fade>
                </div>
                {/* <SkillSection theme={theme} /> */}
            </div>
        </div>
    );
}
export default Hackathon;