import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View, Text, Image, TextInput, Pressable} from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoimg} source={require('./Logo1.png')}/>
            </View>
            <View style={styles.loginbox}>
                <View style={styles.login}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput style={styles.input}
                    placeholder='Informe o E-mail'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'/>
                    <TextInput style={styles.input}
                    placeholder='Informe a senha'
                    autoCapitalize='none'
                    secureTextEntry/>
                    <Pressable style={styles.button}>
                        <Text style={styles.textbutton}>Logar</Text>
                    </Pressable>
                </View>
                <View style={styles.subcontainer}>
                    <Pressable style={styles.subbutton}>
                        <Text style={styles.subtextbutton}>Esquecei a senha</Text>
                    </Pressable>
                    <Pressable style={styles.subbutton}>
                        <Text style={styles.subtextbutton}>Novo Usuário</Text>
                    </Pressable>
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
        right:4,
        width:380,
        height: 290
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
        backgroundColor: 'black',
        width: 250,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    textbutton:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280
    },
    subbutton:{
        paddingTop:10 
    },
    subtextbutton:{
        fontWeight: 'bold'
    }
});