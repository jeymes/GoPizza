import {StyleSheet} from 'react-native';
import theme from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
},
header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    padding: getStatusBarHeight() + 33,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
},
 title:{
    fontSize: 24,
    fontFamily: theme.FONTS.TITLE,
    color: theme.COLORS.TITLE,
 },
 deleteLabel:{
    fontSize: 14,
    fontFamily: theme.FONTS.TEXT,
    color: theme.COLORS.TITLE,
 },
 upload: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
 },
 pickImageButton: {
    width: 90,
    marginLeft: 32,
 }
})