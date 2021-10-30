import React from 'react'
import Main from './components/Main/Main'
import SelectMenu from './components/SelectMenu/SelectMenu'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      start : true
    }
  }

  goConnect = () => {
    this.setState({
      start:false
    })
  }
  goMain = () => {
    this.setState({
      start:true
    })
  }

  render(){
    return (
    <>
      {this.state.start ? 
      <Main goChoice = {this.goConnect} /> 
      : 
      <SelectMenu goMain = {this.goMain} />
      }
    </>
    )
  }
}

export default App