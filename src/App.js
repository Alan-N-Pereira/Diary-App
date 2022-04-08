import { useState } from 'react';
import NoteList from './component/notesList/NoteList';
import Search from './component/search/Search';
import SortFilter from './component/sortFilter/SortFilter';
import Dayfilter from './component/dayFilter/Dayfilter';
import './global-styles.css';

function App() {
	const [ notes, setNotes ] = useState([
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is First note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut.',
			date: '2022-04-7'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is second note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut.',
			date: '2021-05-15'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is Third note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut.',
			date: '2020-05-15'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is Fourth note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut.',
			date: '2021-12-15'
		},
		{
			id: Math.random().toString(36).slice(2, 9),
			title: 'This is Fifth note',
			text:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit pariatur repellat architecto. Optio, iusto obcaecati? Qui quae esse sed nisi exercitationem ea ipsam expedita ut.',
			date: '2020-01-15'
		}
	]);

	const [ search, setSearch ] = useState('');

	const [ sortType, setSortType ] = useState('newest');

	const [ filterType, setFilterType ] = useState('');

	const [ filterMode, setFilterMode ] = useState(false);

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

	console.log(notes[0].date.split('-')[0]);

	const updateNote = (id, title, text, date) => {
		const index = notes.findIndex((obj) => obj.id === id);
		let updatedNotes = [ ...notes ];
		updatedNotes[index] = { ...updatedNotes[index], title: title, text: text, date: date };
		setNotes(updatedNotes);
	};

	const searchFilter = (data) => {
		return data.filter(
			(note) => note.title.toLowerCase().includes(search) || note.text.toLowerCase().includes(search)
		);
	};

	const sortFilter = (data) => {
		if (sortType === 'newest') {
			return data.sort((a, b) => new Date(b.date) - new Date(a.date));
		}
		if (sortType === 'oldest') {
			return data.sort((a, b) => new Date(a.date) - new Date(b.date));
		}
	};

	return (
		<div className="app-container">
			<h1 className="main-title">Diary App</h1>
			<div className="searchMain-container">
				<Search handleSearchFilter={setSearch} />
				<div className="filter-container">
					<SortFilter handleSortType={setSortType} />
					<Dayfilter
						filterMode={filterMode}
						filterType={filterType}
						setFilterMode={setFilterMode}
						setFilterType={setFilterType}
					/>
				</div>
			</div>
			<NoteList
				notes={sortFilter(searchFilter(notes))}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
				handleUpdateNote={updateNote}
			/>
		</div>
	);
}

export default App;
