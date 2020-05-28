import React, { Component } from 'react'

export class StampContainerImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageURL} alt=""/>
            </div>
        )
    }
}

export default StampContainerImage
