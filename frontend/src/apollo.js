import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
})

export default {
    install(app) {
        app.provide(DefaultApolloClient, apolloClient)
    }
}