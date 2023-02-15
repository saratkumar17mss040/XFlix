import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setData(null);
		setError(null);
		axios
			.get(url)
			.then((res) => {
				setLoading(false);
				//checking for multiple responses for more flexibility
				//with the url we send in.
				res.data && setData(res.data);
				localStorage.setItem('videoData', JSON.stringify(res.data));
			})
			.catch((err) => {
				console.log(err);
				setError('An error occurred...');
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
