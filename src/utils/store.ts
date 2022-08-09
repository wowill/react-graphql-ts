import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });
  
  export {
      client,
      ApolloClient,
      InMemoryCache,
      ApolloProvider,
      useQuery,
      gql
  }