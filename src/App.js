import { useState } from 'react';
import NoteList from './component/notesList/NoteList';
import './global-styles.css';

function App() {
	const [ notes, setNotes ] = useState([
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is First note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut. Nobis voluptates corrupti expedita dicta?',
			date: '12/4/2022'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is second note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut. Nobis voluptates corrupti expedita dicta?',
			date: '12/4/2022'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is Third note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut. Nobis voluptates corrupti expedita dicta?',
			date: '12/4/2022'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is Fourth note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut. Nobis voluptates corrupti expedita dicta?',
			date: '12/4/2022'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is Fifth note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut. Nobis voluptates corrupti expedita dicta?',
			date: '12/4/2022'
		}
	]);

	const addNote = (title, text, date) => {
		const newNote = {
			id: Math.random().toString(36).slice(2, 9),
			title: title,
			text: text,
			date: date
		};
		const newNotes = [ ...notes, newNote ];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className="app-container">
			<NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
		</div>
	);
}

export default App;
