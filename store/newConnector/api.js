import axios from "axios"
import {
  NEW_CONNECTOR22_PASSWORD,
  NEW_CONNECTOR22_USERNAME
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://sdsd.sd/qpi",
  auth: {
    username: NEW_CONNECTOR22_PASSWORD,
    password: NEW_CONNECTOR22_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
