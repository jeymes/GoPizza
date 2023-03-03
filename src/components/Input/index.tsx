import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import theme from '../../theme';

export type TypeProps = 'Primary' | 'segundary';

type Props = TextInputProps &{
type?: TypeProps;
height?: number;
}

export function Input({type = 'Primary', height = 56, ...rest}: Props) {
  return (
    <TextInput 
    {...rest}
    style={{
    width: '100%',
    height: height,
    backgroundColor: 'transparent',
    borderRadius: 12,
    fontSize: 14,
    padding: 7,
    paddingLeft: 20,
    marginBottom: 16,
    borderColor: theme.COLORS.SHAPE,
    borderWidth: 1,
    fontFamily: theme.FONTS.TEXT,
    color: type === 'Primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.TITLE,
}}
    placeholderTextColor={type === 'Primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50}
    >
    </TextInput>
  );
}