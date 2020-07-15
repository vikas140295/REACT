import React, { Component } from "react";
import Book from "./Book";
import BookData from "./Booksdata";
export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BookData,
    };
  }
  handleDelete = (id) => {
    const sortedBook = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: sortedBook,
    });
  };

  render() {
    return (
      <div>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}
