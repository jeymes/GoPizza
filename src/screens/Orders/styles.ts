import { StyleSheet } from 'react-native';
import theme from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BACKGROUND,
    },
    header: {
        padding: getStatusBarHeight() + 33,
        paddingBottom: 33,
    },
    title: {
        fontFamily: theme.FONTS.TITLE,
        color: theme.COLORS.TITLE,
        fontSize: 24,
        textAlign: 'center',
    }
})