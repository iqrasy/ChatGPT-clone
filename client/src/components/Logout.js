import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import styled from "styled-components";

const Logout = () => {
	const { logout, user, isAuthenticated } = useAuth0();
	const [showDropDown, setShowDropDown] = useState(false);

	const toggleMenu = () => {
		setShowDropDown(!showDropDown);
	};

	const handleLogout = () => {
		logout({ logoutParams: { returnTo: window.location.origin } });
	};

	return (
		<>
			{isAuthenticated ? (
				<Main>
					<button onClick={toggleMenu}>
						<div>
							<img src={user.picture} alt={user.nickname} />
							<p>{user.nickname}</p>
						</div>
						<i className={`arrow ${showDropDown ? "down" : "up"}`}>•••</i>
					</button>
					{showDropDown && (
						<Dropdown>
							<Button>Custom instructions</Button>
							<Button>Settings</Button>
							<Button onClick={handleLogout}>Log Out</Button>
						</Dropdown>
					)}
				</Main>
			) : null}
		</>
	);
};

export default Logout;

const Main = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	max-width: 15em;
	margin: 0;
	padding: 1.4em;

	img {
		height: 3.2em;
		margin-right: 1em;
	}

	p {
		font-size: 1.2em;
		color: rgba(255, 255, 255, 1);
	}

	button {
		width: 100%;
		background: none;
		border: none;
		cursor: pointer;

		div {
			display: flex;
			align-items: center;
		}

		.arrow {
			font-size: 0.8em;
			color: rgba(255, 255, 255, 0.4);
			width: 5em;
			height: 1em;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			position: absolute;
			left: 17em;
			top: 50%;
		}

		.arrow.up {
			border: none;
		}
	}
`;

const Dropdown = styled.div`
	position: absolute;
	bottom: 100%;
	left: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background-color: rgba(5, 5, 9, 1);
	outline: transparent solid 0.3em;
	outline-offset: 2px;
	opacity: 1;
	padding-top: 0.25rem;
	padding-bottom: 0.375rem;
	margin-bottom: 0.25rem;
	border-radius: 0.375rem;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	width: 100%;
	z-index: 20;
`;

const Button = styled.button`
	color: rgba(255, 255, 255, 1);
	font-size: 0.875em;
	line-height: 1.25rem;
	padding: 0.25em 0.75em;
	gap: 0.75em;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: 44px;
	width: 100%;
	transition-duration: 0.2s;
	transition-property: color, background-color, border-color,
		text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	padding: 10px;
	text-align: right;

	&:hover {
		cursor: pointer;
		background-color: rgba(52, 53, 65, 0.7);
	}
`;
