import Notepad from "../components/Notepad";
import ListMemo from "../components/ListMemo";
import styled from "styled-components";

const ListMemoWrap = styled.div`
    max-height:66.4rem;
    overflow-y:auto;
    &::-webkit-scrollbar{width:18px; height:4px;}
    &::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.5); border-radius:100px; background-clip:padding-box; border:7px solid transparent;}
    &::-webkit-scrollbar-track{background-color:transparent; border-radius:100px; background-clip:padding-box; border:18px solid transparent;}
    @media all and (max-width: 500px) {
        max-height:calc(100% - 14rem);
    }
`
function List(props) {

    return (
        <Notepad 
            lightMode={props.lightMode} 
            darkMode={props.darkMode}  
            headerTxt={"Hello. I'm MEMO"}
            mainPage={true}
        >
            <ListMemoWrap>
                <ListMemo/>
            </ListMemoWrap>
        </Notepad>
    )
}

export default List;