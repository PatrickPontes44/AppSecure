import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    :root {
        --primary-pink: #FF5678;
    }

    ::-webkit-input-placeholder {
        color: white;
    }
    :-moz-placeholder{
        color: white;  
    }
    ::-moz-placeholder {
        color: white;  
    }
    :-ms-input-placeholder {  
        color: white;  
    }
`