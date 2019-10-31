import { gql } from 'apollo-boost';

const getAuthors = gql`
  {
    authors{
      id
      name
    }
  }
`
const getBooks = gql`
  {
    books{
      id
      name
      genre
      author{
        name
        id
      }
      authorId
    }
  }
`
const addBook = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      id
      name
     
    }
  }
`

export{getAuthors, getBooks, addBook};