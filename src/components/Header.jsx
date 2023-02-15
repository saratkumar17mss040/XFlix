import { useState } from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import UploadVideoModal from './UploadVideoModal';
import XFlixLogo from './XFlixLogo.svg';
import ProfilePhoto from './ProfilePhoto.svg';

export default function Header({ setSearch }) {
	const [isModalShown, setToggleModal] = useState(false);

	const toggleModal = () => {
		setToggleModal(!isModalShown);
	};

	return (
		<div className="header-flex-container">
			<div className="header-logo">
				<img src={XFlixLogo} alt="XFlixLogo" />
			</div>
			<SearchBar setSearch={setSearch} />
			<button onClick={toggleModal} className="header-btn btn-upload">
				<i className="fa fa-upload upload-icon" aria-hidden="true"></i>
				&nbsp; Upload
			</button>
			<img className="header-profile-img" src={ProfilePhoto} alt="profile" />
			<UploadVideoModal
				isModalShown={isModalShown}
				closeModal={() => {
					setToggleModal(false);
				}}
			/>
		</div>
	);
}
