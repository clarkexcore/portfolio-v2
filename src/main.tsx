import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./config/apollo.ts";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={apolloClient}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</StrictMode>
);
