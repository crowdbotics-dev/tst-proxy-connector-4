import axios from "axios"
import { BOTIS_CONN_PASSWORD, BOTIS_CONN_USERNAME } from "react-native-dotenv"
const botisConn = axios.create({
  baseURL: "https://botis.com",
  auth: { username: BOTIS_CONN_PASSWORD, password: BOTIS_CONN_USERNAME },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
