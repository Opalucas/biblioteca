import React from 'react';
import { View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import styles from "../../styles/BookStyle";
import { formatDate } from "../Util/Conversor";

const BookDetails = ({ route }) => {
  const { book } = route.params;
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const linkPdf = book.volumeInfo?.previewLink;

  const openPdfPrev = () => {
    if (linkPdf) {
      Linking.openURL(linkPdf);
    } else {
      Alert.alert('PDF não disponível', 'Este livro não possui um PDF associado.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>{book.volumeInfo.title}</Text>
        {thumbnail ? (
          <Image source={{ uri: thumbnail }} style={styles.thumbnailLarge} />
        ) : (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>Sem Imagem</Text>
          </View>
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Autor(es):</Text> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido'}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Publicado em:</Text> {formatDate(book.volumeInfo?.publishedDate)}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Descrição:</Text> {book.volumeInfo.description || 'Descrição não disponível.'}
          </Text>
        </View>
        {linkPdf && (
          <TouchableOpacity style={styles.button} onPress={openPdfPrev}>
            <Text style={styles.buttonText}>Visualizar PDF</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default BookDetails;
