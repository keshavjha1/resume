import * as React from "react";
import "./header1.css";
import AboutHeader from "./AboutHeader";
import Footer from "./footer";
import Body from "./Body";
const Header1 = () => {
    const propsData = {
        navigation: {
            contact: "Contact",
            about: "About",
            work: "Work",
            logo: {
                logo: "Logo",
            },
        },
        aboutHeader: {
            bioText:
                "Bio:\u2028Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.",
            designerFullNameM: "Pablo Designero\nDesigner & Unicorn Trainer",
        },
        body: {
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
            paragraph: "Also, grow a beard. Check my bio if that is not clear.",
            title:
                "When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.",
            paragraph: "Being a human is way too complicated. Time to be a unicorn.",
            paragraph:
                "Try it and you’ll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout.",
            paragraph:
                "Available for projects, from Monday to Tuesday, mainy between 14 and 16. (Unless there is a unicorn race on TV - DUH -in that case, come back another day).\nProjects include, RocknRoll covers, furniture refurbishing, Unicorn potty training and more.",
        },
        footer: {
            button: {
                submit: "Submit",
            },
            thisIsATemplateF:
                "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
            textInputDesktop2: {
                writeSomething: "Email",
            },
            letsWorkTogether: "Let’s work together",
            socialIcons: null,
            textInputDesktop: {
                writeSomething: "Type your message here\n\n\n\n\n\n",
            },
            textInputDesktop1: {
                writeSomething: "Name",
            },
        },
    };
    return (
        <div className="num-1280-px-about-pa">
            <AboutHeader
                className="about-header-instance-1"
                {...propsData.aboutHeader}
            />
      <Body className="body-instance-1" {...propsData.body} />
       <Footer className="footer-instance-1" {...propsData.footer} />
        </div>
    );
};
export default Header1;
