import React from "react";
import { Text, View } from "react-native";

export default function QuestionContainer(props) {
  return (
    <View
      style={{ paddingHorizontal: 24, paddingTop: 36, paddingVertical: 16 }}
    >
      {props.children}
    </View>
  );
}
