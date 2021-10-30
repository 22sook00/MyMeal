import styled from 'styled-components'

export const FooterContainer = styled.footer`
width : 100%; 
height : 100px;
background-color : rgba(0,0,0,0.1);
text-align : center;
font-size : 14px;
color : rgb(74, 85, 85);
padding : 10px 40px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
`
export const GridBox = styled.div`
display: grid;
grid-template-columns: 1.5fr 1fr 1fr 1fr;
>a{
  color : transparent;
  height: 0;
  >i{
    font-size: 40px;
    color :rgb(74,85,85);
    line-height: 70px;
    @media all and (max-width : 429px){
      line-height: 80px;
    }
  }
}
>p{
  text-align: right;
  padding-right : 20px;
  border-right : 2px solid ;
  @media all and (min-width : 767px){
  
  }
}

`