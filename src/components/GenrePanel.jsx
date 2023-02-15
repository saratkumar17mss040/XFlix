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
		console.log(event.target.value);
		setUrl(
			`https://amock.io/api/Sarath/v1/videos?sortBy=${event.target.value}`
		);
	}

	useEffect(() => {
		console.log('called age');
		if (notInitialRender.current) {
			if (agePillsObj['All Age']) {
				setUrl('https://amock.io/api/Sarath/v1/videos');
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
			console.log(biggestAgeInSelectedAgePills);
			const encodedAgeUrlValue = encodeURIComponent(
				`${biggestAgeInSelectedAgePills}+`
			);
			console.log(encodedAgeUrlValue);
			if (encodedAgeUrlValue.includes('0')) {
				return;
			}
			setUrl(
				`https://amock.io/api/Sarath/v1/videos?contentRating=${encodedAgeUrlValue}`
			);
		} else {
			notInitialRender.current = true;
		}
	}, [agePillsObj, setUrl]);

	useEffect(() => {
		console.log('called genre');
		let genres = '';
		if (genreObj['All Genre']) {
			setUrl('https://amock.io/api/Sarath/v1/videos?genres=All');
			return;
		}
		for (const genreProps in genreObj) {
			console.log(genreProps, genreObj[genreProps]);
			if (genreObj[genreProps]) {
				genres += genreProps + ',';
			}
		}
		genres = genres?.slice(0, genres.length - 1);
		if (genres !== undefined && genres.length > 0) {
			console.log("called set");
			setUrl(`https://amock.io/api/Sarath/v1/videos?genres=${genres}`);
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
		// if (event.target.dataset.value === 'All Age') {
		// 	setAgePillsObj({
		// 		...agePillsObj,
		// 		'All Age': !agePillsObj['All Age'],
		// 		7: false,
		// 		12: false,
		// 		16: false,
		// 		18: false,
		// 	});
		// } else {
		// 	setAgePillsObj({
		// 		...agePillsObj,
		// 		'All Age': false,
		// 		[event.target.dataset.value]: !agePillsObj[event.target.dataset.value],
		// 	});
		// }
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
