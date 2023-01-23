import React from "react";
import "./styles/Footer.css";
import logo from "../images/logo.png";
import photoGiHub from "../icons/github.png";
import photoLinkeIn from "../icons/linkedin.png";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img src={logo} alt="logo" className="logo" />
                <div className="social-icons">
                    <ul>
                        <li><a href="https://github.com/Jairox789" target="_blank" className="github">
                            <img src={photoGiHub} alt="GitHub" />
                        </a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/jairo-ortega-vazquez-529165259/" target="_blank" className="linkedin">
                            <img src={photoLinkeIn} alt="LinkIn" />
                        </a>
                        </li>
                    </ul>
                </div>
                <span>Portfolio made with ❤ by Jairo Ortega Vazquez © 2023</span>
            </footer>

        );
    }
}

export { Footer };