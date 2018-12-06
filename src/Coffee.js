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
                    <label>Coffee:
                    <input 
                    onChange={this._onChange}
                    placeholder="caramel macchiato"

                    />
                    </label>
                    <br></br>
                    <label>Email:
                    <input 
                    onChange={this._onChange}
                    type='email'
                    placeholder="me@me.com"
                    
                    />
                    </label>
                    <br></br>
                    <label>Flavor:
                    <input 
                    onChange={this._onChange}
                    placeholder="black"
                    
                    />
                    </label>
                    <br></br>
                    <label>Strength:
                    <input 
                    onChange={this._onChange}
                    placeholder="santas elves"
                    
                    />
                    </label>
                    <br></br>
                    <label>Size:
                    <input 
                    onChange={this._onChange}
                    placeholder="human"
                    
                    />
                    </label>
                    <br></br>
                    <input type="submit" />
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