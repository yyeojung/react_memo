import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid';//uuid import
import { useEffect, useState } from 'react';
import WriteBtn from './WriteBtn';
import { useNavigate, useParams } from 'react-router-dom';

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
    @media all and (max-width: 500px) {
        font-size:1.6rem;
    }
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
    @media all and (max-width: 500px) {
        font-size:1.6rem;
    }
`;
const BtnBox = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:2rem;
`;

function WriteForm() {
    const [memoTitle, setMemoTitle] = useState('');
    const [memoBody, setMemoBody] = useState('');
    const navigate = useNavigate();
    const { memoId } = useParams();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const memos = JSON.parse(localStorage.getItem('memos')) || [];

    useEffect(() => {
        if (memoId) {//메모 수정
            const selectMemo = memos.find(memo => memo.id === memoId);
            
            if (selectMemo) {
                setMemoTitle(selectMemo.title);
                setMemoBody(selectMemo.body);
            }
        }
    }, [memoId]);


    const deleteForm = () => {
        if (memoId) {
            const updateMemo = memos.filter(memo => memo.id !== memoId)
            localStorage.setItem('memos', JSON.stringify(updateMemo));
            navigate('/');
        } else {
            navigate('/');
        }
    }

    const saveForm = () => {
        if (memoId) {       
            const getMemos = memos.map(memo => {
                if (memo.id === memoId) {
                    return {
                        ...memo,
                        title: memoTitle,
                        body: memoBody,
                    };
                }
                return memo;
            });     
            localStorage.setItem('memos', JSON.stringify(getMemos))
        } else {
            const newMemo = {
                id: uuidv4(),
                title: memoTitle,
                body: memoBody,
            };
            
            //로컬스토리지에 memos 키 생성
            memos.push(newMemo);
    
            //로컬스토리지 memos에 id, title, body 저장
            localStorage.setItem('memos', JSON.stringify(memos));    
        }
        
        navigate('/')
    } 
    return (    
        <Form onSubmit={onSubmit}>
            <Title 
                id='memoTitle' 
                value={memoTitle}
                onChange={(e) => setMemoTitle(e.target.value)}
                placeholder='제목을 입력하세요.'
            />
            <MemoContents 
                id='memoBody' 
                value={memoBody}
                onChange={(e) => setMemoBody(e.target.value)}
                placeholder='내용을 입력하세요.'
            />
            <BtnBox>
                <WriteBtn 
                    btnText={"Delete"} 
                    color={"Delete"}
                    onClick={deleteForm}
                />
                <WriteBtn 
                    btnText={"Save"} 
                    color={"Save"}
                    onClick={saveForm}
                />
            </BtnBox>
        </Form>
    )
}

export default WriteForm