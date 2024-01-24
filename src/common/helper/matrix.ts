import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size;