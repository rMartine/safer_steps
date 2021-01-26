/* React imports */
import * as React from "react";

/* Components and libraries */
import {
  View,
  Text,
  AsyncStorage,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { Button, Title, Divider, IconButton } from "react-native-paper";

/* Own components and variables */
import { useTranslation } from "react-i18next";
import i18n from "i18next";

/* Styles */
import styles from "../styles";
import MyRadio from "../components/MyRadio";

export default function Language({ navigation }) {
  const [result, setResult] = React.useState({});
  const [selected, setSelected] = React.useState(0);
  const { t } = useTranslation();

  const languages = [
    { title: "Español", image: "flag" },
    { title: "English", image: "flag" },
    { title: "Français", image: "flag" },
  ];

  React.useEffect(() => {
    // apply language defined on state
    /* handleChange(selected); */
  }, []);

  const areDisclaimersSigned = async () => {
    let veredict = false;
    try {
      const value = await AsyncStorage.getItem("@signedDisclaimers");
      if (value !== null) {
        // value previously stored
        console.log(
          "Disclaimers was already stored (checking from language)",
          value
        );

        if (value === true) {
          // disclaimers were signed
          navigation.navigate("Home");
        } else {
          // disclaimers are not signed, take user to sign them
          navigation.navigate("Disclaimer");
        }
      } else {
        console.log("Value wasnt defined, sending user to sign them");
        navigation.navigate("Disclaimer");
      }
    } catch (e) {
      // error reading value
      navigation.navigate("Disclaimer");
    }

    //return veredict
    return veredict;
  };

  const next = () => {
    console.log("Next");

    areDisclaimersSigned();
  };

  const handleChange = (index) => {
    console.log("Cambiar lenguaje");
    setSelected(index);

    let lang = "";
    switch (index) {
      case 0:
        lang = "es";
        break;
      case 1:
        lang = "en";
        break;
      case 2:
        lang = "fr";
        break;

      default:
        lang = "en";
        break;
    }

    i18n.changeLanguage(lang, (err, t) => {
      if (err) {
        return console.log(
          "something went wrong loading the new language",
          err
        );
      } else {
        _storeData(lang);
      }
    });
  };

  const _storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@language", value);
      console.log("Language saved correctly");
    } catch (error) {
      console.log("Async its not working somehow", error);
    }
  };

  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        },
      ]}
    >
      <View style={{ height: "60%", alignItems: "center" }}>
        <Title
          style={[styles.textTitle, styles.gutterBottom, { paddingTop: 32 }]}
        >
          {t("welcome")}
        </Title>
        <Text style={[styles.textColor, styles.developmentModeText]}>
          {t("chooseLanguage")}
        </Text>

        <ScrollView style={{ paddingTop: "10%" }}>
          {languages.map((value, index) => {
            return (
              <View key={index}>
                <View style={{ paddingVertical: 4 }}>
                  <MyRadio
                    selected={selected === index}
                    image={null}
                    title={value.title}
                    onPress={() => handleChange(index)}
                  />
                </View>

                <Divider></Divider>
              </View>
            );
          })}
        </ScrollView>
        <IconButton
          color="#0277bd"
          size={46}
          style={{ marginBottom: 32 }}
          icon="arrow-right"
          onPress={next}
        ></IconButton>
      </View>
    </View>
  );
}
