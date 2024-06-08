import {NoteContainer, Heading, Paragraph} from './styledComponents'
const NoteItem = props => {
  const {noteDetailed} = props
  const {name, note} = noteDetailed

  return (
    <NoteContainer>
      <Heading>{name}</Heading>
      <Paragraph>{note}</Paragraph>
    </NoteContainer>
  )
}

export default NoteItem
