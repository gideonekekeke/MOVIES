import React, {useState} from "react";
import Hero from "../components/Hero";
import Card from "../components/commons/Card";
import styled from "@emotion/styled";
import SearchedCard from "../components/commons/SearchedCard";

const HomePage = () => {

	const [keyword, setKeyword] = useState("")
	return (
		<div style={{ color: "white", minHeight: "100vh" }}>
			<Hero />

			<input onChange={(e)=>{
				setKeyword(e.target.value)
			}} />
			<h2
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				Searched
			</h2>

			<SearchedCard keyword = {keyword} />
			<h2
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				MOVIES
			</h2>

			<Card />
		</div>
	);
};

export default HomePage;
