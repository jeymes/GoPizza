import React from 'react';
import { View, Text, TextProps, ViewProps } from 'react-native';

import { styles } from './styles';
import theme from '../../theme';

type TitleProps = TextProps &{
    color: string;
    title: string;
}

type NotificatonProps = ViewProps &{
  noNotifications?: string | boolean | undefined;
}

export function BottomMenu({ title, color, noNotifications  }: TitleProps & NotificatonProps) {


  return (
    <View style={styles.container}>

      <Text 
      style={{
        fontSize: 18,
        fontFamily: theme.FONTS.TITLE,
        color: color
      }}
      >
        {title}
      </Text>

        {
          noNotifications &&
          <View
      style={{
        height: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        marginLeft: 8,
        backgroundColor: noNotifications ==='0' ? 'transparent' : theme.COLORS.SUCCESS_900,
        borderWidth: 1,
        borderColor: !noNotifications ? 'transparent' :  theme.COLORS.SHAPE,
      }}
      > 
    
        <Text
        style={{
          color: noNotifications ? theme.COLORS.TITLE : theme.COLORS.SECONDARY_500,
          fontFamily: theme.FONTS.TEXT,
          fontSize: 12,
        }}
        >
          {noNotifications}
        </Text>

      </View>}

    </View>
  );
}