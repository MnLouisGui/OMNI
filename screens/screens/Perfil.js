import React, {useState} from 'react';
import { StyleSheet ,Text, View, Button, Image, Alert, Modal, TextInput } from 'react-native';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import * as ImagePicker from 'expo-image-picker';


export default function Perfil({navigation}) {
  //Imagem Picker
    const [image, setImage] = useState("");

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    //Logout
    const cadastro = () =>{
      navigation.navigate("Login")
    };
    
    const [email, setEmail] = useState(''); 

    const auth = getAuth();

    const logout = async () => {
      auth
      .signOut()
      .then(() => console.log('User signed out!'),
        cadastro()
    );
    }

    //Get Email
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const email = user.email;
          setEmail(user.email)
        } else {
        }
    })
    const [modalVisible, setModalVisible] = useState(false);
    //set nick
    const [nick, setNick] = useState('');  

    
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Digite o Nick: </Text>
            <TextInput style={styles.input}
              placeholder='Nickname'
              autoCapitalize='none'
              onChangeText={(Text) => setNick(Text)}></TextInput>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <Text></Text>
            <Button
              title="Enviar"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>

      {image && <Image source={{ uri: image }} style={styles.img} />}
      <Text>Nick Name: {nick}</Text>
      <Text >Email: {email}</Text>

      <Text></Text>
      <Button style={styles.button}
          title="Editar perfil"
          onPress={() => setModalVisible(true)}
      />

      <Text></Text>
      <Button
          title="Logout"
          onPress={() => logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },input:{
    marginBottom: 15,
    fontSize: 16,
  },img:{
    height: 100,
    width: 100
  }
});
