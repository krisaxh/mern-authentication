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
        return <input id="login-placeholder" value={this.state.date.toLocaleTimeString()} readOnly="readonly"/>
    }
}

export default Clock