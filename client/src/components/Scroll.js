import React from "react";
import styled from "styled-components";
import { FaRegArrowAltCircleDown } from "react-icons/fa/index.esm.js";

const Scroll = () => {
	return (
		<Div className="top-to-btm">
			<Icon>
				<line x1={12} y1={5} x2={12} y2={19}></line>
				<polyline points="19 12 12 19 5 12"></polyline>
				{/* <FaRegArrowAltCircleDown className="icon-position icon-style" /> */}
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
	background-color: hsla(0, 0%, 100%, 0.1);
	border-width: 1px;
	border-color: hsla(0, 0%, 100%, 0.1);
	font-size: 1.3rem;
	color: rgba(217, 217, 227, 1);
	margin: 0;
	padding: 0;
	cursor: pointer;
	border-radius: 10em;
	/* animation: movebtn 3s ease-in-out infinite; */
	transition: all 0.5s ease-in-out;

	&:hover {
		animation: none;
		background: #fff;
		color: #551b54;
		border: 2px solid #551b54;
	}

	/* @keyframes movebtn {
		0% {
			transform: translateY(0px);
		}
		25% {
			transform: translateY(20px);
		}
		50% {
			transform: translateY(0px);
		}
		75% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0px);
		}
	} */
`;
