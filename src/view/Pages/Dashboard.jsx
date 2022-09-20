import Box from "@mui/material/Box";

import Navbar from "../../components/common/Navbar";
import ChatBox from "../../components/common/ChatBox";

const Dashboard = () => {
	return (
		<Box>
			<Navbar />
			<Box>
				<ChatBox />
			</Box>
		</Box>
	);
};

export default Dashboard;
