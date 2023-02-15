import './App.css';
import LandingPage from './pages/LandingPage';
import useFetch from './hooks/useFetch';
import VideoPage from './pages/VideoPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	console.log('App renders');
	const url = 'https://amock.io/api/Sarath/v1/videos';
	const { data, loading, error } = useFetch(url);
	console.log(data);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<LandingPage data={data} loading={loading} error={error} />
						)}
					/>
					<Route
						path="/video/:id"
						render={() => (
							<VideoPage data={data} loading={loading} error={error} />
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
