export default function RenderGenrePills({ genreObj }) {
	return (
		<>
			<div
				className={`genre-pill ${
					genreObj['All Genre'] ? 'genre-pill-selected' : ''
				}`}
				data-value="All Genre"
			>
				All Genre
			</div>
			<div
				className={`genre-pill ${
					genreObj.Education ? 'genre-pill-selected' : ''
				}`}
				data-value="Education"
			>
				Education
			</div>
			<div
				className={`genre-pill ${genreObj.Sports ? 'genre-pill-selected' : ''}`}
				data-value="Sports"
			>
				Sports
			</div>
			<div
				className={`genre-pill ${genreObj.Comedy ? 'genre-pill-selected' : ''}`}
				data-value="Comedy"
			>
				Comedy
			</div>
			<div
				className={`genre-pill ${
					genreObj.LifeStyle ? 'genre-pill-selected' : ''
				}`}
				data-value="LifeStyle"
			>
				LifeStyle
			</div>
		</>
	);
}
