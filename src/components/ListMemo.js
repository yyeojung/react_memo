import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const MemoBox = styled.div`
    width:calc(100% - 3.2rem);
    border:.2rem solid #000;
    background:${(props) => props.theme.memo.bgColor};
    height:14rem;
    margin:auto;
    border-radius:1rem;
    box-shadow: .3rem .3rem 0 0 rgba(0, 0, 0, 0.7);
`;
const Header = styled.h2`
    height:3.8rem;
    border-bottom:.2rem solid #000;
    text-align:center;
    line-height: 3.7rem;
    font-size:1.4rem;
    font-weight:normal;
    color:${(props) => props.theme.subTextColor};
`;
const MemoContents = styled.p`
    padding: 2rem;
    height:8.2rem;
    line-height:1.5;
    text-overflow:ellipsis;
    overflow:hidden;
    display:-webkit-box; 
    word-wrap:break-word; 
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    color:${(props) => props.theme.subTextColor};
`;
function ListMemo() {
    const navigate = useNavigate();
    const memos = JSON.parse(localStorage.getItem('memos')) || [];
    const navigateDetail = useCallback(
        (memoId) => navigate('/memo/' + memoId), [navigate]
    )

    return (
        <>
            {memos.slice().reverse().map((memo,index) => (
                <MemoBox 
                    key={memo.id} 
                    onClick={() => navigateDetail(memo.id)}
                    style={{marginTop: index === 0 ? 0 : '1rem'}}
                >
                    <Header>{memo.title}</Header>
                    <MemoContents>{memo.body}</MemoContents>
                </MemoBox>
            ))}
        </>
    )
}

export default ListMemo