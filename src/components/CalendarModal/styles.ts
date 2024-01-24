import { StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/color";
import { scaleSize } from "../../common/helper/matrix";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: COLORS.modalOpen50
    },
    innerView: {
        backgroundColor: COLORS.white,
        height: scaleSize(400),
        paddingTop: scaleSize(15),
        borderTopLeftRadius: scaleSize(15),
        borderTopRightRadius: scaleSize(15)
    }
})