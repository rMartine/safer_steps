import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native";
import colors from "../constants/colors";
import textSizes from "../constants/textSizes";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function EmtpyHome(props) {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        paddingHorizontal: 32,
      }}
    >
      <View style={{ paddingBottom: 32 }}>
        <Image
          style={{
            width: 120,
            height: 120,
            resizeMode: "cover",
          }}
          source={require("../assets/stairs.png")}
        ></Image>
      </View>
      <View>
        <Text
          style={{
            color: "rgba(0,0,0,1)",
            fontSize: textSizes.header,
            textAlign: "center",
          }}
        >
          {t("emptyStairs")}
        </Text>
      </View>
      <View style={{ paddingTop: 8 }}>
        <Text
          style={{
            color: "rgba(0,0,0,0.6)",
            fontSize: textSizes.questionOption,
            textAlign: "center",
          }}
        >
          {t("emptyStairsDescription")}
        </Text>
      </View>
      <View style={{ paddingTop: 48 }}>{props.createButton}</View>
    </View>
  );
}
