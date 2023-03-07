import React from 'react';
import { View, Text, Image, TouchableOpacity,TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import theme from '../../theme';

export type OrderProps = {
    id: string;
    pizza: string,
    image: string,
    status: StatusTypeProps,
    table_number : string,
    quantity: string,
}

type ContainerProps = TouchableOpacityProps & {
    index: number;
    data: OrderProps;
}
export type StatusTypeProps = 'Preparando' | 'Pronto' | 'Entregue';

type StatusProps = {
    status: StatusTypeProps;
}

export function OrderCard({index, data, status, ...rest}: ContainerProps & StatusProps) {
  return (
    <TouchableOpacity
    {...rest}
    style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: index % 2 > 0 ? 0 : 1,
        borderRightColor: theme.COLORS.SHAPE,
        width: '50%',
        padding: 24,
    }}>

        <Image
        style={styles.image}
        source={{ uri: data.image}}
        />

        <Text style={styles.name} > 4 Queijos </Text>

        <Text style={styles.description} >
            Mesa {data.table_number} • Qnt: {data.quantity}
        </Text>


        <View
        style={status === 'Preparando' ? styles.preparando : 
            status === 'Entregue' ? styles.entreque : 
            status === 'Pronto' ? styles.pronto : {}
        }
        >
            <Text
            style={{
                fontSize: 12,
                lineHeight: 20,
                textAlign: 'center',
                fontFamily: theme.FONTS.TEXT,
                color: status === 'Preparando' 
                ? theme.COLORS.ALERT_900 
                : theme.COLORS.TITLE,
            }}
            >
                {data.status}
            </Text>

        </View>

    </TouchableOpacity>
  );
}