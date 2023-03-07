import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';
import { ButtonBack } from '../../components/ButtonBack';
import { RadioButton } from '../../components/RadioButton';
import { PIZZA_TYPES } from '../../utils/pizzaTypes';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import { OrderNavigationProps } from '../../@types/navigation';
import { ProductProps } from '../../components/ProductCard';
import { useAuth } from '../../hooks/auth';

type PizzaResponse = ProductProps & {
prices_sizes: {
  [key: string] : number;
}
}

export function Order() {
  const navigation = useNavigation();

  const [sizes, setSizes ] = useState('');
  const [quantity, setQuantity ] = useState(0);
  const [tableNumber, setTableNumber ] = useState('');
  const [ sendingOrder, setSendingOrder ] = useState(false);
  const [ pizza, setPizza ] = useState<PizzaResponse>({} as PizzaResponse);

  const { user } = useAuth();
  const route = useRoute();
  const { id } = route.params as OrderNavigationProps;

  const amount = sizes ? pizza.prices_sizes[sizes] * quantity : '0,00'

  function handleGoBack(){
    navigation.goBack();
  }

  function handleOrder() {
    if (!sizes) {
      return Alert.alert('Pedido', 'Selecione o tamanho da pizza.')
    }
    if (!tableNumber) {
      return Alert.alert('Pedido', 'Informe o número da mesa.')
    }
    if (!quantity) {
      return Alert.alert('Pedido', 'Informe a quantidade.')
    }

    setSendingOrder(true);

    firestore()
    .collection('orders')
    .add({
      quantity,
      amount,
      pizza: pizza.name,
      sizes,
      table_number: tableNumber,
      status: 'Preparando',
      waiter_id: user?.id,
      image: pizza.photo_url,
    })
    .then(() => navigation.navigate('home'))
    .catch(() => {
      Alert.alert('Pedido', 'Não foi possível realizar o pedido.')
      setSendingOrder(false)
    })
  }

  useEffect(() => {
    if (id) {
      firestore()
      .collection('pizzas')
      .doc(id)
      .get()
      .then(response => setPizza(response.data() as PizzaResponse))
      .catch(() => Alert.alert('Pedido', 'Não foi possivel carregar o produto.'))
    }
  }, [id])



  return (
    <KeyboardAvoidingView 
    key={pizza.id}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined }
    style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: theme.COLORS.BACKGROUND}}
      >

        <LinearGradient
            colors={theme.COLORS.GRADIENT}
            style={styles.header}
        >

            <View style={{ paddingBottom: 50}} >
            <ButtonBack
            onPress={handleGoBack}
            />
            </View>

        </LinearGradient>

     
       <Image
        source={{ uri: pizza.photo_url }}
        style={styles.photo}
        />

        <View style={styles.form} >
            
          <Text style={styles.title} >{pizza.name}</Text>
          <Text style={styles.label}>Selecione um tamanho</Text>
          <View style={styles.sizes} >
              {
                PIZZA_TYPES.map(item => (
              <RadioButton
                  key={item.id}
                  title={item.name}
                  onPress={() => setSizes(item.id)}
                  selected={sizes === item.id}
              />
                ))
                }
          </View>

          <View style={styles.formRow} >
            <View style={styles.inputGroup} >
              <Text style={styles.label} >Número da mesa</Text>
            <Input
            onChangeText={setTableNumber}
            keyboardType='numeric'
            />
            </View>

            <View style={styles.inputGroup} >
              <Text style={styles.label} >Quantidade</Text>
            <Input
            onChangeText={(value) => setQuantity(Number(value))}
            keyboardType='numeric'
            />
            </View>
          </View>

          <Text style={styles.price} >Valor de R$ {amount}</Text>
        
        <Button
        title={sendingOrder ? <ActivityIndicator color={theme.COLORS.TITLE}/> : 'Confirma pedido'}
        onPress={handleOrder}
        />
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}