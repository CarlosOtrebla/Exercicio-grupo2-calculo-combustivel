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
        source={require('../../assets/assalto.png')}
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
      <Button title="Calcular" onPress={calcular} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.suggestion}>
              {resultado <= 0.7 ? 'Abasteça com álcool' : 'Abasteça com gasolina'}
            </Text>

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
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
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
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
