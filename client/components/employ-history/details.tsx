import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Notes from '../notes';
import { Employment, Project, TitleDuration } from '@/types/index';
import style from '@/styles/employ-details.module.css';

type EmployHistoryDetailsProps = {
	employment: Employment;
	bgColor: string;
};

const HEADING_CLASSES = 'h6 fw-semibold';

const formatDuration = (title: string, start: string, end: string, isHeading = false) => {
	return (
		<div className='d-flex flex-wrap justify-content-between text-light'>
			{isHeading ? (
				<h4 className={HEADING_CLASSES}>{title}</h4>
			) : (
				<div className={HEADING_CLASSES}>{title}</div>
			)}

			<div>
				{start} - {end}
			</div>
		</div>
	);
};

const formatTitles = (titles: string | TitleDuration[]) =>
	Array.isArray(titles) ? (
		<>
			{titles.map(title => (
				<React.Fragment key={title.title}>
					{formatDuration(title.title, title.start, title.end)}
				</React.Fragment>
			))}
		</>
	) : (
		<div className={HEADING_CLASSES}>{titles}</div>
	);

const formatProject = (project: Project) => (
	<div>
		<div className={`${HEADING_CLASSES} text-info`}>Responsiblities</div>
		<Notes notes={project.highlights} />
		{project.techsUsed && (
			<>
				<div className={`${HEADING_CLASSES} text-info`}>Technologies Used</div>
				<ul style={{ listStyle: 'none' }} className='d-flex flex-wrap m-0 p-0'>
					{project.techsUsed.map((techUsed, index) => (
						<li className='px-2' key={index}>
							{techUsed}
						</li>
					))}
				</ul>
			</>
		)}
	</div>
);

const formatProjects = (projects: Project[], bgColor: string) =>
	!projects.length ? null : projects.length === 1 ? (
		<>{formatProject(projects[0])}</>
	) : (
		<Accordion defaultActiveKey={projects[0].name} flush>
			{projects.map(project => (
				<Accordion.Item key={project.name} eventKey={project.name ?? ''}>
					<Accordion.Button className={`${style.projectListItem} bg-${bgColor} d-block px-1`}>
						{formatDuration(project.name ?? '', project.start ?? '', project.end ?? '', true)}
					</Accordion.Button>
					<Accordion.Body className={`bg-${bgColor}`}>{formatProject(project)}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);

const EmployHistoryDetails: React.FC<EmployHistoryDetailsProps> = ({ employment, bgColor }) => (
	<article style={{ minHeight: '400px' }} className={`p-3 bg-${bgColor}`}>
		<div className='mb-4'>{formatTitles(employment.titles)}</div>
		{formatProjects(employment.projects, bgColor)}
	</article>
);

export default EmployHistoryDetails;
