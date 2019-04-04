import React, {Component} from 'react'
import'./App.css'

class Son extends Component{

    constructor(props)
    {
        super(props);
        // this.clicker=this.clicker.bind(this)

    }

    clicker=(e)=> //grabs the player number of the player and sends it to the whocliked function in parent
    {
      var clicked= this.props.Player;
      this.props.clickMe(clicked);
    };
    render() {
        var number=this.props.Player;
        return(
            <div>
                <h1>
                    Player:{number}
                </h1>
                    <input type='button' value={'Player '+this.props.Player} onClick={this.clicker}/>

            </div>
        )
    }
}

export default Son;