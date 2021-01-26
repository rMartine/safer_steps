import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { Button } from "react-native-elements";

import BottomSheet from "reanimated-bottom-sheet";
import textSizes from "../constants/textSizes";
import getTranslation from "./getTranslation";

import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProgressBar } from "react-native-paper";
import colors from "../constants/colors";

export default function UploadSheet(props) {
  const { t } = useTranslation();

  const myUpload = () => {
    console.log("Delete on first thingu");
    props.onUpload();
  };

  const myCancel = () => {
    console.log("Canceling on first thingu");
    props.onCancel();
  };

  const sheetRef = React.useRef(null);

  const [firstOpen, setFirstOpen] = useState(false);
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    if (props.open) {
      sheetRef.current.snapTo(0);
      setFirstOpen(true);
      setAlreadyLoaded(false);
    } else {
      if (!props.open) {
        sheetRef.current.snapTo(1);
      }
    }
  }, [props.open]);

  useEffect(() => {
    if (alreadyLoaded === false && firstOpen && firstLoad) {
      setAlreadyLoaded(true);
    }

    if (firstLoad === false) {
      setFirstLoad(true);
    }
  }, [props.loading]);

  useEffect(() => {
    if (alreadyLoaded && firstLoad && !props.loading && firstOpen) {
      setTimeout(() => {
        if (
          props.open &&
          alreadyLoaded &&
          firstLoad &&
          !props.loading &&
          firstOpen
        ) {
          myCancel();
        }
      }, 100);
    }
  }, [alreadyLoaded, props.loading]);

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
            {props.loading ? (
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    paddingBottom: 8,
                    fontSize: textSizes.header,
                    textAlign: "left",
                  }}
                >
                  {getTranslation("uploading")}
                </Text>
                <Text
                  style={{
                    fontSize: textSizes.questionDescription,
                    textAlign: "left",
                    paddingBottom: 16,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {getTranslation("uploadingDescription")}
                </Text>

                <ProgressBar color={colors.primary} indeterminate />
              </View>
            ) : alreadyLoaded ? (
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    paddingBottom: 8,
                    fontSize: textSizes.header,
                    textAlign: "left",
                  }}
                >
                  {getTranslation("uploadCompleted")}
                </Text>
                <Text
                  style={{
                    fontSize: textSizes.questionDescription,
                    textAlign: "left",
                    paddingBottom: 16,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {getTranslation("uploadCompletedDescription")}
                </Text>
              </View>
            ) : (
              <Text style={{ fontSize: textSizes.questionDescription }}>
                {getTranslation("uploadConfirmation")}
              </Text>
            )}

            {props.loading ? (
              <View />
            ) : (
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
                      backgroundColor: props.loading
                        ? "rgba(0,0,0,0.2)"
                        : "rgba(0,0,0,0.6)",
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
                      {alreadyLoaded ? t("close") : t("cancel")}
                    </Text>
                  </TouchableOpacity>
                </View>
                {alreadyLoaded ? null : (
                  <View style={{ flex: 1, padding: 8, paddingRight: 0 }}>
                    <TouchableOpacity
                      disabled={props.loading}
                      onPress={myUpload}
                      style={{
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                        backgroundColor: props.loading
                          ? "rgba(0,0,0,0.6)"
                          : "rgba(0,0,0,1)",
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
                        {t("Upload")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      )}
      initialSnap={1}
      onCloseEnd={props.onSheetClose}
    />
  );
}
