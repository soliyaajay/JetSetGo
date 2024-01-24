
export const SCREENS = {
  SPLASH: "Splash",
  HOME: "Home",
};

export const STRINGS = {
  TicketsFound: "Tickets Found",
  Lets: "Let's",
  Explore: "Explore",
  Date: 'Date',
  Time: 'Time',
  Price: 'price',
  ByAirlines: 'By Airlines',
  ByPrice: 'By Price',
  ExploreDestintion: 'Explore Endless Destinations',
  FilterBy: "Filter By:",
  sortBy: "Sort By:",
  EnterYouName: 'Enter your full name',
  NumberOfPeople: 'Number Of People',
  BookNow: 'Book Now',
  BoardingPass: 'Boarding Pass',
  DownloadTicket: 'Download Ticket',
  noResults: 'No flights found',
  PASSENGER: 'PASSENGER',
  DATE: 'DATE',
  AIRLINES: 'AIRLINES',
  NUMBER_OF_PEOPLE: 'NUMBER OF PEOPLE',
  FLIGHT: 'FLIGHT',
  DURATION: 'DURATION',
};

export const flightsArray = [
    {
      from: { keyword: "NYC", name: "New York" },
      to: { keyword: "SFO", name: "San Francisco" },
      duration: "2h 40m",
      date: "24 June",
      Time: "10.30 PM",
      airLine: 'Fly Emirates',
      airLineLogo: "https://i.pinimg.com/originals/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg",
      price: 590
    },
    {
      from: { keyword: "LAX", name: "Los Angeles" },
      to: { keyword: "MIA", name: "Miami" },
      duration: "4h 15m",
      date: "15 July",
      Time: "1.45 PM",
      airLine: 'Delta Airlines',
      airLineLogo: "https://1000logos.net/wp-content/uploads/2017/09/Delta-Air-Lines-Logo.png",
      price: 720
    },
    {
      from: { keyword: "CHI", name: "Chicago" },
      to: { keyword: "ATL", name: "Atlanta" },
      duration: "2h 55m",
      date: "8 August",
      Time: "8.15 AM",
      airLine: 'United Airlines',
      airLineLogo: "https://i.pinimg.com/originals/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg",
      price: 480
    },
    {
      from: { keyword: "LON", name: "London" },
      to: { keyword: "PAR", name: "Paris" },
      duration: "1h 30m",
      date: "10 September",
      Time: "3.00 PM",
      airLine: 'British Airways',
      airLineLogo: "https://1000logos.net/wp-content/uploads/2016/10/British-Airways-Logo.png",
      price: 890
    },
    {
      from: { keyword: "TOK", name: "Tokyo" },
      to: { keyword: "SYD", name: "Sydney" },
      duration: "9h 20m",
      date: "5 October",
      Time: "6.45 AM",
      airLine: 'Japan Airlines',
      airLineLogo: "https://i.pinimg.com/originals/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg",
      price: 1200
    },
    {
      from: { keyword: "RIO", name: "Rio de Janeiro" },
      to: { keyword: "CPT", name: "Cape Town" },
      duration: "12h 10m",
      date: "18 November",
      Time: "11.20 PM",
      airLine: 'South African Airways',
      airLineLogo: "https://i.pinimg.com/originals/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg",
      price: 980
    },
    {
      from: { keyword: "DEL", name: "Delhi" },
      to: { keyword: "BKK", name: "Bangkok" },
      duration: "5h 30m",
      date: "2 December",
      Time: "7.10 AM",
      airLine: 'Air India',
      airLineLogo: "https://i.pinimg.com/originals/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg",
      price: 650
    },
    {
      from: { keyword: "SYD", name: "Sydney" },
      to: { keyword: "AKL", name: "Auckland" },
      duration: "3h 15m",
      date: "14 January",
      Time: "4.50 PM",
      airLine: 'Qantas Airways',
      airLineLogo: "https://i.pinimg.com/originals/64/9e/1c/649e1c738c189557e58cf78e1ec21cfe.jpg",
      price: 550
    },
    {
      from: { keyword: "HKG", name: "Hong Kong" },
      to: { keyword: "SGP", name: "Singapore" },
      duration: "4h 45m",
      date: "28 February",
      Time: "9.30 AM",
      airLine: 'Singapore Airlines',
      airLineLogo: "https://1000logos.net/wp-content/uploads/2020/04/Singapore-Airlines-Logo.png",
      price: 700
    },
    {
      from: { keyword: "IST", name: "Istanbul" },
      to: { keyword: "DXB", name: "Dubai" },
      duration: "4h 10m",
      date: "7 March",
      Time: "2.15 PM",
      airLine: 'Turkish Airlines',
      airLineLogo: "https://logowik.com/content/uploads/images/thy-turkish-airlines-new6886.jpg",
      price: 620
    },
  ];

export const FILTER_TYPE = {
  AIRLINE: 'AIRLINE',
  PRICE: 'PRICE'
}

export const SORT_ORDER_TYPE = {
  INC: 'Increase',
  DEC: 'Decrease',
}