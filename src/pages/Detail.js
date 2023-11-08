import { useNavigate} from "react-router-dom";
import Notepad from "../components/Notepad";
import WriteForm from "../components/WriteForm";

function Detail(props) {
    const navigate = useNavigate();

  return (
    <Notepad 
        lightMode={props.lightMode} 
        darkMode={props.darkMode}
        headerTxt={"MEMO"}
        isSubpage={true}
        onClick={() => {navigate(-1)}}
    >
        <WriteForm/>
    </Notepad>
  )
}

export default Detail