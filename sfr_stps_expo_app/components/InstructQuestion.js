import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { Card, Button, Icon, Input } from "react-native-elements";
import colors from "../constants/colors";
import QuestionChecker from "./Questions/QuestionChecker";
import QuestionContainer from "./Questions/QuestionContainer";
import QuestionDescription from "./Questions/QuestionDescription";
import QuestionTitle from "./Questions/QuestionTitle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const img_qr_diagram = require("../image_assets/qr_instructions_diagram.png");
const img_qr_diagram_top = require("../image_assets/qr_instructions_diagram_top.png");
const img_qr_diagram_bottom = require("../image_assets/qr_instructions_diagram_bottom.png");
const img_qr_diagram_rail = require("../image_assets/qr_instructions_diagram_rail.png");
const img_info_circle = require("../image_assets/info_circle_t.png");
const img_flights_description = require("../image_assets/flights_diagram.jpg");
const img_railing_diagram = require("../image_assets/railing_diagram.jpg");

class InstructQuestion extends Component {
  constructor(props) {
    super(props);
    let question_image = img_info_circle;
    switch (props.question.image) {
      case "qr_instructions_diagram":
        question_image = img_qr_diagram;
        break;
      case "qr_instructions_diagram_top":
        question_image = img_qr_diagram_top;
        break;
      case "qr_instructions_diagram_bottom":
        question_image = img_qr_diagram_bottom;
        break;
      case "qr_instructions_diagram_rail":
        question_image = img_qr_diagram_rail;
        break;
      case "info_circle":
        question_image = img_qr_diagram;
        break;
      case "flights_description":
        question_image = img_flights_description;
        break;
      case "railing_diagram":
        question_image = img_railing_diagram;
        break;
      case "none":
        question_image = img_info_circle;
        break;
    }
    this.state = {
      question: props.question,
      answer: props.answer,
      question_image,
    };
  }

  immediateUpdate = () => {
    let response = {
      alias: this.state.question.alias,
      value: "ok",
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

  render() {
    return (
      <QuestionContainer>
        <QuestionTitle number={this.props.questionNumber}></QuestionTitle>
        <View style={{ paddingTop: 16 }} />
        <Image
          source={this.state.question_image}
          style={{
            resizeMode: "contain",
            maxHeight: 380,
            width: "100%"
          }}
        />
        <QuestionDescription>{this.state.question.qtext}</QuestionDescription>
        <QuestionChecker
          onPress={this.immediateUpdate}
          title="OK"
          answer={this.state.answer}
        ></QuestionChecker>
      </QuestionContainer>
    );
  }
}

export default InstructQuestion;
