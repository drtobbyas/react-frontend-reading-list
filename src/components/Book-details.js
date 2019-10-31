import React, { Component } from 'react'

class BookDetails extends Component {

  render() {
    return(
      <div>
        <h1>book name</h1>
        <p>book genre</p>
        <p>Author</p>
        <p>Other books by the samw author</p>
        <ul>
          <li>another book by the same author</li>
        </ul>
      </div>
    )
  }
}

export default BookDetails