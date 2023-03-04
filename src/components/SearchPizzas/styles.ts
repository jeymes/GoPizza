import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -30,
        paddingLeft: 24,
        paddingRight: 24,
    },
    inputArea:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: theme.COLORS.TITLE,
        borderWidth: 1,
        borderColor: theme.COLORS.SHAPE,
    },
    input:{
        flex: 1,
        height: 52,
        paddingLeft: 12,
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_900,
    },
    buttonClear: {
        marginRight: 7,
    },
    button: {
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.COLORS.SUCCESS_900,
        borderRadius: 18,
        marginLeft: 7,
    }
})