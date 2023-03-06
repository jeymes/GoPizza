import React, { useCallback, useState } from 'react';
import { 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  View, 
  Image,
  TouchableOpacity,
  Alert,
  FlatList
 } from 'react-native';

import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';

import { LogOut } from 'react-native-feather';
import happyEmoji from '../../assets/happy.png'
import { SearchPizzas } from '../../components/SearchPizzas';
import { ProductCard, ProductProps } from '../../components/ProductCard';

import firestore from '@react-native-firebase/firestore'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export function Home() {

  const [pizzas, setPizzas] = useState<ProductProps[]>([])
  const [search, setSearch] = useState('')

  const navigation = useNavigation();


  function FetchPizzas(value: string){
    const formattedValue = value.toLowerCase().trim();

    firestore()
    .collection('pizzas')
    .orderBy('name_insensitive')
    .startAt(formattedValue)
    .endAt(`${formattedValue}\uf8ff`)
    .get()
    .then(response => {
      const data = response.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      }) as ProductProps[];

      setPizzas(data)
    })
    .catch(() => Alert.alert("Consulta", "Não foi possivél realizar a consulta"))
  }

  function handleSearch(){
    FetchPizzas(search);
  }

  function handleSearchClear(){
    setSearch('');
    FetchPizzas('');
  }

  function handleOpen(id: string){
    navigation.navigate('product', { id })
  }

  function handleAdd() {
    navigation.navigate('product', {})
  }


  useFocusEffect(useCallback(() => {
    FetchPizzas('')
  }, []));

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={styles.container}>

      <LinearGradient
        colors={theme.COLORS.GRADIENT}
        style={styles.header}
      >
        <View style={styles.greeting} >
          <Image 
          source={happyEmoji}
          style={styles.greetingEmoji} />
          <Text style={styles.greetingText} >Olá, Admin</Text>
        </View>

        <TouchableOpacity>
          <LogOut 
          width={24}
          height={24}
          color={theme.COLORS.TITLE}
          />
        </TouchableOpacity>
      </LinearGradient>
      
      <SearchPizzas
      onChangeText={setSearch}
      value={search}
      onSearch={handleSearch}
      onClear={handleSearchClear}
      />

      <View
      style={styles.menuHeader}
       >
        <Text style={styles.title}>
          Cardápio
        </Text>
        <Text 
        style={styles.menuItemsNumber} > {pizzas.length} Pizzas</Text>
      </View>

      <FlatList
      data={pizzas}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
      <ProductCard 
      onPress={() => handleOpen(item.id)}
      data={item}
      />)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 20,
        paddingBottom: 24,
        paddingHorizontal: 24
      }}
      />

      <TouchableOpacity 
      onPress={handleAdd}
      style={styles.newProductButton} >
      <Text style={styles.titleButton}>Cadastrar Pizza</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}