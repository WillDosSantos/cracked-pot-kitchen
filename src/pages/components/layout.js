import React from 'react'
import "./../styles/main.scss"

import Header from './header'
import Footer from './footer'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
}

export default Template