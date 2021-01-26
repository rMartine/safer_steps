import React, { Component } from "react";
import { Text } from "react-native";

class BodyText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={{ color: "#616161", fontSize: 19 }}>{this.props.value}</Text>
    );
  }
}

export default BodyText;
