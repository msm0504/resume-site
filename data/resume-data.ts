import { Education, Employment } from '@/types/index';

export const EDUCATION: Education[] = [
	{
		schoolName: 'The College of New Jersey',
		city: 'Ewing',
		state: 'New Jersey',
		gradDate: 'December 2011',
		highlights: [
			'Bachelor of Science in Computer Science with a Minor in Philosophy',
			'Magna Cum Laude, Merit Scholar',
			"GPA: 3.85 / 4.0, Dean's List (all semesters)",
		],
	},
];

export const INTERNSHIPS: Employment[] = [
	{
		companyName: 'AT&T',
		city: 'Middletown',
		state: 'New Jersey',
		start: 'June 2010',
		end: 'August 2011',
		titles: [
			{ title: 'Student Intern', start: 'June 2011', end: 'August 2011' },
			{ title: 'Student Intern', start: 'June 2010', end: 'August 2010' },
		],
		roles: [
			{
				highlights: [
					'Converted business requirements into Tier 1 system requirements.',
					'Wrote documents outlining high level requirements for each system impacted in projects.',
					'Participated in regular meetings with both business clients and engineers who would later write more detailed requirements.',
				],
			},
		],
	},
	{
		companyName: 'Marathon Data Systems, LLC',
		city: 'Wall',
		state: 'New Jersey',
		start: 'May 2009',
		end: 'August 2009',
		titles: 'Student Intern',
		roles: [
			{
				highlights: [
					'Application programmer for a web-based system to handle accounting and appointment scheduling.',
					'Created custom website to handle customer sign-ups.',
					'Made customizations to existing forms (e.g. service orders, invoices, inspection reports) and added new forms to system.',
					'Added searching and sorting criteria to reports.',
				],
				techsUsed: [
					'HTML',
					'CSS',
					'JavaScript',
					'VB Script',
					'Visual Basic',
					'ASP',
					'Microsoft SQL Server',
				],
			},
		],
	},
];

