import { FC, useState } from 'react';
import { Notes } from '././Components/notes/data';
import Note from './Components/notes/notes';
import AddNote from './Components/add-note/add-note';
import { NoteType } from './Components/notes/notes-type';
export const App: FC<{ name: string }> = ({ name }) => {
  const [notes, setNotes] = useState(Notes);
  const addNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  };
  return (
    <div>
      <h1 className="App">{name}!</h1>
      <h3>Notes App</h3>
      <AddNote addNote={addNote} />
      <div>
        {notes.map((ele) => (
          <Note text={ele.text} priority={ele.priority} key={ele.id} />
        ))}
      </div>
    </div>
  );
};
