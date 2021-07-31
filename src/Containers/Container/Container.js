import './Container.css';
import React, { Component } from 'react'

export default class Containers extends Component {
    render() {
        return (
            <div>
                <div className="Containers">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

