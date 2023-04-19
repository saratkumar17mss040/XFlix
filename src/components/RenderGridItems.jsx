import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

dayjs.extend(relativeTime);

export default function RenderGridItems({ data, searchData }) {
	const history = useHistory();

	function filterGirdItems(data, searchData) {
		if (searchData.length === 0) {
			return data;
		} else {
			const actualSearchDataInLowerCase = searchData.toLowerCase();
			return data.filter((video) => {
				const currVideoTitleInLowerCase = video.title.toLowerCase();
				if (currVideoTitleInLowerCase.includes(actualSearchDataInLowerCase)) {
					return video;
				}
			});
		}
	}

	const filteredGridItems = filterGirdItems(data, searchData);
	if (filteredGridItems.length === 0) {
		return (
			<div className="no-search-txt">
				No Search is found :( . Please try searching some other movies.
			</div>
		);
	} else {
		return (
			<div className="dashboard-grid">
				{filteredGridItems.map((video) => {
					const timeAgo = dayjs().to(dayjs(video.releaseDate));
					return (
						<div
							onClick={() => {
								history.push(`/video/${video['_id']}`);
							}}
							key={video['_id']}
							id={video['_id']}
							className="dashboard-grid-item"
						>
							<div className="video-card">
								<img
									className="video-img"
									src={video.previewImage}
									alt={video.title}
								/>
								<p className="video-title">{video.title}</p>
								<p className="video-time">{timeAgo}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
