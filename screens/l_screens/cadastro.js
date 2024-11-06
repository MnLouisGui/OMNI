import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View, Text, Image, TextInput, Button, ActivityIndicator} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../FirebaseConfig';

export default function Cadastro({navigation}){
    const login = () =>{
        navigation.navigate("Login")
    }
    const recul = () =>{
        navigation.navigate("Recul")
    }
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false); 

    const singUp = async () =>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth,email, password);
            console.log(response);
            alert("Cadastro Realizado");
            login();
        } catch(error){
            console.log(error.message);
            if(error.message=="Firebase: Password should be at least 6 characters (auth/weak-password)."){
                alert("Senha deve conter pelo menos 6 caractéres")
            }if(error.message=="Firebase: Error (auth/email-already-in-use)."){
                alert("Email já em uso")
            }if(error.message=="Firebase: Error (auth/invalid-email)."){
                alert("Email inválido")
            }if(error.message=="Firebase: Error (auth/missing-password)."){
                alert("Informe a senha")
            }if(error.message=="Firebase: Error (auth/missing-email)."){
                alert("Informe o email")
            }
            
        } finally {
            setLoading(false);
        }
    }
    return(
        <View style={styles.container}>
        <View style={styles.logo}>
            <Image style={styles.logoimg} source={require('./Logo1.png')}/>
        </View>
        <View style={styles.loginbox}>
            <View style={styles.login}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput style={styles.input}
                    value={email}
                    placeholder='Informe o E-mail'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                    onChangeText={(Text) => setEmail(Text)}/>

                <TextInput style={styles.input}
                    value={password}
                    placeholder='Informe a senha'
                    autoCapitalize='none'
                    secureTextEntry
                    onChangeText={(Text) => setPassword(Text)}/>
                    {loading ? <ActivityIndicator size="large" color="#0000ff"/>
                    : <>
                        <Button style={styles.button} 
                        title='Cadastrar'
                        color="rgb(0,0,0)"
                        onPress={() => singUp()}
                        />
                    </>}    
            </View>
            <View style={styles.subcontainer}>
                <Button style={styles.button} 
                    title='Esqueci a senha'
                    color="rgb(0,0,0)"
                    onPress={()=> recul()}
                
                />
                <Button style={styles.button} 
                    title='voltar ao login'
                    color="rgb(0,0,0)"
                    onPress={()=> login()}
                />
            </View>
        </View>
        <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000000',
        alignItems:'center',
        justifyContent: 'flex-end',
        width:360,
        height:755
    },
    logoimg:{
        width:360,
        height: 270
    },
    loginbox:{
        backgroundColor: '#d4d4d4',
        width: 500,
        height: 420,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderTopLeftRadius: 225,
        borderTopRightRadius: 225,
    },
    login:{
        alignItems: 'center',
    },
    title:{
        fontSize: 34,
        fontWeight: 'bold',
        margin: 25
    },
    input:{
        borderWidth: 2,
        borderRadius: 15,
        fontSize: 22,
        width: 280,
        padding: 10,
        margin: 10
    },
    button:{
        padding: 10,
    },
    subcontainer:{
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        marginTop: 15
    },
    subbutton:{
        paddingTop:10,
    },
    subtextbutton:{
        fontWeight: 'bold'
    }
});