import { CssBaseline, CssVarsProvider, extendTheme, Sheet } from '@mui/joy';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                common: {
                    black: '#0E0E10',
                },
            },
        },
        light: {
            palette: {
                common: {
                    black: '#0E0E10',
                },
            },
        },
    },
});

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Sheet
                sx={{
                    width: '100%',
                    minHeight: '100svh',
                    backgroundColor: theme => theme.palette.background.surface,
                }}
            >
                {children}
            </Sheet>
        </CssVarsProvider>
    );
}
