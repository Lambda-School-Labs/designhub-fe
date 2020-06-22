import React from 'react';

import { TabPanel } from 'react-tabs';
import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function Illustration() {
	return (
		<TabPanel className="tabs-container">
			<div className="empty-state">
				<img src={''} alt="empty" className="empty-icon" />
				<h1 className="no-projects">There are no projects in this category.</h1>
			</div>

			<div className="explore-projects-array">
				<ProjectThumbnail />;
			</div>
		</TabPanel>
	);
}