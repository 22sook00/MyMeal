import React, { useState,useEffect } from 'react'
import {foodArray} from '../../Asset/menuDatas'
import {ImojiHeader, Wrapper} from './StyledQuest'
import {Container} from '../../GlobalStyle'

const Quest = (props) => {
  
  const [imgs,setImgs] = useState([])
  const [displays,setDisplays] = useState([])
  const [winners,setWinners] = useState([])
  const [round,setRound] = useState('32 강')

  //처음 보여주기.
  useEffect(()=>{
    foodArray.sort(()=>Math.random()-0.5)
    setImgs(foodArray)
    setDisplays([foodArray[0],foodArray[1]])
  },[]);

  const handleClick = (finalimg) => {

    //결승전일때.
    if(imgs.length <= 2){
      //결과.
      if(winners.length === 0 ){
        console.log('showWinner')
        setDisplays([finalimg]);
        document.querySelector('.NumOfSelect').remove();

      //결승전 중,   
      }else {
        let updatedImg = [...winners,finalimg]
        setImgs(updatedImg);
        setDisplays([updatedImg[0],updatedImg[1]])
        setWinners([])
        setRound('')

        if(winners.length === 15){
          const h1 = document.createElement('h1')
          const div_round = document.querySelector('.box')
          h1.textContent = 'ROUND 2'
          h1.setAttribute('class','second')
          div_round.appendChild(h1)
          setRound('16 강')

          setTimeout(() => {
            document.querySelector('.second').remove();
          }, 1200);
        }
        else if(winners.length === 7){
          const h1 = document.createElement('h1')
          const div_round = document.querySelector('.box')
          h1.textContent = 'ROUND 3'
          h1.setAttribute('class','third')
          div_round.appendChild(h1)
          setRound('8 강')

          setTimeout(() => {
            document.querySelector('.third').remove();
          }, 1200);
        }
        else if(winners.length === 3){
          const h1 = document.createElement('h1')
          const div_round = document.querySelector('.box')
          h1.textContent = 'ROUND 4'
          h1.setAttribute('class','fourth')
          div_round.appendChild(h1)
          setRound('4 강')
          
          setTimeout(() => {
            document.querySelector('.fourth').remove();
          }, 1200);
        }
        else{
          const h1 = document.createElement('h1')
          const div_round = document.querySelector('.box')
          const spanNum = document.querySelector('span')
          h1.textContent = 'FINAL ROUND'
          h1.setAttribute('class','final')
          div_round.appendChild(h1)
          setRound('결승 메뉴')
          spanNum.style.display='none'
          
          setTimeout(() => {
            document.querySelector('.final').remove();
          }, 1200);
        }
      }

    //결승전이 아닐때, 2보다 클때.
    }else if(imgs.length > 2){
      setWinners([...winners,finalimg])
      setDisplays([imgs[2],imgs[3]])
      setImgs(imgs.slice(2))//첫번째 두개를 제외하고 나머지로 채워준다.
    }}

  const showFoodName = (e,idx) => {
    const p = document.querySelectorAll('.foodName')[idx]
    if(e.type === 'mouseover'){
      p.style.display ='initial';
    }
  }
  const hideFoodName = (e,idx) => {
    const p = document.querySelectorAll('.foodName')[idx]
    if(e.type === 'mouseout'){
      p.style.display ='none';
    }
  }
  
  return  (
  <Container calculates>
  <ImojiHeader className='first imojis'></ImojiHeader>
  <Wrapper className = 'box'>
  <div>
  <h1 className='NumOfSelect'>
  {round}
  <span style = {{color :'rgb(87, 107, 110)'}}>
    - {winners.length+1} </span> 
  </h1>
  <div className = 'example'>
    {displays.map((d, idx)=>{
      return ( 
        <div className='foodImgBox' key = {d.foodName} >
          {displays.length === 1  ? 
          <img className = 'randomFoodImg2'
          src = {d.foodImg} 
          alt = 'food-img'></img>
          :
          <img className='foodImg' 
          src = {d.foodImg} 
          alt = 'foodimgs'
          onClick = {()=>handleClick(d)}
          onMouseOver = {(e)=>{showFoodName(e, idx)}} 
          onMouseOut = {(e)=>{hideFoodName(e,idx)}}
          />
          }

          {displays.length === 1  ? <></>:
            <p 
            className = 'foodName' 
            onClick = {()=>handleClick(d)} 
            key = {d.foodName}>{d.foodName}</p> }
          {displays.length === 1  ? 
            <p 
            className = 'resultDesc'>{d.description}</p> 
            : <></>}
          {displays.length === 1  ? 
            <h1 
            className = 'resultFoodName'>"{d.foodName}"</h1> 
            : <></>}
        </div>
      );
    })}
    </div>

    {displays.length === 1 ? 
    <button className = 'returnBtn'
    onClick = {props.goRandom}>마음에 안들어요</button> :
    <></>
    }
    {displays.length === 1 ? 
    <button className = 'returnBtn'
    onClick = {props.goMain}>처음으로</button> :
    <button className = 'randomBtn'
    onClick = {props.goRandom}>랜덤메뉴 바로가기</button>
    } 
    </div>
    </Wrapper>
    </Container>
  )
}

export default Quest;