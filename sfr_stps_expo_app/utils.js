// const axios = require("axios").default;
//const moment = requiere("moment").default;
import moment from "moment";
import { AsyncStorage } from "react-native";

import "moment/locale/fr";
import "moment/locale/es";
import "moment/locale/en-ca";

module.exports = {
  async setLocale() {
    let locale = "en-ca"; // default locale
    try {
      await AsyncStorage.getItem("@language").then((storedLanguage) => {
        if (storedLanguage !== null) {
          console.log("Language of the user found", storedLanguage);

          switch (storedLanguage) {
            case "es":
              locale = "es";
              break;

            case "en":
              locale = "en-ca";
              break;

            case "fr":
              locale = "fr";
              break;

            case "nt":
              locale = "es";
              break;

            default:
              locale = "en-ca";
              break;
          }

          moment.locale(locale);

          /* console.log("Locale recieved from moment after change", moment.locale()); */
        } else {
          moment.locale(locale);
        }
      });
    } catch (e) {
      console.log("Error using Async moment language", e);
      moment.locale(locale);
    }
  },

  getTranslatedDate(date) {
    let translatedDate = date;

    console.log("Translating date" + date + " with locale " + moment.locale());

    try {
      translatedDate = moment(date).format("LL");
      console.log("Success on formatting");
    } catch (error) {
      console.log("Error translating date", error);
    }

    console.log("This is the output of date translation", translatedDate);

    return translatedDate;
  },
};
