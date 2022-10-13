import React from 'react';
import ReactMarkdown from 'react-markdown';

type NotesProps = {
	notes: string[];
};

const formatNote = (note: string) => (
	<ReactMarkdown components={{ p: React.Fragment }}>{note}</ReactMarkdown>
);

const Notes: React.FC<NotesProps> = ({ notes }) =>
	!notes.length ? null : notes.length === 1 ? (
		<div className='bg-dark my-3 px-3 py-4 rounded'>{formatNote(notes[0])}</div>
	) : (
		<ul className='bg-dark mt-3 pe-3 py-4 rounded'>
			{notes.map(note => (
				<li key={note.substring(0, 10)}>{formatNote(note)}</li>
			))}
		</ul>
	);

export default Notes;
