import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles =  StyleSheet.create({
    image: {
        width: 104,
        height: 104,
        borderRadius: 52,
    },
    name:{
        fontSize: 20,
        marginTop: 21,
        fontFamily: theme.FONTS.TITLE,
        color: theme.COLORS.SECONDARY_900,
    },
    description: {
        fontSize: 14,
        marginTop: 11,
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_400,
    },
    preparando: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: theme.COLORS.ALERT_50,
        borderColor: theme.COLORS.SECONDARY_400,
        borderWidth: 1,
    },
    pronto: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: theme.COLORS.SUCCESS_900,
    },
    entreque: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: theme.COLORS.SECONDARY_900,
    },
})