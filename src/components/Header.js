import React from 'react'
import styled from 'styled-components'
import ThemeBtn from './ThemeBtn';
import { Link } from 'react-router-dom';

const MemoHeader = styled.header`
    height:5.6rem;
    border-bottom:.2rem solid #000;
    padding:0 1.6rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const HeaderH1 = styled.h1`
    font-size:1.6rem;
    height:2rem;
`;
const BackIcon = styled.i`
    width:2rem;
    height:2rem;
    display:inline-block;
    background:url(${(props) => props.theme.backIcon})center center/ 100% no-repeat;
    vertical-align:text-bottom ;
    margin-right:1rem;
`;

function Header(props) {
  return (
    <MemoHeader>
        <HeaderH1>
            {props.isSubpage && 
                <Link to={"/"}>
                    <BackIcon onClick={props.onClick}/>
                </Link>
            }
            {props.headerTxt}
        </HeaderH1>
        <ThemeBtn lightMode={props.lightMode} darkMode={props.darkMode}/>
    </MemoHeader>
  )
}

export default Header