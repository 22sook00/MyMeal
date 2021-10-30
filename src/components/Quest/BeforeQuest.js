import React from 'react'
import RandomResult from '../ResultMenu/RandomResult'
import Quest from './Quest'
import Footer from '../Footer/Footer'

class BeforeQuest extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      moveDirectly : false
    }
  }

  goQuest = () => { this.setState ({ moveDirectly : false })}
  goRandom = () => { this.setState ({ moveDirectly : true })}

  render(){
    return (
    <>
      {this.state.moveDirectly ? 
      <RandomResult 
      goQuest = {this.goQuest} goMain = {this.props.goMain}
      goRandom = {this.goRandom} prevBtn={this.props.prevBtn}
      /> 
      : 

      <Quest count = {this.props.count} goQuest = {this.goQuest}
      prevBtn={this.props.prevBtn} select = {this.props.select}
      goRandom = {this.goRandom}
      goMain = {this.props.goMain}
      />
      }
      <Footer/>
    </>
    )
  }
}

export default BeforeQuest