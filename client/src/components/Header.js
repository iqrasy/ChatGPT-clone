import React, { useState } from "react";
import styled from "styled-components";
import { GoShare } from "react-icons/go/index.esm.js";

const Header = () => {
	return (
		<HeaderContainer>
			<nav>
				<Title>
					<p>Default (GPT-3.5) </p>
				</Title>
				<Icon>
					<GoShare />
				</Icon>
			</nav>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	width: 100%;
	padding: 1.2rem;
	z-index: 1000;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media only screen and (max-width: 480px) {
		padding: 1.5rem 0 ;
	}

`;

const Title = styled.div`
	flex-grow: 1;
	p {
		font-size: 0.875rem;
		text-align: center;
	}

	@media only screen and (max-width: 480px) {
		p{
			font-size: 0.7rem;
		}
	}
`;

const Icon = styled.div`
	margin-right: 1rem;
`;
