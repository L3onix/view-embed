import React from 'react'
import UrlFactory from '../middlewares/UrlFactory'
import AboutModal from '../components/AboutModal'

import about from '../images/about.svg'

class Home extends React.Component {
    state = {
        show: false,
        link: ''
    }
    showModal = e => {
        this.setState({show: !this.state.show})
    }

    handleSubmit(event, link) {
        event.preventDefault()
        const newLink = new UrlFactory(link).verifyUrlAndReturnNewUrl()
        window.open(newLink, 'sharer', 'toolbar=0,status=0,width=600,height=338');
    }

    render() {
        return (
            <>
                <div className="content">
                    <form onSubmit={event => this.handleSubmit(event, this.state.link)}>
                        <input
                            type="text"
                            placeholder="Link here..."
                            value={this.state.link}
                            onChange={event => this.setState({link: event.target.value})}
                        />

                        <button className="btn" type="submit">View embed!</button>
                    </form>
                    <img id="about" src={about} alt="About this project" onClick={event => this.showModal()} />
                    <AboutModal onClose={this.showModal} show={this.state.show} />
                </div>
            </>
        )
    }
}

export default Home