import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showinfo: false,
    };
  }
  handleInfo = () => {
    this.setState({
      showinfo: !this.state.showinfo,
    });
    console.log(this.state.showinfo);
  };

  render() {
    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;
    const checkinfo = (info) => {
      if (info === true) return <p>Hello there !</p>;
      else return null;
    };
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4> Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            Show Info
          </button>
          <button type="button" onClick={() => handleDelete(id)}>
            delete me
          </button>
          {checkinfo(this.state.showinfo)}
        </div>
      </article>
    );
  }
}
