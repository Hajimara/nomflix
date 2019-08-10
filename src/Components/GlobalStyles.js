import { createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';


const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:80px;
    }

`;

export default globalStyles;

/** styled-reset
 * SC(styled-component)를 이용해서 
 * css를 초기화 한 상태에서 시작하게 만듦
 * 
 */