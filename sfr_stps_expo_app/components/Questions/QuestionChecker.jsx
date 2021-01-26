import React, { useEffect } from "react";
import { Text, View } from "react-native";
import colors from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import textSizes from "../../constants/textSizes";

export default function QuestionChecker(props) {
  useEffect(() => {
    console.log("Here is the props on Checker", props);
  }, [props]);

  return (
    <Button
      type="outline"
      titleStyle={{ color: colors.secondary, fontSize: textSizes.buttonTitle }}
      icon={
        <MaterialCommunityIcons
          name={
            props.answer !== undefined
              ? "check-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          style={{ paddingRight: 6, color: colors.secondary }}
          size={20}
        />
      }
      buttonStyle={{}}
      style={{
        backgroundColor: colors.secondary,
      }}
      onPress={() => props.onPress()}
      title={props.title}
    />
  );
}
