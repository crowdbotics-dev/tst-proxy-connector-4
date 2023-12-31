import axios from "axios"
import {
  NEW_CONNECTORR_PASSWORD,
  NEW_CONNECTORR_USERNAME
} from "react-native-dotenv"
const newConnectorr = axios.create({
  baseURL: "https://dsds.dsd/dsd",
  auth: {
    username: NEW_CONNECTORR_PASSWORD,
    password: NEW_CONNECTORR_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
