import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  const [bgColor, setBgColor] = useState('#f0f0f0');
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState(require('./assets/img1.jpg'));

  const toggleBackground = () => {
    setBgColor(bgColor === '#f0f0f0' ? '#94B0DA' : '#f0f0f0');
  };

  const toggleImage = () => {
    setImage(image === require('./assets/img1.jpg') 
      ? require('./assets/img2.jpg') 
      : require('./assets/img1.jpg'));
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}> 
      <Text style={styles.title}>Interacción con Elementos</Text>
      
    <View style={styles.input_text}> 
      <TextInput 
        style={styles.input} 
        placeholder="Escribe algo..."
        value={text} 
        onChangeText={setText} 
      />
      <Text style={styles.text}>Texto ingresado: {text}</Text>
      </View>
      
      <Image source={image} style={styles.image} />
      <Button title="Cambiar Imagen" onPress={toggleImage} />
      
      <View style={styles.bg}>
      <Button title="Cambiar Fondo" onPress={toggleBackground} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  input_text: {
    width: '80%',
    alignItems: 'center',
    marginBottom: '20%',
  },
  image: {
    width: '80%',
    height: '20%',
    marginBottom: 10,
  },
  bg: {
    marginTop: '20%',
  },
});
