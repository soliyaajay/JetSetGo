export interface IFlight {
  from: { keyword: string; name: string };
  to: { keyword: string; name: string };
  duration: string;
  date: string;
  Time: string;
  airLine: string;
  airLineLogo: string;
  price: number;
}

interface Airport {
  airportCode: string;
  airportName: string;
  cityCode: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  terminal: string;
}

interface Flight {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
}

interface IDisplayData {
  airlines: Flight[];
  destination: {
    airport: Airport;
    arrTime: string;
  };
  source: {
    airport: Airport;
    depTime: string;
  };
  stopInfo: string;
  totalDuration: string;
  fare: number;
  id: string;
}

export interface IFlightData {
  displayData: IDisplayData
  fare: number,
  id: string,
  name: string,
  numberOfPeople: string,
}