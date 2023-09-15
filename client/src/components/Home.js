import React, { useEffect, useRef } from "react";
import Login from "./Login.js";
import styled from "styled-components";
import logos from "../assets/logos.png";
import Typed from "typed.js";
// homeage is where the login button will be, asking user to login or to signup
const Home = () => {
	const el = useRef(null);
	const text = [
		"Help me pick a gift for my dad who loves fishing",
		"Write a thank you note for my interviewer",
		"Help me debug a python script automating daily reports",
		"Brainstorm names for an orange cat we're adopting",
		"Draft an email to request a quote from a local plumber",
	];

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: text,
			typeSpeed: 30,
			parseHtml: true,
			fadeOut: true,
			backSpeed: 30,
			backDelay: 2000,
			cursorChar: "●",
			autoInsertCss: true,
			showCursor: true,
			loop: true,
			loopCount: Infinity,
		});
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<>
			<Main>
				<Div>
					<div>
						<h1>ChatGPT ●</h1>
					</div>
					<TypedText>
						<h1 ref={el} />
					</TypedText>
				</Div>
				<Log>
					<Second>
						<Login />
					</Second>
					<Image>
						<img src={logos} />
						<p>OpenAI</p>
					</Image>
					<Third>
						<a
							href="https://openai.com/policies/terms-of-use"
							target="_blank"
							rel="noreferrer"
						>
							Terms of use
						</a>
						<span>|</span>
						<a
							href="https://openai.com/poilicies/privacy-policies"
							target="_blank"
							rel="noreferrer"
						>
							Privacy policy
						</a>
					</Third>
				</Log>
			</Main>
		</>
	);
};

export default Home;

const TypedText = styled.span`
	display: inline-block;
	vertical-align: middle;
	margin-left: 10px;

	h1 {
		font-size: 2em;
		display: inline;
	}
`;

const Main = styled.div`
	display: flex;
	background-color: #00002e;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	width: 100%;
	color: rgba(210, 146, 255);

	div {
		font-size: 0.6em;
		display: flex;
		left: 0;
		position: absolute;
		top: 2em;
		padding: 0 1.5rem;
	}

	span {
		/* border: solid pink 1px; */
		max-width: 19em;
		position: relative;
		padding: 1rem;
	}
`;

const Second = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 1;
	width: 100%;
	position: relative;
`;

const Third = styled.div`
	font-size: 0.75rem;
	line-height: 1rem;
	padding: 0.75rem 0;
	/* background-color: rgba(0, 0, 0, 1); */
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* flex-direction: column; */

	a {
		color: rgba(142, 142, 160, 1);
		margin: 0 0.75rem;
		text-decoration: none;
	}

	span {
		color: rgba(86, 88, 105, 1);
	}
`;

const Log = styled.div`
	color: rgba(255, 255, 255, 1);
	padding: 2rem 1.5rem;
	background-color: rgba(0, 0, 0, 1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 53em;
`;

const Image = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(142, 142, 160, 1);

	img {
		height: 1.5em;
		color: rgba(255, 255, 255, 1);
	}

	p {
		padding: 0.4em;
	}
`;

const Type = styled.span`
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;
