import React, { Component } from "react";
import { View, Image, Alert } from "react-native";
import { Text, Card, Icon } from "react-native-elements";
import getTranslation from "./getTranslation";
import colors from "../constants/colors";

class StairCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          elevation: 4,
          marginTop: 8,
          marginBottom: 8,
          backgroundColor: "white",
          borderRadius: 2,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 0.6,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="stairs"
              type="material-community"
              color={colors.secondary}
              size={70}
            />
          </View>
          <View
            style={{
              flex: 0.7,
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 20 }}>{this.props.title} </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          {/* Button container */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Icon
              raised
              name="edit"
              type="font-awesome"
              color={colors.secondary}
              size={30}
              onPress={() => this.props.onEditQ()}
            />
            <Text style={{ fontSize: 20 }}>{getTranslation("edit")}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Icon
              disabled={this.props.homeLoading}
              raised
              name="cloud-upload"
              type="font-awesome"
              color={colors.secondary}
              size={30}
              onPress={() => this.props.onUploadA()}
            />
            <Text style={{ fontSize: 20 }}>{getTranslation("upload")}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Icon
              raised
              name="trash"
              type="font-awesome"
              color={colors.secondary}
              size={30}
              onPress={() => this.props.onRemoveS()}
            />
            <Text style={{ fontSize: 20 }}>{getTranslation("delete")}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default StairCard;
