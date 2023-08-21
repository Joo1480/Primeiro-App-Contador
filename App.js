import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from "./Header";
import React, {useState} from 'react';

export default function App() {
  const [contador, setContador] = useState(0); 

  function incrementar(){ 
    setContador(contador+1); 
  }

  function zerar(){ 
    setContador(0); 
  }
  return (
    <>
    <Header title="Teste com Samuel"/>
    <View style={styles.container}>
      <Text style={styles.title2}>Teste</Text>
      <Text style={styles.title}>Teste</Text>
      <Text>Aula 2</Text>
      <StatusBar style="auto"/>
      <Text>{contador} Cliques</Text>
      <TouchableOpacity style={styles.button} onPress={incrementar}>
        <Text>Aperte aqui!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={zerar}>
        <Text>Zerar!</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight:'bold',
    color:'black'
  },
  title2:{
    fontSize:50,
    fontWeight:'bold',
    color:'blue'
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
