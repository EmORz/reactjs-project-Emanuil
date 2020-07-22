import React, {Component} from 'react'
import style from './submit-button.module.css'


class SubmitButton extends Component{
    constructor(props){
        super(props)
    }
    
    render(){

        return(
            <button type="button" onClick={this.props.onClick}>{this.props.title}</button>
            )
    }
    
}
export default SubmitButton