import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 58,
        borderWidth: 1,
        borderColor: theme.COLORS.SHAPE,
        borderRadius: 12,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    size:{
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.COLORS.SHAPE,
        marginRight: 18,
    },
    label:{
        fontSize: 14,
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_900,
    },
    Input:{
        flex: 1,
        marginLeft: 7,
        color: theme.COLORS.SECONDARY_900,
    }
});