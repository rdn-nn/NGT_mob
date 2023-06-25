import { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import { styles as estilos } from "../components/stStyle";
import database from "../database/NGT_DB.json";
import { Ionicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";

//import api from "../../service/api";
//import { ChamadoList } from "../../components/chamadolist";
//import { useNavigation } from "@react-navigation/native";

export function SearchTickets() {
  const [inputValue, setInputValue] = useState("");
  const [imageUri, setImageUri] = useState(null);
  // const [chamados, setChamados] = useState("");

  // const navigation = useNavigation();
  // useEffect(() => {
  //   async function fetchApi() {
  //     const response = await api.get("/chamados");
  //     setChamados(response.data);
  //   }
  //   fetchApi();
  // }, []);

  //   function handleSearch() {
  //     if (!inputValue) return;

  //     let input = inputValue;
  //     setInputValue("");
  //     navigation.navigate("Search", { name: input });
  //   }

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
      <ScrollView scrollEnabled>
        <SafeAreaView>
          <View style={estilos.content}>
            <Text style={estilos.title}>BUSCA DE CHAMADO</Text>
            <View style={estilos.form}>
              <TextInput
                placeholder="Digite o número do chamado..."
                style={estilos.input}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
              <TouchableOpacity>
                <Ionicons name="search" size={28} color={"#00A8E0"} />
              </TouchableOpacity>
            </View>

            {/* <FlatList
        data={chamados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ChamadoList data={item} />}
        showsVerticalScrollIndicator={false}
      /> */}

            {database.Chamado.filter(
              (item) => item.oco_numticket === inputValue
            ).map((item) => {
              const dateObj = new Date(item.oco_datacriacao);
              const year = dateObj.getFullYear();
              const month = String(dateObj.getMonth() + 1).padStart(2, "0");
              const day = String(dateObj.getDate()).padStart(2, "0");
              const datacriacao = `${day}-${month}-${year}`; // Extrai apenas a data

              const BlocoNome = database.Bloco.find(
                (id) => id.blo_codigo === item.blo_codigo
              )?.blo_nome;
              const SalaNome = database.Local.find(
                (id) => id.loc_codigo === item.loc_codigo
              )?.loc_nome;
              const CategNome = database.Categoria.find(
                (id) => id.cat_codigo === item.cat_codigo
              )?.cat_nome;
              const ItemNome = database.Item.find(
                (id) => id.ite_codigo === item.ite_codigo
              )?.ite_nome;
              const StatusNome = database.StatusTicket.find(
                (id) => id.sti_codigo === item.sti_codigo
              )?.sti_nome;
              // const fileUri = item.oco_imgocorrencia.Image; // Acessando o caminho da imagem em bd.json
              // console.log(fileUri);
              // const base64 = FileSystem.readAsStringAsync(fileUri, { encoding: 'base64' });
              // console.log(base64);
              // const uri = `data:image/jpeg;base64,${base64}`;
              // setImageUri(uri);
              // console.log(uri);

              // const fileInfo = FileSystem.documentDirectory + item.oco_imgocorrencia;
              // console.log(fileInfo);
              // if (fileInfo.exists) {
              //     setImageUri(fileInfo.uri);
              //     // console.log(FileSystem.documentDirectory + fileInfo);
              // } else {
              //     console.log("Retorno vazio");
              // }
              return (
                <View style={estilos.content}>

                  <View style={estilos.bulletPoints}>
                    <View style={estilos.ticketName}>
                      <Text style={estilos.titleChamado}>
                      Nº do Ticket: {item.oco_numticket}
                      </Text>
                    </View>

                    {StatusNome === "Pendente" && (
                      <View style={estilos.bulletContainer}>
                      <Text style={estilos.bulletDescription}>Status</Text>
                        <View style={estilos.bullet}>
                          <Text style={estilos.bulletText}>1</Text>
                        </View>
                        <Text style={estilos.bulletDescription}>Pendente</Text>
                      </View>
                    )}
                    {/* <View style={estilos.separator} /> */}

                    {StatusNome === "Pendente" && (
                      <View style={estilos.bulletContainer}>
                        <Text style={estilos.bulletDescription}>Status</Text>
                        <View style={estilos.bullet}>
                          <Text style={estilos.bulletText}>2</Text>
                        </View>
                        <Text style={estilos.bulletDescription}>
                          Em andamento
                        </Text>
                      </View>
                    )}

                    {/* <View style={estilos.separator} /> */}
                    {StatusNome === "Concluído" && (
                      <View style={estilos.bulletContainer}>
                        <Text style={estilos.bulletDescription}>Status</Text>
                        <View style={estilos.bullet}>
                          <Text style={estilos.bulletText}>3</Text>
                        </View>
                        <Text style={estilos.bulletDescription}>Concluído</Text>
                      </View>
                    )}

                    {StatusNome === "Cancelado" && (
                      <View style={estilos.bulletContainer}>
                        <Text style={estilos.bulletDescription}>Status</Text>
                        <View style={estilos.bullet}>
                          <Text style={estilos.bulletText}>4</Text>
                        </View>
                        <Text style={estilos.bulletDescription}>Cancelado</Text>
                      </View>
                    )}
                  </View>

                  

                  <View style={estilos.createdByContainer}>
                    <Text style={estilos.createdByText}>Criado por: </Text>
                    <Text style={estilos.nameText}>
                      {item.oco_emailcriador}
                    </Text>
                  </View>

                  <View style={estilos.line} />
                  <View style={estilos.createdByContainer}>
                    <Text style={estilos.createdByText}>Criado em:</Text>
                    <Text style={estilos.nameText}>{datacriacao}</Text>
                  </View>
                  <View style={estilos.line} />
                  <View style={estilos.createdByContainer}>
                    <Text style={estilos.createdByText}>Bloco:</Text>
                    <Text style={estilos.nameText}>{BlocoNome}</Text>
                  </View>
                  <View style={estilos.line} />
                  <View style={estilos.createdByContainer}>
                    <Text style={estilos.createdByText}>Local:</Text>
                    <Text style={estilos.nameText}>{SalaNome}</Text>
                  </View>
                  <View style={estilos.line} />
                  <View style={estilos.createdByContainer}>
                    <Text style={estilos.createdByText}>Categoria:</Text>
                    <Text style={estilos.nameText}>{CategNome}</Text>
                  </View>
                  <View style={estilos.line} />
                  <View style={estilos.createdByContainer}>
                    <Text style={estilos.createdByText}>Item:</Text>
                    <Text style={estilos.nameText}>{ItemNome}</Text>
                  </View>
                  <View style={estilos.line} />
                  <View style={estilos.createdByContainer}>
                    <View style={estilos.cbContainer1}>
                      <View style={estilos.cbC1}>
                        <ScrollView nestedScrollEnabled>
                          <Text style={estilos.cbCTitle}>Observações.:</Text>
                          <Text style={estilos.cbCText}>
                            {item.oco_infoatualizacao}
                          </Text>
                        </ScrollView>
                      </View>

                      <View style={estilos.cbC1}>
                        <ScrollView nestedScrollEnabled>
                          <Text style={estilos.cbCTitle}>Comentários:</Text>
                          <Text style={estilos.cbCText}>{item.oco_obs}</Text>
                        </ScrollView>
                      </View>
                    </View>

                    <View style={estilos.cbContainer2}>
                      <Image
                        source={
                          FileSystem.documentDirectory + item.oco_imgocorrencia
                        }
                        style={estilos.image}
                      />
                    </View>
                  </View>
                </View>
              );
            })}

            {/*  */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}
