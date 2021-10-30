import React from 'react'
import { ImojiHeader,Wrapper } from '../Quest/StyledQuest'
import {randomArray} from '../../Asset/menuDatas'

class RandomResult extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show : []
    }
  }
  componentDidMount(){
    randomArray.sort(()=>Math.random()-0.5)
    this.setState({
      show : randomArray[0]
    })
  }

  getRandomFood = () => {
    randomArray.sort(()=>Math.random()-0.5)
    this.setState({
      show : randomArray[0]
    })
  }

  render(){
    return (
    <>
      <ImojiHeader className='first imojis'></ImojiHeader>
      <Wrapper>
      <div>
        <img 
        className = 'randomFoodImg' 
        src = {this.state.show.foodImg} 
        alt='food-img'></img>
        <p 
        className = 'resultDesc2'>{this.state.show.description}</p>
        <h1 
        className = 'resultFoodName'>" {this.state.show.foodName} "</h1>
        <button 
        className='randomBtn' 
        onClick = {this.getRandomFood}>마음에 안들어요</button>
        <button 
        className='randomBtn' 
        onClick = {this.props.goMain}>처음으로</button>
      </div>
    </Wrapper>
    </>
    )
  }
}

export default RandomResult