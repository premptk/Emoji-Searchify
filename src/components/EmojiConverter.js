import React from 'react';

export class EmojiConverter extends React.Component {
  constructor(props) {
    super(props);
    this.tempElement = document.createElement('span');
  }

  getEmojiFromHTML(htmlCode) {
    this.tempElement.innerHTML = htmlCode;
    const emoji = this.tempElement.innerText;
    return emoji;
  }

  render() {
    const { htmlCode } = this.props;
    const emoji = this.getEmojiFromHTML(htmlCode);

    return <span>{emoji}</span>;
  }
}