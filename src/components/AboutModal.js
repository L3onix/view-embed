import React from 'react'
import './AboutModal.css'

export default class AboutModal extends React.Component {
    render() {
        if(!this.props.show){
            return null
        }
        return (
            <div className="about-popup">
                <div className="about-content">
                    <span>View Embed</span>
                </div>
            </div>
        )
    }
}