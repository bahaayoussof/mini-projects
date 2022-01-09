import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
	const [filter, setFilter] = useState({
		upvote: false,
		recent: false,
	});

	const sortByUpvotes = () => {
		setFilter(article => {
			return {
				...article,
				upvote: true,
				recent: false,
			};
		});
	};

	const sortByDates = () => {
		setFilter(article => {
			return {
				...article,
				upvote: false,
				recent: true,
			};
		});
	};
	return (
		<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			<div className="layout-row align-items-center justify-content-center my-20 navigation">
				<label className="form-hint mb-0 text-uppercase font-weight-light">
					Sort By
				</label>
				<button
					onClick={sortByUpvotes}
					data-testid="most-upvoted-link"
					className="small"
				>
					Most Upvoted
				</button>
				<button
					onClick={sortByDates}
					data-testid="most-recent-link"
					className="small"
				>
					Most Recent
				</button>
			</div>
			<Articles articles={articles} filter={filter} />
		</div>
	);
}

export default App;
