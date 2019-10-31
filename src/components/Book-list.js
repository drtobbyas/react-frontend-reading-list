import React, { Component } from "react";
import { graphql, compose } from 'react-apollo';
import { getBooks, addBook, getAuthors } from '../queries/queries';
import './book-list.css';


class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
      author: ""
    }
  }


  displayBooks() {
    const data = this.props.getBooks;
    if (data.loading) {
      return <div>loading...</div>
    } 
    return data.books.map((book) => {
      return <li key={book.id}>{book.name}</li>
    })
  }

  displayAuthors() {
    const data = this.props.getAuthors;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>
    }
    return data.authors.map((author) => {
      return <option key={author.id} value={author.id}>{author.name}</option>
    })
  }

  submit(e) {
    e.preventDefault();
    this.props.addBook({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooks}]
    });
  }


  render() {
    return(
      <React.Fragment>
      <ul>
        {this.displayBooks()}
      </ul>
        <form onSubmit={this.submit.bind(this)}>
        <input value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} placeholder="Book Name"/>
        <input value={this.state.genre} onChange={(e) => {this.setState({genre: e.target.value})}} placeholder="Genre"/>
        <select onChange={(e) => {this.setState({authorId: e.target.value}); console.log(e.target.value)}}>
          <option>Select Author</option>
          {this.displayAuthors()}
        </select>
        <button type="submit">+</button>
      </form>
      </React.Fragment>
    )
  }
}

export default compose(
  graphql(getBooks, { name: 'getBooks' }),
  graphql(addBook, { name: 'addBook' }),
  graphql(getAuthors, { name: 'getAuthors' }),
)(BookList);