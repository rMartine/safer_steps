import React, { Component } from "react";
import { Text, ActivityIndicator, Image, View } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import colors from "../constants/colors.js";
import CameraWraper from "./CameraWraper.js";
import QuestionContainer from "./Questions/QuestionContainer.jsx";
import QuestionTitle from "./Questions/QuestionTitle.jsx";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import textSizes from "../constants/textSizes.js";

class OptionQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer,
      photoCaptureState: false,
    };
  }

  onCapturePhoto = (data) => {
    let response = {
      alias: this.state.question.alias,
      value: { uri: data.uri, width: data.width, height: data.height },
      nextq: this.state.question.nextq,
    };
    this.setState((previousState) => ({ photoCaptureState: false }));
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

  renderCamera() {
    if (this.state.question !== undefined) {
      return <CameraWraper onCaptured={this.onCapturePhoto} />;
    }
  }

  renderPhotoPreview() {
    let photoSource =
      this.state.answer !== undefined
        ? { uri: this.state.answer.value.uri }
        : require("../image_assets/lost_in_papers.jpg");
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 32,
          paddingTop: 48,
          paddingVertical: 16,
        }}
      >
        <QuestionTitle number={this.props.questionNumber}></QuestionTitle>

        {this.state.answer !== undefined ? (
          <Image
            source={photoSource}
            style={{
              resizeMode: "contain",
              flex: 1,
              height: "30%",
              width: "100%",
              borderRadius: 16,
            }}
          />
        ) : (
          <View>
            <MaterialIcons
              onPress={() =>
                this.setState((previousState) => ({
                  photoCaptureState: true,
                }))
              }
              style={{
                alignSelf: "center",
                paddingVertical: 32,
                color: "#212121",
              }}
              name="insert-photo"
              size={130}
            />
            <Text
              style={{
                paddingBottom: 32,
                fontSize: textSizes.photoDescription,
                color: "#424242",
                textAlign: "center",
              }}
            >
              Take the photo described in the previous step
            </Text>
          </View>
        )}

        <Button
          type="clear"
          icon={
            <MaterialIcons
              name="add-a-photo"
              style={{ paddingRight: 8, color: colors.secondary }}
              size={24}
            />
          }
          titleStyle={{ fontSize: textSizes.buttonTitle }}
          buttonStyle={{
            padding: 8,
            color: colors.secondary,
          }}
          onPress={() => this.setState({ photoCaptureState: true })}
          title="CAPTURE PHOTO"
        />
      </View>
    );
  }

  render() {
    return this.state.photoCaptureState
      ? this.renderCamera()
      : this.renderPhotoPreview();
  }
}

export default OptionQuestion;
