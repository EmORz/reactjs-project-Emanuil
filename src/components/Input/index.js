import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <label for={this.props.id}>
                    {this.props.label}
                    <input id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
                </label>
            </div>
         );
    }
}
 
export default Input;