import React from 'react'
import './AboutModal.css'

import github from '../images/github.svg'
import exit from '../images/exit.svg'

export default class AboutModal extends React.Component {
    onClose = event => {
        this.props.onClose && this.props.onClose(event)
    }

    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="about-popup">
                <div className="about-content">
                    <img src={exit} alt="fechar popup about" id="exit" onClick={this.onClose} />
                    <span className="app-name">View Embed</span>
                    <hr />
                    <div>
                        <p>Este pequeno projeto tem como objetivo criar, a partir de um link, uma pequena janela do navegador de internet, contendo apenas o player de vídeo. O site deve aceitar links da Twitch e YouTube.</p>
                        <h2>Execute o projeto na sua máquina</h2>
                        <ul>
                            <li>Instale as dependências básicas
					            <ul>
                                    <li><a href="https://nodejs.org/en/download/">NodeJS</a></li>
                                    <li><a href="https://classic.yarnpkg.com/pt-BR/">Yarn</a></li>
                                </ul>
                            </li>
                            <li>Faça uma cópia do projeto e instale as dependências<br />
                                <code>
                                    $ git clone https://github.com/L3onix/view-embed.git<br/>
                                    $ cd view-embed<br/>
                                    $ yarn install
                    </code>
                            </li>
                            <li>Execute o projeto em modo de desenvolvimento<br />
                                <code>$ yarn start</code>
                            </li>
                        </ul>
                        <p>Após isso basta acessar o endereço http://localhost:3000 no seu navegador</p>
                    </div>
                    <a href="https://github.com/L3onix/view-embed" className="github"><img src={github} alt="logotipo do github" /></a>
                </div>
            </div>
        )
    }
}
