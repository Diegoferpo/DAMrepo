import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/HomeStyle.js';


const HomeView = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Amazon.jpg')} style={{width: '100%', height: '90%'}}/>

            <Button
            title="Ir al Catalogo"
            onPress={() =>
            navigation.navigate('Catalogo')
            }
        />
        </View>
    );
}

export default HomeView;