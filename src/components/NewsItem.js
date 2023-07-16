import React, { Component } from "react";
import { EmojiConverter } from "./EmojiConverter";

export class NewsItem extends Component {
  render() {
    let {name, category, group, htmlCode, unicode} = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body my-3">
            <EmojiConverter htmlCode={htmlCode} />
            <h6 className="card-title"><b>Name :</b> {name}</h6>
            <p className="card-text"><b>Category :</b> {category}</p>
            <p className="card-text"><b>Group :</b> {group}</p>
            <p className="card-text"><b>HTML code :</b> {htmlCode}</p>
            <p className="card-text"><b>Unicode :</b> {unicode}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
