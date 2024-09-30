
# Biblioteca Online - React Native

Este é um aplicativo de busca de livros construído em **React Native** que utiliza a **Google Books API** para permitir a busca de livros, exibir seus detalhes, e visualizar PDFs associados (se disponíveis). O aplicativo também inclui uma página de **feedback** e um **manual de uso** para guiar os usuários.

## Funcionalidades

- Buscar livros usando a Google Books API.
- Exibir detalhes de um livro, incluindo título, autor, descrição e data de publicação.
- Visualizar o PDF do livro, quando disponível.
- Enviar feedback sobre o aplicativo.
- Acessar um manual de uso para aprender como navegar e utilizar o aplicativo.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**: [Instalar Node.js](https://nodejs.org)
- **React Native CLI**: `npm install -g react-native-cli`
- **Expo CLI** (opcional, se usando Expo): `npm install -g expo-cli`
- **Android Studio** (para rodar no Android) ou **Xcode** (para rodar no iOS)

## Instalação

### 1. Clone o Repositório

```bash
https://github.com/Opalucas/biblioteca.git .
cd books
```
### 2. Instale as Dependências
Para instalar as dependências necessárias, use o comando:
```javascript
npm install
```
### 3. Configuração de Ambiente
Caso esteja utilizando o Expo, certifique-se de que seu ambiente está configurado corretamente para desenvolvimento com React Native.
### 4. Rodar o Aplicativo
Caso esteja utilizando o Expo, certifique-se de que seu ambiente está configurado corretamente para desenvolvimento com React Native.
```javascript
npx expo start
```
Depois, você pode escanear o QR code no terminal usando o aplicativo **Expo Go** no seu dispositivo móvel (iOS/Android) ou rodar no emulador (Android/iOS) configurado na sua máquina.

### Dependências
- **React Native**: Framework principal para o desenvolvimento mobile.
 -   **Axios**: Para fazer requisições HTTP à Google Books API.
-   **React Navigation**: Para navegação entre as telas.
-   **React Native Paper** (opcional): Para componentes de interface de usuário como botões, inputs, etc.
## Licença

Este projeto está licenciado sob a licença MIT