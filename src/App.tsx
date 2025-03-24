import { Box, Typography } from "@mui/joy";
import { MainContainer } from "./components/common/common.styled";

function App() {
	return (
		<Box sx={{ backgroundColor: "#000", minHeight: "100vh", p: 3 }}>
			<MainContainer>
				<Box>
					<Typography level="title-md">Hey y'all</Typography>
					<Typography level="title-lg">I'm Alex Clarke</Typography>
				</Box>
			</MainContainer>
		</Box>
	);
}

export default App;
