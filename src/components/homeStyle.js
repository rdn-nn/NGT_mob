import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
alignIMG: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
  },
  
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 25,
  },
  card: {
    width: "100%",
    marginBottom: 20,
  },
  fabLeft: {
    position: "absolute",
    margin: 15,
    left: 10,
    bottom: 0,
    backgroundColor: "#00A8E0",
  },
  cardTitleRight: {
    paddingLeft: 75,
  },
});
