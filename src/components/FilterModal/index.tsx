import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../common/styles/color";
import { FILTER_TYPE, SORT_ORDER_TYPE, STRINGS } from "../../utils";
import { Images } from "../../common/styles/image";
import { styles } from "./styles";

const FilterModal = ({
  visible,
  onClose,
  selected,
  onSelect,
  sortOrderType,
  airLinesArray,
  onSelectFilterByAirline,
  selectedAirlinesToFilter
}: {
  visible: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (type: string) => void;
  sortOrderType: string;
  airLinesArray: Array<string>;
  onSelectFilterByAirline: (airline: string) => void;
  selectedAirlinesToFilter: Array<string>
}) => {
  const RadioButton = ({ isSelected }: { isSelected: boolean }) => {
    return (
      <View style={styles.radioOuterView}>
        {isSelected ? <View style={styles.radioInnerView} /> : null}
      </View>
    );
  };

  const renderItem = ({ item, index }: { item: string, index: number }) => {
    return (
      <TouchableOpacity activeOpacity={.5} onPress={() => onSelectFilterByAirline(item)} style={styles.filterItemView}>
        <Text style={styles.itemText}>{item}</Text>
        <View style={styles.selectedOuterView}>
          <RadioButton isSelected={selectedAirlinesToFilter?.includes(item)} />
        </View>
      </TouchableOpacity>
    );
  };

  return visible ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onClose}
      style={styles.mainView}
    >
      <TouchableWithoutFeedback>
        <View style={styles.modalMainView}>
          <View style={styles.triangleView} />
          <View>
            <Text style={styles.filterTitle}>{STRINGS.FilterBy}</Text>
            <FlatList data={airLinesArray} renderItem={renderItem} />
          </View>
          <Text style={styles.filterTitle}>{STRINGS.sortBy}</Text>
          <TouchableOpacity
            onPress={() => onSelect(FILTER_TYPE.PRICE)}
            style={styles.itemView}
          >
            <Text style={styles.itemText}>{STRINGS.ByPrice}</Text>
            <View style={styles.selectedOuterView}>
              <RadioButton isSelected={selected === FILTER_TYPE.PRICE} />
              <Image
                source={Images.upArrow}
                style={[
                  styles.incDecImage,
                  {
                    tintColor:
                      selected === FILTER_TYPE.PRICE
                        ? COLORS.white
                        : COLORS.grimReaper,
                    transform: [{ scaleY: sortOrderType === SORT_ORDER_TYPE.DEC ? -1 : 1}],
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  ) : null;
};

export default FilterModal;
