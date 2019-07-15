import React, { useEffect, useState } from 'react';
import './home.scss';

const Home = () => {
    const [togglePageBlur, setTogglePageBlur] = useState('blur');
    const [toggleVisible1, setToggleVisible1] = useState(false);
    const [toggleVisible2, setToggleVisible2] = useState(false);
    const [toggleVisible3, setToggleVisible3] = useState(false);

    useEffect(() => {
        const pageTimer = setTimeout(() => {
            setTogglePageBlur('animate');
        }, 0);
        const fadeTimer1 = setTimeout(() => {
            setToggleVisible1(true);
        }, 1800);
        const fadeTimer2 = setTimeout(() => {
            setToggleVisible2(true);
        }, 2200);
        const fadeTimer3 = setTimeout(() => {
            setToggleVisible3(true);
        }, 2600);
        return () => {
            clearTimeout(pageTimer);
            clearTimeout(fadeTimer1);
            clearTimeout(fadeTimer2);
            clearTimeout(fadeTimer3);
        }
    }, []);

    return (
        <div id="home" className={`home ${togglePageBlur}`} >
            <section className="panel-profile section">
                <div className={`wrapper ${toggleVisible1 ? 'visible' : ''}`}>
                    <div className="profile-header">
                        <button className="invisBttn" >
                            <img className="profile-pic"
                                src="./images/grad_small.jpg"
                                alt="finn"
                            />
                        </button>
                        <div className="title">Finn O'Connor-Morberg</div>
                    </div>
                    <div className="profile-content">
                        <div className="contact">
                            <div className="contact-info">
                                <div className="type">Call</div>
                                <div className="data">02102301298</div>
                            </div>
                            <div className="contact-info">
                                <div className="type">Email</div>
                                <div className="data">finneom@gmail.com</div>
                            </div>
                            <div className="contact-info">
                                <div className="type">Home</div>
                                <div className="data">Auckland, New Zealand</div>
                            </div>
                        </div>
                        <div className="blurb">
                            I'm a Developer based in New Zealand with experience in fullstack web development,
                            Agile methodologies and project management.
                            <br /><br />
                            Currently i'm working for BePure, covering a wide range of projects and scope. In my spare
                            time i enjoy rock climbing and occasionally playing on CodePen.
                            <br /><br />
                            I have a passion for learning the best practice of the industry and to acquire a wide
                            understanding of web development frameworks and tools.
                        </div>
                        <div className="social">
                            <a className="link" href="http://github.com/recursiveElk">
                                <img className="icon" src="./images/github_black.svg" alt="Social Icon" />
                            </a>
                            <a className="link" href="https://codepen.io/recursiveElk/">
                                <img className="icon" src="./images/www_black.svg" alt="Social Icon" />
                            </a>
                            <a className="link" href="https://www.linkedin.com/in/finneom/">
                                <img className="icon" src="./images/linked_in_black.svg" alt="Social Icon" />
                            </a>
                            <a className="link" href="https://www.reddit.com/user/recursiveElk/">
                                <img className="icon" src="./images/reddit_black.svg" alt="Social Icon" />
                            </a>
                            <a className="link" href="https://www.instagram.com/finn_eom/">
                                <img className="icon" src="./images/instagram_black.svg" alt="Social Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="panel-experience section">
                <div className={`wrapper ${toggleVisible2 ? 'visible' : ''}`}>
                    <div className="experience-row">
                        <div className="title">Experience</div>
                        <div className="oppurtunity">
                            <div className="company-wrapper">
                                <div className="company">BePure</div>
                                <div className="role">Fullstack Web Developer</div>
                            </div>
                            <div className="description-wrapper">
                                <div className="timeline">Dec 2017 - Present</div>
                                <div className="description">
                                    Currently working on the BePure Platform where I have been developing a great variety of systems
                                    used to deliver hollistic health services to New Zealanders.
                                    <br /><br />
                                    Some tasks include: PWA web app development with React, Redux and TypeScript,
                                    Work on both external and internal API's in Python, AWS Dev Ops, an in-house Calendar and CMS with Flask, general
                                    Database architecture and PDF/QR Generation.
                                </div>
                            </div>
                        </div>
                        <div className="oppurtunity">
                            <div className="company-wrapper">
                                <div className="company">NumberWorks'nWords</div>
                                <div className="role">Graduate Developer</div>
                            </div>
                            <div className="description-wrapper">
                                <div className="timeline">Nov 2016 - Nov 2017</div>
                                <div className="description">
                                    At my time at NumberWorks i worked on developing educational software and onboarding applications
                                    used in Australia, NZ, and the UK.
                                    <br /><br />
                                    This role was very beneficial in growing my general understanding of software development, involving
                                    primarily aspects of Frontend Development and UX/UI design.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`wrapper ${toggleVisible3 ? 'visible' : ''}`}>
                    <div className="skill-row">
                        <div className="skills">
                            <div className="title">Skills</div>
                            <div>
                                <ul className="skills-percentage">
                                    <li className="skill">HTML / HTML5</li>
                                    <li className="skill">CSS3 / SASS</li>
                                    <li className="skill">Javascript / React</li>
                                    <li className="skill">Python</li>
                                    <li className="skill">SQL / PostgreSQL</li>
                                    <li className="skill">Jquery</li>
                                    <li className="skill">Java</li>
                                </ul>
                            </div>
                        </div>
                        <div className="hobbies">
                            <div className="title">Hobbies</div>
                            <div className="description">
                                <div className="hobbie-image-container" data-before="Coffee with Friends">
                                    <img className="hobbie-image" src="./images/about_orig.jpg" alt="" />
                                </div>
                                <div className="hobbie-image-container" data-before="Rock Climbing">
                                    <img className="hobbie-image image-two" src="./images/rock_climbing.jpg" alt="" />
                                </div>
                                <div className="hobbie-image-container" data-before="Gaming">
                                    <img className="hobbie-image" src="./images/gaming.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div > 
        )
    }

export default Home
