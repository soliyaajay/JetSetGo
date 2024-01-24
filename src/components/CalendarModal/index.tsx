import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Calendar } from "react-native-calendars";

const CalendarModal = ({ visible, onClose, onPressDay }: { visible: boolean, onClose: () => void, onPressDay: (day: string) => void }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.mainView}>
        <View style={styles.innerView}>
          <Calendar
            onDayPress={(day) => {
              onPressDay(day?.dateString)
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CalendarModal;
