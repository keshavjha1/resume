import React, {Component, useEffect} from "react";
import Fade from "react-reveal";
import $ from "jquery";
import "./Portfolio.css";
import Group32 from "./shared/projecttile";
import DocuCardGeneral from "./shared/generalDeck/DocuCardGeneral";


let id = 0;
class Portfolio extends Component {
  constructor(props){
    console.log("s")
    super(props);
    this.state = {
      blog: [],
        propsData:{
          "DocuCardGeneral" :[]
        },
        loading: false
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

      setTimeout(' ', 15000);

fetch("/data/portfolio.json")
        .then(response => response.json())
        .then(data => {

            console.log(data)
            this.setState({ propsData: data })

            this.setState({ loading: true })

        })
        .catch(err => {
            console.log(err);



        })

  }


  takeMetoPost= (id )=>{console.log('ss'+ id)}
 
  handleClick = () => {
    console.log('this is:', this);
  }
  
  render() {

    if (!this.state.blog) return null;

    const listItem= this.state.propsData.DocuCardGeneral.map((item) => {
        return (  <DocuCardGeneral
            className="docu-card-general-instance-1"
            {...item}
        /> )
      });
   
   const projects = this.state.blog.map(function (articles) {
//    let projectImage = "images/portfolio/" + projects.image;
     
      return (
        
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
        
            <div style={{ textAlign: "center" }} onClick={()=> window.location.href='/post/'+articles.id}>
              
              {articles.content}</div>
          </div>
        </div>
      );
    });

    return (
      <div>
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
          {!this.state.loading && <div>Loading</div> }

        <div className="portfolio-container">

            {listItem}

        </div>
      </div>
    );
  }
}

export default Portfolio;
