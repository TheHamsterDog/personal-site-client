import React from 'react';
import ScrollBar from './reusables/scrollbar';
import Navbar from "./reusables/navbar";
import sass from '../sass.png';
import focus50 from '../focus50.jpg';
import notes from '../notes.jpg';
import blog from '../blog.jpg';
import javascript from '../javascript.jpg';
import materialUI from '../material.png';
import mailjet from '../mailjet.png';
import express from '../express.png';
import mongo from '../mongo.png';
import redux from '../redux.png';
import Footer from './reusables/footer';
import Paragraph from './subComponents/paragraph';
import Portfolio from './subComponents/portfolio';

const Home = (props) => {
    const headerRef = React.useRef(null);
    const [state, setState] = React.useState({backgroundColor: "rgb(21,19,17)", currentScroll: 0})
    const storyRef = React.useRef(null);
    const portfolioRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const endRef = React.useRef(null);
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const ref4 = React.useRef(null);
    const ref5 = React.useRef(null);
    const ref6 = React.useRef(null);
    const stories = [{
        title: "Starting out as a programmer",
        content: [`My earliest memories of programming go as far back as 2k14 when I wrote my first HTML web page.  Even though that alone is not a great accomplishment: it felt like the world to me, more so because I was just in 4th grade.`, `At that time, my role models included the likes of recently deceased Steve Jobs, Microsoft's Founder Bill Gates, Apple's co-founder Steve Wozniak and Tesla's CEO Elon Musk. `, `I started planning out my life at a pretty young age of 10. I used to think about multiple paths, and where most of them would lead me, and what I would do should they fail.`, `I always wanted to be "a real programmer", so I decided to join a C and C++ class, in my neighborhood, when I was 11. `, `People who were dead set against me going to that class told me, that I was too young, or that I would find those "topics" excruciatingly complicated.`, `It didn't come as a big surprise to me when I found out that I was the youngest student in that class, and most people were about twice my age.  `, ` Ironically, I finished that "class" and got an "A + ", as my final grading. `, ` I later joined their Java class, which I aced in about four months. Even though I have forgotten a lot of the skills that I learned from that class, due to my pivot towards JS/TS and a completely JS-based environment, ranging from PWA to mobile apps, I still remember the memories and the struggle. `, `To this day, I still practice Data Structures and Algorithms using C++, but I am not even half as good as I used to be. `],
        ref: 1
    }, {
        title: "Starting my own business",
        content: [`It was 2017, and I was fresh out of a Java Bootcamp. What would you expect someone fueled with that energy to do?`, ` "Do an internship", "Start a blog" and "Criticize junior developers" were the answers that I got when I asked this question to my friends.`, `However, I co-founded a business.`, `Now, at that point, I knew enough to make a professional Full-Stack website by myself, however, somehow I went with multiple CMSes.`, ` I was influenced by people who thought that CMSes were the future of programming and that it would be foolish to maintain and scale such a site, by myself.`, `I learned some basic PHP to add a few custom features. Across the whole year, we switched between multiple CMSes, to find the perfect one.`, `At first, we went with Prestashop, modded by me to make it like a classified site; However, it was not "good enough" for us.`, ` So, we went with WordPress using custom themes and modules(from the workshop and self-made).`, `It was a mess: I was under a lot of stress.`, `In the end, we decided to go with Osclass:- a CMS designed specifically to make classified websites.`, `It paired with a few custom addons and a template(The template was bought off the Osclass marketplace, and so were all addons, except 2).`, `This entire trial-and-error process took about 3-4 months and cost us around $50.`, ` However, this was not the worst part about this whole thing.`, `After all, after development, we needed to advertise and market our product.`, `It went just terribly. It was when I realized that I was "F * CKED".`, `I was extremely disappointed in myself, and my startup.`, `We burned through around $100-$150 with nothing to show for it, except a flashy website.`, `My startup consumed an entire year of my life. My marks fell from 94% in grade 6 to 84% in grade 7. On top of that, I had forgotten most of my actual programming skills, except most C++, HTML, CSS, and some JS.`, `However, I would argue that this was the changing point in my life, this was when I realized that "you gotta work hard to be successful; however, that alone does not ensure it".`, `I learned about entrepreneurial skills, working late hours to make something perfect, and most importantly:- Handling disappointment and failure. My life moving forward, from this point, would after all be an almost fresh start.`]
        ,
        ref: 2
    }, {
        title: "Taking a hiatus from programming",
        content: [`I was left so heartbroken and disappointed, by my startup's failure, that I decided to "enjoy my life properly, for once"; so I decided to take a break.`, `During this time, I made tons of friends, watched movies, got into playing video games(again), got into finance, read quite a few influential books(The entire series of "Middle School: The worse years of my life" and "The Subtle art of not giving a f*ck"), attended MUNs, and tried hip hop(Yep, it was incredibly cringy!).`, `I built my PC in 2018, with 8 GBs of ram(I later upgraded it to 16GB), a ryzen 2200G, a 120GB SSD, a 1TB HDD, a corsair case, an MSI B450, and a 500W power supply.`, `I later built a pc for my brother too, I won't go into too many details about it.`, `I attended 3 MUNs and got a special mention in one of them, oh boy, they didn't like my democratic-socialist politics.`, `I played professional CS:GO on a state level, and my team was ranked 2nd in 2 state-level tournaments.`, `The first one was hosted by DPS, Indore, and the second one was hosted by AIMS, Bhopal.`, `I made friends with people from a lot of different countries.`, `It wasn't until early to mid-2019, that I decided to get back into programming.`]
        ,
        ref: 3
    }, {
        title: "Getting back into programming",
        content: ["In May of 2019, I thought that I had had enough break, and I decided to get back into programming.", `I decided to start this process by relearning JS.`, `After that, I moved onto Nodejs. For a brief period, I used NodeJS along with EJS, but then I switched to react, in December of 2019.`, `I spend the year 2020 learning new concepts in full-stack web development and mobile development(through react-native).`, `Till the middle of 2020, I was using raw CSS, but then I switched to SASS.`, `By the August of 2020, I had acquired a lot of valuable skills, that I use extensively.`, `I spent the latter half of the year practicing these skills, whilst preparing for my exams.`]
        ,
        ref: 4
    },
        {
            title: "Working professionally, as a Full-stack developer",
            content: ["I started working professionally, as a full-stack developer, in March of 2020.", "I took 2 freelancing projects from the folks at evolv.today:- one was a brochure for their new course, and the other was a way to access their course(once bought).", "They've said that my services were extraordinary, and gave me a 5-star rating on freelancer.com.", "They also said that they would love hire to me again if an opportunity arises. "]
            ,
            ref: 5
        },
        {
            title: "My Future Goals: Expectations and dreams",
            content: ["My highest priority, right now, is making sure that I get into a good university, for my higher educations, and that I can pay for it, instead of asking my parents to pay my tuition.", "My goals are not limited to getting a high-paying job, unlike most people.", "After working at a good job, for a couple of years and gaining experience, I want to start my own scalable business:- a business, that'll benefit humankind... Not by getting it hooked to some new addictive product, but by actually making the world a place people would love to live in."]
            ,
            ref: 6
        }
    ]
    const portfolio = [{
        title: "My Blog Site",
        link: "https://blog.shreshthverma.me/",
        image: blog,
        technologies: [{
            name: "React",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/50px-React-icon.svg.png"
        },
            {
                name: "Redux",
                image: redux
            },
            {
                name: "JavaScript",
                image: javascript
            },
            {
                name: "SASS",
                image: sass
            },
            {
                name: "NodeJS",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/50px-Node.js_logo.svg.png"
            },
            {
                name: "Express",
                image: express
            },
            {
                name: "MongoDB",
                image: mongo
            },
            {
                name: "MailJet",
                image: mailjet
            }],
        description: "It is a full stack website, that is made using modern JS-frameworks like NodeJS with Express(for the back-end) and React(for the front-end). It has an infinite-reply-system that lets people make an infinitely-long comment-reply thread, like reddit.com"
    },
        {
            title: "Focus50.today", link: "https://www.focus50.today/", image: focus50, technologies: [{
                name: "React",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/50px-React-icon.svg.png"
            },
                {
                    name: "JavaScript",
                    image: javascript
                },
                {
                    name: "SASS",
                    image: sass
                },
                {
                    name: "NodeJS",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/50px-Node.js_logo.svg.png"
                },
                {
                    name: "Express",
                    image: express
                },
                {
                    name: "MailJet",
                    image: mailjet
                }], description: "It is the official site of evolv.today's focus50 course."

        },
        {
            title: "Retain",
            link: "https://retain.shreshthverma.me",
            image: notes,
            technologies: [{
                name: "React",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/50px-React-icon.svg.png"
            },
                {
                    name: "JavaScript",
                    image: javascript
                },
                {
                    name: "SASS",
                    image: sass
                },
                {
                    name: "Material-ui",
                    image: materialUI
                }
            ],
            description: "It is a note-keeping PWA that has almost every feature that Google keep has. It works offline, too."
        }]
    return (
        <div className="home" style={{backgroundColor: state.backgroundColor, transition: "all 2s"}}>
            <Navbar bs={state.backgroundColor}/>
            <ScrollBar headerRef={headerRef} contentRef={contentRef} storyRef={storyRef}/>

            <div className="home-content">
                <div ref={contentRef} className="home-content-container" onScroll={(e) => {
                    setState(state => ({...state, currentScroll: e.target.scrollTop}))
                    if (portfolioRef !== null) {
                        const scrolled = portfolioRef.current.offsetTop - 150;

                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(21,19,17)"}))
                            return;
                        }
                    }
                    if (ref6 !== null) {
                        const scrolled = ref6.current.offsetTop - ref6.current.offsetHeight - 200;
                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(19, 102, 145)"}))
                            return;
                        }
                    }
                    if (ref5 !== null) {
                        const scrolled = ref5.current.offsetTop - ref5.current.offsetHeight - 200;

                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(19, 70, 145)"}))
                            return;
                        }
                    }
                    if (ref4 !== null) {
                        const scrolled = ref4.current.offsetTop - ref4.current.offsetHeight - 200;

                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(68, 19, 145)"}))
                            return;
                        }
                    }
                    if (ref3 !== null) {
                        const scrolled = ref3.current.offsetTop - ref3.current.offsetHeight - 200;

                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(106, 19, 145)"}))
                            return;
                        }
                    }
                    if (ref2 !== null) {
                        const scrolled = ref2.current.offsetTop - ref2.current.offsetHeight - 200;

                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(145, 19, 145)"}))
                            return;
                        }
                    }
                    if (ref1 !== null) {
                        const scrolled = ref1.current.offsetTop - ref1.current.offsetHeight - 200;

                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(145, 19, 98)"}))
                            return;
                        }
                    }
                    if (storyRef !== null) {
                        const scrolled = storyRef.current.offsetTop - storyRef.current.offsetHeight - 200;
                        ;
                        if (scrolled >= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgb(21,19,17)"}))
                        }
                        if (scrolled <= e.target.scrollTop) {
                            setState(state => ({...state, backgroundColor: "rgba(145, 19, 50)"}))
                        }
                    }
                }}>
                    <div className="home-content-header" ref={headerRef}>
                        <img className="home-content-header-img" height="200px" width="200px" src="/profilePic.jpg"
                             alt="Me"/>
                        <div className="home-content-header-title text1-3">
                            Shreshth Verma
                        </div>
                        <div className="home-content-header-description text2-2">
                            A Full Stack Developer, a perpetual student and an entrepreneur
                        </div>
                    </div>
                    <div className="home-content-story">
                        <h1 className="home-content-story-title text3-3" ref={storyRef}>
                            The story of how I evolved into who I am today.
                        </h1>
                        {stories.map(story => {
                            return (<div className="home-content-story-container">
                                <h1 className="home-content-story-container-header text1-2"
                                    ref={story.ref === 1 ? ref1 : story.ref === 2 ? ref2 : story.ref === 3 ? ref3 : story.ref === 4 ? ref4 : story.ref === 5 ? ref5 : ref6}>{story.title}</h1>
                                {story.content.map(a => <Paragraph current={state.currentScroll}>{a} </Paragraph>)}
                            </div>)
                        })}
                    </div>
                    <div className="home-content-portfolio" ref={portfolioRef}>
                        <h1 className="home-content-portfolio-title text3-3">
                            A few of my projects:
                        </h1>

                            {portfolio.map(p => {
                                return <Portfolio content={p} current={state.currentScroll}/>
                            })}

                    </div>
                    <div className="home-content-end" ref={endRef}>
                        <p className="home-content-end-message text3-1">
                            Thanks for reading through my website! I hope that you enjoyed your time browsing through
                            it!
                        </p>
                        <div className="home-content-end-buttons">
                            <button onClick={() => {
                                window.open('/contact');
                            }} className="home-content-end-buttons-button">CONTACT ME
                            </button>
                            <button onClick={() => {
                                window.open('/about');
                            }} className="home-content-end-buttons-button">ABOUT-ME
                            </button>
                        </div>

                    </div>
                    <Footer/>
                </div>
            </div>

        </div>);

}

export default Home;