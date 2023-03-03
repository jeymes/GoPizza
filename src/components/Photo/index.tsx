import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    uri: string | null;
}

export function Photo({ uri }: Props) {

    if (uri) {
        return <Image 
        style={styles.image} 
        source={{ uri }} />;
    }

  return (
    <View style={styles.Placeholder}>
        <Text style={styles.PlaceholderTitle}>
            Nenhuma foto {'\n'} carregada
        </Text>
    </View>
  );
}