import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as Icon from 'react-native-feather';
import { styles } from './styles';
import theme from '../../theme';

export function ButtonBack({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity 
    {...rest}
    style={styles.container}>
        <Icon.ChevronLeft 
        color={theme.COLORS.TITLE}
        width={18}
        height={18}
        />
    </TouchableOpacity>
  );
}