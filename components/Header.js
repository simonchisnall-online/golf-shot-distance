import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const Header = () => (
  <ImageBackground
    accessibilityRole={"image"}
    source={require("./logo.png")}
    style={styles.background}
    imageStyle={styles.logo}
  >
 
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 140,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter
  },
  logo: {
    opacity: 1,
    overflow: "visible",
    resizeMode: "cover",
    
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.black
  }
});

export default Header;
