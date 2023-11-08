import React from 'react'
import styled from 'styled-components'

const ThemeChange = styled.button`
    width:2rem;
    height:2rem;
    border-radius:50%;
    border:.1rem solid #000;
    background-color:${props => props.color || 'white'};
    margin-left:${props => (props.color === 'black' ? '1rem' : '0')};
`;
function ThemeBtn(props) {
  return (
    <div>
        <ThemeChange onClick={props.lightMode}/>
        <ThemeChange onClick={props.darkMode} color='black'/>
    </div>
  )
}

export default ThemeBtn