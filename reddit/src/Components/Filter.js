import React from 'react';

function Filter() {
	return <div id="filterBar">
		<div id="filtersContainer">
			<div className="filters current">
				<span className="material-icons" id="best"> rocket </span>
				<p className="footerPara">Best</p>
			</div>
			<div className="filters">
				<span className="material-icons"> local_fire_department </span>
				<p className="footerPara">Hot</p>
			</div>
			<div className="filters">
				<span className="material-icons"> flare </span>
				<p className="footerPara">New</p>
			</div>
			<div className="filters">
				<span className="material-icons"> leaderboard </span>
				<p className="footerPara">Top</p>
			</div>
			<span className="material-icons filters"> more_horiz </span>
		</div>
		<div id="viewOptions" className="filters">
			<span className="material-icons"> view_stream </span>
			<span className="material-icons"> keyboard_arrow_down </span>
		</div>
  </div>
}

export default Filter;