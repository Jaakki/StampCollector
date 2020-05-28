import React, { Component } from 'react'
import './MainWindow.css'
import StampContainer from './StampContainer'

export class MainWindow extends Component {
    render() {
        return (
            <div>
                <div className="Stamps">
                    <StampContainer stamp={this.props.stampCollection[0]}/>
                </div>
                <div className="Stamps">
                    <StampContainer stamp={this.props.stampCollection[1]}/>
                </div>
                <div className="Stamps">
                    <StampContainer stamp={this.props.stampCollection[2]}/>
                </div>
            </div>
        )
    }
}

export default MainWindow
