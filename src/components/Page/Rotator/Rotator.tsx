import React from 'react';
import './rotator.scss';
import Home from '../Home/Home';

interface Props {
    
}

interface State {
    coverShowing: boolean,
    homeShowing: boolean,
}

class Rotator extends React.Component<Props, State> {
    constructor(Props:any) {
        super(Props);
        this.onEnterClick = this.onEnterClick.bind(this);
        this.state = {
            coverShowing: false,
            homeShowing: true,
        }
    }
    render() {
        return (
            <div className="rotator">
                <div className="rotator-wrapper">
                    <Home />
                </div>
            </div>
        )
    }

    private onEnterClick(event: React.MouseEvent<Element>): void {
        this.setState({
            ...this.state,
            coverShowing: !this.state.coverShowing,
            homeShowing: !this.state.homeShowing
        });
    }
}

export default Rotator



  