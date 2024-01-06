import React from "react";

const Search = ({ handleSearch }) => {
	return (
		<input
			type='text'
			placeholder='Search by title'
			onChange={handleSearch}
			style={{
				padding: "10px",
				border: "1px solid #ccc",
				borderRadius: "5px",
				fontSize: "16px",
				marginBottom: "10px",
			}}
		/>
	);
};

export default Search;
