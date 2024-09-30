import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 6,
      textAlign: 'center'
    },
    bookItem: {
      flexDirection: 'row',
      padding: 5,
      borderBottomWidth: 2,
      borderBottomColor: '#ccc',
    },
    thumbnail: {
      width: 60,
      height: 90,
      marginRight: 10,
    },
    thumbnailLarge: {
      width: 150,
      height: 225,
      alignSelf: 'center',
      marginBottom: 20,
    },
    noImageContainer: {
      width: 60,
      height: 90,
      marginRight: 10,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    noImageText: {
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
    infoContainer: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    noResults: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 20,
    },
    detailText: {
      marginVertical: 5,
      fontSize: 18,
      lineHeight: 24,
      marginBottom: 15,
    },
    boldText: {
      fontWeight: 'bold',
    },
    tutorialButton: {
      marginTop: 20,
    },
    feedbackButton: {
      marginTop: 10,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginTop: 1,
      marginBottom: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2, 
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 12,
      marginBottom: 3,
      borderRadius: 25,
      backgroundColor: '#f5f5f5',
      fontSize: 16,
      color: '#333',
    },
  });

export default styles;