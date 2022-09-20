import Box from "@mui/material/Box";

import Navbar from "../../components/common/Navbar";
import ChatBox from "../../components/common/ChatBox";

const chatBoxContainerStyle = {
	display: "flex",
	justifyContent: "center",
	mt: "2rem",
	height: "75vh",
};

const Dashboard = () => {
	return (
		<Box>
			<Navbar />
			<Box sx={chatBoxContainerStyle}>
				<ChatBox />
			</Box>
		</Box>
	);
};

export default Dashboard;
