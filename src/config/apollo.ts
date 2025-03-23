import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
	uri: import.meta.env.VITE_A1_GRAPHQL_GATEWAY,
});

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	ssrMode: false,
	defaultOptions: {
		watchQuery: {
			// fetchPolicy: 'no-cache',
			errorPolicy: "ignore",
		},
		query: {
			// fetchPolicy: 'no-cache',
			errorPolicy: "all",
		},
	},
});
