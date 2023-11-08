import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    height:3rem;
    color:${(props) => props.theme.subTextColor};
`;
const Icon = styled.i`
    width:2rem;
    height:2rem;
    display:inline-block;
    background:url(${(props) => props.theme.addIcon})center center/ 100% no-repeat;
    margin:0 0 .3rem .5rem;
    vertical-align:middle;
`;
function AddMemo() {
  return (
    <Button>
        Add
        <Icon/>
    </Button>
  )
}

export default AddMemo