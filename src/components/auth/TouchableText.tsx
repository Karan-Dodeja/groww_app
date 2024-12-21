import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native"
import { FONTS } from "../../constants/Fonts";
import { RFPercentage } from "react-native-responsive-fontsize";

const TouchableText: React.FC<{
    firstText: string;
    style?: TextStyle;
    onPress: () => void;
}> = ({ firstText, style, onPress }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.bottomText, {color: colors.primary}, style]}>
                {firstText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bottomText: {
        fontFamily: FONTS.Medium,
        fontSize: RFPercentage(1.5),
        marginTop: 5
    }
})

export default TouchableText;