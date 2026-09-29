const IntroSection: React.FC = () => (
	<section className='mx-auto my-0 max-w-7xl px-4 pt-16 pb-40' id='intro'>
		<p className='text-lg'>
			Hi, my name is{' '}
			<span className='block font-heading text-7xl leading-[1.2] text-sand-700 dark:text-sand-300'>
				Mark Monday.
			</span>
		</p>
		<h2 className='text-7xl leading-[1.2]'>I build web applications.</h2>
		<p className='text-lg'>{`I'm a software engineer specializing in React and Java Spring Boot.`}</p>
		<p className='text-lg'>{`Currently, I'm a senior full-stack developer for BMI.`}</p>
	</section>
);

export default IntroSection;
