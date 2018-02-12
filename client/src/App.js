import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    // Additional fetch options like `credentials` or `headers`
    // credentials: 'same-origin',
});

const client = new ApolloClient({
    // link: new HttpLink(),
    // link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
    link,
    cache: new InMemoryCache()
});

client.query({ query: gql`{books {
  title
  author
}}` }).then(console.log);

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div>Bobby</div>
            </ApolloProvider>
        );
    }
}

export default App;
