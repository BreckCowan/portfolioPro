import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Express", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Bootstrap", ratingPercentage: 80 },
    { skill: "WordPress", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase skills that I have become familiar with in my studies",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Whiskey Database",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Currently I am working on a whiskey database that can be added to using CRUD operations that will sort whiskey based on origin, flavor, color, age, ect.",
      subHeading: "Technologies Used: MongoDB, Express, React JS, Node.js",
    },
    {
      title: "MERN Social Media Site",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "This is my dive into a full fledged social media site with full functionality, JWT validation, password hashing, and bCrypt encoding.  Users will be able to add and delete posts and stay in contact in real time.",
      subHeading:
        "Technologies Used: MongoDB, Express, React JS, Bootsrap, Node.js, ",
    },
    {
      title: "Various Small Web Apps",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "Have built multiple web based apps including calculators, random number/password generators, weather tracker, website clones, clones, ect.",
      subHeading: "Technologies Used: JavaScript, CSS, HTML, Python",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Yavapai College Sedona, AZ"}
        subHeading={
          "Associate of Arts Photographic, Film, And Video Technology"
        }
        fromDate={"2005"}
        toDate={"2007"}
      />

      <ResumeHeading
        heading={"Attended University of Texas At San Antonio San Antonio, TX"}
        subHeading={"Liberal Arts And General Studies"}
        fromDate={"2002"}
        toDate={"2004"}
      />
      <ResumeHeading
        heading={"John Marshall High School San Antonio, TX"}
        subHeading={"High School Diploma"}
        fromDate={"2003"}
        toDate={"1999"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Breck Cowan"}
          subHeading={"FULL STACK DEVELOPMENT INDEPENDENT STUDY"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            I am a self-taught web developer seeking my first position in the
            technology sector. I have always been one to take on challenges,
            seek solutions, and gain knowledge in the process. Spending most of
            my professional career in hospitality management taught me countless
            lessons in conflict resolution, team training, and client
            satisfaction.  I believe that many of the skills that I acquired in my time in hospitality will carryover into any future career. My goal is to join an organization as an entry level
            web developer and continue to learn by building practical
            applications for clients all over the world.  
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Smart, hard working, and a great attitude
          </span>
          <br />
          <span className="resume-description-text">
            - Critacal thinker and problem solver
          </span>
          <br />
          <span className="resume-description-text">
            - Great leadership skills and works well in teams
          </span>
          <br />
          <span className="resume-description-text">
            - Excellent ability to communicate and collaborate
          </span>
          
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gym"
        description="Working out is one of the ways that I enjoy spending my time.  I like to try to push myself to be stronger and healthier.  It is also a great stress reliever."
      />
      <ResumeHeading
        heading="Music"
        description="I enjoy listening to music of all kinds, but really enjoy jazz, hip hop, and lo-fi.  There is some much quality music in the world and I look forward to listening to as much as I can in my lifetime."
      />
      <ResumeHeading
        heading="Gaming"
        description="One of my favorite activities is playing video games.  I really enjoy getting lost in incredible stories, vibrant interactive worlds, and interesting quests with my friends or on my own."
      />
      <ResumeHeading
        heading="Photography/Videographer"
        description="I have always had an interest in film and photography. I feel a have a great eye for color and composition, which I will be able to use with programming skills. "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onMouseMove={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="a"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
// ../../assets/Resume/${bullet.logoSrc}
  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;