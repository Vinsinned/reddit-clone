import React from 'react';

function Filter() {
	return <div id="filterBar">
		<div id="filtersContainer">
			<div className="filters current" id="bestContainer">
				<span className="material-icons filterIcon" id="best"> rocket </span>
				<p className="footerPara">Best</p>
			</div>
			<div className="filters">
				<span className="material-icons filterIcon"> local_fire_department </span>
				<p className="footerPara">Hot</p>
			</div>
			<div className="filters">
				<span className="material-icons filterIcon"> flare </span>
				<p className="footerPara">New</p>
			</div>
			<div className="filters">
				<span className="material-icons filterIcon"> leaderboard </span>
				<p className="footerPara">Top</p>
			</div>
			<span className="material-icons" id="filterMore"> more_horiz </span>
		</div>
		<div id="viewOptions">
			<span className="material-icons" id="cardIcon"> view_stream </span>
			<span className="material-icons"> keyboard_arrow_down </span>
		</div>
  </div>
}

export default Filter;