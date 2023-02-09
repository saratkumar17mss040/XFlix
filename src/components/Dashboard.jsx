import useFetch from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export default function Dashboard({}) {
	// const {data, loading, error} = useFetch("https://bb271a1f-0c8e-42d6-a699-fb6f244c3d69.mock.pstmn.io/v1/videos");

	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const url =
		'https://bb271a1f-0c8e-42d6-a699-fb6f244c3d69.mock.pstmn.io/v1/videos';

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

	// return { data, loading, error };

	function RenderGridItems(videoData) {
		console.log(videoData);
		return videoData.map((video) => {
			return (
				<div className="video-card" id={video['_id']}>
					<img src={video.previewImg} alt={video.title} />
					<p className="video-title">{video.title}</p>
					<p className="video-time">{video.releaseDate}</p>
				</div>
			);
		});
	}

	console.log(data);

	function RenderVideoStats(videoData) {
		if (loading) {
			console.log('loader');
			return <div>Loading...</div>;
		} else if (Object.keys(error).length > 0) {
			console.log(error);
			return <div>Error...</div>;
		} else if (data) {
			console.log(data);
			console.log(videoData);
			return <RenderGridItems videoData={videoData} />;
		}
		// console.log(videoData);
	}

	return (
		<div className="dashboard-grid">
			<RenderVideoStats videoData={data.videos} />
			{/* <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-1"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-2"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-3"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div>
      <div className="dashboard-grid-item">
        <div className="video-card">
          <img
            className="video-img"
            src="https://picsum.photos/100"
            alt="video-4"
          />
          <p className="video-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            voluptatem excepturi cupiditate. Adipisci sapiente, omnis qui quod
          </p>
          <p className="video-time">1 months ago</p>
        </div>
      </div> */}
		</div>
	);
	// );
	// }
}
