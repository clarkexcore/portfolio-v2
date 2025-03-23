import { CssBaseline, CssVarsProvider, Sheet } from "@mui/joy";

interface ThemeProviderProps {
	children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	return (
		<CssVarsProvider>
			<CssBaseline />
			<Sheet
				sx={{
					width: "100%",
					minHeight: "100svh",
					backgroundColor: theme => theme.palette.background.surface,
				}}
			>
				{children}
			</Sheet>
		</CssVarsProvider>
	);
}
