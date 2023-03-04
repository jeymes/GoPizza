import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { ArrowRight } from 'react-native-feather';
import theme from '../../theme';

export type ProductProps ={
  id: string;
  photo_url: string,
  name: string,
  description: string,
}

type Props = TouchableOpacityProps &{
  data: ProductProps;
}

export function ProductCard({ data, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      {...rest}
      style={styles.content}
      >
        <Image
        style={styles.image}
        source={{ uri: data.photo_url }}
        />

        <View style={styles.details}>

        <View style={styles.indentification}>

            <Text style={styles.name}>
              {data.name}
            </Text>

            <ArrowRight
            width={18}
            height={18}
            color={theme.COLORS.SECONDARY_400}
            />

          </View>
            <Text style={styles.description}>
              {data.description}
            </Text>
        </View>



      </TouchableOpacity>

      <View style={styles.line} />

    </View>
  );
}