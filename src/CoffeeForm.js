import React, {Component} from 'react';

const defaultOrder = {
    coffee:'caramel macchiato',
    emailAddress: 'me@me.com',
    flavor: 'black',
    strength: 'santas elves',
    size: 'human'
}

class CoffeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultOrder
            
        }
    }
    
    
    render() {
        return (
            <div>
                
                <p>How would you like your caffeine?</p>
                <form onSubmit={this._doSubmit}>
                    <label>Coffee:
                    <input 
                    value= {this.state.coffee}
                    onChange={this._updateCoffee}
                    placeholder="caramel macchiato"

                    />
                    </label>
                    <br></br>
                    <label>Email:
                    <input 
                    value = {this.state.emailAddress}
                    onChange={this._updateEmail}
                    type='email'
                    placeholder="me@me.com"
                    
                    />
                    </label>
                    <br></br>
                    <label>Flavor:
                    <input 
                    value = {this.state.flavor}
                    onChange={this._updateFlavor}
                    placeholder="black"
                    
                    />
                    </label>
                    <br></br>
                    <label>Strength:
                    <input 
                    value = {this.state.strength}
                    onChange={this._updateStrength}
                    placeholder="santas elves"
                    
                    />
                    </label>
                    <br></br>
                    <label>Size:
                    <input 
                    value= {this.state.size}
                    onChange={this._updateSize}
                    placeholder="human"
                    
                    />
                    </label>
                    <br></br>
                    <input type="submit" />
                </form>
            </div>
        )
    }

    _doSubmit = event => {
        console.log('submitted!')
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this._resetForm();
    }

    _resetForm = () => {
        this.setState({...defaultOrder});
    }

    _updateCoffee = event => {
        console.log(event.target.value)
        this.setState({
            coffee: event.target.value
        })
    }

    _updateEmail = event => {
        console.log(event.target.value)
        this.setState({
            emailAddress: event.target.value
        })
    }

    _updateFlavor = event => {
        console.log(event.target.value)
        this.setState({
            flavor: event.target.value
        })
    }

    _updateStrength = event => {
        console.log(event.target.value)
        this.setState({
            strength: event.target.value
        })
    }

    _updateSize = event => {
        console.log(event.target.value)
        this.setState({
            size: event.target.value
        })
    }
}

export default CoffeeForm;