import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Button, Icon } from "react-native-elements";
import EmptyQuestion from "./EmptyQuestion.js";
import OptionQuestion from "./OptionQuestion.js";
import NumericQuestion from "./NumericQuestion.js";
import TextQuestion from "./TextQuestion.js";
import InstructQuestion from "./InstructQuestion.js";
import PhotoQuestion from "./PhotoQuestion.js";
import OptTextQuestion from "./OptTextQuestion.js";
import * as Progress from "react-native-progress";
import ImageOptionQuestion from "./ImageOptionQuestion";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import questionnaire from "../questionnaire";
import HeaderBar from "./HeaderBar.js";
import textSizes from "../constants/textSizes.js";
import getTranslation from "./getTranslation.js";

const qpHelper = require("../helpers/helper.js");
const helper = require("../helpers/helper.js");

const navigation = undefined;

const qArray = questionnaire.questionnaire.questions;

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stairId: props.navigation.getParam("stairid", "NO-ID"),
      entryQ: "q1",
      firstRender: true,
      currentA: undefined,
      currentQ: undefined,
      qStack: ["exit"],
      nextDisabled: true,
    };
    this.navigation = props.navigation;
  }

  getQuestion(qAlias) {
    let qIndex = qArray.findIndex((q) => q.alias == qAlias);
    if (qAlias == "exit") {
      this.navigation.goBack();
    }
    if (qIndex >= 0) {
      this.setState(
        (previousState) => ({ currentQ: qArray[qIndex] }),
        () => {
          this.getAnswer(qAlias);
        }
      );
    }
  }

  getAnswer(qAlias) {
    //Technical debt? what are you talking about?
    helper.asyncStorageGetItem("stairs", (response) => {
      if (response.length > 0) {
        let staircaseIdex = response.findIndex(
          (s) => s.stairId == this.state.stairId
        );
        if (staircaseIdex >= 0) {
          let prevAnswersIndex = response[staircaseIdex].answers.findIndex(
            (q) => q.alias == qAlias
          );
          if (prevAnswersIndex >= 0) {
            this.setState((previousState) => ({
              currentA: response[staircaseIdex].answers[prevAnswersIndex],
              nextDisabled: false,
            }));
          }
        }
      }
    });
  }

  setAnswer(newAnswer) {
    helper.asyncStorageGetItem("stairs", (response) => {
      if (response.length > 0) {
        let staircaseIndex = response.findIndex(
          (s) => s.stairId == this.state.stairId
        );
        if (staircaseIndex >= 0) {
          let answerIndex = response[staircaseIndex].answers.findIndex(
            (a) => a.alias == newAnswer.alias
          );
          if (answerIndex < 0) {
            //Answer not found!
            response[staircaseIndex].answers.push(newAnswer);
            helper.asyncStorageSetItem(
              "stairs",
              response,
              this.navigation.getParam("onStairListUpdated")
            );
          } else {
            //Previous answer found and overwrite!
            response[staircaseIndex].answers[answerIndex].value =
              newAnswer.value;
            response[staircaseIndex].answers[answerIndex].nextq =
              newAnswer.nextq;
            response[staircaseIndex].answers[answerIndex].text = newAnswer.text;
            helper.asyncStorageSetItem(
              "stairs",
              response,
              this.navigation.getParam("onStairListUpdated")
            );
          }
        } else {
          //First answer new stair
          let newAnswers = [];
          newAnswers.push(newAnswer);
          let newStair = {
            stairId: this.state.stairId,
            answers: newAnswers,
            alias:
              newAnswer.alias == "q0"
                ? newAnswer.value
                : "No-Name-" + Math.trunc(Math.random() * 10),
          };
          response.push(newStair);
          helper.asyncStorageSetItem(
            "stairs",
            response,
            this.navigation.getParam("onStairListUpdated")
          );
        }
      } else {
        // No object stairs
        //First answer new stair
        let newAnswers = [];
        newAnswers.push(newAnswer);
        let newStair = {
          stairId: this.state.stairId,
          answers: newAnswers,
          alias:
            newAnswer.alias == "q0"
              ? newAnswer.value
              : "No-Name-" + Math.trunc(Math.random() * 10),
        };
        let stairs = [];
        stairs.push(newStair);
        helper.asyncStorageSetItem(
          "stairs",
          stairs,
          this.navigation.getParam("onStairListUpdated")
        );
      }
    });
  }

  handleAnswer = (response) => {
    this.setState(
      (previousState) => ({
        currentA: {
          value: response.value,
          nextq: response.nextq,
          alias: response.alias,
          text: response.text !== undefined ? response.text : undefined,
        },
        nextDisabled: false,
      }),
      () => {
        this.setAnswer(this.state.currentA);
      }
    );
  };

  componentDidMount() {
    helper.asyncStorageGetItem("stairs", (response) => {
      let entryQ = this.state.entryQ;
      if (response.length > 0) {
        let staircaseIdex = response.findIndex(
          (s) => s.stairId == this.state.stairId
        );
        if (staircaseIdex >= 0) {
          let prevAnswersIndex = response[staircaseIdex].answers.findIndex(
            (q) => q.alias == entryQ
          );
          if (prevAnswersIndex >= 0) {
            let respArray = [];
            response[staircaseIdex].answers.map((item) => {
              respArray.push(parseInt(item.alias.replace("q", "")));
            });
            entryQ =
              Math.max(...respArray) > 0
                ? "q" + Math.max(...respArray)
                : entryQ;
          }
        }
      }
      this.getQuestion(entryQ);
    });
  }

  renderQuestion() {
    let currentQNumber =
      this.state.currentQ != undefined
        ? parseInt(this.state.currentQ.alias.replace("q", ""))
        : 0;

    if (this.state.currentQ !== undefined) {
      switch (this.state.currentQ.type) {
        case "option":
          return (
            <OptionQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        case "numeric":
          return (
            <NumericQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        case "text":
          return (
            <TextQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        case "instruct":
          return (
            <InstructQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        case "photo":
          return (
            <PhotoQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        case "opt-text":
          return (
            <OptTextQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        case "imageOption":
          return (
            <ImageOptionQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
        default:
          return (
            <EmptyQuestion
              onHandleAnswer={this.handleAnswer}
              question={this.state.currentQ}
              answer={this.state.currentA}
              questionNumber={currentQNumber}
            />
          );
      }
    }
  }

  goBack() {
    let prevQ = this.state.qStack.pop();
    this.getQuestion(prevQ);
  }

  goNext() {
    if (this.state.currentA !== undefined) {
      //Impossible to happe bc when undefined this button is disabled
      let qStack = this.state.qStack;
      let nextQ = this.state.currentA.nextq;
      qStack.push(this.state.currentQ.alias);
      this.setState(
        (previousState) => ({
          nextDisabled: true,
          currentA: undefined,
        }),
        () => {
          this.getQuestion(nextQ);
        }
      );
    }
  }

  cancelQ() {
    this.navigation.goBack();
  }

  render() {
    let currentQNumber =
      this.state.currentQ != undefined
        ? parseInt(this.state.currentQ.alias.replace("q", ""))
        : 0;
    let currentProgress = currentQNumber / (qArray.length - 1);

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <HeaderBar
          goBack={this.navigation.goBack}
          title="Questionnaire"
          home={false}
          navigation={undefined}
          progress={currentProgress}
          style={{ flex: 1 }}
        />

        <Progress.Bar
          useNativeDriver
          animated
          progress={currentProgress}
          width={Dimensions.get("window").width + 4}
          borderColor={"rgba(0,0,0,0)"}
          height={30}
          borderWidth={0}
          style={{ marginTop: -1 }}
          color={colors.secondary}
          unfilledColor="rgba(0,0,0,0.16)"
          borderRadius={0}
        />

        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            {this.renderQuestion()}
          </ScrollView>
        </View>

        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 8,
            borderTopWidth: 1,
            borderTopColor: "rgba(0,0,0,0.4)",
          }}
        >
          <View style={{ flex: 1, paddingLeft: 8, paddingRight: 16 }}>
            <Button
              titleStyle={{ fontSize: textSizes.buttonTitle }}
              buttonStyle={{
                backgroundColor: colors.secondary,
                color: colors.textOnSecondary,
              }}
              icon={
                <MaterialCommunityIcons
                  name="backup-restore"
                  size={26}
                  style={{
                    paddingRight: 16,
                  }}
                  color="white"
                />
              }
              title={getTranslation("back")}
              onPress={() => this.goBack()}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 16, paddingRight: 8 }}>
            <Button
              titleStyle={{ fontSize: textSizes.buttonTitle }}
              buttonStyle={{
                backgroundColor: colors.secondary,
                color: colors.textOnSecondary,
              }}
              icon={
                <MaterialCommunityIcons
                  name="arrow-right"
                  style={{
                    paddingLeft: 16,
                  }}
                  size={26}
                  color="white"
                />
              }
              title={getTranslation("next")}
              iconRight
              disabled={this.state.nextDisabled}
              onPress={() => this.goNext()}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Questionnaire;
