import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';

export default function Home() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function calcular() {
    const precoAlcoolNum = parseFloat(precoAlcool);
    const precoGasolinaNum = parseFloat(precoGasolina);

    if (isNaN(precoAlcoolNum) || isNaN(precoGasolinaNum)) {
      Alert.alert('Erro', 'Por favor, insira valores válidos.');
      return;
    }

    if (precoGasolinaNum > 0) {
      const relacao = precoAlcoolNum / precoGasolinaNum;
      setResultado(relacao.toFixed(2));
      setModalVisible(true);
    } else {
      Alert.alert('Erro', 'O preço da gasolina deve ser maior que zero.');
    }
  }

  function fecharModal() {
    setModalVisible(false);
    setPrecoAlcool('');
    setPrecoGasolina('');
    setResultado(null);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/PostoDeGasolina.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Qual a melhor opção?</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder="R$ 0.00"
          keyboardType="numeric"
          value={precoAlcool}
          onChangeText={(texto) => setPrecoAlcool(texto)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder="R$ 0.00"
          keyboardType="numeric"
          value={precoGasolina}
          onChangeText={(texto) => setPrecoGasolina(texto)}
        />
      </View>
      <TouchableOpacity style={styles.button}  onPress={calcular} >
          <Text style={styles.buttonText}>
            Calcular
          </Text>
      </TouchableOpacity>
      <Modal
        // style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
              <Image 
            source={require('../../assets/BombaDeCombustível.jpg')}
            style={styles.image}
            />
            <Text style={styles.suggestion}>
              {resultado <= 0.7 ? 'Abasteça com álcool' : 'Abasteça com gasolina'}
            </Text>
            <Text style={styles.ModalText}>
              Álcool: R$ {precoAlcool}
            </Text>
              <Text style={styles.ModalText}>
              Gasolina: R$ {precoGasolina}
              </Text>
            <Text/>
            <TouchableOpacity style={styles.button} onPress={fecharModal}>
              <Text style={styles.buttonText}>Calcular Novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#323232',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 120
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#c9c9c9',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: '#323232',
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  suggestion: {
    fontSize: 22,
    color: '#00d615',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#e96054',
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    
  },
  ModalText: {
    fontSize: 16,
    color: '#fff',
  }
});
