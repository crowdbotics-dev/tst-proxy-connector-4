import axios from "axios"
import {
  NEW_CONNECTORR_USERNAME,
  NEW_CONNECTORR_PASSWORD
} from "react-native-dotenv"
const newConnectorr = axios.create({
  baseURL: "https://dsds.dsd/dsd",
  auth: {
    username: NEW_CONNECTORR_USERNAME,
    password: NEW_CONNECTORR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
