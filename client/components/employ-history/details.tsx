import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Notes from '../notes';
import { Employment, Project, TitleDuration } from '../../../types';

type EmployHistoryDetailsProps = {
	employment: Employment;
	bgColor: string;
};

const formatDuration = (title: string, start: string, end: string) => (
	<div className='d-flex flex-wrap justify-content-between'>
		<div className='h6 fw-semibold text-warning'>{title}</div>
		<div className='text-white'>
			{start} - {end}
		</div>
	</div>
);

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
		<div className='h6 fw-semibold text-warning'>{titles}</div>
	);

const formatProject = (project: Project) => (
	<div>
		<div className='h6 fw-semibold text-info'>Responsiblities</div>
		<Notes notes={project.highlights} />
		{project.techsUsed && (
			<>
				<div className='h6 fw-semibold text-info'>Technologies Used</div>
				<ul style={{ listStyle: 'none' }} className='d-flex flex-wrap m-0 p-0 text-white'>
					{project.techsUsed.map((techUsed, index) => (
						<li className='px-2 font-monospace' key={index}>
							{techUsed}
						</li>
					))}
				</ul>
			</>
		)}
	</div>
);

const formatProjects = (projects: Project[], bgColor: string) =>
	!projects.length ? null : projects.length > 1 ? (
		<Accordion defaultActiveKey={projects[0].name} flush>
			{projects.map(project => (
				<Accordion.Item key={project.name} eventKey={project.name ?? ''}>
					<Accordion.Button className={`bg-${bgColor} d-block px-0`}>
						{formatDuration(project.name ?? '', project.start ?? '', project.end ?? '')}
					</Accordion.Button>
					<Accordion.Body className={`bg-${bgColor}`}>{formatProject(project)}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	) : (
		<>{formatProject(projects[0])}</>
	);

const EmployHistoryDetails: React.FC<EmployHistoryDetailsProps> = ({ employment, bgColor }) => (
	<article style={{ minHeight: '500px' }} className={`p-3 bg-${bgColor}`}>
		<div className='mb-4'>{formatTitles(employment.titles)}</div>
		{formatProjects(employment.projects, bgColor)}
	</article>
);

export default EmployHistoryDetails;
