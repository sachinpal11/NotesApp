import React from 'react'
// import Sidebar from './HomePage'
import NotesCard from './NotesCard'
import AddNotes from './AddNotes'
import Alert from './Alert'
import { useSelector, useDispatch } from 'react-redux'
import AlertButton from './Alert'
function HomePage() {
  const NotesData = useSelector((Data) => Data.ChangeNotes)
  return (
    <div className='flex flex-col gap-4 items-center sm:items-start relative'>
      <AddNotes />
      <div className='flex flex-wrap gap-4 items-center sm:items-start'>
        {NotesData.map((item, index) => (
          <NotesCard NotesData={item} key={index} />
        ))}
      </div>
      <AlertButton />
    </div>
  )
}

export default HomePage
