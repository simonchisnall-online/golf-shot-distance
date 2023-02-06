/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from "./components/Header";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>From</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.middle}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.appButtonText,
                  { color: "#009688", fontSize: 125, fontWeight: "500" }
                ]}
              >
                61
              </Text>
              <Text
                style={[
                  styles.appButtonText,
                  { color: "#009688", fontSize: 75, fontWeight: "500" }
                ]}
              >
                m
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>To</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10
  },
  top: {
    flex: 1
  },
  middle: {
    flex: 2,
    padding: 20
  },
  bottom: {
    flex: 3
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;
