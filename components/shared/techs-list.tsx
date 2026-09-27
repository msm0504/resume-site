type TechsListProps = {
	technologies: string[];
	align?: 'left' | 'right';
};

const TechsList: React.FC<TechsListProps> = ({ technologies, align = 'left' }) => (
	<ul
		className={`m-0 flex list-none flex-wrap p-0 ${align === 'right' ? 'justify-end' : 'justify-start'}`}
	>
		{technologies.map(techUsed => (
			<li className='px-2' key={techUsed}>
				{techUsed}
			</li>
		))}
	</ul>
);

export default TechsList;
