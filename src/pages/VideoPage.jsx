import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Dashboard from '../components/Dashboard';
import XFlixLogo from '../components/XFlixLogo.svg';
import { useLocation, Link } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';
import './VideoPage.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function VideoPage({ data, loading, error }) {
	const location = useLocation();
	useScrollToTop();

	const videoId = location.pathname.split('/video/')[1];
	if (data === null) {
		data = JSON.parse(localStorage.getItem('videoData'));
	}
	const currentVideoData = data.filter(
		(video) => video['_id'] === videoId
	);
	const { videoLink, title, releaseDate, contentRating, votes } =
		currentVideoData['0'];
	dayjs.extend(relativeTime);
	const timeAgo = dayjs().to(dayjs(releaseDate));

	const [commonVote, setCommonVote] = useState(
		JSON.parse(localStorage?.getItem('voteInfo')) || {
			upVoteCount: 0,
			downVoteCount: 0,
		}
	);

	useEffect(() => {
		localStorage.setItem('voteInfo', JSON.stringify(commonVote));
	}, [commonVote]);

	function setUpdateVote(voteType) {
		let votePayload = {};
		setCommonVote({
			...commonVote,
			[voteType]: commonVote[voteType] + 1,
		});
		if (voteType === 'upVoteCount') {
			votePayload = {
				vote: 'upVote',
				change: 'increase',
			};
		} else {
			votePayload = {
				vote: 'downVote',
				change: 'decrease',
			};
		}

		// mock for patch was not working on amock service.
		// so, i used localhost mock using mockoon tool
		axios
			.patch(
				`${process.env.REACT_APP_XFLIX_BACKEND_BASE_URL}/${videoId}/votes`,
				votePayload
			)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<>
			<Link to="/">
				<img
					className="video-page-brand-logo"
					src={XFlixLogo}
					alt="XFlixLogo"
				/>
			</Link>
			<div className="video-page-flex-container">
				<iframe
					title={title}
					allow="fullscreen"
					src={`https://www.${videoLink}`}
				></iframe>
				<div className="video-info-container">
					<div>
						<p className="main-video-title">{title}</p>
						<p className="video-stats">
							{contentRating} &nbsp; <span className="video-dot"></span> &nbsp;{' '}
							<span className="video-time-period">{timeAgo}</span>{' '}
						</p>
					</div>
					<div className="video-btn-wrapper">
						<button
							className="btn btn-like"
							onClick={() => setUpdateVote('upVoteCount')}
						>
							<i className="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp;{' '}
							{commonVote.upVoteCount} k
						</button>
						<button
							className="btn btn-unlike"
							onClick={() => setUpdateVote('downVoteCount')}
						>
							<i className="fa fa-thumbs-down" aria-hidden="true"></i> &nbsp;
							{commonVote.downVoteCount}k
						</button>
					</div>
				</div>
				<hr className="hr-line-after-main-video" />
				<div className="dashboard-wrapper">
					<Dashboard data={data} loading={loading} error={error} />
				</div>
			</div>
		</>
	);
}
