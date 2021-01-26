import * as React from "react";
import { RadioButton } from "react-native-paper";
import { View, Text, TouchableNativeFeedback } from "react-native";

export default function MyRadio(props) {
  return (
    <TouchableNativeFeedback
      style={[
        {
          borderRadius: 4,
          backgroundColor: props.selected
            ? "rgba(2, 119, 189, 0.1)"
            : "rgba(0,0,0,0)",
        },
      ]}
      onPress={props.onPress}
    >
      <View
        style={{
          maxHeight: 48,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 16,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",

            alignItems: "center",

            // Aligned left answers
            //justifyContent: "flex-start",
            //paddingHorizontal: "30%",
          }}
        >
          <Text
            style={{
              color: props.selected ? "#0277bd" : "rgba(0,0,0,0.6)",
              textAlign: "center",
              fontSize: props.selected ? 16 : 16,
            }}
          >
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
