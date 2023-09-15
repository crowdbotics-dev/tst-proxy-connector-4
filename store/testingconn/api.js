import axios from "axios"
import {
  TESTING_CONN_USERNAME,
  TESTING_CONN_PASSWORD
} from "react-native-dotenv"
const testingconn = axios.create({
  baseURL: "https://botic.com",
  auth: { username: TESTING_CONN_USERNAME, password: TESTING_CONN_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
