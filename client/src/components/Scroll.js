import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleDown } from "react-icons/fa/index.esm.js";

const Scroll = () => {
	const [scrollToTop, setScrollToTop] = useState(false);

	useEffect(() => {
		const checkScrollTop = () => {
			if (!scrollToTop && window.scrollY > 400) {
				setScrollToTop(true);
			} else if (isVisible && window.scrollY <= 400) {
				setScrollToTop(false);
			}
		};

		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, [scrollToTop]);

	const scroll = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Div className={`top-to-btm ${scrollToTop ? "visible" : ""}`}>
			<Icon>
				<button onClick={scroll}>
					<FaRegArrowAltCircleDown className="icon-position icon-style" />
				</button>
			</Icon>
		</Div>
	);
};

export default Scroll;

const Div = styled.div`
	position: fixed;
	bottom: 5em;
	right: 2em;
	z-index: 20;
`;

const Icon = styled.div`
	margin: 0;
	padding: 0;
	cursor: pointer;
	border-radius: 10em;
	transition: all 0.5s ease-in-out;

	button {
		background-color: transparent;
		outline: none;
		border: none;
		font-size: 1.3em;
		color: #fff;
	}

	&:hover {
		animation: none;
		background: #fff;
		color: #551b54;
		border: 2px solid #551b54;
	}

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
