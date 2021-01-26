import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//import { AsyncStorage } from 'react-native';

export function fetchData(callback, targetUri) {
  fetch(targetUri)
    .then(response => response.json())
    .then(callback)
    .catch(error => {
      Toast.show({ text: 'Error al conectar al servidor', position: 'bottom', duration: 3000 });;
    });
}

export function asyncStorageGetItem(itemKey, callBack) {
  AsyncStorage.getItem(itemKey, (error, result) => {
    if (error) {
      Toast.show({ text: 'Error al leer almacenamiento interno', position: 'bottom', duration: 3000 })
    }
  })
    .then(response => JSON.parse(response) || [])
    .then(callBack)
    .catch(error => {
      console.error(error);
    });
}

export function asyncStorageSetItem(itemKey, item, callback) {
  try {
    AsyncStorage.setItem(itemKey, JSON.stringify(item), (error) => {
      if(error) {
        Toast.show({ text: 'Error al escribir almacenamiento interno', position: 'bottom', duration: 3000 })
      }
      if(typeof callback === 'function') {
        callback();
      }
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function clearAsyncStorage() {
    AsyncStorage.clear();
}
