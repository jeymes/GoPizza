import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 32,
        marginBottom: 24,
        alignSelf: 'flex-start',
        color: theme.COLORS.TITLE,
        fontFamily: theme.FONTS.TITLE,
    },
    Brand: {
        resizeMode: 'contain',
        height: 340,
        marginTop: 64,
        marginBottom: 32,
    },
    forgotPassowrdButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPassowrdLabel: {
        alignSelf: 'flex-start',
        color: theme.COLORS.TITLE,
        fontFamily: theme.FONTS.TEXT,
    }
});