import styled from "styled-components";

const BgImg = styled.div`
    min-height:100vh;
    background-image: ${(props) => {return props.theme.bgImg}};
    background-position: top center;
    background-repeat: no-repeat;
    background-size:cover;
`

function Background(props) {
    return (
        <>
            <BgImg/>
            {props.children}
        </>
    )
}

export default Background; 