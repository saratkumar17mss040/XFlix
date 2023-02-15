import './PillSelectionPopup.css';

export default function PillSelectionPopupMsg({ isPopupShown, setPopUpData }) {
	return (
		isPopupShown && (
			<div id="pillPopupModal" className="pill-modal">
				<div className="pill-modal-content">
					<span className="close" onClick={() => setPopUpData(false)}>
						&times;
					</span>
					<p>{localStorage.getItem('pillSelectionPopupMsg')}</p>
				</div>
			</div>
		)
	);
}
