import React, { useState } from "react";
import styled from "styled-components";
import { GoPerson } from "react-icons/go/index.esm.js";
import { BsChatLeft } from "react-icons/bs/index.esm.js";
import { BsLayoutSidebar } from "react-icons/bs/index.esm.js";
import { FiEdit3 } from "react-icons/fi/index.esm.js";
import { RiDeleteBinLine } from "react-icons/ri/index.esm.js";

const Sidebar = ({ chat, setCurrent, current, setValue, setMessages }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleClick = (uniqueTitle) => {
		setCurrent(uniqueTitle);
		setMessages(null);
		setValue("");
		setSelectedItem(uniqueTitle);
	};

	const newChat = () => {
		setMessages(null);
		setValue("");
		setCurrent(null);
	};

	const currentChat = chat.filter((chat) => chat.title === current);
	const unique = Array.from(
		new Set(chat.map((currentChat) => currentChat.title))
	);

	const toggleBar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{isOpen ? (
				<Sidebars>
					<div style={{ display: "flex" }}>
						<New onClick={newChat}>+ New chat</New>
						<Closed onClick={toggleBar}>
							<BsLayoutSidebar style={{ fontSize: "1.2em" }} />
						</Closed>
					</div>
					<ul>
						{unique?.map((uniqueTitle, i) => (
							<Li
								key={i}
								onClick={() => handleClick(uniqueTitle)}
								className={uniqueTitle === selectedItem ? "selected" : ""}
							>
								<Main>
									<div>
										<Second>
											<BsChatLeft
												style={{ fontSize: "0.8em", marginRight: ".7em" }}
											/>
											<a>{uniqueTitle}</a>

											<Empty
												className={
													uniqueTitle === selectedItem ? "selected" : ""
												}
											></Empty>
										</Second>
									</div>
									<Div
										className={uniqueTitle === selectedItem ? "selected" : ""}
									>
										<div>
											<button>
												<FiEdit3 />
											</button>
										</div>
										<div>
											<button>
												<RiDeleteBinLine />
											</button>
										</div>
									</Div>
								</Main>
							</Li>
						))}
					</ul>
					<nav>
						<p>
							<GoPerson style={{ fontSize: "1.1em", marginRight: "1em" }} />
							Upgrade to Plus <span>NEW</span>
						</p>
						<p style={{ fontSize: "1em" }}>Iqra Syed</p>
					</nav>
				</Sidebars>
			) : (
				<Open onClick={toggleBar}>
					<BsLayoutSidebar />
				</Open>
			)}
		</div>
	);
};

export default Sidebar;

const Empty = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 15em;
	height: 100%;
	background-image: linear-gradient(to left, #202123, transparent);
	opacity: 1;
	/* border: solid red 1px; */

	&:hover {
		background-image: linear-gradient(to left, rgba(52, 53, 65), transparent);
		padding: 0.7em 0;
		border-radius: 0.5em;
		width: 15em;
	}

	&.selected {
		padding: 0.7em 0;
		border-radius: 0.5em;
		width: 100%;
		background-image: linear-gradient(to left, rgba(52, 53, 65), transparent);
		opacity: 1;
	}
`;

const Li = styled.li`
	list-style-type: none;
	padding: 0.7em;
	margin: 0.5em 0;
	width: 13.5em;
	cursor: pointer;
	/* border: solid pink 1px; */

	&:hover {
		background-color: rgba(52, 53, 65);
		border-radius: 0.5em;
		transition-duration: 0.2s;
		border-radius: 0.5em;
	}

	&.selected {
		background-color: rgba(52, 53, 65);
		padding: 0.7em;
		border-radius: 0.5em;
		background-image: linear-gradient(to left, rgba(52, 53, 65), transparent);
		opacity: 1;
	}
`;

const Second = styled.div`
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-all;
	max-height: 1.25rem;
	position: relative;
	font-size: 0.9em;
`;

const Sidebars = styled.section`
	background-color: #202123;
	height: 100vh;
	width: 16.2em;
	max-width: 16.2em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition-duration: 0.2s;
	z-index: 50;

	nav {
		border-top: solid 0.1em rgba(255, 255, 255, 0.3);
		padding: 0.7em;
		margin: 4em 0.7em;
	}

	ul {
		padding: 0.7em;
		margin: 0;
		height: 100%;
		width: 15em;
	}

	p {
		font-size: 0.9em;
	}

	span {
		background-color: rgba(250, 230, 158);
		color: black;
		border-radius: 0.4em;
		margin-left: 2.3em;
		padding: 0.125rem 0.375rem;
		font-size: 0.9em;
	}

	/* @media (min-width: 768px) .scrollbar-trigger ::-webkit-scrollbar-thumb {
		visibility: hidden;
	} */
`;

const Div = styled.div`
	display: flex;
	align-items: start;
	z-index: 2;
	visibility: hidden;
	opacity: 1;

	button {
		background-color: transparent;
		outline: none;
		border: none;
		color: white;
		padding: 0.3em;
		&:hover {
			color: rgba(255, 255, 255, 0.8);
			cursor: pointer;
		}
	}
	&.selected {
		visibility: visible;
	}
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const New = styled.button`
	border: solid 0.1em rgba(255, 255, 255, 0.2);
	background-color: transparent;
	border-radius: 0.5em;
	padding: 0.9em;
	margin: 0.7em;
	color: white;
	cursor: pointer;
	text-align: start;
	width: 14em;

	&:hover {
		background-color: rgba(64, 64, 79);
		transition-duration: 0.2s;
	}
`;

const Open = styled.button`
	border: none;
	background-color: transparent;
	outline: none;
	border-radius: 0.5em;
	width: 3em;
	padding: 0.9em;
	margin: 0.7em 0;
	color: white;
	cursor: pointer;
	font-size: 0.9em;

	&:hover {
		background-color: rgba(64, 64, 79);
		transition-duration: 0.2s;
	}
`;

const Closed = styled.button`
	border: solid 0.1em rgba(255, 255, 255, 0.2);
	background-color: transparent;
	border-radius: 0.5em;
	width: 3em;
	padding: 0.9em;
	margin: 0.7em 0;
	color: white;
	cursor: pointer;
	text-align: start;

	&:hover {
		background-color: rgba(64, 64, 79);
		transition-duration: 0.2s;
	}
`;
