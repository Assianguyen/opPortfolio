import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import Type from "../../pages/home/Type";
import Sphere from "../../components/sphere/sphereimg";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <br></br>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle1}
              </p>
              <p
                className="greeting-text-p subTitle2"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle2}
              </p>
              <p
                className="greeting-text-bigger Function_title"
                style={{ color: theme.accentColor }}
              >
                <Type />
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/CV");
                  }}
                >
                  About Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <Sphere />
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
