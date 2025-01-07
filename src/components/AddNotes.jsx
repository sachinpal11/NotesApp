import React, { useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux';
import { AddNote, AlertMake } from '../store/NotesApp.store';


function AddNotes() {

  const TitleRef = useRef('');
  const DescRef = useRef('');
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    const title = TitleRef.current.value;
    const desc = DescRef.current.value;
    dispatch(AddNote({ Card_Title: title, Card_Description: desc }))
    dispatch(AlertMake())
    TitleRef.current.value = '';
    DescRef.current.value = '';
  }
  return (
    <div className='w-fit'>
      <form onSubmit={formHandler} className='w-fit flex gap-3 flex-wrap sm:flex-nowrap'>
        <Input type={"text"} ref={TitleRef} placeholder="Enter Note Title" required />
        <Input type={"text"} ref={DescRef} placeholder="Add New Description" required />
        <Button type="submit">Add Note</Button>
      </form>
    </div>
  )
}

export default AddNotes
