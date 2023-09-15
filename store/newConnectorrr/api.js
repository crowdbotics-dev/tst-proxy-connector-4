import axios from "axios"
import {
  NEW_CONNECTORRR_USERNAME,
  NEW_CONNECTORRR_PASSWORD
} from "react-native-dotenv"
const newConnectorrr = axios.create({
  baseURL: "https://dsds.dsd/dsd",
  auth: {
    username: NEW_CONNECTORRR_USERNAME,
    password: NEW_CONNECTORRR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
