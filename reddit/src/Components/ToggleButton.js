import React from 'react';

function ToggleButton() {
	return <div id="toggleButton">
		<label className="switch">
  		<input type="checkbox"/>
  		<span className="slider round"></span>
		</label>
  </div>
}

export default ToggleButton;