import React from "react";
import { Text } from "react-native";
import textSizes from "../../constants/textSizes";

export default function QuestionDescription(props) {
  return (
    <Text style={{ paddingVertical: 16, fontSize: textSizes.questionDescription, color: "#424242" }}>
      {props.children}
    </Text>
  );
}
