import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html , body {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-display: swap; 
    -webkit-font-smoothing : antialiased;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    };

    transition : all 0.5s;
    font-family: 'Gugi', cursive;
    font-family: 'Nanum Gothic Coding', monospace;
    font-family: 'Ubuntu', sans-serif;
    @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
  }
  

  button{
    border: none;
    cursor: pointer;
    &:active,&:focus{
      outline: none;
    }
  }
`
export const PointColor = 
'rgb(87, 201, 209)'

export const Container = styled.main`

display: flex; 
flex-wrap: wrap; 
justify-content: center;
align-items: center;
height: ${({ calculates }) => calculates ? '100vh-200px' : '100vh'};
margin:0 auto;
font-family: 'Nanum Gothic Coding';
font-weight: 700;
font : inherit;

`

export const FlexBox = styled.div`
height : 100%;
display: flex;
align-items: center;
justify-content:  'center';
/* flex-direction: ${({ col }) => col ? 'column' : 'unset'}; */
/* flex-wrap: ${({ wrapProps }) => wrapProps ? 'wrap' : 'nowrap'}; */

@media screen and (min-width: 767px) {
  
}
`