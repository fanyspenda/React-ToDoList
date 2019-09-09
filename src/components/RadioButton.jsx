import React from "react";

class RadioButton extends React.Component {
  render() {
    return (
      <>
        <input type="checkbox" checked={this.props.checked} />
        {this.props.task}
      </>
    );
  }
}

export default RadioButton;
