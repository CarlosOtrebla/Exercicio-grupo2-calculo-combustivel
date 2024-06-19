import {  StyleSheet, View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

export default function Home() {
  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState('');
  const inputRef = useRef(null);

  function calcular() {
    const resultado = precoAlcool / precoGasolina;
    setResultado(resultado.toFixed(2))
  
    console.log(resultado)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text>Alcool (preço por litro):</Text>
        <TextInput
          value={precoAlcool}
          style={styles.input}
          placeholder='0.00'
          onChangeText={(texto) => setPrecoAlcool(parseFloat(texto))}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <Text>Gasolina (preço por litro):</Text>
        <TextInput
          value={precoGasolina}
          style={styles.input}
          placeholder='0.00'
          onChangeText={(texto) => setPrecoGasolina(parseFloat(texto))}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#1d75cd" }]}
          onPress={calcular}
        >
          <Text style={styles.botaoText}>Calcular </Text>
        </TouchableOpacity>
      
      </View>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
