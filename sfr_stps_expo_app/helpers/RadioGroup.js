import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { max } from "react-native-reanimated";
import colors from "../constants/colors";
import textSizes from "../constants/textSizes";

const oval = require("../image_assets/oval.png");
const sniped_square = require("../image_assets/sniped_square.png");
const trapezoid = require("../image_assets/trapezoid.png");
const triangle = require("../image_assets/triangle.png");
const bread = require("../image_assets/rail_shape_bread.png");
const circle = require("../image_assets/rail_shape_circle.png");
const square = require("../image_assets/rail_shape_square.png");
const tall = require("../image_assets/rail_shape_tall.png");
const tee = require("../image_assets/rail_shape_tee.png");

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    let currentA =
      props.currentAnswer === undefined
        ? "no-answer"
        : props.currentAnswer.value;
    let options = [];
    props.radioButtons.map((option) => {
      let optioncopy = {
        value: option.value,
        label: option.label,
        nextq: option.nextq,
        image: option.image,
        selected: currentA == option.value ? true : false,
      };
      options.push(optioncopy);
    });
    this.state = {
      radioButtons: this.validate(options),
    };
  }

  updateStateOptions() {
    let currentA =
      this.props.currentAnswer === undefined
        ? "no-answer"
        : this.props.currentAnswer.value;
    let options = [];
    this.props.radioButtons.map((option) => {
      let optioncopy = {
        value: option.value,
        label: option.label,
        nextq: option.nextq,
        image: option.image,
        selected: currentA == option.value ? true : false,
      };
      options.push(optioncopy);
    });
    this.setState((previousState) => ({
      radioButtons: this.validate(options),
    }));
  }

  componentDidUpdate(prevProps) {
    //Necessary because the props are changing dynamically
    let pa = prevProps.currentAnswer;
    let ca = this.props.currentAnswer;
    let prb = prevProps.radioButtons;
    let crb = this.props.radioButtons;

    if (pa !== undefined && ca !== undefined) {
      if (pa.alias != ca.alias || pa.value != ca.value) {
        this.updateStateOptions();
      }
    } else if (
      (pa === undefined && ca !== undefined) ||
      (pa !== undefined && ca === undefined)
    ) {
      this.updateStateOptions();
    }

    if (prb !== undefined && crb !== undefined) {
      if (prb[0].nextq != crb[0].nextq) {
        this.updateStateOptions();
      }
    } else if (
      (prb === undefined && crb !== undefined) ||
      (prb !== undefined && crb === undefined)
    ) {
      this.updateStateOptions();
    }
  }

  validate(data) {
    let selected = false; // Variable to check if "selected: true" for more than one button.
    data.map((e) => {
      e.color = e.color ? e.color : "#444";
      e.disabled = e.disabled ? e.disabled : false;
      e.label = e.label ? e.label : "You forgot to give label";
      e.layout = e.layout ? e.layout : "row";
      e.selected = e.selected ? e.selected : false;
      if (e.selected) {
        if (selected) {
          e.selected = false; // Making "selected: false", if "selected: true" is assigned for more than one button.
          console.log('Found "selected: true" for more than one button');
        } else {
          selected = true;
        }
      }
      e.size = e.size ? e.size : 24;
      e.nextq = e.nextq ? e.nextq : "exit";
      e.value = e.value ? e.value : e.label;
      e.image = e.image ? e.image : "none";
    });
    return data;
  }

  onPress = (label) => {
    const radioButtons = this.state.radioButtons;
    const selectedIndex = radioButtons.findIndex((e) => e.selected == true);
    const selectIndex = radioButtons.findIndex((e) => e.label == label);
    if (selectedIndex < 0) {
      radioButtons[selectIndex].selected = true;
      this.setState(
        (previousState) => ({ radioButtons }),
        () => {
          this.props.onPress(this.state.radioButtons);
        }
      );
    } else {
      if (selectedIndex != selectIndex) {
        radioButtons[selectedIndex].selected = false;
        radioButtons[selectIndex].selected = true;
        this.setState(
          (previousState) => ({ radioButtons }),
          () => {
            this.props.onPress(this.state.radioButtons);
          }
        );
      }
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        {this.state.radioButtons.map((data) => (
          <RadioButton key={data.label} data={data} onPress={this.onPress} />
        ))}
      </View>
    );
  }
}

class RadioButton extends Component {
  render() {
    const data = this.props.data;
    const opacity = data.disabled ? 0.2 : 1;
    let layout = { flexDirection: "row" };
    let margin = { marginLeft: 10 };
    if (data.layout === "column") {
      layout = { alignItems: "center" };
      margin = { marginTop: 10 };
    }
    let shapeRes = null;
    switch (data.image) {
      case "square":
        shapeRes = square;
        break;
      case "triangle":
        shapeRes = triangle;
        break;
      case "trapezoid":
        shapeRes = trapezoid;
        break;
      case "oval":
        shapeRes = oval;
        break;
      case "sniped_square":
        shapeRes = sniped_square;
        break;
      case "bread":
        shapeRes = bread;
        break;
      case "circle":
        shapeRes = circle;
        break;
      case "square":
        shapeRes = square;
        break;
      case "tall":
        shapeRes = tall;
        break;
      case "tee":
        shapeRes = tee;
        break;
      case "none":
        shapeRes = null;
        break;
    }
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <TouchableOpacity
          ref="touch"
          style={[
            layout,
            {
              opacity,
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginLeft: -16,
              width: "100%",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            },
          ]}
          onPress={() => {
            data.disabled ? null : this.props.onPress(data.label);
          }}
        >
          {/* Text of answer */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              alignContent: "flex-start",
              width: "100%",
            }}
          >
            <View
              style={[
                styles.border,
                {
                  borderColor: data.color,
                  width: data.size,
                  height: data.size,
                  borderRadius: data.size / 2,
                  alignSelf: "center",
                },
              ]}
            >
              {data.selected && (
                <View
                  style={{
                    backgroundColor: data.color,
                    width: data.size / 2,
                    height: data.size / 2,
                    borderRadius: data.size / 2,
                  }}
                />
              )}
            </View>
            <Text
              style={{
                flex: 10,
                color: "#424242",
                fontSize: textSizes.questionOption,
                paddingLeft: 16,
              }}
            >
              {data.label}
            </Text>
          </View>
          {/* Image */}
          {shapeRes ? (
            <View
              style={{
                width: "100%",
                height: 188,
              }}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  width: "100%",
                  maxHeight: "100%",
                }}
                source={shapeRes}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  border: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadioGroup;
