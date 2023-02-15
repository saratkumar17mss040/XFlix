import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ setSearch }) {
	return (
		<div className="search-bar-wrapper">
			<input
				onChange={(event) => setSearch(event.target.value)}
				className="search-input"
				type="search"
				placeholder="Search"
			/>
			<div className="icon">
				<i className="fa fa-search" aria-hidden="true"></i>
			</div>
		</div>
	);
}
