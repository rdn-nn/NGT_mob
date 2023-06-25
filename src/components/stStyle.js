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
    
      form: {
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: "#00A8E0",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      input: {
        width: "90%",
        paddingVertical: 20,
        fontSize: 20,
      },
    
      bulletPoints: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 25,
      },
      bulletContainer: {
        alignItems: "center",
      },
      titleChamado: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "left",
      },
      ticketName: {
        flex: 1,
        textAlign:"left",
      },
      bullet: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center",
      },
      bulletText: {
        fontSize: 20,
        fontWeight: "bold",
      },
      bulletDescription: {
        marginTop: 5,
        fontSize: 15,
        textAlign: "center",
      },
      separator: {
        height: 1,
        width: "10%",
        backgroundColor: "lightgray",
        marginBottom: 15,
      },
    
      createdByContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      },
      createdByText: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
      },
      nameText: {
        fontSize: 15,
        flex: 1,
        textAlign: "right",
      },
      line: {
        height: 1,
        backgroundColor: "#00A8E0",
        width: "100%",
        marginBottom: 5,
      },
    
      cbContainer1: {
        flex: 1,
        flexDirection: "column",
      },
      cbCTitle: {
        fontSize: 20,
        fontWeight: "bold",
      },
      cbCText: {
        fontSize: 15,
      },
      cbContainer2: {
        flex: 1,
        backgroundColor: "red",
      },
      cbC1: {
        paddingBottom: 10,
        height: 50,
        flex: 1,
      },
      image: {
        width: 200,
        height: 200,
      },
});
