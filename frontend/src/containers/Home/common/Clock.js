import {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    
    componentDidMount(){
        this.timer = setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render(){
        return <label style={{userSelect:"none"}}>{this.state.date.toLocaleTimeString()}</label>
    }
}

export default Clock