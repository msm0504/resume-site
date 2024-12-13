import { Link as MuiLink, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

type NotesProps = {
	notes: string[];
	showLargerFont?: boolean;
};

const formatNote = (note: string, showLargerFont: boolean) => (
	<ReactMarkdown
		components={{
			p: ({ children }) =>
				showLargerFont ? <Typography variant='body2'>{children}</Typography> : <>{children}</>,
			a: ({ href, children }) =>
				href?.startsWith('/') ? (
					<MuiLink component={Link} href={href}>
						{children}
					</MuiLink>
				) : (
					<MuiLink href={href} target='_blank' rel='noreferrer'>
						{children}
					</MuiLink>
				),
		}}
	>
		{note}
	</ReactMarkdown>
);

const Notes: React.FC<NotesProps> = ({ notes, showLargerFont = false }) =>
	!notes.length ? null : notes.length === 1 ? (
		<Paper sx={{ marginY: 3, padding: 4 }}>{formatNote(notes[0], showLargerFont)}</Paper>
	) : (
		<Paper sx={{ marginY: 3 }}>
			<Stack component='ul' spacing={1}>
				{notes.map(note => (
					<li key={note.substring(0, 10)}>{formatNote(note, showLargerFont)}</li>
				))}
			</Stack>
		</Paper>
	);

export default Notes;
