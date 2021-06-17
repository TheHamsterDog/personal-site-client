import React from 'react';
import Ri from '@material-ui/icons/SystemUpdateAltOutlined';
import Navbar from './reusables/navbar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinearProgress from '@material-ui/core/LinearProgress';
import { SidebarAbout as Scrollbar } from './reusables/scrollbar';
import Helmet from 'react-helmet'
const About = (props) => {
    const skills = [{
        name: "React",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
        description: "1.5+ years",
        progress: 98
    },
    {
        name: "Redux",
        progress: 96,
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png",
        description: "ABOUT 1.5 YEARS"
    },
    {
        name: "NodeJS",
        icon: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
        progress: 98,
        description: "2+ years"
    },
    {
        name: "MongoDB/Mongoose",
        icon: "https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png",

        progress: 98,
        description: "ABOUT 2 YEArs"
    },
    {
        name: "O-auth",
        progress: 100,
        description: "1 years+",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/1200px-Oauth_logo.svg.png"
    },
    {
        name: "Express",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        progress: 98,
        description: "2+ years"
    },
    {
        name: "HTML",
        progress: 100,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        description: "4+ years"
    },
    {
        name: "CSS",
        icon: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
        progress: 100,
        description: "4+ years"
    },
    {
        name: "JS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        description: "3+ years",
        progress: 94
    },
    {
        name: "TS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/1280px-TypeScript_Logo_%28Blue%29.svg.png",
        description: "1+ years",
        progress: 82
    },
    {
        name: "SASS",
        icon: "https://img.icons8.com/ios/452/sass.png",
        description: "1 year",
        progress: 100
    },
    {
        name: "Socket.io",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
        description: "About an year",
        progress: 80
    },
    {
        name: "React Native",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        description: "About 6-8 months",
        progress: 75
    },
    {
        name: "Axios",
        icon: "https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png",
        progress: 100,
        description: "1.5 to 2 years"
    },
    {
        name: "NPM",
        progress: 100,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png",
        description: "2.5+ years"
    }

    ];
    const experience = [{
        position: "FULL STACK Web Developer",
        time: "Freelancer",
        company: "Evolv Smart"
    },
    {
        position: "Co-CEO, Co-founder and CTO",
        time: "1.25 Years",
        company: "Scalershop"
    }];
    const contentRef = React.useRef(null);

    return (
        <div className="about" >
            <Helmet>
                <title>Shreshth Verma: About-me</title>
                <meta name="description" content="This page contains information about my skills/resume/work-experience" />
                <meta property="og:title" content="Shreshth Verma: About-me" />
                <meta property="og:description" content="This page contains information about my skills/resume/work-experience" />
            </Helmet>
            <Navbar bs={"rgb(21,19,17)"} />
            <Scrollbar contentRef={contentRef} style={{ paddingTop: "30vh" }} />
            <div className="about-container" ref={contentRef}>
                <div className="about-header text2-3" >
                    About me
                </div>
                <div className="about-description">


                    <LinkedInIcon style={{ transition: "0.3s all" }} className="about-description-icon" />


                    <div className="about-description-icon">
                        <GitHubIcon style={{ transition: "0.3s all" }} className="about-description-icon" />
                    </div>
                    <div className="about-description-resume">
                        <span className="about-description-resume-text text2-1">Download my </span>
                        <button className="about-description-resume-download  text2-1">resume <Ri style={{ fontSize: "inherit", paddingTop: ".3rem", marginLeft: ".5rem", float: "right" }} className="about-description-resume-download-icon" /></button>
                    </div>
                </div>
                <div className="about-resume">
                    <div className="about-resume-section">
                        <h1 className="about-resume-section-title text2-3">
                            My most valuable skills
                            </h1>

                        <div className="about-resume-section-content">
                            {skills.map(skill => {
                                return (
                                    <div className="about-resume-section-content-skill">
                                        <div className="about-resume-section-content-skill-icon">
                                            <img className="about-resume-section-content-skill-icon-image" src={skill.icon} alt={skill.name} />
                                            <p className="about-resume-section-content-skill-name text3-3">{skill.name}</p>
                                            <p className="about-resume-section-content-skill-description text3-2">{skill.description}</p>

                                        </div>
                                        <div>
                                            <LinearProgress variant="determinate" value={skill.progress} />
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>
                    <div className="about-resume-section">
                        <h1 className="about-resume-section-title text2-3">
                            My work experience
                        </h1>
                        <div className="about-resume-section-content about-portfolio">
                            {experience.map(skill => {
                                return (
                                    <div className="about-resume-section-content-skill">
                                        <div className="about-resume-section-content-skill-icon">
                                            <p className="about-resume-section-content-skill-name text3-3">{skill.position} at</p>
                                            <p className="about-resume-section-content-skill-description">{skill.company}</p>
                                            <p className="about-resume-section-content-skill-description">{skill.time}</p>

                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>

                </div>
            </div>

        </div>);

}

export default About;