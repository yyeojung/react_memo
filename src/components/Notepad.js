import React from 'react'
import Header from './Header';
import styled from 'styled-components';
import AddMemo from './AddMemo';
import { Link } from 'react-router-dom';

const MemoWrap = styled.div`
    max-width: 36rem;
    width:100%;
    height:80rem;
    color: ${(props) => {return props.theme.textColor}};
    background: ${(props) => {return props.theme.bgColor}};
    border-radius: 1rem;
    border: .2rem solid #000;
    box-shadow: .4rem .4rem 0 0 rgba(0, 0, 0, 0.6);
    position:absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%);
    @media screen and (max-width: 500px) {
        max-width:none;
        height:100%;
        border-radius:0;
    }
`;
const AddBtnWrap = styled.div`
    margin:2rem 1.6rem 1rem 0;
    text-align:right;
`;
function Notepad(props) {
  return (
    <MemoWrap>
        <Header 
            lightMode={props.lightMode} 
            darkMode={props.darkMode} 
            headerTxt={props.headerTxt}
            isSubpage={props.isSubpage}
        />
        <AddBtnWrap>
            {props.mainPage && 
                <Link to={"/memo"}>
                    <AddMemo/>
                </Link>
            }
        </AddBtnWrap>
        {props.children}
    </MemoWrap>
  )
}

export default Notepad