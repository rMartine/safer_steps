import React, { Component } from "react";
import { View, ScrollView, Alert, BackHandler } from "react-native";
import { BottomSheet, Button, Icon } from "react-native-elements";
import styles from "../styles";
import StairCard from "./StairCard.js";
import Notification from "./Notification.js";
import BodyText from "./BodyText.js";
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler,
} from "../helpers/androidBackButton";
import HeaderBar from "./HeaderBar.js";
import getTranslation from "./getTranslation";
import { MaterialIcons } from "@expo/vector-icons";
import CONSTANTS from "../constants";
import { useTranslation, Trans } from "react-i18next";
import posed from "react-native-pose";

import colors from "../constants/colors";
import textSizes from "../constants/textSizes";
import DeleteSheet from "./DeleteSheet";
import EmtpyHome from "./EmptyHome";
import { Divider } from "react-native-paper";
import UploadSheet from "./UploadSheet";
const helper = require("../helpers/helper.js");
const uploadStairs = require("../helpers/upload_stairs.js");

const exitAlert = () => {
  Alert.alert(
    "Confirm exit",
    "Do you want to quit the app?",
    [
      {
        text: "no",
        style: "cancel",
      },
      {
        text: "yes",
        style: "ok",
        onPress: () => BackHandler.exitApp(),
      },
    ],
    { cancelable: false }
  );
};

const Box = posed.View({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
});

const AnimatedButton = posed.View({
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 60 },
});

class Home extends Component {
  //header : (navigation) => <HeaderBar title='Safer Steps' home={true} navigation={undefined} />
  constructor(props) {
    super(props);
    this.state = {
      stairs: undefined,
      stairAlias: {},
      modalUploadVisible: false,
      modalDeleteVisible: false,
      modalActivityVisible: false,
      currentItem: null,
    };
    this.helper = require("../helpers/helper.js");
  }

  setUploadModalVisible = (visible, currentItem = null) => {
    this.setState({
      modalUploadVisible: visible,
      currentItem: currentItem,
    });
  };

  setDeleteModalVisible = (visible, currentItem = null) => {
    this.setState({
      modalDeleteVisible: visible,
      currentItem: currentItem,
    });
  };

  setActivityModalVisible = (visible) => {
    this.setState({
      modalActivityVisible: visible,
    });
  };

  componentDidMount() {
    //helper.clearAsyncStorage();
    this.helper.asyncStorageGetItem("stairs", (response) => {
      let newStairs = [];
      response.map((item) => {
        let alias = "NO-NAME";
        let answerList = item.answers.findIndex((a) => a.alias == "q0");
        if (answerList >= 0) {
          alias = item.answers[answerList].value;
        }
        item.alias = alias;
        newStairs.push(item);
      });
      this.setState(
        (previousState) => ({ stairs: newStairs }),
        () => {
          helper.asyncStorageSetItem("stairs", this.state.stairs);
        }
      );
    });
    handleAndroidBackButton(exitAlert);
    this.setStairAlias();
  }

  componentWillUnmount() {
    removeAndroidBackButtonHandler();
  }

  updateStairList = () => {
    this.setStairAlias();
    this.helper.asyncStorageGetItem("stairs", (response) => {
      let newStairs = [];
      response.map((item) => {
        let alias = "NO-NAME";
        let answerList = item.answers.findIndex((a) => a.alias == "q0");
        if (answerList >= 0) {
          //COde intended to obtain an alias for the staircase and show on the list in Home screen
          alias = item.answers[answerList].value;
        }
        item.alias = alias;
        newStairs.push(item);
      });
      this.setState(
        (previousState) => ({ stairs: newStairs }),
        () => {
          helper.asyncStorageSetItem("stairs", this.state.stairs);
        }
      );
    });
  };

  setStairAlias = () => {
    helper.asyncStorageGetItem("stairs", (response) => {
      let stairAliasList = this.state.stairAlias;
      if (response.length > 0) {
        response.map((item) => {
          let stairAlias = "No-Title";
          let staircaseIdex = response.findIndex(
            (s) => s.stairId == item.stairId
          );
          if (staircaseIdex >= 0) {
            let prevAnswersIndex = response[staircaseIdex].answers.findIndex(
              (q) => q.alias == "q6"
            );
            if (prevAnswersIndex >= 0) {
              stairAlias =
                CONSTANTS.STAIR_NAMES[
                  response[staircaseIdex].answers[prevAnswersIndex].value
                ];
            }
          }
          stairAliasList[item.stairId] = stairAlias;
        });
      }
      this.setState({ stairAlias: stairAliasList });
    });
  };

  renderStairList() {
    if (this.state.stairs !== undefined) {
      return this.state.stairs.map((item) => {
        return (
          <StairCard
            key={item.stairId}
            title={this.state.stairAlias[item.stairId]}
            homeLoading={this.state.modalActivityVisible}
            onEditQ={() =>
              this.props.navigation.navigate("Questionnaire", {
                stairid: item.stairId,
                onStairListUpdated: this.updateStairList,
              })
            }
            onUploadA={() => this.setUploadModalVisible(true, item.stairId)}
            onRemoveS={() => this.setDeleteModalVisible(true, item.stairId)}
          />
        );
      });
    } else {
      return <BodyText value="There are no stairs captured yet." />;
    }
  }

