import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { setMessage, updateMessage } from "../../slices/messageSlice";
import { toast } from "react-toastify";

const style = {
	width: "46rem",
	maxWidth: "46rem",
};

const headerStyle = {
	p: "0.5rem",
	backgroundColor: "primary.main",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const headerTextStyle = {
	fontWeight: "bold",
	textTransform: "capitalize",
	color: "#fff",
	margin: "0 auto",
	textAlign: "center",
};

const mainContainerStyle = {
	width: "100%",
	height: "100%",
	overflow: "auto",
	display: "flex",
	flexDirection: "column",
	border: "1px solid #7459F5",
};

const noMessagesStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "Center",
	height: "100%",
	width: "100%",
};

const noMessageTextStyle = {
	textTransform: "capitalize",
	textAlign: "center",
	fontWeight: "bold",
};

const mainMessageContainerStyle = {
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	padding: "1rem",
};

const myMessageStyles = {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
};

const myMessageBodyStyles = {
	backgroundColor: "#7459F5",
	border: "1px solid #0048aa",
	borderRadius: "14px 14px 0 14px",
	color: "#fff",
};

const chatBoxFooterStyle = {
	p: "1rem",
	backgroundColor: "#7459F5",
	display: "flex",
};

const formStyle = {
	backgroundColor: "#fff",
	mr: "1rem",
	width: "90%",
};

const buttonStyle = {
	textTransform: "capitalize",
	backgroundColor: "#fff",
	"&:hover": {
		backgroundColor: "#fff",
	},
};

const avatarStyle = {
	fontSize: "8rem",
	color: "#ccc",
};

const ChatBox = () => {
	const { user } = useSelector((state) => state.auth);
	const { messages } = useSelector((state) => state.message);
	const dispatch = useDispatch();

	const [typedMessage, setTypedMessage] = useState("");

	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [messages]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!typedMessage) {
			toast.error("Please enter a message");
			return;
		}
		dispatch(setMessage({ message: typedMessage, user }));
		setTypedMessage("");
	};

	useEffect(() => {
		const messagetUpdateInterval = setInterval(() => {
			dispatch(updateMessage());
		}, 1000);

		return () => {
			clearInterval(messagetUpdateInterval);
		};
	}, [dispatch]);

	return (
		<Box sx={style}>
			<Box sx={headerStyle}>
				<Typography variant="h6" color="primary" sx={headerTextStyle}>
					chat box
				</Typography>
			</Box>

			<Box sx={mainContainerStyle}>
				{messages?.length < 1 && (
					<Box sx={noMessagesStyle}>
						<Typography variant="body1" color="primary" sx={noMessageTextStyle}>
							no message history
						</Typography>
					</Box>
				)}

				<Box sx={mainMessageContainerStyle}>
					{messages?.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								alignItems: "flex-end",
								flexDirection:
									item.userId === user.userId ? "row-reverse" : "row",
							}}
						>
							<Box
								sx={{
									maxWidth: "20rem",
									marginBottom: "1rem",
									...(user.userId === item.userId && myMessageStyles),
								}}
							>
								<Box
									sx={{
										backgroundColor: "#f0f0f0",
										color: "#000",
										border: "1px solid #cccccc",
										borderRadius: "14px 14px 14px 0",
										padding: "0.5rem",
										...(user.userId === item.userId && myMessageBodyStyles),
									}}
								>
									{item.message}
								</Box>
								<Box>
									<Typography
										variant="caption"
										sx={{ textTransform: "capitalize" }}
									>{`${user.userId === item.userId ? "you" : item.name} at ${
										item.date
									}`}</Typography>
								</Box>
							</Box>
							<AccountCircleIcon
								sx={{
									...avatarStyle,
									color: user.userId === item.userId ? "#7459F5" : "#ccc",
								}}
							/>
						</Box>
					))}
					<div ref={messagesEndRef} />
				</Box>
				<Box sx={chatBoxFooterStyle}>
					<Box
						component="form"
						noValidate
						autoComplete="off"
						sx={formStyle}
						onSubmit={handleSubmit}
					>
						<TextField
							label="Start typing..."
							variant="filled"
							value={typedMessage}
							onChange={(e) => setTypedMessage(e.target.value)}
							fullWidth
							size="small"
						/>
					</Box>

					<Button
						variant="outlined"
						color="primary"
						sx={buttonStyle}
						onClick={handleSubmit}
					>
						send
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ChatBox;
