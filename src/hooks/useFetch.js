import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const useRequest = (initUrl) => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // let ignore = false;
//         const fetchProduct = async () => {
//             setLoading(true);
//             try {
//                 setError({});
//                 const response = await axios(initUrl);
//                 // if(!ignore) {
//                     setData(response.data);
//                 // }
//             }
//             catch(err) {
//                 setError(err);
//             }
//             setLoading(false);
//         };
//         fetchProduct();
//         // return (() => {
//         //     ignore = true;
//         // })
//     }, [initUrl]);

//     return { data, loading, error };
// };

// export default useRequest;

function useFetch(url) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});

	useEffect(() => {
		let ignore = false;
		const fetchProduct = async () => {
			setLoading(true);
			try {
				setError({});
				const response = await axios(url);
				if (!ignore) {
					setData(response.data);
				}
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		fetchProduct();
		return () => {
			ignore = true;
		};
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
