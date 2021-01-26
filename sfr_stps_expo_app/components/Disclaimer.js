import React, { useState } from "react";
import { View, ScrollView, BackHandler, Text } from "react-native";
import { Button } from "react-native-elements";
import BodyText from "./BodyText.js";
import { useTranslation } from "react-i18next";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import textSizes from "../constants/textSizes.js";

export default function Disclaimer(props) {
  //header : (navigation) => <HeaderBar title='Safer Steps' home={true} navigation={undefined} />
  const [nextDisabled, setNextDisabled] = useState(true);

  const enableNext = () => {
    setNextDisabled(false);
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: "20%",
        }}
      >
        <View style={{ paddingBottom: 16 }}>
          <MaterialCommunityIcons
            style={{ fontSize: 60, textAlign: "center" }}
            name="stairs"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 48, textAlign: "center" }}>Safer Steps</Text>
        </View>

        <ScrollView
          style={{
            height: "100%",
            borderTopColor: "rgba(0,0,0,0.1)",
            borderTopWidth: 1,
          }}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 16,
          }}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              enableNext();
            }
          }}
          scrollEventThrottle={400}
        >
          <BodyText value={t("disclaimer")} />
        </ScrollView>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "rgba(0,0,0,0.4)",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={{ flex: 1, padding: 8 }}>
          <Button
            buttonStyle={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            titleStyle={{ fontSize: textSizes.buttonTitle }}
            title={t("disagree")}
            onPress={() => BackHandler.exitApp()}
            disabled={nextDisabled}
          />
        </View>
        <View style={{ flex: 1, padding: 8 }}>
          <Button
            buttonStyle={{ backgroundColor: "black" }}
            titleStyle={{ fontSize: textSizes.buttonTitle }}
            title={t("agree")}
            onPress={() => props.navigation.navigate("Home")}
            disabled={nextDisabled}
          />
        </View>
      </View>
    </View>
  );
}
