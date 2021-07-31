import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
export default class Glpage extends Component {
    render() {
        return (
            <div className="about">
                    <div className="about__container d-flex align-items-center ">
                        <div className="text-white container overflow-hidden">
                <Fade right>
                            {this.props.children}
                </Fade>
                        </div>
                    </div>
            </div>
        )
    }
}
