import {Component} from 'react';
class Counter extends Component {
    constructor(props){
        super();
        this.state = {counter :props.num};
        this.counterUp = this.counterUp.bind(this)
        this.counterDown = this.counterDown.bind(this)
        this.counterRset = this.counterRset.bind(this)
        this.changeCounterToFive = this.changeCounterToFive.bind(this)
    }
    changeCounterToFive(){
        // this.state.counter == 0 
        this.setState({counter: 5})
    }
    counterUp(){
        (this.setState({counter:this.state.counter+1}))
        if (this.state.counter%7===0) {
            document.getElementById("boom").innerHTML += "boom" 
            
        }
        else{
            (this.setState({counter:this.state.counter+1}))

        }

    }
    counterDown(){
        this.setState({counter:this.state.counter-1})
        
    }
    counterRset(){
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({counter:this.state.counter=0})
    }
    onInputChange(event){
         
    }
    render(){
        return(
            <div>
                <h5>
                    {this.props.fName}
                </h5>
                <button
                onClick={(this.changeCounterToFive)}
                >
                    change Counter To Five
                </button>
                <button
                onClick={(this.counterUp)}
                >
                    clickUp
                </button>
                <button
                onClick={(this.counterDown)}
                >
                    clickDown
                </button>
                <button
                onClick={(this.counterRset)}
                >
                Reset
                </button>
                <h2>{this.state.counter}</h2>
                <input type="text" value={(e)=>this.state.text} onChange={this.onInputChange} />
                <h1 id='boom'>
                    
                </h1>
            </div>
        )
    }
}
export default Counter