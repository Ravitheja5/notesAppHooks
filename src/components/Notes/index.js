import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  BiggContainer,
  NotesHeading,
  InputContainer,
  TitleInputElement,
  NoteInputElement,
  ButtonElement,
  ListOfNotes,
  EmptyContainer,
  EmptyHeading,
  EmptyParagraph,
  EmptyImage,
} from './styledComponents'
import {useState} from 'react'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [noteInput, setNoteInput] = useState('')

  const [notesList, setNotesList] = useState([])

  

  const onChangeTitle = event => {
    setTitleInput(event.target.value)
  }

  const onChangeNote = event => {
    setNoteInput(event.target.value)
  }

  const emptyView = (
    <EmptyContainer>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHeading>No Notes Yet</EmptyHeading>
      <EmptyParagraph>Notes you add will appear here</EmptyParagraph>
    </EmptyContainer>
  )

  const notes = (
    <ListOfNotes>
      {notesList.map(eachObject => (
        <NoteItem key={eachObject.id} noteDetailed={eachObject} />
      ))}
    </ListOfNotes>
  )

  const onClickAdd = () => {
    if (titleInput != '' && noteInput != '') {
      const newObject = {
        id: uuidv4(),
        name: titleInput,
        note: noteInput,
      }

      setNotesList(prevStateList => [...prevStateList, newObject])

      setTitleInput('')
      setNoteInput('')
    }
  }

  return (
    <BiggContainer>
      <NotesHeading>Notes</NotesHeading>
      <InputContainer onSubmit={onClickAdd}>
        <TitleInputElement
          value={titleInput}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <NoteInputElement
          value={noteInput}
          type="textarea"
          onChange={onChangeNote}
          placeholder="Take a Note..."
        />
        <ButtonElement type="submit">add</ButtonElement>
      </InputContainer>

      {notesList.length != 0 ? notes : emptyView}
    </BiggContainer>
  )
}

export default Notes
