import React, { Component } from "react";
import Fade from "react-reveal";
import $ from "jquery";

let id = 0;
class Portfolio extends Component {
  constructor(props){
    console.log("s")
    super(props);
    this.state = {
      blog: []
    };
  }
  componentDidMount(){
    $.ajax({
      url: "./blog.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log("datae"+ data.articles)
        this.setState({ blog: data.articles });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  render() {
    if (!this.state.blog) return null;
   
   const projects = this.state.blog.map(function (articles) {
//    let projectImage = "images/portfolio/" + projects.image;

     
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
        
            <div style={{ textAlign: "center" }}>{articles.content}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
