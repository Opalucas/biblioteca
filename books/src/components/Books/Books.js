import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../../styles/BookStyle';
import { formatDate } from "../Util/Conversor";

const BookSearch = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const openFeedback = () => {
    navigation.navigate('Feedback');
  };

  const openManual = () => {
    navigation.navigate('Manual');
  };

  const searchBooks = () => {
    setLoading(true);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => {
        setBooks(response.data.items || []);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    const thumbnail = item.volumeInfo.imageLinks?.thumbnail;
    return (
      <TouchableOpacity
        style={styles.bookItem}
        onPress={() => navigation.navigate('BookDetails', { book: item })}
      >
        {thumbnail ? (
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        ) : (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>Sem Imagem</Text>
          </View>
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.volumeInfo.title}</Text>
          <Text>{item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconhecido'}</Text>
          <Text>{formatDate(item.volumeInfo?.publishedDate)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Busca de Livros</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o título do livro"
        value={query}
        onChangeText={text => setQuery(text)}
        placeholderTextColor="#888"
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={searchBooks}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Buscando...' : 'Buscar'}</Text>
      </TouchableOpacity>

      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.noResults}>Nenhum livro encontrado</Text>}
      />

      <TouchableOpacity style={styles.button} onPress={openManual}>
        <Text style={styles.buttonText}>Manual de Uso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openFeedback}>
        <Text style={styles.buttonText}>Enviar Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};


export default BookSearch;