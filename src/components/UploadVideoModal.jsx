import './UploadVideoModal.css';

export default function UploadVideoModal({ isModalShown, closeModal }) {
	return isModalShown ? (
		<div
			className="modal-backdrop"
			onClick={() => {
				// close modal when outside of modal is clicked
				closeModal();
			}}
		>
			<div
				className="modal-content"
				onClick={(e) => {
					// do not close modal if anything inside modal content is clicked
					e.stopPropagation();
				}}
			>
				<div className="modal-title">
					<div>Upload Video</div>
					<div onClick={closeModal} className="close-icon-wrapper">
						<i className="fa fa-times" aria-hidden="true"></i>
					</div>
				</div>
				<input type="text" placeholder="Video Link" />
				<p>This link will be used to derive the video</p>
				<input type="text" placeholder="Thumbnail Image Link" />
				<p>This link will be used to derive the video</p>
				<input type="text" placeholder="Thumbnail Image Link" />
				<p>This link will be used to derive the video</p>
				<select name="genre-modal-dropdown" id="genre-modal-dropdown">
					<option value="Genre" disabled selected>
						Genre
					</option>
					<option value="Education">Education</option>
					<option value="Sports">Sports</option>
					<option value="Comedy">Comedy</option>
					<option value="Lifestyle">LifeStyle</option>
				</select>
				<p>Genre will help in categorizing your videos</p>
				<select name="age-modal-dropdown" id="age-modal-dropdown">
					<option value="Suitable age group for the clip" disabled selected>
						Suitable age group for the clip
					</option>
					<option value="7+">7+</option>
					<option value="12+">12+</option>
					<option value="16+">16+</option>
					<option value="18+">18+</option>
				</select>
				<p>This will be used to filter videos on age group suitability</p>
				<input
					type="date"
					name="dob"
					data-placeholder="Release Date"
					required
					aria-required="true"
				/>
				<p>This will be used to sort videos</p>
				<div className="btn-flex-container">
					<button className="btn-modal btn-modal-upload">upload video</button>
					<button className="btn-modal btn-modal-cancel">cancel</button>
				</div>
				{/* <input type="date" placeholder="Choose date" value="" onChange="this.setAttribute('value', this.value)" /> */}
				{/* <input type="date" placeholder="Release Date" onChange="this.setAttribute('value', this.value)" /> */}
				{/* <input type="text" value="Release date" placeholder="Release date" onfocus="(this.type='date')" onblur="(this.type='text')"  /> */}
			</div>
		</div>
	) : null;
}
