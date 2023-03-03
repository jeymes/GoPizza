import {StyleSheet} from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        borderRadius: 80
    },

    Placeholder: {
        width: 160,
        height: 160,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.COLORS.SECONDARY_900
    },

    PlaceholderTitle: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.SECONDARY_900,
    }
})
