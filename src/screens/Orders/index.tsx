import React, { useEffect, useState} from 'react';
import { View, Text, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import theme from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { OrderCard, OrderProps } from '../../components/OrderCard';
import { ItemSeparator } from '../../components/ItemSeparator';

import firestore from '@react-native-firebase/firestore';
import { useAuth } from '../../hooks/auth';

export function Orders() {

  const [ orders, setOrders ] = useState<OrderProps[]>([])

  const { user } = useAuth();

  function handlePizzaDelivered(id: string){
    Alert.alert("Pedido", "Confirma que a pizza foi entreque?", [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: "Sim",
        onPress: () => {
          firestore().collection('orders').doc(id).update({
            status: 'Entregue'
          });
        }
      }
    ]
    )
  }

  useEffect(() => {
    const subscribe = firestore()
    .collection('orders')
    .where('waiter_id', '==', user?.id)
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as OrderProps[];

      setOrders(data);

    })
    return () => subscribe();
  }, [])

  return (
    <View 
    style={styles.container}
    >
    <LinearGradient
     colors={theme.COLORS.GRADIENT}
     style={styles.header}
     >
        <Text style={styles.title}>
            Pedidos Feitos
        </Text>
    </LinearGradient>

    <FlatList
    data={orders}
    keyExtractor={item => item.id}
    renderItem={({ item , index}) =>(
      <OrderCard
      index={index} status={item.status}
      data={item}
      disabled={item.status === 'Entregue'}
      onPress={() => handlePizzaDelivered(item.id)}
      />
    )}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125}}
    ItemSeparatorComponent={() => <ItemSeparator/>}
    />

    </View>
  );
}