  closeActivityModalFunction = () => {
    this.setActivityModalVisible(false);
  };

  uploadFunction = () => {
    console.log("Uploading");
    uploadStairs.uploadStair(
      this.state.currentItem,
      this.closeActivityModalFunction
    );
    //this.setUploadModalVisible(false); Dont close modal to give feedback in there
    this.setActivityModalVisible(true);
  };

  cancelUploadFunction = () => {
    console.log("Canceling upload");
    this.setUploadModalVisible(false);
  };

  deleteFunction = () => {
    console.log("Deleting on OG function");
    let newStairs = this.state.stairs;
    let satairIndex = newStairs.findIndex(
      (i) => i.stairId == this.state.currentItem
    );
    if (satairIndex >= 0) {
      newStairs.splice(satairIndex, 1);
      helper.asyncStorageSetItem("stairs", newStairs, this.updateStairList);
    }
    this.setDeleteModalVisible(false);
  };

  cancelDeleteFunction = () => {
    console.log("Canceling delete function");
    this.setDeleteModalVisible(false);
  };

  render() {
    const uuidv4 = require("uuid/v4");
    let uploadModalVisible = this.state.modalUploadVisible;
    let deleteModalVisible = this.state.modalDeleteVisible;
    let activityModalVisible = this.state.modalActivityVisible;

    // setUploadModalVisible()
    // in props send notificationType = [1: Image, 2: Activity Indicator, 3: One Button, 4: Two Buttons]
    // buttonsText = [array of strings]
    // imageIcon = from the ones listed above
    // message = String to show
    // vissible = True/False
    // onPressed = [function]

    if (this.state.stairs && this.state.stairs.length === 0) {
      return (
        <EmtpyHome
          createButton={
            // The best practice would be to make this button a component and re use it in EmtpyHome, but this approach it's easier to do for now
            <Button
              titleStyle={{
                fontSize: textSizes.buttonTitle,
                color: colors.textOnSecondary,
              }}
              title={getTranslation("staircase")}
              icon={
                <MaterialIcons
                  name="add"
                  style={{ paddingRight: 16, color: colors.textOnSecondary }}
                  size={28}
                />
              }
              buttonStyle={{
                backgroundColor: colors.secondary,
                paddingHorizontal: 32,
              }}
              onPress={() =>
                this.props.navigation.navigate("Questionnaire", {
                  stairid: uuidv4(),
                  onStairListUpdated: this.updateStairList,
                })
              }
            />
          }
        />
      );
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        {/* <Notification
          notificationType={4}
          buttonsText={[getTranslation("agree"), getTranslation("cancel")]}
          visible={uploadModalVisible}
          message={getTranslation("uploadConfirmation")}
          onPressed={[this.uploadFunction, this.cancelUploadFunction]}
        /> */}
        {/* <Notification
          notificationType={4}
          buttonsText={[getTranslation("delete"), getTranslation("cancel")]}
          visible={deleteModalVisible}
          message={getTranslation("deleteConfirmation")}
          onPressed={[this.deleteFunction, this.cancelDeleteFunction]}
        /> */}
        {/* <Notification notificationType={2} visible={activityModalVisible} /> */}
        <HeaderBar
          title={getTranslation("saferSteps")}
          home={true}
          navigation={undefined}
          style={{ flex: 1 }}
        />
        <ScrollView
          style={{
            flex: 15,
            paddingLeft: 16,
            paddingRight: 16,
          }}
          contentContainerStyle={{
            paddingBottom: 96,
          }}
        >
          {this.renderStairList()}
        </ScrollView>
        <AnimatedButton
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid grey",
            marginTop: 16,
          }}
          pose={deleteModalVisible || uploadModalVisible ? "hidden" : "visible"}
        >
          <Divider style={{ height: 2 }} />
          <Button
            titleStyle={{
              fontSize: textSizes.buttonTitle,
              color: colors.textOnSecondary,
            }}
            title={getTranslation("staircase")}
            icon={
              <MaterialIcons
                name="add"
                style={{ paddingRight: 16, color: colors.textOnSecondary }}
                size={28}
              />
            }
            buttonStyle={{
              paddingHorizontal: 8,
              paddingVertical: 12,
              backgroundColor: colors.secondary,
              shadowColor: "#000",
            }}
            containerStyle={{ padding: 16, zIndex: -1 }}
            onPress={() =>
              this.props.navigation.navigate("Questionnaire", {
                stairid: uuidv4(),
                onStairListUpdated: this.updateStairList,
              })
            }
          />
        </AnimatedButton>
        {/* Delete notification */}
        <DeleteSheet
          onSheetClose={() => this.setState({ modalDeleteVisible: false })}
          open={deleteModalVisible}
          onDelete={this.deleteFunction}
          onCancel={this.cancelDeleteFunction}
        ></DeleteSheet>

        <UploadSheet
          onSheetClose={() => this.setState({ modalUploadVisible: false })}
          open={uploadModalVisible}
          onUpload={this.uploadFunction}
          onCancel={this.cancelUploadFunction}
          loading={activityModalVisible}
        ></UploadSheet>
        <Box
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
          pointerEvents={
            deleteModalVisible || uploadModalVisible ? "auto" : "none"
          }
          pose={deleteModalVisible || uploadModalVisible ? "visible" : "hidden"}
        ></Box>
      </View>
    );
  }
}

export default Home;
