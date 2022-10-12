type TechsListProps = {
	technologies: string[];
	align?: 'left' | 'right';
};

const TechsList: React.FC<TechsListProps> = ({ technologies, align = 'left' }) => (
	<ul
		style={{ listStyle: 'none' }}
		className={`d-flex flex-wrap m-0 p-0${align === 'right' ? ' justify-content-end' : ''}`}
	>
		{technologies.map(techUsed => (
			<li className='px-2' key={techUsed}>
				{techUsed}
			</li>
		))}
	</ul>
);

export default TechsList;
