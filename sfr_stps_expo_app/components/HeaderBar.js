import React, { Component } from "react";
import { View, Dimensions, Picker } from "react-native";
import { Image, Text, Header, Icon } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";
import textSizes from "../constants/textSizes";
import { Menu, Button, Divider } from "react-native-paper";
import i18n from "i18next";
import AsyncStorage from "@react-native-community/async-storage";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = props.goBack;
    this.state = {
      selectedLanguage: "en",
      visible: false,
    };
  }

  openMenu = () => {
    this.setState({ visible: true });
  };

  closeMenu = () => {
    this.setState({ visible: false });
  };

  getCurrentLanguage = () => {
    return this.state.selectedLanguage;
  };

  _storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@language", value);
      console.log("Language saved correctly");
    } catch (error) {
      console.log("Async its not working somehow", error);
    }
  };

  changeLanguage = (key) => {
    console.log("Changing language to ", key);
    i18n.changeLanguage(key, (err, t) => {
      if (err) {
        return console.log(
          "something went wrong loading the new language",
          err
        );
      } else {
        this._storeData(key);
      }
      t("key"); // -> same as i18next.t
    });

    this.setState({ selectedLanguage: key });

    this.closeMenu();
  };

  renderHeaderHome() {
    return (
      <Header
        statusBarProps={{
          barStyle: "light-content",
          backgroundColor: colors.statusBar,
        }}
        barStyle="light-content" // or directly
        centerComponent={
          <Text
            style={{
              color: colors.headerText,
              textAlign: "left",
              fontSize: textSizes.header,
            }}
          >
            {this.props.title}
          </Text>
        }
        rightComponent={
          <MaterialCommunityIcons
            style={{ fontSize: 32, textAlign: "center" }}
            name="stairs"
            color={colors.headerText}
          />
          /* <Image
            source={require("../image_assets/safer_steps_logo.png")}
            resizeMode="contain"
            style={{
              alignSelf: "center",
              height: 50,
              width: 50,
              borderWidth: 0,
              borderRadius: 75,
            }}
          /> */
        }
        containerStyle={{
          backgroundColor: colors.header,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      />
    );
  }

  renderHeaderQuestionnaire() {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header
          statusBarProps={{
            barStyle: "light-content",
            backgroundColor: colors.statusBar,
          }}
          barStyle="light-content" // or directly
          centerComponent={
            <Text
              style={{
                color: colors.headerText,
                textAlign: "left",
                fontSize: textSizes.header,
              }}
            >
              {this.props.title}
            </Text>
          }
          rightComponent={
            <Menu
              visible={this.state.visible}
              onDismiss={this.closeMenu}
              anchor={
                <Button labelStyle={{ color: "white" }} onPress={this.openMenu}>
                  {this.getCurrentLanguage()}
                </Button>
              }
            >
              <Menu.Item
                onPress={() => this.changeLanguage("es")}
                title="Español"
              />
              <Menu.Item
                onPress={() => this.changeLanguage("en")}
                title="English"
              />
              <Divider />
              <Menu.Item
                onPress={() => this.changeLanguage("fr")}
                title="French"
              />
            </Menu>
            /* <Image
            source={require("../image_assets/safer_steps_logo.png")}
            resizeMode="contain"
            style={{
              alignSelf: "center",
              height: 50,
              width: 50,
              borderWidth: 0,
              borderRadius: 75,
            }}
          /> */
          }
          leftComponent={
            <TouchableOpacity onPress={() => this.backToHome()}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={28}
                color={colors.headerText}
              />
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: colors.header,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        />
        {/* <Header
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content" // or directly
          leftComponent={
            <Icon
              raised
              containerStyle={{
                justifyContent: "space-around",
              }}
              name="arrow-left"
              type="font-awesome"
              color="#f50"
              onPress={() => this.backToHome()}
            />
          }
          centerComponent={
            <Text style={{ color: "white" }} h4>
              {this.props.title}
            </Text>
          }
          rightComponent={
            <Image
              source={require("../image_assets/safer_steps_logo.png")}
              resizeMode="contain"
              style={{
                alignSelf: "center",
                height: 60,
                width: 60,
                borderWidth: 0,
                borderRadius: 75,
              }}
            />
          }
          containerStyle={{
            backgroundColor: "#3D6DCC",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        /> */}
      </View>
    );
  }

  backToHome = () => {
    this.goBack();
  };

  render() {
    const header = this.props.home
      ? this.renderHeaderHome()
      : this.renderHeaderQuestionnaire();
    return header;
  }
}

export default HeaderBar;
