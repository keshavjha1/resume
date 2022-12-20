import React, { Component } from "react";
import Fade from "react-reveal";
import styles from "./footer.css"
class Footer extends Component {
  render() {
if (!this.props.data) return null;
 
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className = "footerDiv">
            <div className="twelve columns">
              {<ul className="social-links">{networks}</ul> }

              <ul className="copyright">
                <li>&copy; Copyright 2022 Keshav Jha</li>
                <li>
                  Design by Keshav Jha
                
                </li>
              </ul></div>


        </div>
      </footer>

    );
  }
}

export default Footer;
