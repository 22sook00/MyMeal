import styled from 'styled-components'
import {moveImojiLeft} from '../Main/StyledMain'

export const ImojiHeader = styled.header`
width : 100%; 
height : 100px;
padding : 20px 10px;
box-sizing: border-box;
background: url('./img/imojis/landingImoji1.png')0 center / 800px repeat-x;
animation : ${moveImojiLeft} 15s linear infinite;
@media all and (min-width : 767px){
  height : 100px;
  background: url('./img/imojis/landingImoji1.png')0 center / 800px repeat-x;
  animation : ${moveImojiLeft} 10s linear infinite;
  padding : 25px 15px;
}
`
export const Wrapper = styled.section`
height: calc(100vh - 200px);
display : flex; 
align-items: center;
justify-content: center;
text-align: center;

.NumOfSelect{
  font-size : 32px;
  text-align : center;
  border-bottom : 3px dotted rgb(74, 85, 85);
  margin : -50px 0 30px;
  @media all and (min-width : 700px){
    font-size : 42px;
  }
}

.foodImgBox{
  position: relative;
  width : 240px; height : 230px;
  margin : 0 auto;
  @media all and (min-width : 700px){
    width : 340px;
    height: 320px;
  }
}
.foodImg{
  width : 200px; 
  height: 200px;
  text-align : center;
  border-radius : 10px;
  margin : 5px;
  cursor : pointer;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
  
  @media all and (min-width : 700px){
    width : 280px;
    height: 280px;
  }

}
.foodImg:hover{
  transform: scale(1.1);
  transition : 0.5s all ease;
  opacity : 0.5;
}
.example{
  position: relative;
  text-align:center;
  margin: 0 auto;
  width : 100%;

@media all and (min-width : 500px){
  display : flex;
  justify-content: space-around;
}
}
.foodNameBox{
  position : absolute;
  top : 10%;
  left : 13%;
  height : 250px;
}
.foodName{ 
  font-size : 42px; 
  color : #414848;
  display : none;
  text-shadow: 2px 2px 6px white;
  margin :0;
  font-weight : 800;
  text-align : center;
  border-radius : 10px;
  position : relative;
  top : -55%;
  cursor : pointer;
  font-family: 'Nanum Gothic Coding';
  @media all and (min-width : 700px){
    font-size : 58px; 
    position: absolute;
    left : 10%; top : 30%;
  }
}

.randomBtn , .returnBtn{
  font-size : 20px; font-weight : 600;
  padding : 15px 25px; 
  border: none; 
  cursor : pointer;
  border-radius : 10px;
  margin : -10px 5px 0;
  transition: all 0.5s;
  font-family: 'Nanum Gothic Coding';
  background-color : rgb(187, 201, 209);
  @media all and (min-width : 700px){
    font-size : 24px;
    margin : -40px 5px 0;
  }
  @media all and (max-width : 500px){
    margin : -10px 5px 0;
  }
}
.returnBtn{
  position: relative;
  top : 80px;
  font-weight : 700;
  letter-spacing: -2px;
}
.randomBtn {
  margin-top : 35px;
  @media all and (max-width : 500px){
    margin-top : 10px
  }
}

.randomBtn:hover, .returnBtn:hover{
  background-color : rgb(51, 164, 172);
  color : white;
  font-weight : 700;
}

.second, .third, .fourth, .final{
  font-size : 80px;
  width : 100%;
  backdrop-filter : blur(25px);
  position:absolute;
  box-sizing: border-box;
  padding : 320px 0;
}
.randomFoodImg{
  width : 250px; height : 250px;
  border-radius : 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
  margin-bottom : 10px;
  @media all and (min-width : 700px){
    width : 280px;
    height: 280px;
  }
}
.resultFoodName{
  margin : 5px 0 0;
}
.resultDesc{
  font-size : 24px;
  @media all and (max-width : 700px){
    font-size : 18px;
    width : 250px;
    margin-left : -10px;
  }
}

.resultDesc2{
  font-size : 24px;
  @media all and (max-width : 700px){
    font-size : 18px;
  } 
}
.randomFoodImg2{
  width :250px; height : 250px;
  margin : -80px 0px 0px -10px;
  border-radius : 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;

  @media all and (min-width : 700px){
    margin : -40px auto 10px;
  }
}
`