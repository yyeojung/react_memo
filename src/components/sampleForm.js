import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';//uuid import
import WriteBtn from './WriteBtn';

const Form = styled.form`
    width: calc(100% - 3.2rem);
    margin:auto;
    border: .2rem solid #000;
    border-radius: 1rem;
    padding:1rem 1rem 2rem 1rem;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.7);
    background:${(props) => props.theme.memo.bgColor};
`;
const Title = styled.input`
    background:${(props) => props.theme.memo.bgInput};
    caret-color:${(props) => props.theme.textColor};
    color:${(props) => props.theme.textColor};
    border:.2rem solid #000;
`;
const MemoContents = styled.textarea`
    background:${(props) => props.theme.memo.bgInput};
    caret-color:${(props) => props.theme.textColor};
    color:${(props) => props.theme.textColor};
    border:.2rem solid #000;
    margin-top:2rem;
    padding:1rem;
    width:100%;
    border-radius:1rem;
    resize:none;    
    height:28rem;
    line-height:1.5;
`;
const BtnBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:2rem;
`;

function WriteForm() {
    const navigate = useNavigate();
    const { paramsId } = useParams();
    const [noteTit, setNoteTit] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const id = uuidv4();
    let getNoteList = localStorage.getItem('noteList');
    getNoteList = JSON.parse(getNoteList);
    const thisNote = getNoteList.find(v => v.id === paramsId);
    const noteIdx = getNoteList.findIndex(v => v.id === paramsId);

    useEffect(() => {
        if (paramsId === undefined ) {
            setNoteTit('');
            setNoteBody('');
        } else if (paramsId === thisNote.id) {
            setNoteTit(thisNote.title);
            setNoteBody(thisNote.body);
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    //input value 가져오기
    const getTitle = function(e) {
        const input = e.target.value;
        setNoteTit(input);
    }

    //textarea value 가져오기
    const getContents = function(e) {
        const textarea = e.target.value;
        setNoteBody(textarea);
    }

    //localstorage에 데이터 저장
    const createNote = function() {
        const newNote = {
            id: id,
            title: noteTit,
            body: noteBody
        };
        const updatedNoteList = [...getNoteList, newNote]; 
        localStorage.setItem('noteList', JSON.stringify(updatedNoteList));
        navigate(process.env.PUBLIC_URL + '/');
    }
  return (
    <Form onSubmit={onSubmit}>
        <Title value={noteTit} id='note_title' onChange={getTitle} placeholder='제목을 입력하세요.'></Title>
        <MemoContents value={noteBody} id='note_body' onChange={getContents}  placeholder='내용을 입력하세요.'></MemoContents>
        <BtnBox>
            <WriteBtn btnText={"Delete"} color={"Delete"}/>
            <WriteBtn 
                btnText={"Save"} 
                color={"Save"}
                onClick={() => {
                    if(paramsId === undefined) {
                        createNote();
                    } else {
                        const input = document.getElementById('note_title');
                        const txtArea = document.getElementById('note_body');

                        getNoteList[noteIdx].title = input.value;
                        getNoteList[noteIdx].body = txtArea.value;
                        localStorage.setItem('noteList' , JSON.stringify(getNoteList));
                        navigate(process.env.PUBLIC_URL + '/');
                    }
                }}
            />
        </BtnBox>
    </Form>
  )
}

export default WriteForm





function ListMemo() {
    const navigate = useNavigate();
    const getNoteList = JSON.parse(localStorage.getItem('noteList'));

    getNoteList.map((note) => (
        <MemoBox onClick={() => {navigate(process.env.PUBLIC_URL + '/memo/' + note.id)}} key={note.id}>
            <Header>{note.title}</Header>
            <MemoContents>{note.body}</MemoContents>
        </MemoBox>
    ));
}