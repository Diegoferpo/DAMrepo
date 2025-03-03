import { Text, View } from 'react-native';
import styles from '../styles/style';
import ProductsList from './ProductsList';

export default function MainContainer(){
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Favoritos</Text>
      </View>
      <View style={styles.body}>
      </View>
      <ProductsList/>
    </View>
    
    );
}