import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "",
      allMemeImgs: []
    }

    this.handleText = this.handleText.bind(this);
    this.handleMeme = this.handleMeme.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes })
      })
  }

  handleText(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleMeme(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const imgMeme = this.state.allMemeImgs[randNum].url;
    this.setState({randomImg: imgMeme});
  }

  render() {
    return (
      <>
        <form className="meme-form">
          <input
            name="topText"
            type="text"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleText}
          />
          <input
            name="bottomText"
            type="text"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleText}
          />
          <button onClick={this.handleMeme}>Gen</button>
        </form>
        <div className="meme">
          <img
            src={this.state.randomImg}
            alt=""
          />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </>
    )
  }
}

export default MemeGenerator;