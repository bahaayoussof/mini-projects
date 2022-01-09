import React from "react";

const Navbar = props => {
	const { totalCounters } = props;
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Navbar{" "}
				<span className="badge badge-pill badge-success ml-2">{totalCounters}</span>
			</a>
		</nav>
	);
};

export default Navbar;
