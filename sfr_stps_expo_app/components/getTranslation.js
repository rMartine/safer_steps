import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

/* 
import i18next from "i18next"; */

// If we dont initiallize language, it doenst detect the language selected at the start of the app and all of the translations get lost somehow, as a temporary fix i will just initialize it in english

function getTranslation(key) {
  return i18n.t(key);
}

export default getTranslation;
