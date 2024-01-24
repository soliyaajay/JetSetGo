import { StyleSheet } from "react-native";
import { scaleSize } from "../../common/helper/matrix";
import { COLORS } from "../../common/styles/color";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: COLORS.modalOpen50,
    justifyContent: "flex-end",
  },
  formMainView: {
    backgroundColor: COLORS.white,
    paddingTop: scaleSize(30),
    paddingHorizontal: scaleSize(20),
    borderTopLeftRadius: scaleSize(20),
    borderTopRightRadius: scaleSize(20),
  },
  inputView: {
    borderWidth: scaleSize(1),
    borderColor: COLORS.grimReaper,
    borderRadius: scaleSize(10),
    marginVertical: scaleSize(10),
  },
  enterNameTitle: {
    fontSize: scaleSize(15),
    // fontWeight: '800',
    color: COLORS.grimReaper,
    position: "absolute",
    backgroundColor: COLORS.white,
    top: scaleSize(-10),
    left: scaleSize(20),
    paddingHorizontal: scaleSize(5),
  },
  nameInputStyle: {
    paddingHorizontal: scaleSize(10),
    fontSize: scaleSize(15),
    color: COLORS.grimReaper,
    fontWeight: '600',
  },
  flightDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaleSize(10),
  },
  routeInfoText: {
    fontSize: scaleSize(13),
    color: COLORS.grey,
    maxWidth: scaleSize(80),
  },
  routeBoldText: {
    fontSize: scaleSize(20),
    color: COLORS.grimReaper,
    fontWeight: '700',
    marginVertical: scaleSize(5), 
  },
  travelDayText: {
    fontSize: scaleSize(13),
    color: COLORS.grimReaper,
    maxWidth: scaleSize(80),
    fontWeight: '800'
  },
  flightImage: {
    height: scaleSize(24),
    width: scaleSize(24),
    resizeMode: 'contain',
    tintColor: COLORS.grimReaper
  },
  flightInfoInnerView: {
    alignItems: 'center',
  },
  flightInfoView: {
    alignItems: 'center',
    marginVertical: scaleSize(15),
  },
  flightNameText: {
    fontSize: scaleSize(15),
    color: COLORS.grimReaper,
    maxWidth: scaleSize(80),
    fontWeight: '800',
  },
  buttonView: {
    height: scaleSize(50),
    width: '100%',
    backgroundColor: COLORS.grimReaper,
    borderRadius: scaleSize(10),
    marginVertical: scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scaleSize(17),
    color: COLORS.white,
    fontWeight: '800',
  }
});
