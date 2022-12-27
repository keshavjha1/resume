import * as React from "react";
import "./AboutHeader.css";
const AboutHeader = (props) => {
    return (
        <div className={`about-header ${props.className || ""}`}>
            <div className="flex-container-4">
                <img className="image" />
                <span className="designer-full-name-m">
          {props.designerFullNameM ||
              "Pablo Designero\nDesigner &amp; Unicorn Trainer"}
        </span>
            </div>
            <span className="bio-text">
        {props.bioText ||
            "Bio:\u2028Father of 3 humans, 5 unicorns &amp; 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard."}
      </span>
        </div>
    );
};
export default AboutHeader;
