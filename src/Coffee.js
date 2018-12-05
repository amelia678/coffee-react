import React, {Component} from 'react';


class Coffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        }
    }
    
    
    render() {
        return (
            <div>
                <h1>CoffeeRun</h1>
                <p>How would you like your caffeine?</p>
                <form>
                <input 
                
                onChange={this._onChange}
                placeholder="enter order"
                />

                    
                </form>
            </div>
        )
    }

    _onChange = event => {
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        })
    }
}

export default Coffee;