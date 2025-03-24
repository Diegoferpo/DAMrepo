import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
      image: {
        width: 130,
        height: 125,
        resizeMode: "contain",
        borderRadius: 10
      },
      product: {
        borderRadius: 10,   
      },
      card: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: '5%',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        width: '95%',
      },
      titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '2%',
        marginBottom: '4%',
      },
      description:{
        fontSize: 14,
        marginTop: '8%',
        marginBottom: '2%',
      }

  });
  
  export default styles;