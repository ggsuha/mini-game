import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Test");
  }

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    elevation: 4,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    textAlign: "center",
  },
});
