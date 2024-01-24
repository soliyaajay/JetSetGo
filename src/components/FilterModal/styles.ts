import { StyleSheet } from "react-native";
import { scaleSize } from "../../common/helper/matrix";
import { COLORS } from "../../common/styles/color";

export const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    modalMainView: {
      position: "absolute",
      backgroundColor: COLORS.grimReaper,
      padding: scaleSize(15),
      borderRadius: scaleSize(10),
      right: scaleSize(10),
      top: scaleSize(85),
    },
    itemView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: scaleSize(5),
    },
    itemText: {
      fontSize: scaleSize(15),
      fontWeight: "800",
      color: COLORS.white,
      marginRight: scaleSize(10),
    },
    selectedOuterView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioOuterView: {
      height: scaleSize(15),
      width: scaleSize(15),
      borderWidth: scaleSize(1),
      borderColor: COLORS.white50,
      borderRadius: scaleSize(5),
      alignItems: "center",
      justifyContent: "center",
    },
    radioInnerView: {
      height: scaleSize(10),
      width: scaleSize(10),
      backgroundColor: COLORS.white,
      borderRadius: scaleSize(3),
    },
    triangleView: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderRightWidth: 5,
      borderBottomWidth: 10,
      borderLeftWidth: 5,
      borderTopColor: "transparent",
      borderRightColor: "transparent",
      borderBottomColor: COLORS.grimReaper,
      borderLeftColor: "transparent",
      position: "absolute",
      top: scaleSize(-8),
      right: scaleSize(28),
    },
    incDecImage: {
      height: scaleSize(12),
      width: scaleSize(12),
      tintColor: COLORS.white,
      marginLeft: scaleSize(4),
    },
    filterItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: scaleSize(5),
    },
    filterTitle: {
      fontSize: scaleSize(13),
      fontWeight: '800',
      color: COLORS.white,
      marginVertical: scaleSize(5),
    }
  });