import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/BreckCowan">
                <i className="fa fa-github"></i>
              </a>{" "}
              <a href="https://www.linkedin.com/in/breck-cowan-19a344219?trk=people-guest_people_search-card">
                <i className="fa fa-linkedin-square"></i>
              </a>{" "}
              <a href="https://www.youtube.com/channel/UCwaqGSyZ_du7gLLKwW5R-hg">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Breck</span>!
              </span>
            </div>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Learner 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cat lover 🐈",
                    1000,
                    "React/React Native 🌐",
                    1000,
                    "Git/GitHub ",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              I look forward to building projects with YOU!
            </span>
          </div>

          <div className="profile-options mb-1">
            <button
              className="btn primary-btn mr-3"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="BreckCowanResume.pdf" download="Breck Cowan.pdf">
              <button className="btn highlighted-btn ml-3">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
