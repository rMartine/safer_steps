import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from "../constants/colors.js";
import RadioGroup from "../helpers/RadioGroup.js";
import QuestionContainer from "./Questions/QuestionContainer";
import QuestionTitle from "./Questions/QuestionTitle.jsx";
import QuestionDescription from "./Questions/QuestionDescription.jsx";

class OptionQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer,
    };
  }

  onPressRadio = (data) => {
    let response = data.filter((a) => a.selected == true);
    response = {
      alias: this.state.question.alias,
      value: response[0].value,
      nextq: response[0].nextq,
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

  renderRadioGroup() {
    if (this.state.question !== undefined) {
      return (
        <RadioGroup
          radioButtons={this.state.question.answers}
          onPress={this.onPressRadio}
          currentAnswer={this.state.answer}
        />
      );
    }
  }

  render() {
    return (
      <QuestionContainer>
        <QuestionTitle number={this.props.questionNumber}></QuestionTitle>
        <QuestionDescription>{this.state.question.qtext}</QuestionDescription>

        {this.renderRadioGroup()}
      </QuestionContainer>
    );
  }
}

export default OptionQuestion;
