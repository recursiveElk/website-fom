import React from 'react';
import './cover.scss';

interface Props {
    onEnter(event: React.MouseEvent<Element>): void;
    visible?: boolean;
}

class Cover extends React.Component<Props> {
    constructor(Props: any) {
        super(Props)
        this.privateOnClick = this.privateOnClick.bind(this);
    }

    render() {
        return (  
            <div className={"cover "+ (this.props.visible ? "show" : "hide")}>
                <button className="invisBttn" onClick={this.privateOnClick}>
                    <img className="profile-pic"
                        src="./images/grad.jpg"
                        alt="finn"
                    />
                    <div className="title">Hi, I'm Finn</div>
                </button>
                <div className="background"></div>
            </div>
        )
    }

    private privateOnClick(e: React.MouseEvent) {
        this.props.onEnter(e);
    }
}

export default Cover