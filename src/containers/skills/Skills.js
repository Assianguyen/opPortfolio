import React, { useState } from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

import { style } from "glamor";
import TableISS from "../../components/tableISS/tableISS";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            General information
          </h1>
          <h1 className="skills-title" style={{ color: theme.accentColor }}>
            About portfolio
          </h1>
          <h1 className="skills-text" style={{ color: theme.text }}>
            <br />
            This portfolio constitutes a synthesis of my last semester from
            september 2021 to january 2022 at the National Institute of Applied
            Science (INSA) of Toulouse. It fits into the framework of the{" "}
            <b>Innovative Smart Systems (ISS)</b> orientation. This portfolio
            gathers my projects, experiences, skills acquired and accomplished
            during this semester.
            <br />
            This website is divided in 5 main parts:
            <br />
            <br />
            <li>
              The
              <NavLink
                className="home1"
                to="/home"
                tag={Link}
                style={{
                  textDecoration: "none",
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: "bold",
                }}
              >
                home
              </NavLink>
              page which presents the general information about the portfolio
              and the ISS courses
            </li>
            <br />
            <li>
              The
              <NavLink
                className="cv1"
                to="/CV"
                tag={Link}
                style={{
                  textDecoration: "none",
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: "bold",
                }}
              >
                CV
              </NavLink>
              page
            </li>
            <br />
            <li>
              The
              <NavLink
                className="descriptive"
                to="/CV"
                tag={Link}
                style={{
                  textDecoration: "none",
                  borderRadius: 5,
                  color: theme.text,
                  fontWeight: "bold",
                }}
              >
                descriptive part
              </NavLink>
              of each module
            </li>
            <br />
            <li>
              the <b>technical part</b> of each module
            </li>
            <br />
            <li>
              the <b>analytic part</b> of each module
            </li>
            <br />
            By selecting in the header either the descriptive, technical or
            analytic part you can choose any course or UF. You can thus navigate
            the portfolio by either course o
          </h1>
          <br />
          <h1 className="skills-title" style={{ color: theme.accentColor }}>
            Courses content for the ISS curriculum
          </h1>
          <h1 className="skills-text" style={{ color: theme.text }}>
            <br />
            The Innovative Smart Systems curriculum gathers students from many
            departments, like Physics, Automatic/Electronic, Computer science or
            Business and Management. The main courses of this Pluridisciplinary
            Transversal Program primarily center on the Internet of Things (IoT)
            field.
            <br />
            You can find below a table that summarizes the different courses of
            this program.
          </h1>
          <TableISS />
        </Fade>
      </div>
      {/* <SkillSection theme={theme} /> */}
    </div>
  );
}
