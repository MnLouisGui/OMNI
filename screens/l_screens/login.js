import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View, Text, Image, TextInput, Button, ActivityIndicator} from 'react-native';
import { signInWithEmailAndPassword} from "firebase/auth"
import { getAuth} from "firebase/auth";

export default function Login({navigation}){

    const cadastro = () =>{
        navigation.navigate("Cadastro")
    };
    const recul = () =>{
        navigation.navigate("Recul")
    };
    const entrar = () =>{
        navigation.navigate("Home")
    };
    
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false); 

    const auth = getAuth();

    const signIn = async () =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            entrar();
            setEmail("")
            setPassword("")
            setLoading(false);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(error.message = 'Firebase: Error (auth/network-request-failed). '){
                alert("Conecção muito fraca! Tente Novamente")
            }
             setLoading(false);
        });
    };

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoimg} source={require('./Logo1.png')}/>
            </View>
            <View style={styles.loginbox}>
                <View style={styles.login}>
                    <Text style={styles.title}>Login</Text>

                    <TextInput style={styles.input}
                        value={email}
                        placeholder='Email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoComplete='email'
                        onChangeText={(Text) => setEmail(Text)}/>

                    <TextInput style={styles.input}
                        value={password}
                        placeholder='Password'
                        autoCapitalize='none'
                        onChangeText={(Text) => setPassword(Text)}
                        secureTextEntry/>

                    {loading ? <ActivityIndicator size="large" color="#0000ff"/>
                    : <>
                        <Button style={styles.button} 
                            title='Entrar'
                            color="rgb(0,0,0)"
                            onPress={()=> signIn()}
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
                        title='novo usuário'
                        color="rgb(0,0,0)"
                        onPress={()=> cadastro()}
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
    },
    logoimg:{
        width:360,
        height: 270
    },
    loginbox:{
        backgroundColor: '#d4d4d4',
        width: 500,
        height: 440,
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
        padding: 10
    },
    subcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        marginTop: 15
    },
    subbutton:{
        paddingTop:10 
    },
    subtextbutton:{
        fontWeight: 'bold'
    }
});
