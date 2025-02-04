import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.navbar}>
        <Text style={styles.title}>To Do List</Text>
      </View>
      <View style={styles.body}>
      <View style={styles.textcontainer}>
        <Text style={styles.titleBody}>Lista de Compras</Text>
      </View>
      <ScrollView style={styles.scroll}>
      <View style={styles.bodycontainer}>
        <CheckBox title="Leche" />
        <CheckBox title="Confleis" />
        <CheckBox title="Pan" />
        <CheckBox title="Zanahoria" />
        <CheckBox title="Manzana" />
        <CheckBox title="Brocoli" />
        <CheckBox title="Arroz" />
        <CheckBox title="Papa" />
        <CheckBox title="Carne" />
        <CheckBox title="Pescado" />
        <CheckBox title="Cereal" />
        <CheckBox title="Agua" />
        <CheckBox title="Sal" />
        <CheckBox title="Leche en Polvo" />
        <CheckBox title="Aceite" />
        <CheckBox title="Vino" />
        <CheckBox title="Cebolla" />
      </View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#16a085',
    height: '12%',
    width: '100%', 
    paddingTop: '11%',
    alignItems: 'center',
    textalign: 'justify',
    justifyContent: 'center',
  },
  title:{
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    height: '88%',
    maxWidth: '100%',
    backgroundColor: '#fffff',
    
  },
  textcontainer: {
    height: '9%',
    width: '100%', 
    alignItems: 'center',
    textalign: 'justify',
    justifyContent: 'center',
  },
  titleBody: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  bodycontainer: {
    height: '91%',
    width: '100%', 
    paddingTop: '3%',
    backgroundColor: '#C5C5C5',
  },
  scroll: {
    backgroundColor: '#C5C5C5',
  }
});
