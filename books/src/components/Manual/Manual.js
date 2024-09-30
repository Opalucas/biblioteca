import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ManualScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Manual de Uso</Text>
      <Text style={styles.sectionTitle}>1. Buscar Livros</Text>
      <Text style={styles.paragraph}>
        Para buscar livros, digite o nome ou título do livro na barra de pesquisa e clique em "Buscar".
        Uma lista de livros disponíveis será exibida.
      </Text>

      <Text style={styles.sectionTitle}>2. Detalhes do Livro</Text>
      <Text style={styles.paragraph}>
        Clique em um livro na lista para ver mais detalhes sobre ele, como título, autor, descrição e a
        data de publicação.
      </Text>

      <Text style={styles.sectionTitle}>3. Visualizar PDF</Text>
      <Text style={styles.paragraph}>
        Na tela de detalhes do livro, clique no botão "Visualizar PDF" para abrir o livro em formato PDF
        (se disponível).
      </Text>

      <Text style={styles.sectionTitle}>4. Enviar Feedback</Text>
      <Text style={styles.paragraph}>
        Na tela principal, você pode acessar a página de feedback para enviar suas opiniões e sugestões
        sobre o aplicativo.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ManualScreen;
