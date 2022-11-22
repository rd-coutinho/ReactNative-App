// import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
// import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {         // Enquanto a fonte não está carregada
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={estilos.tela}>
        <StatusBar />
        <AppRotas />
      </SafeAreaView>
        
    );
  };
};

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
});