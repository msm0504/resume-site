import { Link } from './base-ui';
import ReactMarkdown from 'react-markdown';

type NotesProps = {
	notes: string[];
	showLargerFont?: boolean;
};

const formatNote = (note: string, showLargerFont: boolean) => (
	<ReactMarkdown
		components={{
			p: ({ children }) =>
				showLargerFont ? <p className='text-lg'>{children}</p> : <>{children}</>,
			a: ({ href, children }) => (
				<Link color='sand' href={href}>
					{children}
				</Link>
			),
		}}
	>
		{note}
	</ReactMarkdown>
);

const Notes: React.FC<NotesProps> = ({ notes, showLargerFont = false }) =>
	!notes.length ? null : notes.length === 1 ? (
		<div className='my-3 rounded-sm bg-gray-100 p-4 dark:bg-gray-950'>
			{formatNote(notes[0], showLargerFont)}
		</div>
	) : (
		<div className='my-3 rounded-sm bg-gray-100 p-2 dark:bg-gray-950'>
			<ul className='flex list-inside list-disc flex-col gap-1'>
				{notes.map(note => (
					<li key={note.substring(0, 10)}>{formatNote(note, showLargerFont)}</li>
				))}
			</ul>
		</div>
	);

export default Notes;
