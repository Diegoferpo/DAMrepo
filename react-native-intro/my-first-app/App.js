import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    
    
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.navbar}>
      <StatusBar style="auto"/>
      <Text style={styles.page}>Mi Perfil</Text>
      </View>
      <View>
        <Image source={require('./assets/flash.jpg')} style={styles.flashimg} />
      </View>
      <Text style={styles.title}>Diego F. Portillo</Text>
      <Text style={styles.desc}>"Ciudadano del mundo, amante del café y coleccionista de atardeceres."</Text>
      <View style={styles.posts}>
      <Image source={require('./assets/background5.jpg')} style={styles.post} />
      <Image source={require('./assets/background3.jpg')} style={styles.post} />
      <Image source={require('./assets/background1.jpg')} style={styles.post} />
      <Image source={require('./assets/background2.jpg')} style={styles.post} />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#E2E2E2'
  },
  navbar: {
    backgroundColor: '#247BA0',
    height: 110,
    width: '100%', 
    alignItems: 'top',
    textalign: 'justify',
    justifyContent: 'center'
  },
  page: {
    paddingTop: 45,
    fontSize: 27,
    textAlign: 'center',
    color: '#E2E2E2',
  },
  flashimg: {
    width: 300,
    height: 300,
    borderRadius: 150,
    paddingTop: 30,
  },
  title: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '	#000000',
  },
  desc: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 30,
    fontSize: 16,
    textAlign: 'center',
    color: '	#000000',
  },
  posts: {
    paddingTop: 50,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  post: {
    marginBottom: 30,
    width: '90%',
    height: 500,
    borderRadius: 15,
  },
});
