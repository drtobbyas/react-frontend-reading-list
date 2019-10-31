import React, { Component } from 'react'
import { graphql} from 'react-apollo'
import { addBook, getBooks } from '../queries/queries'

class AddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
      authorName: ""
    }
  }

  submit() {
    this.props.addBook({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      }
    })
  }

  render() {
    return(
      <form>
        <input value="" onChange={(e) => {this.setState({name: e.target.value})}} placeholder="Book Name"/>
        <input value="" onChange={(e) => {this.setState({genre: e.target.value})}} placeholder="Genre"/>
        <input value="" onChange={(e) => {this.setState({authorName: e.target.value})}} placeholder="Name of Author" />
        <button type="submit">+</button>
      </form>
    )
  }

}

export default graphql(addBook)(AddList)