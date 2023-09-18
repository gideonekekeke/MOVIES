import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const ModalCard = styled.iframe`
	height: 80vh;
	width: 70%;
`;

interface Iprops {
	video: string | undefined;
	toggleState: () => void;
}

const Modal: React.FC<Iprops> = ({ video, toggleState }) => {
	console.log(video);
	return (
		<Container>
			<ModalCard onPlay={true} src={video} />
			<button onClick={toggleState}>cancel</button>
		</Container>
	);
};

export default Modal;
