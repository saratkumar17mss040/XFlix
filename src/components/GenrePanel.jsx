import './GenrePanel.css';

export default function GenrePanel({}) {
	return (
		<>
			<div className="genre-panel-pill-flex-container">
				<div className="genre-pill genre-pill-selected">All Genre</div>
				<div className="genre-pill">Education</div>
				<div className="genre-pill">Sports</div>
				<div className="genre-pill">Comedy</div>
				<div className="genre-pill">LifeStyle</div>
				<div className="genre-pill genre-pill-selected arrow-icon-wrapper">
					<i className="fa fa-arrows-v" aria-hidden="true"></i>
					&nbsp;
					<select name="sortBySelect" id="sortBySelect">
						<option value="Sort By: Uploaded Date" selected>
							Sort By: Uploaded Date
						</option>
						<option value="Sort By: View Count">Sort By: View Count</option>
					</select>
				</div>
			</div>
			<div className="age-panel-flex-container">
				<div className="age-pill age-pill-selected">Any age group</div>
				<div className="age-pill">7+</div>
				<div className="age-pill">12+</div>
				<div className="age-pill">16+</div>
				<div className="age-pill">18+</div>
			</div>
		</>
	);
}
