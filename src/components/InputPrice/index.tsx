import React from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
    size: string,
}

export function InputPrice({ size, ...rest }: Props) {
  return (
    <View style={styles.container}>
        <View style={styles.size}>
        <Text style={styles.label}>
            {size}
        </Text>
        </View>
        <Text style={styles.label}>
            R$
        </Text>
        <TextInput
        {...rest}
        style={styles.Input}
        keyboardType='numeric'
        />
    </View>
  );
}