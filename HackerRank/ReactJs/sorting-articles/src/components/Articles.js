import React, { useState, useEffect } from "react";

const Articles = ({ articles, filter }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (filter.upvotes) {
			const newData = articles.sort(
				(first, second) => second.upvotes - first.upvotes
			);
			setData([...newData]);
    }
    else if (filter.recent) {
			const newData = articles.sort(
				(first, second) => new Date(second.date) - new Date(first.date)
			);
			setData([...newData]);
    }
    else {
			const newData = articles.sort(
				(first, second) => second.upvotes - first.upvotes
			);
			setData([...newData]);
		}
	}, [filter.upvote, filter.recent, filter, articles]);

	return (
		<div className="card w-50 mx-auto">
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Upvotes</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.map((article, index) => {
							return (
								<tr data-testid="article" key={index}>
									<td data-testid="article-title">{article.title}</td>
									<td data-testid="article-upvotes">{article.upvotes}</td>
									<td data-testid="article-date">{article.date}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Articles;
