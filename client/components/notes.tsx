type NotesProps = {
	notes: string[];
};

const Notes: React.FC<NotesProps> = ({ notes }) =>
	!notes.length ? null : notes.length === 1 ? (
		<div className='bg-dark mt-3 py-4 rounded'>{notes[0]}</div>
	) : (
		<ul className='bg-dark mt-3 py-4 rounded'>
			{notes.map(note => (
				<li key={note.substring(0, 10)}>{note}</li>
			))}
		</ul>
	);

export default Notes;
