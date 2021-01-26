import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Disclaimer from "./components/Disclaimer";
import Language from "./components/Language";
import Home from "./components/Home";
import Questionnaire from "./components/Questionnaire";

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    Disclaimer: { screen: Disclaimer },
    Language: { screen: Language },
    Questionnaire: { screen: Questionnaire },
  },
  {
    initialRouteName: "Language",
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(RootStack);
