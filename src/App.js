import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/Book-list'
import AddBook from './components/Add-book'
import BookDetails from './components/Book-details.js'
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('networkError: ', networkError);
    console.log('graphQlErrors: ', graphQLErrors)
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>My Reading List</h1>
      <BookList />
      <BookDetails />
      {/* <AddBook /> */}
    </div>
    </ApolloProvider>
  );
}

export default App;
