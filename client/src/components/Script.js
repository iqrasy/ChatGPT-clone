const { REACT_APP_OPENAI_API_KEY } = process.env;
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.js";
import styled from "styled-components";
import Header from "./Header.js";
import logo from "../assets/logo.png";
import {
	FiThumbsUp,
	FiThumbsDown,
	FiClipboard,
} from "react-icons/fi/index.esm.js";

const Script = () => {
	const [value, setValue] = useState("");
	const [messages, setMessages] = useState([]);
	const [chat, setChat] = useState([]);
	const [current, setCurrent] = useState(null);

	const handleInput = (e) => {
		setValue(e.target.value);
	};

	const callApi = async () => {
		console.log("calling api");

		try {
			const response = await fetch(
				"https://api.openai.com/v1/chat/completions",
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						model: "gpt-3.5-turbo",
						messages: [{ role: "user", content: value }],
						max_tokens: 500,
					}),
				}
			);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			setMessages(data.choices[0].message);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		if (!current && value && messages) {
			setCurrent(value);
		}

		if (current && value && messages) {
			setChat((chat) => [
				...chat,
				{
					title: current,
					role: "user",
					content: value,
				},
				{
					title: current,
					role: messages.role,
					content: messages.content,
				},
			]);
		}
	}, [messages, current]);

	useEffect(() => {
		const savedChat = localStorage.getItem("chat");
		if (savedChat) {
			setChat(JSON.parse(savedChat));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("chat", JSON.stringify(chat));
	}, [chat]);

	const currentChat = chat.filter((chat) => chat.title === current);
	const unique = Array.from(
		new Set(chat.map((currentChat) => currentChat.title))
	);

	return (
		<>
			<Main>
				<Sidebar
					chat={chat}
					current={current}
					setCurrent={setCurrent}
					setValue={setValue}
					setMessages={setMessages}
				/>
				<Chat>
					<Header />
					<First>
						{currentChat?.map((item, i) => (
							<ul
								key={i}
								className={item.role === "assistant" ? "assistant" : "user"}
							>
								<li key={i}>
									<Div>
										{item.role === "assistant" ? (
											<img src={logo} />
										) : (
											<p>{item.role}</p>
										)}
										<Content>{item.content}</Content>
										{item.role === "assistant" ? (
											<>
												<Icons>
													<div>
														<FiThumbsUp />
													</div>
													<div>
														<FiThumbsDown />
													</div>
													<div>
														<FiClipboard />
													</div>
												</Icons>
											</>
										) : null}
									</Div>
								</li>
							</ul>
						))}
					</First>
					<Bottom>
						<Input>
							<Text>
								<textarea
									tabIndex={0}
									rows={1}
									onChange={handleInput}
									placeholder="Send a message"
									value={value}
								/>
								<button onClick={callApi}>
									<span>▶︎</span>
								</button>
							</Text>
							<FootText>
								<span>
									Free Research Preview. ChatGPT may produce inaccurate
									information about people, places, or facts.
									<a
										href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
										target="_blank"
										rel="noreferrer"
									>
										ChatGPT August 3 version
									</a>
								</span>
							</FootText>
						</Input>
					</Bottom>
				</Chat>
			</Main>
		</>
	);
};

export default Script;

const Main = styled.div`
	background-color: #343541;
	display: flex;
`;

const Content = styled.p`
	font-size: 0.95em;
	line-height: 1.9em;
	color: rgba(255, 255, 255, 0.8);
	text-align: left;
	padding: 0 1em;
	margin: 0;
	max-width: 50em;
`;

const First = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 15em;
`;

const Chat = styled.section`
	height: 100vh;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	overflow-y: scroll;

	ul {
		width: 100%;
		padding: 0;

		&.assistant {
			background-color: #40414f;
			z-index: 40;
		}
	}

	li {
		width: 100%;
		padding: 1.5em 0;
		margin: 0;
	}
`;

const Div = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-left: auto;
	margin-right: auto;
	max-width: 48rem;
	width: 100%;

	img {
		width: 2em;
		height: 2em;
	}

	@media only screen and (max-width: 480px) {
		padding: 1em;
	}
`;

const Icons = styled.div`
	display: flex;
	margin-left: auto;
	padding: 1rem;
	color: rgba(255, 255, 255, 0.5);

	div {
		padding: 0.3em;
		&:hover {
			color: rgba(255, 255, 255, 0.8);
			cursor: pointer;
		}
	}
`;

const Bottom = styled.div`
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 0;
	width: 90%;
	z-index: 40;
	background-image: linear-gradient(
		180deg,
		rgba(53, 55, 64, 0),
		#353740 58.85%
	);
	background: linear-gradient(to bottom, rgba(53, 55, 64, 0), #353740 58.85%);

	@media only screen and (max-width: 480px) {
		max-width: 21em;
	}
`;

const Input = styled.div`
	width: 100%;
	gap: 0.75rem;
	margin: 1rem 0;
	padding: 1rem 6rem 1rem 0;
	max-width: 55em;
	border-color: hsla(0, 0%, 100%, 0.2);

	@media only screen and (max-width: 480px) {
		margin: 0;
		padding: 1em 0;
	}
`;

const Text = styled.div`
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
	color: rgba(255, 255, 255, 1);
	background-color: rgba(64, 65, 79, 1);
	border-color: rgba(32, 33, 35, 0.5);
	border-width: 1px;
	border-radius: 0.75rem;
	flex-direction: column;
	display: flex;
	padding: 1rem 0;
	position: relative;

	textarea {
		outline: none;
		height: 24px;
		overflow-y: hidden;
		background-color: transparent;
		width: 100%;
		margin: 0;
		padding: 0 1.5rem;
		line-height: 1.5rem;
		resize: none;
		border: none;
		color: white;
		font-size: 1em;

		&:focus {
			outline: none;
		}
	}

	button {
		border: none;
		opacity: 0.4;
		color: rgba(172, 172, 190, 1);
		padding: 0.5rem;
		position: absolute;
		bottom: 1rem;
		right: 0.75rem;
		cursor: pointer;
		text-transform: none;
		background-color: transparent;
		background-image: none;
		border-radius: 0.375rem;
		transition-duration: 0.15s;
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		span {
			margin: 0;
			width: 1rem;
			height: 1rem;
			display: block;
			font-size: 1.5em;
			border: none;
			outline: none;
			color: rgba(255, 255, 255, 1);
		}
	}
`;

const FootText = styled.div`
	color: rgba(197, 197, 210);
	font-size: 0.75rem;
	line-height: 1rem;
	text-align: center;
	padding-top: 0.5rem;
	padding-bottom: 0.75rem;
	position: relative;

	a {
		text-decoration-line: underline;
		cursor: pointer;
		color: rgba(197, 197, 210);
	}

	@media only screen and (max-width: 480px) {
		font-size: 0.6em;
	}
`;
