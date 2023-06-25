import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import { styles as estilos } from "../components/otStyle";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import database from "../database/NGT_DB.json";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import { RNFSFileTypeRegular, DocumentDirectoryPath, writeFile } from 'react-native-fs';
// import RNFS from "react-native-fs";
// import moment from "moment";

export function OpenTickets() {
    const [image, setImage] = useState(null);
    const [selectedBloco, setselectedBloco] = useState("");
    const [selectedLocal, setselectedLocal] = useState("");
    const [selectedCategoria, setselectedCategoria] = useState("");
    const [selectedItem, setselectedItem] = useState("");
    const [selectedMotivo, setselectedMotivo] = useState("");
    const [observationsText, setObservationsText] = useState("");
  const [emailText, setEmailText] = useState("");

    useEffect(() => {
      (async () => {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Desculpe, precisamos de permissões de acesso à câmera para isso funcionar!"
          );
        }
      })();
    });
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 5],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  

    // const loadChamados = async () => {
    //   try {
    //     const path = DocumentDirectoryPath + "/database/NGT_DB.json";
    //     const jsonData = await readFile(path, "utf8");
    //     const chamados = JSON.parse(jsonData);
    //     return chamados;
    //   } catch (error) {
    //     console.error("Erro ao carregar os chamados:", error);
    //     return [];
    //   }
    // };
    // const addChamado = async (chamado) => {
    //   try {
    //     const chamados = await loadChamados();
    //     const ultimoCodigo = chamados.length > 0 ? chamados[chamados.length - 1].oco_codigo : 0;
    //     chamado.oco_codigo = ultimoCodigo + 1;
    //     chamados.push(chamado);
    
    //     const path = DocumentDirectoryPath + "/database/NGT_DB.json";
    //     const jsonData = JSON.stringify(chamados);
    //     await writeFile(path, jsonData, "utf8");
    //     console.log("Chamado adicionado com sucesso!");
    //   } catch (error) {
    //     console.error("Erro ao adicionar o chamado:", error);
    //   }
    // };

    // const saveData = async (data) => {
    //   try {
    //     const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;
    //     const jsonData = JSON.stringify(data);
    //     await writeFile(path, jsonData, "utf8");
    //     console.log("Dados salvos com sucesso!");
    //   } catch (error) {
    //     console.error("Erro ao salvar os dados:", error);
    //   }
    // };

    // const handleSave = async () => {
    //   const newChamado = {
    //     oco_codigo: null,
    //     oco_obs: observationsText,
    //     oco_infoatualizacao: null,
    //     oco_dataCriacao: new Date().toISOString(),
    //     oco_dataatualizacao: null,
    //     oco_numticket: "AM" + new Date().getDate() + new Date().getSeconds(),
    //     oco_imgocorrencia: image,
    //     oco_emailcriador: emailText,
    //     blo_codigo: selectedBloco,
    //     loc_codigo: selectedLocal,
    //     cat_codigo: selectedCategoria,
    //     ite_codigo: selectedItem,
    //     mot_codigo: selectedMotivo,
    //     sti_codigo: 1,
    //   };
    
    //   await addChamado(data);
    // };
  

    // const handleSave = async () => {
    //   const newChamado = {
    //     oco_codigo: null,
    //     oco_obs: observationsText,
    //     oco_infoatualizacao: null,
    //     oco_dataCriacao: new Date().toISOString(),
    //     oco_dataatualizacao: null,
    //     oco_numticket: "AM" + new Date().getDate() + new Date().getSeconds(),
    //     oco_imgocorrencia: image,
    //     oco_emailcriador: emailText,
    //     blo_codigo: selectedBloco,
    //     loc_codigo: selectedLocal,
    //     cat_codigo: selectedCategoria,
    //     ite_codigo: selectedItem,
    //     mot_codigo: selectedMotivo,
    //     sti_codigo: 1,
    //   };
  
    //   try {
    //     const databaseKey = "NGT_DB"; // Chave de armazenamento no AsyncStorage
    //     const existingData = await AsyncStorage.getItem(databaseKey);
    //     const database = existingData ? JSON.parse(existingData) : { Chamado: [] };
    //     const ultimoCodigo = database.length > 0 ? database[database.length - 1].oco_codigo : 0;
    //     newChamado.oco_codigo = ultimoCodigo + 1;
    //     database.Chamado.push(newChamado);
    //     await AsyncStorage.setItem(databaseKey, JSON.stringify(database));
    //     alert("Chamado salvo com sucesso!");
    //   } catch (error) {
    //     console.error("Erro ao salvar o chamado:", error);
    //     alert("Ocorreu um erro ao salvar o chamado.");
    //   }
    // };


    return (
      <ImageBackground
        source={require("../images/bgNGT.png")}
        style={estilos.container}
        resizeMode="cover"
      >
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <ScrollView>
          <SafeAreaView>
            <View style={estilos.content}>
              <Text style={estilos.title}>FORMULÁRIO DE CADASTRO DE CHAMADO</Text>
  
              <View style={estilos.inputContainer}>
                <Picker
                  selectedValue={selectedBloco}
                  style={{ height: 30, width: "100%" }}
                  onValueChange={(itemValue) => {
                    setselectedBloco(itemValue);
                  }}
                >
                  <Picker.Item label="Selecione o bloco" value="0" key="0" />
                  {database.Bloco.filter((item) => item.sta_codigo === 2).map(
                    (item) => (
                      <Picker.Item
                        label={item.blo_nome}
                        value={item.blo_codigo}
                        key={item.blo_codigo}
                      />
                    )
                  )}
                </Picker>
              </View>
  
              <View style={estilos.inputContainer}>
                <Picker
                  selectedValue={selectedLocal}
                  style={{ height: 30, width: "100%" }}
                  onValueChange={(itemValue, itemIndex) =>
                    setselectedLocal(itemValue)
                  }
                >
                  <Picker.Item label="Selecione o local" value="0" key="0" />
                  {database.Local.filter(
                    (item) =>
                      item.blo_codigo === selectedBloco && item.sta_codigo === 2
                  ).map((item) => (
                    <Picker.Item
                      label={item.loc_nome}
                      value={item.loc_codigo}
                      key={item.loc_codigo}
                    />
                  ))}
                </Picker>
              </View>
  
              <View style={estilos.inputContainer}>
                <Picker
                  selectedValue={selectedCategoria}
                  style={{ height: 30, width: "100%" }}
                  onValueChange={(itemValue, itemIndex) =>
                    setselectedCategoria(itemValue)
                  }
                >
                  <Picker.Item label="Selecione a categoria" value="0" key="0" />
                  {database.Categoria.filter(
                    (item) =>
                      item.sta_codigo === 2
                  ).map((item) => (
                    <Picker.Item
                      label={item.cat_nome}
                      value={item.cat_codigo}
                      key={item.cat_codigo}
                    />
                  ))}
                </Picker>
              </View>
  
              <View style={estilos.inputContainer}>
                <Picker
                  selectedValue={selectedItem}
                  style={{ height: 30, width: "100%" }}
                  onValueChange={(itemValue) =>
                    setselectedItem(itemValue)
                  }
                >
                  <Picker.Item label="Selecione o item" value="0" key="0" />
                  {database.ItemDesc.filter(
                    (item) =>
                    item.loc_codigo === selectedLocal && item.cat_codigo === selectedCategoria && item.sta_codigo === 2
                  ).map((item) => {
                    const itemId = database.Item.find((id) => id.ite_codigo === item.ite_codigo)?.ite_codigo;
                    const label = database.Item.find((nome) => nome.ite_codigo === item.ite_codigo)?.ite_nome;
                    return (
                      <Picker.Item
                        label={label}
                        value={itemId}
                        key={itemId}
                      />
                    );
                  })}
                </Picker>
              </View>
  
              <View style={estilos.inputContainer}>
                <Picker
                  selectedValue={selectedMotivo}
                  style={{ height: 30, width: "100%" }}
                  onValueChange={(itemValue) =>
                    setselectedMotivo(itemValue)
                  }
                >
                  <Picker.Item label="Selecione o motivo" value="0" key="0" />
                  {database.Motivo.filter(
                    (item) =>
                      item.sta_codigo === 2
                  ).map((item) => (
                    <Picker.Item
                      label={item.mot_nome}
                      value={item.mot_codigo}
                      key={item.mot_codigo}
                    />
                  ))}
                </Picker>
              </View>
              
              <View style={estilos.inputContainer}>
                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  style={estilos.input}
                  placeholder="Observações"
                  onValueChange={(itemValue) =>
                    setObservationsText(itemValue)
                  }
                />
              </View>
  
              <View style={estilos.inputContainer}>
                <TextInput
                  style={estilos.input}
                  placeholder="E-mail para acompanhamento do chamado?"
                  onValueChange={(itemValue) =>
                    setEmailText(itemValue)
                  }
                />
              </View>
  
               <View style={estilos.inputContainer}>
                <View style={estilos.rowContainer}>
                  <Text style={estilos.question}>Anexar imagem:</Text>
                  <TouchableOpacity
                    style={estilos.button}
                    onPress={() => pickImage()}
                  >
                    <Text style={estilos.buttonText}>Arquivo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              {image && <Image source={{ uri: image }} style={estilos.image} />}
            </View> 
            <View>
            {/* <Button title="Salvar" onPress={handleSave} /> */}
            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    );
  }