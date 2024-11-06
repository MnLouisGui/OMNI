import * as React from 'react';
import { useState } from 'react';
import { ScrollView ,ImageBackground, StyleSheet ,Text, View, Button, Image, Alert, Modal, TextInput } from 'react-native';
import { doc, getDoc } from "firebase/firestore";
import {db, storage} from "../../FirebaseConfig"
import { ref, getDownloadURL } from "firebase/storage";

const random = (parseInt(Math.random() * 27))
export default function HomeScreen({navigation}){
    const [id, setId] = useState(random);
    const [jogo, setJogo] = useState("");
    const [valor, setValor] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const fetchData = async () => {
        try {
          const docRef = doc(db, "Jogos", ""+id); // Especifique a coleção e o documento
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            // Documento encontrado
            console.log(docSnap.data());
            setJogo(docSnap.data().nome);
            setValor(parseFloat(docSnap.data().valor).toFixed(2));
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.log("Error getting document:", error);
        } finally {
        }
      };
      const fetchImage = async () => {
      try {
        // Refere-se ao caminho do arquivo no Firebase Storage
        const imageRef = ref(storage, `images/${jogo}.jpeg`); // Caminho da imagem no Storage
        
        // Obtém o link de download
        const url = await getDownloadURL(imageRef);
        
        setImageUrl(url); // Armazena a URL no estado
      } catch (error) {
        console.error("Error fetching image URL: ", error);
      } finally {
      }
    };
      
    fetchData();
    fetchImage();
    
    const atualizar = () =>{
        setId(parseInt(Math.random() * 27));
        fetchData();
        fetchImage();
    };

  const image = {uri: 'https://firebasestorage.googleapis.com/v0/b/login-ce4de.appspot.com/o/images%2FWallpaper%20celular%20eu%20confio%20preto%20e%20branco.png?alt=media&token=e398fba1-271a-49a5-a4ef-e78edff6ec23'};
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', width: "auto", height: "auto", backgroundColor: "black"}}>
        <ScrollView style={styles.scroll}>
        <ImageBackground source={image} style={styles.image}>
        <View style={styles.destaque}>
            <Button
              title="Atualizar"
              onPress={() => atualizar()}
            />
            <Text style={styles.textT } >Destaques</Text>
            <View style={styles.produtos}>
                <View style = {styles.infor}>
                    <Text style={styles.text}>{jogo}</Text>
                    <Text style={styles.text}>R${valor}</Text>
                </View>
                <Image source={{ uri: imageUrl }} style={{width: "100%", height: 120 }} />
            </View>
            <View style={styles.produtos}>
                <View style = {styles.infor}>
                    <Text style={styles.text}>{jogo}</Text>
                    <Text style={styles.text}>R${valor}</Text>
                </View>
                <Image source={{ uri: imageUrl }} style={{width: "100%", height: 120 }} />
            </View>
            <View style={styles.produtos}>
                <View style = {styles.infor}>
                    <Text style={styles.text}>{jogo}</Text>
                    <Text style={styles.text}>R${valor}</Text>
                </View>
                <Image source={{ uri: imageUrl }} style={{width: "100%", height: 120 }} />
            </View>
            <View style={styles.produtos}>
                <View style = {styles.infor}>
                    <Text style={styles.text}>{jogo}</Text>
                    <Text style={styles.text}>R${valor}</Text>
                </View>
                <Image source={{ uri: imageUrl }} style={{width: "100%", height: 120 }} />
            </View>
      </View>
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    destaque:{
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        height: "auto",
        width: "80%"
    },text:{
        color: '#d4d4d4',
        fontWeight: 'bold',
        marginBottom: 10,
    },textT:{
        color: '#d4d4d4',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },image:{flex: 1, width: "100%", height: "100%", alignItems:"center"},
    produtos:{
        backgroundColor: "black",
        padding: 10,
        marginBottom: 10
    },infor:{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
    },scroll: {
        flex: 1, width: "100%", height: "100%"
    }
});