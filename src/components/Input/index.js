import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {
            id,
            label,
            value, 
            onChange,
            type
        } = this.props
        return ( 
            <div>
                <label for={id}>
                    {label}
                    <input id={id} type={type || "text"} value={value} onChange={onChange}/>
                </label>
            </div>
         );
    }
}
 
export default Input;