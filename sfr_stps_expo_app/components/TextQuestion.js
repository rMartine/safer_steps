import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Card, Button, Icon, Input } from "react-native-elements";
import textSizes from "../constants/textSizes";
import QuestionContainer from "./Questions/QuestionContainer";
import QuestionDescription from "./Questions/QuestionDescription";
import QuestionTitle from "./Questions/QuestionTitle";

class TextQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer,
    };
  }

  onChangeText = (data) => {
    let response = {
      alias: this.state.question.alias,
      value: data,
      nextq: this.state.question.nextq,
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

  renderInput() {
    if (this.state.question !== undefined) {
      return (
        <Input
          inputStyle={{ fontSize: textSizes.answerTextInput }}
          placeholder={this.state.question.placeholder}
          multiline
          onChangeText={this.onChangeText}
          value={this.state.answer !== undefined ? this.state.answer.value : ""}
          leftIcon={
            <Icon
              style={{ paddingRight: 8 }}
              name="keyboard-o"
              type="font-awesome"
              color="black"
            />
          }
        />
      );
    }
  }

  render() {
    return (
      <QuestionContainer>
        <QuestionTitle number={this.props.questionNumber}></QuestionTitle>
        <QuestionDescription>{this.state.question.qtext}</QuestionDescription>
        {this.renderInput()}
      </QuestionContainer>
    );
  }
}

export default TextQuestion;
