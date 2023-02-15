export default function RenderAgePills({ agePillsObj }) {
	return (
		<>
			<div
				className={`age-pill ${
					agePillsObj['All Age'] ? 'age-pill-selected' : ''
				}`}
				data-value="All Age"
			>
				Any age group
			</div>
			<div
				className={`age-pill ${agePillsObj['7'] ? 'age-pill-selected' : ''}`}
				data-value="7"
			>
				7+
			</div>
			<div
				className={`age-pill ${agePillsObj['12'] ? 'age-pill-selected' : ''}`}
				data-value="12"
			>
				12+
			</div>
			<div
				className={`age-pill ${agePillsObj['16'] ? 'age-pill-selected' : ''}`}
				data-value="16"
			>
				16+
			</div>
			<div
				className={`age-pill ${agePillsObj['18'] ? 'age-pill-selected' : ''}`}
				data-value="18"
			>
				18+
			</div>
		</>
	);
}
