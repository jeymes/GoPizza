import React from 'react';
import { styles } from './styles';
import { ActivityIndicator, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import theme from '../../theme';

export type TypeProps = 'primary' | 'segundary';

type Props = RectButtonProps &{
    title: string,
    isLoading?: boolean;
    type?: TypeProps;
}

export function Button({type = 'primary', title, isLoading = false, ...rest}:Props) {
  return (
    <RectButton 
    {...rest}
    enabled={!isLoading}
    style={{
        flex: 1,
        maxHeight: 56,
        minHeight: 56,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: type === 'primary' ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_900,
    }}>
        {isLoading ? <ActivityIndicator
        color={theme.COLORS.TITLE}/> : <Text style={styles.title}>{title}</Text>}

    </RectButton>
  );
}