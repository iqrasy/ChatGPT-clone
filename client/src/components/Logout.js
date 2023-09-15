import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const Logout = () => {

	const { logout, user, isAuthenticated } = useAuth0();

	console.log(user);
	return (
		<>
			{isAuthenticated ? (
				<>
					<img src={user.picture} />
					<p style={{ fontSize: "1em" }}>{user.nickname}</p>
					<Button
						onClick={() =>
							logout({ logoutParams: { returnTo: window.location.origin } })
						}
					>
						Log Out
					</Button>
				</>
			) : null}
		</>
	);
};

export default Logout;

const Button = styled.button`
	font-family: "Oswald", sans-serif;
	background-color: transparent;
	border: none;
	color: black;
	font-size: 0.9em;
	width: 5em;

	&:hover {
		cursor: pointer;
	}
`;
