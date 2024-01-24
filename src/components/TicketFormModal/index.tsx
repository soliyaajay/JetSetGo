import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { STRINGS } from "../../utils";
import { IFlightData } from "../../utils/interface";
import moment from "moment";
import { Images } from "../../common/styles/image";
import { COLORS } from "../../common/styles/color";

const TicketFormModal = ({
  visible,
  selectedAirlineTicket,
  onPressBook,
  onClose,
}: {
  visible: boolean;
  selectedAirlineTicket: IFlightData;
  onPressBook: ({name, numberOfPeople}: {name: string, numberOfPeople: string}) => void;
  onClose: () => void;
}) => {
  const [name, setName] = useState("");
  const [numberOfPeople, setnumberOfPeople] = useState<string>("");

  useEffect(() => {
    if (visible) {
      setName("")
      setnumberOfPeople("")
    }
  },[visible])

  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={1}
        style={styles.mainView}
      >
        <TouchableWithoutFeedback>
          <View  style={styles.formMainView}>
            {selectedAirlineTicket?.displayData?.airlines?.map((i) => (
              <View style={styles.flightInfoView}>
                <Text style={styles.flightNameText}>{i?.airlineName}</Text>
                <Text style={styles.flightInfoView}>
                  {i?.airlineCode}-{i?.flightNumber}
                </Text>
              </View>
            ))}
            <View style={styles.flightDetailsView}>
              <View>
                <Text style={styles.routeInfoText}>
                  {
                    selectedAirlineTicket?.displayData?.source?.airport
                      ?.cityName
                  }
                </Text>
                <Text style={styles.routeBoldText}>
                  {
                    selectedAirlineTicket?.displayData?.source?.airport
                      ?.cityCode
                  }
                </Text>
                <Text style={styles.routeInfoText}>
                  {moment(
                    selectedAirlineTicket?.displayData?.source?.depTime
                  ).format("HH:MM A")}
                </Text>
              </View>
              <View style={styles.flightInfoInnerView}>
                <Text style={styles.travelDayText}>
                  {moment(
                    selectedAirlineTicket?.displayData?.source?.depTime
                  ).format("DD, MMM YYYY")}
                </Text>
                <Image source={Images.flight} style={styles.flightImage} />
                <Text style={styles.travelDayText}>
                  {selectedAirlineTicket?.displayData?.totalDuration}
                </Text>
              </View>
              <View>
                <Text style={styles.routeInfoText}>
                  {
                    selectedAirlineTicket?.displayData?.destination?.airport
                      ?.cityName
                  }
                </Text>
                <Text style={styles.routeBoldText}>
                  {
                    selectedAirlineTicket?.displayData?.destination?.airport
                      ?.cityCode
                  }
                </Text>
                <Text style={styles.routeInfoText}>
                  {moment(
                    selectedAirlineTicket?.displayData?.destination?.arrTime
                  ).format("HH:MM A")}
                </Text>
              </View>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.enterNameTitle}>{STRINGS.EnterYouName}</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.nameInputStyle}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.enterNameTitle}>
                {STRINGS.NumberOfPeople}
              </Text>
              <TextInput
                value={numberOfPeople}
                onChangeText={(text) => {
                  if (text.length <= 2) {
                    setnumberOfPeople(text);
                  }
                }}
                maxLength={3}
                inputMode="numeric"
                style={styles.nameInputStyle}
              />
            </View>
            <TouchableOpacity
              disabled={name === "" || numberOfPeople === ""}
              onPress={() => onPressBook({name: name, numberOfPeople: numberOfPeople})}
              style={[
                styles.buttonView,
                {
                  backgroundColor:
                    name === "" || numberOfPeople === ""
                      ? COLORS.grey
                      : COLORS.grimReaper,
                },
              ]}
            >
              <Text style={styles.buttonText}>{STRINGS.BookNow}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default TicketFormModal;
