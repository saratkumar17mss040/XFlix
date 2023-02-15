import { useEffect, useState, useRef } from 'react';
import './GenrePanel.css';
import RenderGenrePills from './RenderGenrePills';
import RenderAgePills from './RenderAgePills';

export default function GenrePanel({ setUrl }) {
	const notInitialRender = useRef(false);

	const [genreObj, setGenreObj] = useState({
		'All Genre': false,
		Education: false,
		Sports: false,
		Comedy: false,
		LifeStyle: false,
	});

	const [agePillsObj, setAgePillsObj] = useState({
		'All Age': false,
		7: false,
		12: false,
		16: false,
		18: false,
	});

	function setVideoParameterOnUrl(event) {
		setUrl(
			`${process.env.REACT_APP_XFLIX_BACKEND_BASE_URL}?sortBy=${event.target.value}`
		);
	}

	useEffect(() => {
		if (notInitialRender.current) {
			if (agePillsObj['All Age']) {
				setUrl(process.env.REACT_APP_XFLIX_BACKEND_BASE_URL);
				return;
			}
			let biggestAgeInSelectedAgePills = 0;
			for (const ageProps in agePillsObj) {
				if (
					agePillsObj[ageProps] &&
					parseInt(ageProps) > biggestAgeInSelectedAgePills
				) {
					biggestAgeInSelectedAgePills = parseInt(ageProps);
				}
			}
			const encodedAgeUrlValue = encodeURIComponent(
				`${biggestAgeInSelectedAgePills}+`
			);
			if (encodedAgeUrlValue.includes('0')) {
				return;
			}
			setUrl(
				`${process.env.REACT_APP_XFLIX_BACKEND_BASE_URL}?contentRating=${encodedAgeUrlValue}`
			);
		} else {
			notInitialRender.current = true;
		}
	}, [agePillsObj, setUrl]);

	useEffect(() => {
		let genres = '';
		if (genreObj['All Genre']) {
			setUrl(`${process.env.REACT_APP_XFLIX_BACKEND_BASE_URL}?genres=All`);
			return;
		}
		for (const genreProps in genreObj) {
			if (genreObj[genreProps]) {
				genres += genreProps + ',';
			}
		}
		genres = genres?.slice(0, genres.length - 1);
		if (genres !== undefined && genres.length > 0) {
			setUrl(
				`${process.env.REACT_APP_XFLIX_BACKEND_BASE_URL}?genres=${genres}`
			);
		}
	}, [genreObj, setUrl]);

	function handleGenrePillSelction(event) {
		if (event.target.dataset.value === 'All Genre') {
			setGenreObj({
				...genreObj,
				'All Genre': !genreObj['All Genre'],
				Education: false,
				Sports: false,
				Comedy: false,
				LifeStyle: false,
			});
		} else if (event.target.dataset.value !== undefined) {
			setGenreObj({
				...genreObj,
				'All Genre': false,
				[event.target.dataset.value]: !genreObj[event.target.dataset.value],
			});
		}
	}

	function handleAgePillSelection(event) {
		if (event.target.dataset.value === undefined) {
			return;
		}
		setAgePillsObj({
			'All Age': false,
			7: false,
			12: false,
			16: false,
			18: false,
			[event.target.dataset.value]: !agePillsObj[event.target.dataset.value],
		});
	}

	return (
		<>
			<div
				className="genre-panel-pill-flex-container"
				onClick={(event) => handleGenrePillSelction(event)}
			>
				<RenderGenrePills genreObj={genreObj} />
				<div className="genre-pill genre-pill-selected arrow-icon-wrapper">
					<i className="fa fa-arrows-v" aria-hidden="true"></i>
					&nbsp;
					<select
						onChange={(event) => setVideoParameterOnUrl(event)}
						name="sortBySelect"
						id="sortBySelect"
					>
						<option value="releaseDate">Sort By: Uploaded Date</option>
						<option value="viewCount">Sort By: View Count</option>
					</select>
				</div>
			</div>
			<div
				className="age-panel-flex-container"
				onClick={(event) => handleAgePillSelection(event)}
			>
				<RenderAgePills agePillsObj={agePillsObj} />
			</div>
		</>
	);
}
