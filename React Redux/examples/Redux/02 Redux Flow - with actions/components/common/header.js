import React, {Component} from 'react';
import {Link, IndexLink } from 'react-router';

class componentName extends Component {
    render() {
        return (
            <nav>
            <IndexLink to="/">Home</IndexLink>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/course">Course</Link>
            </nav>
        );
    }
}

export default componentName;
