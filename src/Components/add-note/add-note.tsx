import React, { useState } from 'react';
import { NoteType, Priority } from '../notes/notes-type';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../Components/card/card';
type AddNoteProps = {
  addNote: (note: NoteType) => void;
};
function AddNote(props: AddNoteProps) {
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState<Priority>('low');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.value', e.target.value);
    setInputValue(e.target.value); //type assertion
  };
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    props.addNote({
      text: inputValue,
      priority,
      id: uuidv4(),
    });
    setInputValue('');
    setPriority('low');
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setPriority(e.target.value as Priority); //assertion
  };
  return (
    <Card bgColor="#333" height="2" padding="1">
      <div>
        <form className="add-note">
          <input type="text" onChange={handleOnChange} value={inputValue} />
          <select onChange={handleSelect} value={priority}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button onClick={handleOnClick}>Add</button>
        </form>
      </div>
    </Card>
  );
}

export default AddNote;
