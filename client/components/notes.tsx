type NotesProps = {
	notes: string[];
};

const Notes: React.FC<NotesProps> = ({ notes }) => (
	<ul className='bg-dark text-light mt-3 py-4 rounded'>
		{notes.map(note => (
			<li key={note.substring(0, 10)}>{note}</li>
		))}
	</ul>
);

export default Notes;
