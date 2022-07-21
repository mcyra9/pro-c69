import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domState: "normal",
            hasCameraPermissions: null,
            scanned: false,
            scannedData: "",
            }
    }
    getCameraPermissions = async domState => {
        const { status } = await.Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            domState: domState,
            hasCameraPermissions: status === "granted",
            scanned: false,
            
        })
    }

    handleBarCodeScanned = async ({ type, data }) => {
        this.setState( {
            domState: "normal",
            scanned: true,
            scannedData: Data,
        })}
    render() {
        const { domState, hasCameraPermissions, scannedData, scanned, } = this.state;
        if (domState === "scanner") {
            return (
                <BarCodeScanner
                    onBarCodeScanned=
                    {scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject} />);
        }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {hasCameraPermissions?scannedData:'request for camera permission'}
            </Text>
            <TouchableOpacity style={styles.button, { marginTop: 25, }}
                onPress={()=>this.getCameraPermissions('scanner')}>
                <Text style={styles.buttonText}>Scan QR code</Text>
                </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
    },
   buttonText: {
        color: "#ffffff",
        fontSize: 24
    },
   button: {
        width: "43%",
       height: 55,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#F48D20",
       borderRadius: 15
    }
});
