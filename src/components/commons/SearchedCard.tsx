import React, { useState } from "react";
import styled from "@emotion/styled";
import Data from "../../MovieData.json";
import { Link } from "react-router-dom";

const MainCard = styled.div`
	min-width: 200px;

	margin: 10px;
	/* flex: 1; */
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

interface Iprops {
	keyword: string;
}

const SearchedCard: React.FC<Iprops> = ({ keyword }) => {
	const serchData: any = [];

	const SearchAlg = (movie: any) => {
		const LowerCaseValue = movie?.plot?.toLowerCase();
		if (LowerCaseValue?.includes(keyword?.toLowerCase())) {
			return true;
		}
		return false;
	};
	for (const movie of Data) {
		if (SearchAlg(movie)) {
			console.log(movie);
			serchData?.push(movie);
			// setSearchedData(movie);
		} else {
			console.log("");
		}
	}

	return (
		<CardHold>
			{serchData?.map((props: any) => (
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

export default SearchedCard;
