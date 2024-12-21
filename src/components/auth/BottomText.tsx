import { StyleSheet } from "react-native";
import { FONTS } from "../../constants/Fonts";
import CustomText from "../global/CustomText";
import React from "react";

interface UnderlineProps {
    text: string;
}

const UnderlineText: React.FC<UnderlineProps> = ({
    text
}) => {
    return (
        <CustomText variant="h9" fontFamily={FONTS.Regular} style={styles.underline}>
            {text}
        </CustomText>
    )
}

const BottomText = () => {
    return (
        <>
            <CustomText variant="h9" fontFamily={FONTS.Regular} style={styles.text}>
                By proceeding. I accept Groww's <UnderlineText text="T&C" /> 
                <UnderlineText text="Privacy Policy" />
                <UnderlineText text="Tariff Rates" />
            </CustomText>
            <CustomText variant="h9" fontFamily={FONTS.Regular} style={styles.text}>
                <UnderlineText text="FATCHA Declaration" />
                &
                <UnderlineText text="CIBIL T&C" />
            </CustomText>
        </>
    )
}

const styles = StyleSheet.create({
    text: {opacity: 0.6},
    underline: {textDecorationLine: 'underline'}
})

export default BottomText;