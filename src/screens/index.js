import * as React from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { styles as estilos }  from "../components/homeStyle";
import { Card, FAB } from "react-native-paper";

export function Home({ navigation }) {
    return (
      <ImageBackground
        source={require("../images/bgNGT.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <SafeAreaView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={estilos.alignIMG}>
            <View style={estilos.logoContainer}>
              <Image
                source={require("../images/NewGenTechDark.png")}
                style={estilos.logo}
                resizeMode="contain"
              />
            </View>
          </View>
  
          <Text style={estilos.description}>
            Para iniciar, escolha uma das opções abaixo:
          </Text>
  
          <View style={estilos.cardContainer}>
            <Card
              style={estilos.card}
             onPress={() => navigation.navigate("OpenTickets")}
            >
              <Card.Actions>
                <FAB icon="plus-thick" style={estilos.fabLeft} />
                <Card.Title
                  title="Abrir Chamado"
                  subtitle="Crie um novo chamado"
                  titleStyle={{ fontWeight: "bold", fontSize: 20 }}
                  style={estilos.cardTitleRight}
                />
              </Card.Actions>
            </Card>
  
            <Card
              style={estilos.card}
             onPress={() => navigation.navigate('SearchTickets')}
            >
              <Card.Actions>
                <FAB icon="magnify" style={estilos.fabLeft} />
                <Card.Title
                  title="Consultar Chamado"
                  subtitle="Consultar o status do chamado"
                  titleStyle={{ fontWeight: "bold", fontSize: 20 }}
                  style={estilos.cardTitleRight}
                />
              </Card.Actions>
            </Card>
          </View>
          
        </SafeAreaView>
      </ImageBackground>
    );
  }

  