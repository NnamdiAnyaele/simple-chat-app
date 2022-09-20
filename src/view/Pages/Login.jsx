import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";

import { login } from "../../slices/authSlice";

const Wrapper = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
	padding: "0 0.25rem",
});

const FormComponent = styled(Box)({
	width: "100%",
	maxWidth: "400px",
	backgroundColor: "#fff",
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "3rem 1rem",
	borderRadius: "2px",
	gap: "1rem",
});

export default function LoginForm() {
	const dispatch = useDispatch();
	const { isProcessing, isAuthenticated } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const [user, setUser] = useState({
		name: "",
	});

	const [error, setError] = useState({
		name: "",
	});

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (user.name.length < 3) {
			setError({
				...error,
				name: "Username must be at least 3 characters long",
			});
			return;
		}
		dispatch(login(user));
		toast.success("Login Success");
		navigate("/dashboard");
	};

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/dashboard");
		}
	}, [isAuthenticated, navigate]);

	return (
		<Wrapper>
			<FormComponent
				component="form"
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<p className="header">Welcome!</p>
				<FormControl fullWidth variant="outlined">
					<InputLabel htmlFor="filled-adornment-password">Username</InputLabel>
					<OutlinedInput
						type="text"
						value={user.name}
						name="name"
						label="Username"
						onChange={handleChange}
						required
						startAdornment={
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						}
						error={Boolean(error.name)}
					/>
					<FormHelperText id="component-error-text">
						{error.name}
					</FormHelperText>
				</FormControl>
				<Button
					variant="contained"
					type="submit"
					fullWidth
					sx={{ p: "0.6rem" }}
				>
					{isProcessing ? (
						<CircularProgress size={18} style={{ color: "#fff" }} />
					) : (
						<>
							<LoginIcon />
							&nbsp; Login
						</>
					)}
				</Button>
			</FormComponent>
		</Wrapper>
	);
}
