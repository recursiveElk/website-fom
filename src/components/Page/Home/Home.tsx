import React from 'react';
import './home.scss';

interface Props {
    onEnter(event: React.MouseEvent<Element>): void;
    visible?: boolean;
}

class Home extends React.Component<Props> {
    constructor(Props: any) {
        super(Props)
        this.privateOnClick = this.privateOnClick.bind(this);
    }

    render() {
        return (
            <div id="home" className={"home "+(this.props.visible ? 'animate' : 'blur')} >
                <section className="panel-profile section">
                    <div className="profile-header">
                        <button className="invisBttn" >
                            <img className="profile-pic"
                                src="https://placekitten.com/400/400"
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
                                <div className="data">02102301298</div>
                            </div>
                            <div className="contact-info">
                                <div className="type">Home</div>
                                <div className="data">Auckland, New Zealand</div>
                            </div>
                        </div>
                        <div className="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</div>
                        <div className="social">
                            <ul>
                                <li>reddit</li>
                                <li>codepen</li>
                                <li>test</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="panel-experience section">
                    <div className="experience-row">
                        <div className="title">Experience</div>
                        <div className="oppurtunity">
                            <div className="company-wrapper">
                                <div className="company">BePure</div>
                                <div className="role">Fullstack Web Developer</div>
                            </div>
                            <div className="description-wrapper">
                                <div className="timeline">1 Year</div>
                                <div className="description">A good role</div>
                            </div>
                        </div>
                        <div className="oppurtunity">
                            <div className="company-wrapper">
                                <div className="company">BePure</div>
                                <div className="role">Fullstack Web Developer</div>
                            </div>
                            <div className="description-wrapper">
                                <div className="timeline">1 Year</div>
                                <div className="description">A good role</div>
                            </div>
                        </div>
                    </div>
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
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    private privateOnClick(e: React.MouseEvent<Element>) {
        this.props.onEnter(e);
    }
}

export default Home
