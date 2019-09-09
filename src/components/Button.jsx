import  React from "react";

class Button extends React.Component {

    render() { 
        return ( 
            <button type="submit" onClick={this.props.onClick}>click to submit</button>
         );
    }
}
 
export default Button