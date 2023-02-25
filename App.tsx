import React from 'react';
import {View, Text} from 'react-native';
import theme from './src/theme';

function App(): JSX.Element {
  return (
    <View style={{backgroundColor: theme.COLORS.PRIMARY_900, flex: 1, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Jeymes
      </Text>
    </View>
  );
}

export default App;