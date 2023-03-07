import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color: theme.COLORS.SECONDARY_900,
        fontFamily: theme.FONTS.TEXT,
    },
    radio:{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.COLORS.SECONDARY_900,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected:{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: theme.COLORS.SUCCESS_900,
    }
})