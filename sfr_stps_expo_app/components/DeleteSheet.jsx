import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { Button } from "react-native-elements";

import BottomSheet from "reanimated-bottom-sheet";
import textSizes from "../constants/textSizes";
import getTranslation from "./getTranslation";

import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DeleteSheet(props) {
  const { t } = useTranslation();

  const myDelete = () => {
    console.log("Delete on first thingu");
    props.onDelete();
  };

  const myCancel = () => {
    console.log("Canceling on first thingu");
    props.onCancel();
  };

  const sheetRef = React.useRef(null);

  useEffect(() => {
    if (props.open) {
      sheetRef.current.snapTo(0);
    } else {
      if (!props.open) {
        sheetRef.current.snapTo(1);
      }
    }
  }, [props.open]);

  return (
    <BottomSheet
      enabledGestureInteraction={false}
      ref={sheetRef}
      snapPoints={["40%", "0%"]}
      borderRadius={24}
      renderContent={() => (
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            height: "100%",
            zIndex: 999,
            paddingTop: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -100,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 32,
            }}
          >
            <View
              style={{
                height: 6,
                width: "30%",
                backgroundColor: "#212121",
                borderRadius: 8,
              }}
            ></View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: textSizes.questionDescription }}>
              {getTranslation("deleteConfirmation")}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, padding: 8, paddingLeft: 0 }}>
                <TouchableOpacity
                  onPress={myCancel}
                  style={{
                    paddingHorizontal: 24,
                    paddingVertical: 8,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    borderRadius: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: textSizes.buttonTitle,
                      alignSelf: "center",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {t("cancel")}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, padding: 8, paddingRight: 0 }}>
                <TouchableOpacity
                  onPress={myDelete}
                  style={{
                    paddingHorizontal: 24,
                    paddingVertical: 8,
                    backgroundColor: "rgba(0,0,0,1)",
                    borderRadius: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: textSizes.buttonTitle,
                      alignSelf: "center",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {t("delete")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
      initialSnap={1}
      onCloseEnd={props.onSheetClose}
    />
  );
}
