import axios from "axios"
import { BOTC_PASSWORD, BOTC_USERNAME } from "react-native-dotenv"
const botc = axios.create({
  baseURL: "https://botc.com",
  auth: { username: BOTC_PASSWORD, password: BOTC_USERNAME },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
