import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width:12rem;
    height:4rem;
    border:.2rem solid #000;
    border-radius:1rem;
    background:${(props) => (props.color === 'Delete' ? props.theme.btnColor.delete : props.theme.btnColor.save)};
    color:${(props) => (props.color === 'Delete' ? '#000' : '#fff')};
`;
// const Button = styled.button.withConfig({
//     shouldForwardProp: (prop, defaultValidatorFn) => !['text'].includes(prop),
//   })`
//     width:12rem;
//     height:4rem;
//     border:.2rem solid #000;
//     border-radius:1rem;
//     margin-top:2rem;
//     background:${(props) => (props.text === 'Delete' ? props.theme.btnColor.delete : props.theme.btnColor.save)};
//     color:${(props) => (props.text === 'Delete' ? '#000' : '#fff')};
// `;

function WriteBtn(props) {
    return (
        <Button color={props.color} onClick={props.onClick}>{props.btnText}</Button>
    )
}

export default WriteBtn