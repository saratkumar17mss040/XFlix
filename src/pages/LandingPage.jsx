import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import GenrePanel from '../components/GenrePanel';
import Dashboard from '../components/Dashboard';
import PillSelectionPopupMsg from '../components/PillSelectionPopup';

export default function LandingPage() {
	const [searchData, setSearchData] = useState('');
	const [url, setUrlData] = useState(
		process.env.REACT_APP_XFLIX_BACKEND_BASE_URL
	);
	const { data, loading, error } = useFetch(url);
	const [isPopupShown, setPopUpData] = useState(false);

	const localStoragePopupMsg = localStorage.getItem('pillSelectionPopupMsg');

	if (localStoragePopupMsg === null) {
		localStorage.setItem(
			'pillSelectionPopupMsg',
			'Please select either genre selection or age selection as the XFlix API supports only one at a time.If you select both the data wont accurate.'
		);
		setPopUpData(true);
	}

	const setSearch = (search) => {
		setSearchData(search);
	};

	const setUrl = (url) => {
		setUrlData(url);
	};

	return (
		<>
			<PillSelectionPopupMsg
				isPopupShown={isPopupShown}
				setPopUpData={setPopUpData}
			/>
			<Header setSearch={setSearch} />
			<GenrePanel setUrl={setUrl} />
			<Dashboard
				url={url}
				searchData={searchData}
				data={data}
				loading={loading}
				error={error}
			/>
		</>
	);
}
