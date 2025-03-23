import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://graphql.admitone.com/dev/",
	// schema: 'http://localhost:9000',
	documents: ["./src/operations.graphql", "src/**/*.tsx"],
	ignoreNoDocuments: true, // for better experience with the watcher
	overwrite: true,
	generates: {
		"./src/graphql/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
				fragmentMasking: false,
			},
			config: {
				reactApolloVersion: 3,
			},
		},
	},
};

export default config;
