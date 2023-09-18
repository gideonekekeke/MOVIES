import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layouts/webLayout";
import HomePage from "../pages/HomePage";
import DetailedPage from "../pages/DetailedPage";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <WebLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},

	{
		path: "/detailed/:title/:id",
		element: <DetailedPage />,
	},
]);

export default Index;
