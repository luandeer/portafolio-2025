import React from 'react';
import './style.css';
export const Banner1 = () => {
	return (
		<div className="outer-wrap  ">
			<div className="logo-container the-great-outdoors ">
				{/* <p className="text-xl text-white text-center flex items-center justify-center pt-6">
					¡Bienvenidos a este espacio!
				</p> */}
				<div className="grass"></div>
				<div className="ground"></div>
				<div className="sun"></div>
				{/* <div className="mountain-4"></div>
				<div className="mountain-1"></div>
				<div className="mountain-2"></div>
				<div className="mountain-3"></div> */}
				<div className="tree-group-1">
					<i className="fa fa-tree back-tree"></i>
					<i className="fa fa-tree left-tree"></i>
					<i className="fa fa-tree right-tree"></i>
				</div>
				<div className="tree-group-2">
					<i className="fa fa-tree back-tree"></i>
					<i className="fa fa-tree left-tree"></i>
					<i className="fa fa-tree right-tree"></i>
				</div>
				<i className="fa fa-map-signs signpost"></i>
			</div>
		</div>
	);
};
