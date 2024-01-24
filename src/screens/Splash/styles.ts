import { StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/color";
import { SCREEN_HEIGHT, scaleSize } from "../../common/helper/matrix";

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLORS.grimReaper,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        height: scaleSize(100),
        width: scaleSize(100),
    },
    flightImage: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        position: 'absolute',
        color: COLORS.lightGrey,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: SCREEN_HEIGHT * .55,
        alignSelf: 'center',
    }
})