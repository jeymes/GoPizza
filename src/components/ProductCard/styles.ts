import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 104,
        height: 104,
        borderRadius: 52,
        marginRight: 20,
    },
    details:{
        flex: 1,
    },
    name:{
        flex: 1,
        fontSize: 20,
        fontFamily: theme.FONTS.TITLE,
        color: theme.COLORS.SECONDARY_900,
    },
    indentification:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    description:{
        fontSize: 12,
        lineHeight: 20,
        marginRight: 21,
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_400,
    },
    line:{
        height: 1,
        width: '100%',
        marginBottom: 12,
        marginTop: 12,
        marginLeft: 124,
        backgroundColor: theme.COLORS.SHAPE,
    }
})