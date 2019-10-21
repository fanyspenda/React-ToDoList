import React from "react";

class RadioButton extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
          id={this.props.id}
          name={this.props.name}
          readOnly={this.props.readOnly}
        />
        {this.props.task}
      </div>
    );
  }
}

export default RadioButton;
