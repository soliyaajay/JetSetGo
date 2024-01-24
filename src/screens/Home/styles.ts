import { StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/color";
import {
  SCREEN_WIDTH,
  scaleSize,
} from "../../common/helper/matrix";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  flightImage: {
    height: scaleSize(210),
    width: SCREEN_WIDTH,
    alignSelf: "flex-end",
  },
  shadowView: {
    flex: 1
  },
  listingView: {
    flex: 1,
    backgroundColor: COLORS.grimReaper,
  },
  loaderView: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    marginTop: scaleSize(15),
    paddingHorizontal: scaleSize(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButtonView: {
    height: scaleSize(45),
    width: scaleSize(45),
    borderRadius: scaleSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white50,
    marginHorizontal: scaleSize(5),
  },
  headerImageView: {
    height: scaleSize(20),
    width: scaleSize(20),
    tintColor: COLORS.white,
  },
  headerTitle: {
    fontSize: scaleSize(25),
    fontWeight: '600',
    color: COLORS.white
  },
  headerTitleBold: {
    fontSize: scaleSize(30),
    fontWeight: '800',
  },
  headerInnerView: {
    flexDirection: 'row',
  },
  flightItemView: {
    borderRadius: scaleSize(15),
    marginBottom: scaleSize(15),
    backgroundColor: COLORS.white10,
    marginHorizontal: scaleSize(20),
  },
  listHeaderView: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: scaleSize(10),
    paddingTop: scaleSize(10),
  },
  airlineTitle: {
    fontSize: scaleSize(18),
    fontWeight: '400',
    color: COLORS.white,
    marginRight: scaleSize(10),
  },
  listArrowLogo: {
    height: scaleSize(40),
    width: scaleSize(50),
    resizeMode: 'contain',
    borderRadius: scaleSize(5),
  },
  listInnerView: {
    height: scaleSize(200),
    flexDirection: 'row',
  },
  detailsView: {
    flex: .7,
    padding: scaleSize(15),
    justifyContent: 'flex-end',
  },
  priceView: {
    flex: .3,
    backgroundColor: COLORS.white10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: scaleSize(20),
    paddingBottom: scaleSize(20),
    borderTopRightRadius: scaleSize(18),
    borderBottomRightRadius: scaleSize(18),
  },
  routeView: {
    flexDirection: 'row',
    
  },
  routeInnerView: {
    marginRight: scaleSize(10),
  },
  routeKeyword: {
    fontSize: scaleSize(20),
    fontWeight: '600',
    color: COLORS.white
  },
  routeAirportName: {
    fontSize: scaleSize(13),
    fontWeight: '300',
    color: COLORS.white
  },
  pathMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleSize(10),
  },
  pathView: {
    borderWidth: scaleSize(.6),
    borderColor: COLORS.white,
    height: scaleSize(1),
    width: scaleSize(100),
    borderStyle: 'dashed',
    marginRight: scaleSize(5),
  },
  flightIconImage: {
    height: scaleSize(20),
    width: scaleSize(20),
    tintColor: COLORS.white,
    marginRight: scaleSize(5),
  },
  dateTimeTitle: {
    fontSize: scaleSize(12),
    fontWeight: '600',
    color: COLORS.white
  },
  dateTimeDesc: {
    fontSize: scaleSize(15),
    fontWeight: '600',
    color: COLORS.white
  },
  priceTitle: {
    fontSize: scaleSize(13),
    fontWeight: '600',
    color: COLORS.grey
  },
  priceText: {
    fontSize: scaleSize(25),
    fontWeight: '600',
    color: COLORS.white
  },
  emptyComponentView: {
    height: scaleSize(400),
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: scaleSize(17),
    fontWeight: '600',
    color: COLORS.white
  },
  closeButtonView: {
    height: scaleSize(15),
    width: scaleSize(15),
    position: 'absolute',
    backgroundColor: COLORS.grimReaper,
    top: 0,
    right: 0,
    borderRadius: scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeImage: {
    height: scaleSize(6),
    width: scaleSize(6),
    tintColor: COLORS.white,
    resizeMode: 'contain',
  }
});
