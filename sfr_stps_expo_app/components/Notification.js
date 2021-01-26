import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, ActivityIndicator, Image } from 'react-native';

class Notification extends Component {
  // in props send notificationType = [1: Image, 2: Activity Indicator, 3: One Button, 4: Two Buttons]
  // buttonsText = [array of strings]
  // imageIcon = from the ones listed above
  // message = String to show
  // vissible = True/False
  // onPressed = [function]
  constructor(props) {
    super(props);
  }

  renderImage() {
    return (
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
          onPress={() => {
            this.props.onOkPressed;
          }}
        >
          <Text style={styles.textStyle}>Ok</Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderActivityIndicator() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={80} color='#0000ff' />
      </View>
    );
  }

  renderOneButton() {
    return (
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{this.props.message}</Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={this.props.onPressed[0]}
            >
              <Text style={styles.textStyle}>{this.props.buttonsText[0]}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  renderTwoButtons() {
    return (
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{this.props.message}</Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={this.props.onPressed[0]}
            >
              <Text style={styles.textStyle}>{this.props.buttonsText[0]}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={this.props.onPressed[1]}
            >
              <Text style={styles.textStyle}>{this.props.buttonsText[1]}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  render() {
    let modal;
    if (this.props.notificationType == 1) {
      modal = this.renderImage();
    } else if (this.props.notificationType == 2) {
      modal = this.renderActivityIndicator();
    } else if (this.props.notificationType == 3) {
      modal = this.renderOneButton();
    } else if (this.props.notificationType == 4) {
      modal = this.renderTwoButtons();
    }
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={this.props.visible}
      >
        <View style={styles.centeredView}>
          {modal}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 66,
    height: 58,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center'
  },
  container: {
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default Notification;
