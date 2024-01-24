import { BASE_URL } from "../../env";
import API_CALLER from "../apis/ApiCaller";
import { getFlights } from "../apis/endPoints";

export const callGetFlights = async () => {
  try {
    const res = await API_CALLER.get(BASE_URL + getFlights);
    return res?.data?.data?.result;
  } catch (error) {
    return error;
  }
};
