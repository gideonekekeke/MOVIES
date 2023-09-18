import React, { useState } from "react";
import styled from "@emotion/styled";
import Data from "../../MovieData.json";
import { Link } from "react-router-dom";

const MainCard = styled.div`
	min-width: 200px;

	margin: 10px;
	flex: 1;
`;
const CardImage = styled.img`
	height: 300px;
	width: 100%;
`;
const Title = styled.div``;

const CardHold = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
`;

const Card = () => {
	const [data, setData] = useState(Data);
	// const [searchedData, setSearchedData] = useState<any>([]);



	return (
		<CardHold>
			{data?.map((props) => (
				<MainCard>
					<CardImage src={props?.poster_url} />
					<Link
						style={{
							color: "white",
							textDecoration: "none",
						}}
						to={`/detailed/${props.title}/${props.id}`}>
						<Title>{props?.title}</Title>
					</Link>
				</MainCard>
			))}
		</CardHold>
	);
};

export default Card;
