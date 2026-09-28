import { Fragment } from 'react';
import Notes from '../shared/notes';
import TechsList from '../shared/techs-list';
import { Accordion } from '../shared/base-ui';
import { Employment, Role, TitleDuration } from '@/types';

type EmployHistoryDetailsProps = {
	employment: Employment;
};

const formatDuration = (title: string, start: string, end: string) => {
	return (
		<div className='flex w-full flex-wrap items-center pr-2 text-lg'>
			<div className='grow'>{title}</div>
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
				<Fragment key={`${title.title}_${title.start}`}>
					{formatDuration(title.title, title.start, title.end)}
				</Fragment>
			))}
		</>
	) : (
		<p>{titles}</p>
	);

const formatRole = (role: Role) => (
	<div>
		<h6 className='font-semibold text-sand-700 dark:text-sand-300'>Responsiblities</h6>
		<Notes notes={role.highlights} />
		{role.techsUsed && (
			<>
				<h6 className='font-semibold text-sand-700 dark:text-sand-300'>Technologies Used</h6>
				<TechsList technologies={role.techsUsed} />
			</>
		)}
	</div>
);

const formatRoles = (roles: Role[]) =>
	!roles.length ? null : roles.length === 1 ? (
		<>{formatRole(roles[0])}</>
	) : (
		<Accordion.Root>
			{roles.map(role => (
				<Accordion.Item key={role.name}>
					<Accordion.Header>
						<Accordion.Trigger>
							{formatDuration(role.name ?? '', role.start ?? '', role.end ?? '')}
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Panel className='pl-4'>{formatRole(role)}</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);

const EmployHistoryDetails: React.FC<EmployHistoryDetailsProps> = ({ employment }) => (
	<article className='p-3'>
		<div className='mb-4'>{formatTitles(employment.titles)}</div>
		{formatRoles(employment.roles)}
	</article>
);

export default EmployHistoryDetails;
