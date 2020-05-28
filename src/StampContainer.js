import React, { Component } from 'react'
import StampContainerData from './StampContainerData'
import StampContainerImage from './StampContainerImage'

export class StampContainer extends Component {

    constructor(){
        super();
        this.state = {showFull: true};
    }

    headerClicker = () => {
        this.setState({showFull: !this.state.showFull})
    }

    render() {
        return (
            <div className="container" id="cont">
                    <div className="StampContainerHeader col-md-4" onClick={this.headerClicker}>
                        {this.props.stamp.name}
                    </div>
                    <div className="row" hidden={this.state.showFull}>
                        <div className="col-md-5">
                            <StampContainerImage imageURL={this.props.stamp.imageURL}/>
                        </div>
                        <div className="col-md-3">
                        <StampContainerData stamp={this.props.stamp}/>
                        </div>
                    </div>
            </div>
        )
    }
}

export default StampContainer
