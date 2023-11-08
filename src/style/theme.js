import BgLightMode from '../image/lightmode.png';
import BgDarkMode from '../image/darkmode.png';
import AddMemoLight from '../image/addMemo.png';
import AddMemoDark from '../image/addMemoDark.png';
import backLight from '../image/backLight.png'
import backDark from '../image/backDark.png'

export const lightTheme = {
    textColor: '#000',
    subTextColor: '#000',
    bgImg: `url(${BgLightMode})`,
    bgColor: '#f0eadd',
    memo: {
        bgColor: '#f0eadd',
        bgInput: '#f0eadd'
    },
    btnColor: {
        save : '#000',
        delete : '#f0eadd'
    },
    addIcon: `${AddMemoLight}`,
    backIcon:`${backLight}`
}
export const darkTheme = {
    textColor: '#fcfcfc',
    subTextColor: '#eaeaea',
    bgImg: `url(${BgDarkMode})`,
    bgColor: '#2C2C2C',
    memo: {
        bgColor: '#58595e',
        bgInput: 'rgba(255,255,255,0.2)'
    },
    btnColor: {
        save : '#000',
        delete : '#eaeaea'
    },
    addIcon: `${AddMemoDark}`,
    backIcon:`${backDark}`
}

export const theme = {
    lightTheme,
    darkTheme
}

export default theme;