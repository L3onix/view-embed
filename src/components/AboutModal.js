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
                    <hr/>
                    <div>
                        <h2>Autor: Leonardo Facundes Moraes</h2>

                        <h2>Propósito da aplicação</h2>
                        <p>Esta aplicação permite que o usuário, a partir de um link de vídeo ou stream, possa gerar uma nova janela, com o player de vídeo embutido
                            (<i>embed</i>), de forma simples e prática.</p>
                        
                        <h2>Desenvolvimento</h2>
                    </div>
                    <a href="https://github.com/L3onix/view-embed" className="github"><img src={github} alt="logotipo do github" /></a>
                </div>
            </div>
        )
    }
}