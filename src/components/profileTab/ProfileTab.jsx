import React, { useState } from "react";
import { Container, TextField, Avatar, Button, Box } from "@mui/material";
// import { profileImg } from "../../assets";

import "./profileTab.style.scss";

const ProfileTab = () => {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [instagram, setInstagram] = useState("");
	const [password, setPassword] = useState("");
	const [isEditable, setIsEditable] = useState(false);
	const [profilePic, setProfilePic] = useState("/path/to/profile/picture.jpg");

	// const handleProfilePicChange = (e) => {
	// 	if (e.target.files[0]) {
	// 		setProfilePic(URL.createObjectURL(e.target.files[0]));
	// 	}
	// };

	const deleteAccount = () => {
		// setFullName("");
		// setPhoneNumber("");
		// setEmail("");
		// setDateOfBirth("");
		// setInstagram("");
		// setPassword("");
		// setProfilePic("/path/to/profile/picture.jpg");
	};

	const popupAlert = () => {
		if (window.confirm("Are you sure you want to delete your account?")) {
			// deleteAccount();
		}
	};

	return (
		<Container
			sx={{
				width: "50%",
				display: "flex",
				gap: 2,
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Avatar alt="Profile Picture" src={profilePic}>
				{/* <input accept="image/*" type="file" onChange={handleProfilePicChange} /> */}
			</Avatar>
			<TextField
				label="Full Name"
				value={fullName}
				type="text"
				disabled={!isEditable}
				onChange={(e) => setFullName(e.target.value)}
			/>
			<TextField
				label="Phone Number"
				value={phoneNumber}
				type="number"
				disabled={!isEditable}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			<TextField
				label="Email"
				value={email}
				type="email"
				disabled={!isEditable}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				label="Password"
				type="password"
				value={password}
				disabled={!isEditable}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				label="Date of Birth"
				type="date"
				value={dateOfBirth}
				disabled={!isEditable}
				onChange={(e) => setDateOfBirth(e.target.value)}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				label="Instagram"
				type="text"
				value={instagram}
				disabled={!isEditable}
				onChange={(e) => setInstagram(e.target.value)}
			/>
			<Box sx={{ display: "flex", gap: 1 }}>
				<Button variant="outlined" color="secondary" onClick={popupAlert}>
					Delete Account
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => setIsEditable(!isEditable)}
				>
					{isEditable ? "Save" : "Edit Profile"}
				</Button>
			</Box>
		</Container>
	);
};

export default ProfileTab;
