import React from 'react'
import {Container} from '../../GlobalStyle';
import { 
  MainBgImojiWrapper,ImojiImg,
  MainWrapper,Box,Remark,MainTitle,Span,
  MainFace2,StartBtn } from './StyledMain'

function Main({goChoice}) {

  

  return (
    <Container>

      <MainBgImojiWrapper>
        <ImojiImg higher className='first imojis'></ImojiImg>
        <ImojiImg higher className='second imojisRight'></ImojiImg>
        <ImojiImg higher className='third imojis'></ImojiImg>
        <ImojiImg higher className='first imojisRight'></ImojiImg>
        <ImojiImg higher className='second imojis'></ImojiImg>
        <ImojiImg higher className='third imojisRight'></ImojiImg>
        <ImojiImg higher className='first imojis'></ImojiImg>
        <ImojiImg higher className='second imojisRight'></ImojiImg>
        <ImojiImg higher className='third imojis'></ImojiImg>
        <ImojiImg higher className='first imojisRight'></ImojiImg>
        <ImojiImg higher className='second imojis'></ImojiImg>
      </MainBgImojiWrapper>

      <MainWrapper>
        <Box className = 'box'>
        <Remark>"결정장애" 들을 위한 서비스,</Remark>  
        <MainTitle>정해줘 <br /> 
          <Span>내식사</Span>
        </MainTitle>
        <MainFace2 onClick = {goChoice}
        src = '/img/MainImg.png' alt = 'mainImg' /><br />
        <StartBtn onClick = {goChoice}>시작하기</StartBtn>
      </Box>
    </MainWrapper>
  </Container>
  )
}

export default Main
