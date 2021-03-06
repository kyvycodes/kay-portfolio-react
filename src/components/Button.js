import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ButtonStyle = styled.div`
margin-top: 2rem;
.button {
  font-size: 2rem;
  padding: .7em 2em;
  border-radius: 8px;
  display: inline-block;

  //if the outline is true the background color will be transparent otherwise it will be beige
  color: ${props =>
    props.outline ? ' #e6b396)' : '#111111;'
    };
   background-color: ${(props) =>
    props.outline ? 'transparent' : ' #e6b396'
    };
  // opacity: 0.5;;
  border: 2px solid #d8af95
}
}
@media only screen and (max-width: 768px){
  .button{
    font-size: 1.8rem;
  }
}
`

export default function Button({
   //default values
  btnLink = 'error, come back soon',
  outline = true,
  btnText = 'Test' }) {
  console.log('btn', btnLink, outline, btnText )
  return (
    <ButtonStyle
    className='button_wrapper'
    outline={outline}>
        <Link className='button' to={btnLink}>{btnText}</Link>
    </ButtonStyle>
  )
}
