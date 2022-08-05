import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary-pink: #ff5678;
        font-size: 10px;
    }

    * {
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body {
        background: linear-gradient(
            162.02deg,
            #9fe8ff 1.89%,
            rgba(209, 242, 253, 0.78) 69.18%
        );
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

    .Toastify__toast-body {
        font-size: 1.8rem;
    }
`;
