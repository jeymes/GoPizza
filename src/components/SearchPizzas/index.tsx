import React from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { X } from 'react-native-feather';
import { Search } from 'react-native-feather';
import theme from '../../theme';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
}

export function SearchPizzas({ onSearch, onClear, ...rest}: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.inputArea} >
        <TextInput 
        {...rest}
        style={styles.input}
        placeholder='pesquisar...'
        placeholderTextColor={theme.COLORS.SECONDARY_900}
        />

        <TouchableOpacity 
        onPress={onClear}
        style={styles.buttonClear} >
          <X 
          width={16}
          height={16}
          color={theme.COLORS.SECONDARY_900}
          />
        </TouchableOpacity>

      </View>

      <TouchableOpacity 
      onPress={onSearch}
         style={styles.button} >
         <Search
          width={16}
          height={16}
          color={theme.COLORS.TITLE}
          />
      </TouchableOpacity>

    </View>
  );
}