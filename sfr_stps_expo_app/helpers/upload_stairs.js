import { Alert } from "react-native";
import questionnaire from "../questionnaire";
const helper = require("./helper.js");
const qArray = questionnaire.questionnaire.questions;
const baseUrl = "https://safer-steps.web.app";
// const baseUrl = 'http://192.168.0.198:5000';
const answersUrl = baseUrl + "/answers";
const photosUrl = baseUrl + "/photo";
let closeActivityModalFunction;

export function uploadStair(stairId, closeModalFunction) {
  closeActivityModalFunction = closeModalFunction;
  helper.asyncStorageGetItem("stairs", (response) => {
    if (response.length > 0) {
      let staircaseIdex = response.findIndex((s) => s.stairId == stairId);
      if (staircaseIdex >= 0) {
        if (response[staircaseIdex].answers.length > 0) {
          uploadAnswers(stairId, response[staircaseIdex].answers);
          let photosIndex = qArray.filter((s) => s.type == "photo");
          photosIndex.map((item) => {
            let photoAnswer = response[staircaseIdex].answers.findIndex(
              (s) => s.alias == item.alias
            );
            if (photoAnswer >= 0) {
              uploadPhoto(
                response[staircaseIdex].answers[photoAnswer].value.uri
              );
            }
          });
        }
      }
    }
  });
}

function uploadAnswers(stairId, jsonObject) {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      stairid: stairId,
    },
    body: JSON.stringify(jsonObject),
  };
  fetch(answersUrl, config)
    .then((response) => {
      closeActivityModalFunction();
    })
    .catch((err) => {
      Alert.alert(
        "Error",
        "There was an error check access to internet and try to upload again please.",
        [
          {
            text: "Ok",
            style: "ok",
          },
        ],
        { cancelable: false }
      );
    });
}

function uploadPhoto(photoUri) {
  let photoName = photoUri.split("/").pop();
  const form = new FormData();
  form.append("photo", {
    uri: photoUri,
    type: "image/jpeg",
    name: photoName,
  });
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: form,
  };
  fetch(photosUrl, config)
    .then((response) => {
      // console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
