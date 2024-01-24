import { StyleSheet } from "react-native";
import { scaleSize } from "../../common/helper/matrix";
import { COLORS } from "../../common/styles/color";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    backgroundColor: COLORS.modalOpen50,
  },
  innerView: {
    backgroundColor: COLORS.grimReaper,
    alignItems: "center",
    borderTopLeftRadius: scaleSize(20),
    borderTopRightRadius: scaleSize(20),
  },
  title: {
    fontSize: scaleSize(18),
    fontWeight: "800",
    color: COLORS.white,
    marginTop: scaleSize(40),
    letterSpacing: scaleSize(.95)
  },
  boardingPassView: {
    backgroundColor: COLORS.white,
    borderRadius: scaleSize(10),
    marginTop: scaleSize(15),
    padding: scaleSize(18),

  },
  boardingPassHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
  },
  routeBoldText: {
    fontSize: scaleSize(18),
    fontWeight: "800",
    color: COLORS.grimReaper,
  },
  routeLightText: {
    fontSize: scaleSize(14),
    color: COLORS.grimReaper,
  },
  flightImageView: {
    height: scaleSize(30),
    width: scaleSize(30),
    resizeMode: 'contain',
  },
  detailsRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleSize(20), 
  },
  keyText: {
    fontSize: scaleSize(14),
    color: COLORS.black,
    fontWeight: '600',
  },
  valueText: {
    fontSize: scaleSize(17),
    color: COLORS.grimReaper,
    fontWeight: '700',
  },
  detailsInnerView: {
    flex: .47,
  },
  buttonView: {
    backgroundColor: COLORS.white,
    height: scaleSize(50),
    width: '85%',
    marginVertical: scaleSize(10),
    borderRadius: scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: scaleSize(17),
    color: COLORS.grimReaper,
    fontWeight: '700',
  }
});