export const EMPLOYMENT_HISTORY: Employment[] = [
	{
		companyName: 'Travelport',
		city: 'Remote',
		state: '',
		start: 'June 2023',
		end: 'present',
		titles: 'Senior Software Development Engineer II',
		roles: [
			{
				highlights: [
					'UI developer on a small Agile team building web applications to support travel booking through agencies.',
					'Translate HTML screen mocks into interactive proofs of concept with company’s theme and branding.',
					'Work with back-end developers to integrate UI with APIs as completed.',
					'Gave presentation to my VP comparing internally maintained React component library to Material UI and Ant Design to help in deciding what to use for new applications.',
				],
				techsUsed: [
					'ReactJS',
					'Typescript',
					'Material UI',
					'Vite',
					'React Testing Library',
					'Mock Service Worker',
				],
			},
		],
	},
	{
		companyName: 'University of Phoenix',
		city: 'Remote',
		state: '',
		start: 'March 2023',
		end: 'June 2023',
		titles: 'Software Engineer - Contractor',
		roles: [
			{
				highlights: [
					'Member of an Agile scrum team writing and maintaining microservices as part of an event-driven architecture.',
					'Contribute code to publisher and consumer functions to synch student financial information between internal databases and Salesforce.',
					'Modify Terraform scripts to deploy code and configuration changes to AWS.',
				],
				techsUsed: [
					'Node.js',
					'Typescript',
					'Java Spring Boot',
					'Apache Kafka',
					'AWS Lambda',
					'AWS ECS',
					'AWS IAM',
					'Terraform',
				],
			},
		],
	},
	{
		companyName: 'Caregility',
		city: 'Eatontown',
		state: 'New Jersey',
		start: 'April 2022',
		end: 'September 2022',
		titles: 'Lead Software Engineer',
		roles: [
			{
				highlights: [
					'Technical team lead on a small Agile scrum team working on a telehealth conferencing web application.',
					'Analyze user stories and break those stories down into tasks.',
					'Collaborate with product owner to place development tasks into sprints and assign the tasks to developers.',
					'Conduct code reviews of other team members submitted pull requests.',
					'Evaluate impacts of high level requirements for upcoming projects and write proposed technical designs.',
					'Present design documents to my peers and my managers.',
					'Assist in debugging production issues.',
				],
				techsUsed: [
					'Java Spring Boot',
					'Lombok',
					'Spring Data JPA',
					'MySQL',
					'ReactJS + Redux',
					'Webpack',
					'Jest',
				],
			},
		],
	},
	{
		companyName: 'Magnite (Formerly Rubicon Project and Telaria)',
		city: 'Holmdel',
		state: 'New Jersey',
		start: 'May 2019',
		end: 'April 2022',
		titles: [
			{ title: 'Senior Software Development Engineer', start: 'February 2020', end: 'April 2022' },
			{ title: 'Software Development Engineer', start: 'May 2019', end: 'February 2020' },
		],
		roles: [
			{
				highlights: [
					'Full-stack web developer for advertising technology company.',
					'Implement REST APIs using Java Spring Boot and Hibernate.',
					'Write technical specs based on business requirements and divide work into tickets tracked in Jira.',
					'Review and provide feedback on Github pull requests.',
					'Involved in technical design discussions and determine how UI code will use APIs. Have worked on UI coding tasks, too, when needed.',
					'Debug and fix issues found during QA testing. Some experience using SSH to connect to Linux servers and Vi to search log files.',
					'Helped design relational schema as part of migrating an application from a JSON database to MySQL.',
					'Contribute code and review pull requests for Prebid.js open-source project.',
				],
				techsUsed: [
					'Java Spring Boot',
					'Lombok',
					'Hibernate',
					'MySQL',
					'JUnit',
					'Mockito',
					'ReactJS + Redux',
					'Node.js',
					'Webpack',
					'Jest',
					'Jenkins',
				],
			},
		],
	},
	{
		companyName: 'AT&T',
		city: 'Middletown',
		state: 'New Jersey',
		start: 'January 2012',
		end: 'May 2019',
		titles: [
			{ title: 'Senior Software Engineer', start: 'March 2018', end: 'May 2019' },
			{ title: 'Software Engineer', start: 'January 2012', end: 'March 2018' },
		],
		roles: [
			{
				name: 'Full-Stack Web Application Development',
				start: 'February 2016',
				end: 'May 2019',
				highlights: [
					'One of lead full-stack developers on a large team developing an application to process service orders from the US Federal Government.',
					'Involved in the technical design (code structure and database schema), requirements reviews, user story/task assignments, and development.',
					'Assisted other developers on the team and reviewed code changes for a particular module.',
					'In addition to main project, worked on 2 different side projects, both using Angular. One had a Node/Express/MongoDB back-end; other had a Spring Boot/Hibernate/Oracle back-end. Was senior developer on both projects, which included mentoring others as well as completing coding tasks.',
				],
				techsUsed: [
					'Javascript',
					'jQuery',
					'Ajax',
					'HTML5',
					'CSS3',
					'Bootstrap',
					'DataTables',
					'Java Spring',
					'Hibernate JPA',
					'Oracle SQL',
					'Subversion',
				],
			},
			{
				name: 'Mobile Development',
				start: 'November 2013',
				end: 'February 2016',
				highlights: [
					'One of the lead UI developers on a large team developing hybrid web application for sales representatives.',
					'In addition to coding tasks, involved in designing front-end architecture and mentoring newer team members.',
				],
				techsUsed: [
					'Javascript',
					'jQuery',
					'jQuery UI',
					'jQuery mobile',
					'Ajax',
					'REST',
					'HTML5',
					'CSS3',
					'RequireJS',
					'BackboneJS',
					'Java Spring',
					'Hibernate JPA',
					'JUnit',
					'Mockito',
					'Git',
					'Subversion',
				],
			},
			{
				name: 'Automation Tools',
				start: 'January 2013',
				end: 'November 2013',
				highlights: [
					'Developed tools to automate identifying circuits to be disconnected and entering disconnect orders.',
				],
				techsUsed: [
					'Java',
					'EclipseLink JPA',
					'Oracle SQL',
					'Maven',
					'Subversion',
					'VHI screen scraper interface',
				],
			},
			{
				name: 'Salesforce.com',
				start: 'January 2012',
				end: 'January 2013',
				highlights: [
					"Built web-based application to track patent sales opportunities using Salesforce's Force.com platform.",
				],
				techsUsed: ['Apex', 'VisualForce', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
			},
		],
	},
];
