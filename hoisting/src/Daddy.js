import React, {Component} from 'react'
import Son from "./Son";
import './App.css'

class Daddy extends Component{
    state={element:''}; //makes element a state
    constructor(props){
        super(props);

    }

whoClicked=(e)=> //function that grabs an element from the function clicker in the child
{
   // saves the element
    var elements=`Player ${e} clicked their button`;
    this.setState({element:elements})  //keeps up with updates from the stat
};

    render() {
        return(
            <div>
                <p>{this.state.element}</p>
                <div className='grid'>
                <Son
                Player='1' clickMe={this.whoClicked}/>
                <Son
                Player='2' clickMe={this.whoClicked}/>
            </div>
            </div>
        )
    }
}

export default Daddy