import RenderVideoStats from './RenderVideoStats';
import './Dashboard.css';

export default function Dashboard({ searchData = '', data, loading, error }) {
	// const url =
	// 'https://bb271a1f-0c8e-42d6-a699-fb6f244c3d69.mock.pstmn.io/v1/videos';
	// 'https://xflix.free.beeceptor.com/v1/videos';

	// const { data, loading, error } = useFetch(url);

	return (
		<RenderVideoStats
			loading={loading}
			error={error}
			data={data}
			searchData={searchData}
		/>
	);
}
