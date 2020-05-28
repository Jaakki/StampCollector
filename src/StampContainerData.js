import React, { Component } from 'react'
import { Stamp} from './Stamp'



export class StampContainerData extends Component {
    render() {
        var stamp = new Stamp();
        Object.assign(stamp, this.props.stamp)
        return (
            <div>
                <p>
                    <div>{this.props.name}</div>
                    <div>{stamp.yearPublished}</div>
                    <div>{String(stamp.isStamped)}</div>
                    <div>{stamp.GetPriceString()}</div>
                    <div>{stamp.country}</div>
                </p>
            </div>
        )
    }
}

export default StampContainerData
