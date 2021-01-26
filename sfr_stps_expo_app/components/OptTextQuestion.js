import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Card, Button, Icon, Input } from "react-native-elements";
import textSizes from "../constants/textSizes.js";
import RadioGroup from "../helpers/RadioGroup.js";
import QuestionContainer from "./Questions/QuestionContainer.jsx";
import QuestionDescription from "./Questions/QuestionDescription.jsx";
import QuestionTitle from "./Questions/QuestionTitle.jsx";

class OptTextQuestion extends Component {
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

  onChangeText = (data) => {
    let response = {
      alias: this.state.question.alias,
      value: this.state.answer.value,
      nextq: this.state.answer.nextq,
      text: data,
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
      if (pa.alias != ca.alias || pa.value != ca.value || pa.text != ca.text) {
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

  renderInput() {
    if (this.state.question !== undefined) {
      let inputDisabled = true;
      if (this.state.answer !== undefined) {
        let textOptions = this.state.question.answers.filter(
          (a) => a.type == "text"
        );
        if (textOptions.length > 0) {
          if (this.state.answer.value == textOptions[0].value) {
            inputDisabled = false;
          }
        }
      }
      return (
        <Input
          inputStyle={{ fontSize: textSizes.answerTextInput }}
          placeholder={this.state.question.placeholder}
          multiline
          disabled={inputDisabled}
          onChangeText={this.onChangeText}
          value={this.state.answer !== undefined ? this.state.answer.text : ""}
          leftIcon={
            <Icon
              name="keyboard-o"
              type="font-awesome"
              color="black"
              style={{ paddingRight: 8 }}
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
        {this.renderRadioGroup()}
        {this.renderInput()}
      </QuestionContainer>
    );
  }
}

export default OptTextQuestion;
