import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BACKGROUND,
    },
    header: {
        padding: getStatusBarHeight() + 34,
        paddingHorizontal: 24, 
    },
    photo: {
        width: 240,
        height: 240,
        borderRadius: 120,
        alignSelf: 'center',
        position: 'relative',
        top: -120,
    },
    sizes:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    form: {
        width: '100%',
        marginTop: -120,
        padding: 24,
    },
    title: {
        fontFamily: theme.FONTS.TITLE,
        color: theme.COLORS.SECONDARY_900,
        fontSize: 32,
        marginBottom: 32,
        textAlign: 'center',
    },
    label: {
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_900,
        fontSize: 14,
        marginBottom: 16,
    },
    formRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputGroup: {
        width: '48%',
    },
    price: {
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_900,
        fontSize: 14,
        marginVertical: 24,
        alignSelf: 'flex-end'
    }
})