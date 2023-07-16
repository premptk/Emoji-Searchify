import React, { Component } from "react";
import EmojiItem from "./EmojiItem";
import PropTypes from'prop-types';

export class EmojiContainer extends Component {
  static defaultProps = {
    category: ''
  }

  static propTypes = {
    category: PropTypes.string
  }

  constructor(){
    super();
    console.log("Hello I am a constructor")
    this.state = {
      articles : []
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url = `https://emojihub.yurace.pro/api/all${this.props.category}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData})
  }

  render() {
    return (
      <div className="container my-3">
        <div className="container my-4">
          <u><h2  style={{ margin: '25px 0px', marginTop: '90px' }}>EmojiYourself</h2></u>
          <h6> Search and find your emotions</h6>
        </div>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.htmlCode}>
              <EmojiItem name={element.name} category={element.category} group={element.group} htmlCode={element.htmlCode} unicode={element.unicode}/>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default EmojiContainer;
