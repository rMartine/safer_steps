import React from "react";
import { Text } from "react-native";
import textSizes from "../../constants/textSizes";
import getTranslation from "../getTranslation";

export default function QuestionTitle(props) {
  return (
    <Text style={{ fontSize: textSizes.questionTitle, color: "#000" }}>
      {getTranslation("question") + " " + props.number}
    </Text>
  );
}
