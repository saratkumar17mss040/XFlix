import RenderVideoStats from './RenderVideoStats';
import './Dashboard.css';

export default function Dashboard({ searchData = '', data, loading, error }) {
	return (
		<RenderVideoStats
			loading={loading}
			error={error}
			data={data}
			searchData={searchData}
		/>
	);
}
