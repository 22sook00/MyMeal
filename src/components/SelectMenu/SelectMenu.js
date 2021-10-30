import React from 'react'
import BeforeQuest from '../Quest/BeforeQuest'

//문제 다섯개가 되면 결과창으로 넘어가고 아니면 +1 씩
const NumOfQuest = 3;

class SelectMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count : 0,
      time : 0, kindOfFood : 0, withWho : 0
    }
  }

  prevBtn = () => {
    this.setState({
      count : this.state.count === 0 ? this.state.count:this.state.count-1
    })
  }

  select = (selectBtn,type) => {
    if(selectBtn === 1){
      if(type === 'time'){this.setState({time : this.state.time+1,count : this.state.count+1})}
      if(type === 'kindOfFood'){this.setState({kindOfFood : this.state.kindOfFood+1,count : this.state.count+1})}
      if(type === 'withWho'){this.setState({withWho : this.state.withWho+1,count : this.state.count+1})}
    }else if(selectBtn === 2){
      if(type === 'time'){this.setState({time : this.state.time+2,count : this.state.count+1})}
      if(type === 'kindOfFood'){this.setState({kindOfFood : this.state.kindOfFood+2,count : this.state.count+1})}
      if(type === 'withWho'){this.setState({withWho : this.state.withWho+2,count : this.state.count+1})}
    }else if(selectBtn === 3){
      if(type === 'time'){this.setState({time : this.state.time+3,count : this.state.count+1})}
      if(type === 'kindOfFood'){this.setState({kindOfFood : this.state.kindOfFood+3,count : this.state.count+1})}
      if(type === 'withWho'){this.setState({withWho : this.state.withWho+3,count : this.state.count+1})}
    }else{
      if(type === 'time'){this.setState({time : this.state.time+4,count : this.state.count+1})}
      if(type === 'kindOfFood'){this.setState({kindOfFood : this.state.kindOfFood+4,count : this.state.count+1})}
      if(type === 'withWho'){this.setState({withWho : this.state.withWho+4,count : this.state.count+1})}
    }
  }

  render(){

    // const {time,kindOfFood,withWho } = this.state

    return <div>
      {this.state.count === NumOfQuest ? 
      <></> 
      : 
      <BeforeQuest 
      count = {this.state.count} 
      goMain = {this.props.goMain}
      prevBtn={this.prevBtn} 
      select = {this.select} />}
    </div>
  }
}

export default SelectMenu