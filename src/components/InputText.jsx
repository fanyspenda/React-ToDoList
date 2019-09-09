import React, { Component } from "react";

class InputText extends Component {

    state={
        value: 0
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.onChange}></input>
            </div>
         );
    }
}
 
export default InputText;