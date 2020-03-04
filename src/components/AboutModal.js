import React from 'react'
import './AboutModal.css'

import github from '../images/github.svg'
import exit from '../images/exit.svg'

export default class AboutModal extends React.Component {
    onClose = event => {
        this.props.onClose && this.props.onClose(event)
    }

    render() {
        if(!this.props.show){
            return null
        }
        return (
            <div className="about-popup">
                <div className="about-content">
                    <img src={exit} alt="fechar popup about" id="exit" onClick={this.onClose} />
                    <span className="app-name">View Embed</span>
                    <p></p>
                    <a href="https://github.com/L3onix/view-embed" className="github"><img src={github} alt="logotipo do github" /></a>
                </div>
            </div>
        )
    }
}