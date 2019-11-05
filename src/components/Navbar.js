import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper">
                            <a href="#!" class="brand-logo">Logo</a>
                            <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
