import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      content: {
        marginHorizontal: 10,
        alignItems: "center",
      },
      title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: "10%",
        textAlign: "center",
      },
      inputContainer: {
        width: "100%",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 10,
      },
      input: {
        fontSize: 17,
        paddingHorizontal: 15,
      },
      rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      },
      question: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
      },
      button: {
        backgroundColor: "#00A8E0",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 5,
      },
      buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
      image: {
        width: 200,
        height: 200,
        marginTop: 16,
      },
    
      title2: {
        fontSize: 17,
        fontWeight: "bold",
      },
      dropdownContainer: {
        width: 200,
      },
      dropdown: {
        backgroundColor: "#fafafa",
      },
      dropdownItem: {
        justifyContent: "flex-start",
      },
      dropdownMenu: {
        backgroundColor: "#fafafa",
      },
});
