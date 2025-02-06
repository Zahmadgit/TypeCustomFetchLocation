import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

const ImageBackgroundWrapper = ({ children, useBackground = false }) => {
  const generalState = useSelector((state) => state.general || {}); // Ensure default empty object
  const currentBackground = generalState.currentBackground || "bg1"; // Fallback to "bg1"
  const imageBackgrounds = generalState.imageBackgrounds || {}; // Ensure backgrounds exist

  return useBackground && imageBackgrounds[currentBackground] ? (
    <ImageBackground
      source={imageBackgrounds[currentBackground]}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  ) : (
    <View style={styles.container}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderWidth: 2,
    borderRadius: 50,
  },
  backgroundImage: {
    flex: 1,
  },
});

export default ImageBackgroundWrapper;

