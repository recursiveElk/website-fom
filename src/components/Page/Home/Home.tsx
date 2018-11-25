import React from 'react';
import './home.scss';
interface Props {

}

class Home extends React.Component<Props> {
    render() {
        return (
            <div className="home">
                <section className="panel-profile section">
                    <img className="profile-pic" 
                        src="https://placekitten.com/200/200" 
                        alt="finn"
                    />
                    <div className="title">Finn O'Connor-Morberg</div>
                    <div className="contact">
                        <div>Call</div>
                        <div>Home</div>
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
                                <li className="skill">Jquery</li>
                                <li className="skill">Python</li>
                                <li className="skill">Java</li>
                                <li className="skill">SQL / PostgreSQL</li>
                            
                            </ul>
                            </div>
                        </div>
                        <div className="hobbies">
                            <div className="title">Hobbies</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</div> 
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
