import RenderGridItems from './RenderGridItems';

export default function RenderVideoStats({ loading, error, data, searchData }) {
	if (loading) {
		return (
			<div className="loader">
				<i className="fa fa-circle-o-notch fa-spin loader-spinner"></i>
			</div>
		);
	} else if (error) {
		return (
			<div className="error">
				<i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
				<span> Something went wrong :(</span>
			</div>
		);
	} else if (data?.videos) {
		return <RenderGridItems data={data} searchData={searchData} />;
	}
}
