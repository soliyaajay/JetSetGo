import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Images } from "../../common/styles/image";
import {
  SORT_ORDER_TYPE,
  STRINGS,
} from "../../utils";
import FilterModal from "../../components/FilterModal";
import { IFlightData } from "../../utils/interface";
import CalendarModal from "../../components/CalendarModal";
import { callGetFlights } from "../../store/GetFlights";
import moment from "moment";
import { COLORS } from "../../common/styles/color";
import TicketFormModal from "../../components/TicketFormModal";
import TicketConfimationModal from "../../components/TicketConfimationModal";

const Home = () => {
  const [rawData, setrawData] = useState<Array<IFlightData>>([]);
  const [data, setData] = useState<Array<IFlightData>>([]);
  const [isVisible, setisVisible] = useState(false);
  const [selectedFilterType, setselectedFilterType] = useState("");
  const [sortOrderType, setsortOrderType] = useState(SORT_ORDER_TYPE.DEC);
  const [isCalendarOpen, setisCalendarOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [selectedAirlinesToFilter, setselectedAirlinesToFilter] = useState<
    Array<string>
  >([]);
  const [airlinesArray, setairlinesArray] = useState<Array<string>>([]);
  const [selectedAirlineTicket, setselectedAirlineTicket] =
    useState<IFlightData>(data[0]);
  const [isTicketFormVisible, setisTicketFormVisible] = useState(false);
  const [isTicketConfimationVisible, setisTicketConfimationVisible] =
    useState(false);
  const [dateToFilter, setdateToFilter] = useState<string>("");

  useEffect(() => {
    callGetFlights()
      .then((result: Array<IFlightData>) => {
        const airLinesArray: Array<string> = [];
        result.map((airline) =>
          airline.displayData.airlines?.map((i) =>
            !airLinesArray?.includes(i?.airlineName)
              ? airLinesArray?.push(i?.airlineName)
              : null
          )
        );
        setrawData([...result]);
        setairlinesArray([...airLinesArray]);
        setData([...result]);
        setisLoading(false);
      })
      .catch((e) => {
        setisLoading(false);
      });
  }, []);

  const onSelectTicket = (ticket: IFlightData) => {
    setselectedAirlineTicket(ticket);
    setisTicketFormVisible(true);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: IFlightData;
    index: number;
  }) => {
    const { displayData } = item;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onSelectTicket(item)}
        style={styles.flightItemView}
      >
        <View style={styles.listHeaderView}>
          {displayData?.airlines?.map((i) => (
            <Text style={styles.airlineTitle}>{i?.airlineName}</Text>
          ))}
        </View>
        <View style={styles.listInnerView}>
          <View style={styles.detailsView}>
            <View style={styles.routeView}>
              <View style={styles.routeInnerView}>
                <Text style={styles.routeKeyword}>
                  {displayData?.source?.airport?.cityCode}
                </Text>
                <Text style={styles.routeAirportName}>
                  {displayData?.source?.airport?.cityName}
                </Text>
              </View>
              <View style={styles.routeInnerView}>
                <Text style={styles.routeKeyword}>
                  {displayData?.destination?.airport?.cityCode}
                </Text>
                <Text style={styles.routeAirportName}>
                  {displayData?.destination?.airport?.cityName}
                </Text>
              </View>
            </View>
            <View style={styles.pathMainView}>
              <View style={styles.pathView} />
              <Image source={Images.flight} style={styles.flightIconImage} />
              <Text style={styles.routeAirportName}>
                {displayData?.totalDuration}
              </Text>
            </View>
            <View style={styles.routeView}>
              <View style={styles.routeInnerView}>
                <Text style={styles.dateTimeTitle}>{STRINGS.Date}</Text>
                <Text style={styles.dateTimeDesc}>
                  {moment(displayData?.source?.depTime).format("DD MMM")}
                </Text>
              </View>
              <View style={styles.routeInnerView}>
                <Text style={styles.dateTimeTitle}>{STRINGS.Time}</Text>
                <Text style={styles.dateTimeDesc}>
                  {moment(displayData?.source?.depTime).format("hh:mm A")}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.priceTitle}>{STRINGS.Price}</Text>
            <Text style={styles.priceText}>${item?.fare}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onSelectFilter = (type: string) => {
    setisVisible(false);
    const newData = data;
    const filterData = newData?.sort((a, b) => {
      if (sortOrderType === SORT_ORDER_TYPE.DEC) {
        if (a.fare < b.fare) {
          return 1;
        }
        if (a.fare > b.fare) {
          return -1;
        }
      } else {
        if (a.fare < b.fare) {
          return -1;
        }
        if (a.fare > b.fare) {
          return 1;
        }
      }
      return 0;
    });
    setsortOrderType(
      sortOrderType === SORT_ORDER_TYPE.DEC
        ? SORT_ORDER_TYPE.INC
        : SORT_ORDER_TYPE.DEC
    );
    setselectedFilterType(type);
    setData([...filterData]);
  };

  const onSelectFilterByAirline = (airLine: string) => {
    const newselectedAirlinesToFilter = selectedAirlinesToFilter;
    const index = selectedAirlinesToFilter?.findIndex((i) => i === airLine);
    if (selectedAirlinesToFilter?.includes(airLine)) {
      selectedAirlinesToFilter?.splice(index, 1);
    } else {
      selectedAirlinesToFilter?.push(airLine);
    }
    const newData = data.filter((flight) =>
      flight.displayData.airlines.some((airline) =>
        newselectedAirlinesToFilter?.includes(airline.airlineName)
      )
    );
    setisVisible(false);
    setData([
      ...(newselectedAirlinesToFilter?.length === 0 ||
      newselectedAirlinesToFilter?.length === airlinesArray?.length
        ? rawData
        : newData),
    ]);
    setselectedAirlinesToFilter([...newselectedAirlinesToFilter]);
  };

  const onPressBook = ({
    name,
    numberOfPeople,
  }: {
    name: string;
    numberOfPeople: string;
  }) => {
    setisTicketFormVisible(false);
    setisTicketConfimationVisible(true);
    setselectedAirlineTicket({
      ...selectedAirlineTicket,
      name,
      numberOfPeople,
    });
  };

  const onPressDay = (day: string) => {
    setdateToFilter(day);
    const newFilteredArray = data?.filter(
      (i) =>
        moment(i?.displayData?.source?.depTime).format("YYYY-MM-DD") ===
        moment(day).format("YYYY-MM-DD")
    );
    setData([...newFilteredArray]);
    setisCalendarOpen(false);
  };

  const clearDateFilter = () => {
    setdateToFilter("")
    setData([...rawData])
  };

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{
          uri: "https://c.wallhere.com/photos/e3/bd/1920x1200_px_clouds_sky_sunset-517508.jpg!d",
        }}
        style={styles.flightImage}
      >
        <View style={styles.headerView}>
          <View>
            <Text style={styles.headerTitle}>{STRINGS.Lets}</Text>
            <Text style={[styles.headerTitle, styles.headerTitleBold]}>
              {STRINGS.Explore}
            </Text>
          </View>
          <View style={styles.headerInnerView}>
            <TouchableOpacity
              onPress={() => setisCalendarOpen(true)}
              style={styles.headerButtonView}
            >
              {dateToFilter != "" ? (
                <TouchableOpacity
                  onPress={clearDateFilter}
                  style={styles.closeButtonView}
                >
                  <Image source={Images.close} style={styles.closeImage} />
                </TouchableOpacity>
              ) : null}
              <Image source={Images.calendar} style={styles.headerImageView} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setisVisible(true)}
              style={styles.headerButtonView}
            >
              <Image source={Images.filter} style={styles.headerImageView} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.listingView}>
        {isLoading ? (
          <View style={styles.loaderView}>
            <ActivityIndicator size={"large"} color={COLORS.white} />
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={() => (
              <View style={styles.emptyComponentView}>
                <Text style={styles.emptyText}>{STRINGS.noResults}</Text>
              </View>
            )}
          />
        )}
      </View>
      <FilterModal
        visible={isVisible}
        onClose={() => setisVisible(false)}
        selected={selectedFilterType}
        onSelect={onSelectFilter}
        sortOrderType={sortOrderType}
        airLinesArray={airlinesArray}
        onSelectFilterByAirline={onSelectFilterByAirline}
        selectedAirlinesToFilter={selectedAirlinesToFilter}
      />
      <CalendarModal
        visible={isCalendarOpen}
        onClose={() => setisCalendarOpen(false)}
        onPressDay={onPressDay}
      />
      <TicketFormModal
        selectedAirlineTicket={selectedAirlineTicket}
        visible={isTicketFormVisible}
        onPressBook={onPressBook}
        onClose={() => setisTicketFormVisible(false)}
      />
      <TicketConfimationModal
        visible={isTicketConfimationVisible}
        selectedAirlineTicket={selectedAirlineTicket}
        onClose={() => setisTicketConfimationVisible(false)}
      />
    </View>
  );
};

export default Home;
