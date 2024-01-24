import React from "react";
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { STRINGS } from "../../utils";
import { IFlightData } from "../../utils/interface";
import moment from "moment";
import { Images } from "../../common/styles/image";

const TicketConfimationModal = ({
  visible,
  selectedAirlineTicket,
  onClose,
}: {
  visible: boolean;
  selectedAirlineTicket: IFlightData;
  onClose: () => void;
}) => {
  return (
    <Modal visible={visible} transparent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.mainView}
      >
        <TouchableWithoutFeedback>
          <View style={styles.innerView}>
            <Text style={styles.title}>{STRINGS.BoardingPass}</Text>
            <View style={styles.boardingPassView}>
              <View style={styles.boardingPassHeaderView}>
                <View>
                  <Text style={styles.routeLightText}>
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
                  <Text style={styles.routeLightText}>
                    {moment(
                      selectedAirlineTicket?.displayData?.source?.depTime
                    ).format("HH:MM A")}
                  </Text>
                </View>
                <View>
                  <Image
                    source={Images.flight}
                    style={styles.flightImageView}
                  />
                </View>
                <View>
                  <Text style={styles.routeLightText}>
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
                  <Text style={styles.routeLightText}>
                    {moment(
                      selectedAirlineTicket?.displayData?.destination?.arrTime
                    ).format("HH:MM A")}
                  </Text>
                </View>
              </View>
              <View style={styles.detailsRowView}>
                <View style={styles.detailsInnerView}>
                  <Text style={styles.keyText}>{STRINGS.PASSENGER}</Text>
                  <Text style={styles.valueText}>
                    {selectedAirlineTicket?.name}
                  </Text>
                </View>
                <View style={styles.detailsInnerView}>
                  <Text style={styles.keyText}>{STRINGS.DATE}</Text>
                  <Text style={styles.valueText}>
                    {moment(
                      selectedAirlineTicket?.displayData.source.depTime
                    ).format("MMM DD, YYYY")}
                  </Text>
                </View>
              </View>
              <View style={styles.detailsRowView}>
                <View style={styles.detailsInnerView}>
                  <Text style={styles.keyText}>{STRINGS.NUMBER_OF_PEOPLE}</Text>
                  <Text style={styles.valueText}>
                    {selectedAirlineTicket?.numberOfPeople}
                  </Text>
                </View>
                <View style={styles.detailsInnerView}>
                  <Text style={styles.keyText}>{STRINGS.AIRLINES}</Text>
                  <Text style={styles.valueText}>
                    {selectedAirlineTicket?.displayData.airlines?.map(i => i?.airlineName)?.join(',')}
                  </Text>
                </View>
              </View>
              <View style={styles.detailsRowView}>
                <View style={styles.detailsInnerView}>
                  <Text style={styles.keyText}>{STRINGS.FLIGHT}</Text>
                  <Text style={styles.valueText}>
                    {selectedAirlineTicket?.displayData.airlines?.map(i => 
                      `${i?.airlineCode}${i?.flightNumber}`
                    )?.join(',')}
                  </Text>
                </View>
                <View style={styles.detailsInnerView}>
                  <Text style={styles.keyText}>{STRINGS.DURATION}</Text>
                  <Text style={styles.valueText}>
                    {selectedAirlineTicket?.displayData?.totalDuration}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.buttonView}>
              <Text style={styles.buttonText}>{STRINGS.DownloadTicket}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default TicketConfimationModal;
