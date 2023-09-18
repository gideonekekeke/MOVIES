import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque&family=Inria+Serif:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Outfit:wght@100&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&family=Roboto:wght@100&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap");
				body {
					background-color: #1f1f1f;
					min-height: 100vh;
					margin: 0;
					padding: 0;
					font-family: "Montserrat", sans-serif;
					color: "#fff";
				}
			`}
		/>
	);
};

export default GlobalStyles;
