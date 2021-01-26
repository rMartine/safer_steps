import React from "react";
import { ThemeProvider } from "react-native-elements";
import RootStack from "./RootStack";
import i18n from "./i18n";
import { Provider } from "react-native-paper";
import { I18nextProvider } from "react-i18next";

const theme = {
  Button: {
    raised: true,
  },
  Avatar: {
    rounded: true,
  },
  Text: {},
  colors: {
    primary: "#0277bd", // este es el color que se toma para los botones
    secondary: "#CACF85", // sacado de https://coolors.co/0277bd-264653-cacf85-3e92cc-13293d
    searchBg: "#ffddc1",
  },
  View: {
    backgroundColor: "#004ba0",
  },
};

/* Aquí se exporta nuestro tema */
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Provider>
          <RootStack />
        </Provider>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
