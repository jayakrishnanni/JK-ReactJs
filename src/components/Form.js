import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic: 'sachin'
      }
     
    }
    handlerusername = event => {
        this.setState ({
          username: event.target.value
        })
    }
    handlerComment = event => {
      this.setState ({
        comment: event.target.value
      })
    }
    handlerTopic = event => {
      this.setState ({
        topic: event.target.value
      })
    }
    // handlerSumbit = event => {
    // //  alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    // event.preventDefault();

    // }
    handleSubmit= event =>{
      alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
      event.preventDefault();
    }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div>
             <label> Username</label>
             <input type="text" 
             value={this.state.username} 
             onChange={this.handlerusername}/>
             </div>
             <div>
             <label> Comments</label>
             <textarea type="text" 
             value={this.state.comment} 
             onChange={this.handlerComment}/>
             </div>
             <div>
             <label> Topics</label>
             <select value={this.state.topic} onChange={this.handlerTopic}>
               <option value="sachin">sachin</option>
               <option value="ramesh">ramesh</option>
               <option value="sumesh">sumesh</option>
             </select>
             </div>
             <button  type="submit">submit</button>
          </form>
      </div>
    )
  }
}

export default Form