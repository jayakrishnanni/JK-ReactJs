import React, {Component} from 'react';
///Class component 
class Welcome extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "Sachindddd",
            heroName:"Bachin"
         
        }
      }
    render () {
        // destructuring component
        // const {name, heroName} = this.state
        console.log(this.props)
        // console.log('jkkkk' + this.props);
        // return <h1> Welcome {props.name} a.k.a {props.heroName}</h1>
        return <h1>Hello SSSS {this.props.name} also know as {this.props.heroName} </h1>
    }
}

export default Welcome