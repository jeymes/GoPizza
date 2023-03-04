import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BACKGROUND
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    
        padding: getStatusBarHeight() + 33,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 58,
    },
    greeting: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetingEmoji: {
        height: 32,
        width: 32,
        marginRight: 12,
    },
    greetingText:{
        fontSize: 20,
        fontFamily: theme.FONTS.TITLE,
        color: theme.COLORS.TITLE,
     },
     menuHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginRight: 24,
        marginLeft: 24,
        paddingBottom: 22,
        borderBottomWidth: 1,
        borderColor: theme.COLORS.SHAPE,
     },
     menuItemsNumber: {
        fontSize: 14,
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_900,
     },
     title:{
        fontSize: 20,
        lineHeight: 20,
        fontFamily: theme.FONTS.TITLE,
        color: theme.COLORS.SECONDARY_900,
     }
})