import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Script from "./Script.js";

const Login = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/home");
		}
	}, [isAuthenticated, navigate]);

	return (
		<>
			{isAuthenticated ? (
				<Script />
			) : (
				<Main>
					<h1>Get started</h1>
					<div style={{ padding: ".5em" }}></div>
					<Div>
						<button onClick={() => loginWithRedirect()}>Log in</button>
						<button onClick={() => loginWithRedirect()}>Sign up</button>
					</Div>
				</Main>
			)}
		</>
	);
};

export default Login;

const Main = styled.div`
	max-width: 440px;
	width: 100%;
	margin: 1rem 0;
	text-align: center;

	h1 {
		font-size: 1.2em;
		line-height: 1.25;
		margin: 0;
		font-weight: 600;

		@media only screen and (max-width: 480px) {
			padding-right: 1.3rem;
		}
	}
`;

const Div = styled.div`
	display: grid;
	row-gap: 0;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	column-gap: 4rem;
	text-align: center;

	button {
		color: rgba(255, 255, 255, 1);
		font-weight: 500;
		font-size: 1rem;
		line-height: 1.5rem;
		text-align: center;
		background-color: rgba(60, 70, 255, 1);
		justify-content: center;
		align-items: center;
		display: flex;
		border-radius: 0.375rem;
		height: 3rem;
		width: 13rem;
		position: relative;
		cursor: pointer;
		border: none;
		margin: 0;
		padding: 0;

		&:hover {
			background-color: #0000ff;
		}

		@media only screen and (max-width: 480px) {
			margin: 0.5rem 0;
			width: 22rem;
		}
	}
	@media only screen and (max-width: 480px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		position: relative;
		right: 5rem;
	}
`;
