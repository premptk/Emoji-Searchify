import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a constructor")
    this.state = {
      articles : []
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url = "https://emojihub.yurace.pro/api/all"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData})
  }

  render() {
    return (
      <div className="container my-3">
        <div className="container my-4">
          <u><h2>EmojiYourself - Search and find your emotions</h2></u>
        </div>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.htmlCode}>
              <NewsItem name={element.name} category={element.category} group={element.group} htmlCode={element.htmlCode} unicode={element.unicode}/>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
