import { FlatList, View, Text, Image, TouchableOpacity  } from "react-native";
import styles from '../styles/CatalogoStyle'
import data from '../data/data'

export default function CatalogoView(){
    return (
        <FlatList
          data = {data}
          style={styles.list}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>(

        <TouchableOpacity style={styles.card}>
        <View style={styles.products}>
        <Text style={styles.titleProduct}>{item.Pname}</Text>
        <Image source={{ uri: item.url }} style={styles.image} />
        <Text style={styles.description}>{item.desc} </Text>
        </View>
        </TouchableOpacity>
      )}/>
    );
}
