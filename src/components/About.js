import React, { Component } from 'react';
import { Link } from 'react-router'

class About extends Component {
    render() {
        return (
            <div>
                <h1>About!</h1>
                <p>Go to <Link href="contacts">Contacts Page</Link></p>
            </div>
        )
    }
}
export default About;
