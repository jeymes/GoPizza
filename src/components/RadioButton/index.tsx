import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import theme from '../../theme';

export type RadioButtonProps = TouchableOpacityProps & {
    selected: boolean;
    title: string;
}

export function RadioButton({ selected = false, title, ...rest }: RadioButtonProps) {
  return (
    <TouchableOpacity 
    {...rest}
    style={{
        width: 104,
        height: 82,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE,
        backgroundColor: selected ? theme.COLORS.SUCCESS_50 : theme.COLORS.TITLE,
        }}>
            <View style={styles.radio}>
                { selected && <View style={styles.selected} /> }
            </View>

            <Text style={styles.title}>
                {title}
            </Text>

    </TouchableOpacity>
  );
}