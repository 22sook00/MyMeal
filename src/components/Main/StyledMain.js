import styled, { keyframes } from 'styled-components'
import {PointColor} from '../../GlobalStyle'

const samllFace = keyframes`
0% {transform: rotate(-20deg)}
50% {transform: rotate(10deg)}
100% {transform : roate{30deg}}
`
export const moveImojiLeft = keyframes`
0% {background-position : 0 center;}
100% {background-position : -1200px center;}
@media all and (min-width : 767px){
  0% {background-position : 0 center;}
100% {background-position : -800px center;}
}
`
export const moveImojiRight = keyframes`
0% {background-position : 0 center;}
100% {background-position : 1200px center;}
@media all and (min-width : 767px){
  0% {background-position : 0 center;}
100% {background-position : 800px center;}
}
`

export const MainBgImojiWrapper = styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
width : 100%;
height : 100vh;
overflow: hidden;
box-sizing: border-box;
opacity: 0.5;

`
export const ImojiImg = styled.div`
width : 100%; 
height : 80px;
margin : 15px 0;
background: url('./img/imojis/landingImoji1.png')0 center / 800px repeat-x;
animation : ${moveImojiLeft} 15s linear infinite;
&.imojisRight{
  animation : ${moveImojiRight} 15s linear infinite;
}
&.second{
  background-image: url('./img/imojis/landingImoji2.png');
}
&.third{
  background-image: url('./img/imojis/landingImoji3.png');
}
@media all and (min-width : 767px){
  height: ${({ higher }) => higher ? '150px;' : '100px'};
  background: url('./img/imojis/landingImoji1.png')0 center / 1200px repeat-x;
  animation : ${moveImojiLeft} 10s linear infinite;
  margin : 25px 0;
}
`
export const MainWrapper = styled.section`
background-color: #fff;
padding : 100px 60px;
border-radius:8px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
z-index: 100000;
font-family: 'NanumSquareRound';
@media all and (min-width : 767px){
  padding : 100px;
}
`
export const Box = styled.div`
text-align : center;
`
export const MainTitle = styled.h1`
font-size : 80px; 
margin : 0 auto;
font-weight: 100;
font-family: 'Gugi', cursive;
letter-spacing: -3px;
@media all and (min-width : 700px){
  font-size : 100px;
}
`
export const Span = styled.span`
color : ${PointColor};
@media all and (min-width : 700px){
  font-size : 100px;
}
`
export const MainRemark = styled.p`
text-align : center;
`
export const Remark = styled.p`
font-size : 15px; 
font-family: 'Nanum Gothic Coding';
letter-spacing: -2px;
text-align : left;
width : 100%; margin :0; padding : 0 0 0 5px;
box-sizing: border-box;
color : rgb(74, 85, 85);
@media all and (min-width : 700px){
  font-size : 18px;
}
`
export const MainFace2 = styled.img`
width : 200px; height : 200px; 
cursor : pointer;
animation : ${samllFace} 800ms 0s infinite ease alternate-reverse;
@media all and (min-width : 700px){
  width : 220px;
  height: 220px;
}
`
export const StartBtn = styled.button`
width : 200px; height : 50px;
margin-top : 40px;
border-radius : 10px; border : none;
background-color : rgb(187, 201, 209);
transition:all 0.3s;
cursor : pointer; 
font-size : 24px; 
font-weight : 700;
font-family: 'Nanum Gothic Coding';
letter-spacing: -2px;
@media all and (min-width : 700px){
  font-size : 32px;
  width : 220px; height : 60px;
}
&:hover{
  background-color : rgb(51, 164, 172);
  color : white;
}
&:active{
  outline:none;
}
&:focus{
  outline:none;
}
`