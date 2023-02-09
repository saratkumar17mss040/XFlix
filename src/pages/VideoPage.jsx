import Dashboard from '../components/Dashboard';
import XFlixLogo from '../components/XFlixLogo.svg';
import './VideoPage.css';

export default function VideoPage({}) {
	return (
		<>
			<a href="#landing-page">
				<img
					className="video-page-brand-logo"
					src={XFlixLogo}
					alt="XFlixLogo"
				/>
			</a>
			<div className="video-page-flex-container">
				<iframe
					title="video-1"
					allow="fullscreen"
					src="https://www.youtube.com/embed/tgbNymZ7vqY"
				></iframe>
				<div className="video-info-container">
					<div>
						<p className="main-video-title">Dude You Re Getting A Telescope</p>
						<p className="video-stats">
							+12 &nbsp; <span className="video-dot"></span> &nbsp;{' '}
							<span className="video-time-period">5 months ago</span>{' '}
						</p>
					</div>
					<div className="video-btn-wrapper">
						<button className="btn btn-like">
							<i className="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp; 123k
						</button>
						<button className="btn btn-unlike">
							<i className="fa fa-thumbs-down" aria-hidden="true"></i> &nbsp;
							435k
						</button>
					</div>
				</div>
				<hr className="hr-line-after-main-video" />
				<div className="dashboard-wrapper">
					<Dashboard />
				</div>
			</div>
		</>
	);
}
