import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const myMessageStyles = {
	marginLeft: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
};

const myMessageBodyStyles = {
	backgroundColor: "#002564",
	border: "1px solid #0048aa",
	borderRadius: "14px 14px 0 14px",
	color: "#fff",
};

const ChatBox = () => {
	const { messages, user } = useSelector((state) => state.message);

	const [typedMessage, setTypedMessage] = useState("");

	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToBottom, [messages]);

	const handleSubmit = (event) => {};

	return (
		<Box
			sx={{
				height: "75vh",
				maxWidth: "300px",
				border: "1px solid #7459F5",
			}}
		>
			<Box
				sx={{
					p: "0.5rem",
					backgroundColor: "primary.main",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="h6"
					color="primary"
					sx={{
						fontWeight: "bold",
						textTransform: "capitalize",
						color: "#fff",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					chat box
				</Typography>
				<IconButton sx={{ visibility: "hidden" }}>
					<ArrowBackIosIcon sx={{ color: "#fff", fontSize: "1rem" }} />
				</IconButton>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					padding: "1rem",
					height: "100%",
					overflow: "auto",
				}}
			>
				{messages?.length < 1 && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "Center",
						}}
					>
						<Typography
							variant="body1"
							color="primary"
							sx={{
								textTransform: "capitalize",
								textAlign: "center",
								fontWeight: "bold",
							}}
						>
							no message history
						</Typography>
					</Box>
				)}

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					{messages?.map((item, index) => (
						<Box
							key={index}
							sx={{
								maxWidth: "70%",
								marginBottom: "1rem",
								// ...(userId === item.user.id && myMessageStyles),
							}}
						>
							<Box
								sx={{
									backgroundColor: "#f0f0f0",
									color: "#000",
									border: "1px solid #cccccc",
									borderRadius: "14px 14px 14px 0",
									padding: "0.5rem",
									// ...(userId === item.user.id && myMessageBodyStyles),
								}}
							>
								{item.plain_response}
							</Box>
							<Box>
								<Typography variant="caption">{item.created_at}</Typography>
							</Box>
						</Box>
					))}
					<div ref={messagesEndRef} />
					{/* <Box
						component="form"
						noValidate
						autoComplete="off"
						sx={{ width: "100%", mt: "auto" }}
						onSubmit={handleSubmit}
					>
						<TextField
							id="outlined-basic"
							label="Comment"
							variant="outlined"
							value={typedMessage}
							onChange={(e) => setTypedMessage(e.target.value)}
							fullWidth
							placeholder="Write a comment..."
						/>
					</Box> */}
				</Box>
			</Box>
		</Box>
	);
};

export default ChatBox;
