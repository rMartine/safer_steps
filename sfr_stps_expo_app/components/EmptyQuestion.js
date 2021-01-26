import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import textSizes from "../constants/textSizes";

class EmptyQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer,
    };
  }

  immediateUpdate = () => {
    let response = {
      alias: "empty",
      value: "ok",
      nextq: "exit",
    };
    this.props.onHandleAnswer(response);
  };

  componentDidUpdate(prevProps) {
    if (this.props.question.alias !== prevProps.question.alias) {
      this.setState((previousState) => ({ question: this.props.question }));
    }
    let pa = prevProps.answer;
    let ca = this.props.answer;
    if (pa !== undefined && ca !== undefined) {
      if (pa.alias != ca.alias || pa.value != ca.value) {
        this.setState((previousState) => ({ answer: this.props.answer }));
      }
    } else if (
      (pa === undefined && ca !== undefined) ||
      (pa !== undefined && ca === undefined)
    ) {
      this.setState((previousState) => ({ answer: this.props.answer }));
    }
  }

  render() {
    return (
      <Card>
        <Card.Title>Sorry, I broke!</Card.Title>
        <Card.Divider />
        <Card.Image source={require("../image_assets/lost_in_papers.jpg")} />
        <Text style={{ marginBottom: 10 }}>
          Sorry, I broke because there is no Question to show. Please restart
          the questionnaire, your progress will be saved.
        </Text>
        <Button
          titleStyle={{ fontSize: textSizes.buttonTitle }}
          icon={
            <Icon
              name={this.state.answer !== undefined ? "check-circle" : "circle"}
              iconStyle={{ paddingRight: 10 }}
              type="font-awesome"
              color="#f50"
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          onPress={this.immediateUpdate}
          title="Ok"
        />
      </Card>
    );
  }
}

export default EmptyQuestion;
