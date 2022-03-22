import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    return this.state.isLoggedIn ? <div>Welcome Ushasss</div> :   <div>Welcome Guest</div>


    // let message
    // if(this.state.isLoggedIn){
    //    message = <div>Welcome Ushasss</div>
    // }else {
    //    message = <div>Welcome Guest</div>
    // }


    // return <div>{message}</div>
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome User</div>
    // }
    // else {
    //     return <div>Welcome Guest</div>
    // }
    // return (
    //     <div><div>UserGreetings</div></div>
      
    // )
  }
}

export default UserGreetings