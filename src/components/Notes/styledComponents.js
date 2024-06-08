import styled from 'styled-components'
/*import {BiggContainer,NotesHeading,InputContainer,TitleInputElement,NoteInputElement,ButtonElement,ListOfNotes} from './styledComponents'
 */

/**EmptyContainer,EmptyHeading,
  EmptyParagraph,
  EmptyImage **/

export const EmptyContainer = styled.div`
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
`

export const EmptyHeading = styled.h1`
         color:black;
`

export const EmptyParagraph = styled.p`
         color:black;
`

export const EmptyImage = styled.img`
         height:100px;
         width:100px;
`

export const BiggContainer = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

`

export const NotesHeading = styled.h1`
      color:#4c63b6;
      font-family:"Bree Serif"
`

export const InputContainer = styled.form`
     display-flex;
     flex-direction:column;
     padding-left:10px
`

export const TitleInputElement = styled.input`
       border:none;
`

export const NoteInputElement = styled.input`
       border:none;
`

export const ButtonElement = styled.button`
      background-color:#4c63b6;
      color:white;
      border-radius:10px
`

export const ListOfNotes = styled.ul`
      display:flex;
      flex-direction:row;
      
      width:90%;
      
`
