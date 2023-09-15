import axios from "axios"
import {
  TEST_PROXY_1_PASSWORD,
  TEST_PROXY_1_USERNAME
} from "react-native-dotenv"
const testProxy = axios.create({
  baseURL: "https://sds.dsd/api/v1",
  auth: { username: TEST_PROXY_1_PASSWORD, password: TEST_PROXY_1_USERNAME },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
